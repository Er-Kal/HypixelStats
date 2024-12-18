
import requests

data = requests.get(
    url = "https://api.hypixel.net/player",
    params = {
        "key": "9ee192a8-e58f-4015-923b-bd17ec42f5f4",
        "name": "1eri"
    }
).json()

bedwars_level = data["player"]["achievements"]["bedwars_level"]
bedwars_data = data["player"]["stats"]["Bedwars"]

bw_beds_broken = bedwars_data["beds_broken_bedwars"]
bw_beds_lost = bedwars_data["beds_lost_bedwars"]

# bw_finals_all = bedwars_data["final_kills_bedwars"]
# bw_final_deaths_all = bedwars_data["final_deaths_bedwars"]

# bw_finals_solo = bedwars_data["eight_one_final_kills_bedwars"]
# bw_final_deaths_solo = bedwars_data["eight_one_final_deaths_bedwars"]
# bw_beds_broken_solo = bedwars_data["eight_one_beds_broken_bedwars"]
# bw_beds_lost_solo = bedwars_data["eight_one_beds_lost_bedwars"]

# bw_finals_duo = bedwars_data["eight_two_final_kills_bedwars"]
# bw_final_deaths_duo = bedwars_data["eight_two_final_deaths_bedwars"]
# bw_beds_broken_duo = bedwars_data["eight_two_beds_broken_bedwars"]
# bw_beds_lost_duo = bedwars_data["eight_two_beds_lost_bedwars"]

# bw_finals_three = bedwars_data["four_three_final_kills_bedwars"]
# bw_final_deaths_three = bedwars_data["four_three_final_deaths_bedwars"]
# bw_beds_broken_three = bedwars_data["four_three_beds_broken_bedwars"]
# bw_beds_lost_three = bedwars_data["four_three_beds_lost_bedwars"]

# bw_finals_fours = bedwars_data["four_four_final_kills_bedwars"]
# bw_final_deaths_fours = bedwars_data["four_four_final_deaths_bedwars"]
# bw_beds_broken_fours = bedwars_data["four_four_beds_broken_bedwars"]
# bw_beds_lost_fours = bedwars_data["four_four_beds_lost_bedwars"]

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

print(jsondata["overall"]["beds_broken"])
