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
            .limit(5); // Select all columns

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
    function generateMonthContent(date){
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let monthName = month[date[1]];
        let pElement = document.getElementById("monthName");
        pElement.innerHTML = monthName;
    }
    async function displayLatestLevel(){
        const data = await fetchLatestData();
        console.log(data);
        let el = document.getElementById("playerName");
        let totalFinals = data[0].quads_final_kills+data[0].solo_final_kills+data[0].duos_final_kills+data[0].triples_final_kills;
        let totalDeaths = data[0].quads_final_deaths+data[0].solo_final_deaths+data[0].duos_final_deaths+data[0].triples_final_deaths;
        el.innerHTML = `[✫${data[0].bw_level}] 1eri <br>Final Kills: ${totalFinals} <br>FK/DR: ${(totalFinals/totalDeaths).toFixed(2)}`;
    }

    // Call the function to display data
    displayData();
    let date = currentDate();
    generateMonthContent(date);
    displayLatestLevel();
});