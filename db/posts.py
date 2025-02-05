
import requests

data = requests.get(
    url = "https://api.hypixel.net/player",
    params = {
        "key": "8bd9bbef-f323-474c-b4a8-8cc410c3b8de",
        "name": "1eri"
    }
).json()

bedwars_data = data["player"]["stats"]["Bedwars"]

jsondata = {
    "overall":
        {
            "beds_broken":bedwars_data["beds_broken_bedwars"],
            "beds_lost":bedwars_data["beds_lost_bedwars"],
            "final_kills":bedwars_data["final_kills_bedwars"],
            "final_deaths":bedwars_data["final_deaths_bedwars"],
            "coins":bedwars_data['coins'],
            "level":data["player"]["achievements"]["bedwars_level"]
        },
    "solos":
        {
            "beds_broken":bedwars_data["eight_one_beds_broken_bedwars"],
            "beds_lost":bedwars_data["eight_one_beds_lost_bedwars"],
            "final_kills":bedwars_data["eight_one_final_kills_bedwars"],
            "final_deaths":bedwars_data["eight_one_final_deaths_bedwars"],
        },
    "duos":
        {
            "beds_broken":bedwars_data["eight_two_beds_broken_bedwars"],
            "beds_lost":bedwars_data["eight_two_beds_lost_bedwars"],
            "final_kills":bedwars_data["eight_two_final_kills_bedwars"],
            "final_deaths":bedwars_data["eight_two_final_deaths_bedwars"],
        },
    "threes":
        {
            "beds_broken":bedwars_data["four_three_beds_broken_bedwars"],
            "beds_lost":bedwars_data["four_three_beds_lost_bedwars"],
            "final_kills":bedwars_data["four_three_final_kills_bedwars"],
            "final_deaths":bedwars_data["four_three_final_deaths_bedwars"],
        },
    "fours":
        {
            "beds_broken":bedwars_data["four_four_beds_broken_bedwars"],
            "beds_lost":bedwars_data["four_four_beds_lost_bedwars"],
            "final_kills":bedwars_data["four_four_final_kills_bedwars"],
            "final_deaths":bedwars_data["four_four_final_deaths_bedwars"],
        },
}

#print(jsondata["overall"]["level"])
print(bedwars_data)