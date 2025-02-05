import os
from supabase import create_client, Client
import requests

url: str = os.environ.get("SUPABASE_URL")
service_role_key: str = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase: Client = create_client(url, service_role_key)

data = requests.get(
    url = "https://api.hypixel.net/player",
    params = {
        "key": os.environ.get("HYPIXEL_KEY"),
        "name": "1eri"
    }
).json()

bedwars_data = data["player"]["stats"]["Bedwars"]

response = (
    supabase.table("bedwars_stats")
    .insert(
        {
            "solo_final_kills": bedwars_data["eight_one_final_kills_bedwars"],
            "solo_final_deaths": bedwars_data["eight_one_final_deaths_bedwars"],
            "solo_beds_broken": bedwars_data["eight_one_beds_broken_bedwars"],
            "solo_beds_lost": bedwars_data["eight_one_beds_lost_bedwars"],
            
            "duos_final_kills": bedwars_data["eight_two_final_kills_bedwars"],
            "duos_final_deaths": bedwars_data["eight_two_final_deaths_bedwars"],
            "duos_beds_broken": bedwars_data["eight_two_beds_broken_bedwars"],
            "duos_beds_lost": bedwars_data["eight_two_beds_lost_bedwars"],
            
            "triples_final_kills": bedwars_data["four_three_final_kills_bedwars"],
            "triples_final_deaths": bedwars_data["four_three_final_deaths_bedwars"],
            "triples_beds_broken": bedwars_data["four_three_beds_broken_bedwars"],
            "triples_beds_lost": bedwars_data["four_three_beds_lost_bedwars"],
            
            "quads_final_kills": bedwars_data["four_four_final_kills_bedwars"],
            "quads_final_deaths": bedwars_data["four_four_final_deaths_bedwars"],
            "quads_beds_broken": bedwars_data["four_four_beds_broken_bedwars"],
            "quads_beds_lost": bedwars_data["four_four_beds_lost_bedwars"],

            "bw_level": data["player"]["achievements"]["bedwars_level"]

        })
    .execute()
)

response = supabase.table("bedwars_stats").select("*").execute()
print(response)