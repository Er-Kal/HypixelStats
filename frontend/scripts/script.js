import { createClient } from '@supabase/supabase-js';

document.addEventListener('DOMContentLoaded', async () => {
    // Access the supabase object from the global scope

    // Initialize Supabase client

        
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Replace with your Supabase URL
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Replace with your Supabase anon key
    const supabaseClient = createClient(supabaseUrl, supabaseKey);

    // Fetch data from the bedwars_stats table
    async function fetchAllData() {
        const { data, error } = await supabaseClient
            .from('bedwars_stats')
            .select('*')
            .limit(5);// Select all columns

        if (error) {
            console.error('Error fetching data:', error.message);
            return null;
        }

        return data; // Return the fetched data
    }
    async function fetchLatestData(){
        const { data, error } = await supabaseClient
            .from('bedwars_stats')
            .select('*') // Select all columns
            .order('created_at', { ascending: false }) // Sort by created_at in descending order
            .limit(1); // Limit the result to 1 record

        if (error) {
            console.error('Error fetching data:', error.message);
            return null;
        }

        return data; // Return the fetched data
    }

    // Display the data in a <p> element
    async function displayData() {
        const data = await fetchAllData();
        console.log(data);
        // Format the data into a string
        const formattedData = data.map(row => {
            return `Final Kills: ${row.quads_final_kills+row.solo_final_kills+row.duos_final_kills+row.triples_final_kills}`;
        }).join('<br>');

        // Get the <p> element
        const pElement = document.getElementById('data');

        // Update the <p> element's content
        if (pElement) {
            pElement.innerHTML = formattedData;
        } else {
            console.error('Could not find the <p> element.');
        }
    }
    function currentDate(){
        const date = new Date();
        return [date.getFullYear(),date.getMonth(),date.getDate()];
    }
    async function generateMonthContent(date){
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let monthName = month[date[1]];
        let pElement = document.getElementById("monthName");
        pElement.innerHTML = monthName;

        let listElement = document.getElementById("monthContent");
        let monthContentString = Array(daysInMonth(date[1],date[0])).fill(`<li class="dataContent">1</li>`);
        
        listElement.innerHTML = `<li class="dataContent">1</li>`.repeat(daysInMonth(date[1],date[0]));

        let data = await fetchMonthlyData(date[1]+1,date[0]);
        console.log(data);
    }
    async function fetchMonthlyData(month, year){

        let days = Array(daysInMonth(month-1,year)).fill(1);
        days = days.map((el, index) => el*(index+1));
        let results =[];
        for (const date of days) {
            const { data, error } = await supabaseClient
                .from('bedwars_stats')
                .select('*')
                .gte('created_at', `${year+"-"+month+"-"+date}T00:00:00.000Z`)
                .lt('created_at', `${year+"-"+month+"-"+date}T00:10:00.000Z`);
            
            console.log(`${year+"-"+month+"-"+date}T00:10:00.000Z`);
            if (error) {
                console.error(`Error fetching data for ${date}:`, error.message);
            } else {
                results.push(...data);
            }
        }
         return results;
        // const { data, error } = await supabaseClient
        //     .from('bedwars_stats')
        //     .select('*')
        //     .gte('created_at', `${year}-${month+1}-15T00:00:00.000Z`) // Greater than or equal to midnight
        //     .lt('created_at', `${year}-${month+1}-15T00:10:00.000Z`); // Less than 1 minute after midnight

        // if (error) {
        //     console.error('Error fetching data:', error.message);
        //     return null;
        // }

        // return data; // Return the fetched data
    }
    // 
    async function displayLatestLevel(){
        const data = await fetchLatestData();
        console.log(data);
        let el = document.getElementById("playerName");
        let totalFinals = data[0].quads_final_kills+data[0].solo_final_kills+data[0].duos_final_kills+data[0].triples_final_kills;
        let totalDeaths = data[0].quads_final_deaths+data[0].solo_final_deaths+data[0].duos_final_deaths+data[0].triples_final_deaths;
        el.innerHTML = `[✫${data[0].bw_level}] 1eri <br>Final Kills: ${totalFinals} <br>FK/DR: ${(totalFinals/totalDeaths).toFixed(2)}`;
    }
    // Returns the amount of days in a month
    function daysInMonth (month, year) {
        return new Date(parseInt(year), parseInt(month) + 1, 0).getDate();
    }

    // Call the function to display data
    displayData();
    let date = currentDate();
    console.log(daysInMonth(date[1],date[0]));
    generateMonthContent(date);
    displayLatestLevel();
});