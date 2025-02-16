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
            .select('*'); // Select all columns

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
            return `Fours Kills: ${row.quads_final_kills+row.solo_final_kills+row.duos_final_kills+row.triples_final_kills}`;
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

    // Call the function to display data
    displayData();
});