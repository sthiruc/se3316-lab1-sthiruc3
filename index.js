function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    var num = document.getElementById('searchByNumber').value;
    if (charCode >31 &&(charCode < 48 || charCode > 57)){
        return false;
    }else{
        return true;
    }   
}
function allLetter(event){
    var key = event.keyCode;
    return (((key >= 65 && key <= 90) || (key >= 97 && key <= 122)) || key == 8 || key == 13);
}


let data = [{
    "Name": "Bulbasaur",
    "Number": 1,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "4",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "",
    "Descendant": "Ivysaur",
    "Candy Cost": "25",
    "Evolution Stage": "1",
    "Evolution Family": 1,
    "Evolution Map - G1": "Linear - 1",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Grass",
    "Type 2": "Poison",
    "Type Combo": "Grass / Poison",
    "Type 1 Weather": "Clear",
    "Type 2 Weather": "Cloudy",
    "Base ATK": 118,
    "Base DEF": 118,
    "Base STA": 90,
    "Max CP @ 30": 841,
    "Max CP @ 40": 981,
    "Buddy Distance (km)": 3,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Tackle",
    "Fast Move 2": "Vine Whip",
    "Fast Moves": "Tackle / Vine Whip",
    "Charge Move 1": "Sludge Bomb",
    "Charge Move 2": "Seed Bomb",
    "Charge Move 3": "Power Whip",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Sludge Bomb / Seed Bomb / Power Whip",
    "Unown Letter": "A",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
},
  {
    "Name": "Ivysaur",
    "Number": 2,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "5",
    "Catchable": "Wild",
    "Raid Level": "1",
    "Parent": "Bulbasaur",
    "Descendant": "Venusaur",
    "Candy Cost": "100",
    "Evolution Stage": "2",
    "Evolution Family": 1,
    "Evolution Map - G1": "Linear - 2",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Grass",
    "Type 2": "Poison",
    "Type Combo": "Grass / Poison",
    "Type 1 Weather": "Clear",
    "Type 2 Weather": "Cloudy",
    "Base ATK": 151,
    "Base DEF": 151,
    "Base STA": 120,
    "Max CP @ 30": 1331,
    "Max CP @ 40": 1552,
    "Buddy Distance (km)": 3,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Razor Leaf",
    "Fast Move 2": "Vine Whip",
    "Fast Moves": "Razor Leaf / Vine Whip",
    "Charge Move 1": "Sludge Bomb",
    "Charge Move 2": "Solar Beam",
    "Charge Move 3": "Power Whip",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Sludge Bomb / Solar Beam / Power Whip",
    "Unown Letter": "B",
    "Unown Generation": 2,
    "CP in Raid": 5238,
    "Min Catchable CP": 831,
    "Max Catchable CP": 886,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Venusaur",
    "Number": 3,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "6",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "Ivysaur",
    "Descendant": "",
    "Candy Cost": "-",
    "Evolution Stage": "3",
    "Evolution Family": 1,
    "Evolution Map - G1": "Linear - 3",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Grass",
    "Type 2": "Poison",
    "Type Combo": "Grass / Poison",
    "Type 1 Weather": "Clear",
    "Type 2 Weather": "Cloudy",
    "Base ATK": 198,
    "Base DEF": 198,
    "Base STA": 160,
    "Max CP @ 30": 2202,
    "Max CP @ 40": 2568,
    "Buddy Distance (km)": 3,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Razor Leaf",
    "Fast Move 2": "Vine Whip",
    "Fast Moves": "Razor Leaf / Vine Whip",
    "Charge Move 1": "Sludge Bomb",
    "Charge Move 2": "Solar Beam",
    "Charge Move 3": "Petal Blizzard",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Sludge Bomb / Solar Beam / Petal Blizzard",
    "Unown Letter": "C",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Charmander",
    "Number": 4,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "4",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "",
    "Descendant": "Charmeleon",
    "Candy Cost": "25",
    "Evolution Stage": "1",
    "Evolution Family": 2,
    "Evolution Map - G1": "Linear - 1",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Fire",
    "Type 2": "",
    "Type Combo": "Fire",
    "Type 1 Weather": "Clear",
    "Type 2 Weather": "",
    "Base ATK": 116,
    "Base DEF": 96,
    "Base STA": 78,
    "Max CP @ 30": 712,
    "Max CP @ 40": 831,
    "Buddy Distance (km)": 3,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Ember",
    "Fast Move 2": "Scratch",
    "Fast Moves": "Ember / Scratch",
    "Charge Move 1": "Flame Burst",
    "Charge Move 2": "Flamethrower",
    "Charge Move 3": "Flame Charge",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Flame Burst / Flamethrower / Flame Charge",
    "Unown Letter": "D",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Charmeleon",
    "Number": 5,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "5",
    "Catchable": "Wild",
    "Raid Level": "1",
    "Parent": "Charmander",
    "Descendant": "Charizard",
    "Candy Cost": "100",
    "Evolution Stage": "2",
    "Evolution Family": 2,
    "Evolution Map - G1": "Linear - 2",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Fire",
    "Type 2": "",
    "Type Combo": "Fire",
    "Type 1 Weather": "Clear",
    "Type 2 Weather": "",
    "Base ATK": 158,
    "Base DEF": 129,
    "Base STA": 116,
    "Max CP @ 30": 1272,
    "Max CP @ 40": 1484,
    "Buddy Distance (km)": 3,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Ember",
    "Fast Move 2": "Fire Fang",
    "Fast Moves": "Ember / Fire Fang",
    "Charge Move 1": "Flame Burst",
    "Charge Move 2": "Flamethrower",
    "Charge Move 3": "Fire Punch",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Flame Burst / Flamethrower / Fire Punch",
    "Unown Letter": "E",
    "Unown Generation": 2,
    "CP in Raid": 5085,
    "Min Catchable CP": 793,
    "Max Catchable CP": 847,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Charizard",
    "Number": 6,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "6",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "Charmeleon",
    "Descendant": "",
    "Candy Cost": "-",
    "Evolution Stage": "3",
    "Evolution Family": 2,
    "Evolution Map - G1": "Linear - 3",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Fire",
    "Type 2": "Flying",
    "Type Combo": "Fire / Flying",
    "Type 1 Weather": "Clear",
    "Type 2 Weather": "Windy",
    "Base ATK": 223,
    "Base DEF": 176,
    "Base STA": 156,
    "Max CP @ 30": 2303,
    "Max CP @ 40": 2686,
    "Buddy Distance (km)": 3,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Fire Spin",
    "Fast Move 2": "Air Slash",
    "Fast Moves": "Fire Spin / Air Slash",
    "Charge Move 1": "Fire Blast",
    "Charge Move 2": "Dragon Claw",
    "Charge Move 3": "Overheat",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Fire Blast / Dragon Claw / Overheat",
    "Unown Letter": "F",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Squirtle",
    "Number": 7,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "4",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "",
    "Descendant": "Wartortle",
    "Candy Cost": "25",
    "Evolution Stage": "1",
    "Evolution Family": 3,
    "Evolution Map - G1": "Linear - 1",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Water",
    "Type 2": "",
    "Type Combo": "Water",
    "Type 1 Weather": "Rain",
    "Type 2 Weather": "",
    "Base ATK": 94,
    "Base DEF": 122,
    "Base STA": 88,
    "Max CP @ 30": 693,
    "Max CP @ 40": 808,
    "Buddy Distance (km)": 3,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Tackle",
    "Fast Move 2": "Bubble",
    "Fast Moves": "Tackle / Bubble",
    "Charge Move 1": "Aqua Jet",
    "Charge Move 2": "Aqua Tail",
    "Charge Move 3": "Water Pulse",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Aqua Jet / Aqua Tail / Water Pulse",
    "Unown Letter": "G",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Wartortle",
    "Number": 8,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "5",
    "Catchable": "Wild",
    "Raid Level": "1",
    "Parent": "Squirtle",
    "Descendant": "Blastoise",
    "Candy Cost": "100",
    "Evolution Stage": "2",
    "Evolution Family": 3,
    "Evolution Map - G1": "Linear - 2",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Water",
    "Type 2": "",
    "Type Combo": "Water",
    "Type 1 Weather": "Rain",
    "Type 2 Weather": "",
    "Base ATK": 126,
    "Base DEF": 155,
    "Base STA": 118,
    "Max CP @ 30": 1135,
    "Max CP @ 40": 1324,
    "Buddy Distance (km)": 3,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Bite",
    "Fast Move 2": "Water Gun",
    "Fast Moves": "Bite / Water Gun",
    "Charge Move 1": "Aqua Jet",
    "Charge Move 2": "Hydro Pump",
    "Charge Move 3": "Ice Beam",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Aqua Jet / Hydro Pump / Ice Beam",
    "Unown Letter": "H",
    "Unown Generation": 2,
    "CP in Raid": 4503,
    "Min Catchable CP": 705,
    "Max Catchable CP": 756,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Blastoise",
    "Number": 9,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "6",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "Wartortle",
    "Descendant": "",
    "Candy Cost": "-",
    "Evolution Stage": "3",
    "Evolution Family": 3,
    "Evolution Map - G1": "Linear - 3",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Water",
    "Type 2": "",
    "Type Combo": "Water",
    "Type 1 Weather": "Rain",
    "Type 2 Weather": "",
    "Base ATK": 171,
    "Base DEF": 210,
    "Base STA": 158,
    "Max CP @ 30": 1964,
    "Max CP @ 40": 2291,
    "Buddy Distance (km)": 3,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Bite",
    "Fast Move 2": "Water Gun",
    "Fast Moves": "Bite / Water Gun",
    "Charge Move 1": "Ice Beam",
    "Charge Move 2": "Hydro Pump",
    "Charge Move 3": "Flash Cannon",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Ice Beam / Hydro Pump / Flash Cannon",
    "Unown Letter": "I",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Caterpie",
    "Number": 10,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "1",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "",
    "Descendant": "Metapod",
    "Candy Cost": "12",
    "Evolution Stage": "1",
    "Evolution Family": 4,
    "Evolution Map - G1": "Linear - 1",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Bug",
    "Type 2": "",
    "Type Combo": "Bug",
    "Type 1 Weather": "Rain",
    "Type 2 Weather": "",
    "Base ATK": 55,
    "Base DEF": 62,
    "Base STA": 90,
    "Max CP @ 30": 337,
    "Max CP @ 40": 393,
    "Buddy Distance (km)": 1,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Tackle",
    "Fast Move 2": "Bug Bite",
    "Fast Moves": "Tackle / Bug Bite",
    "Charge Move 1": "Struggle",
    "Charge Move 2": "",
    "Charge Move 3": "",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Struggle",
    "Unown Letter": "J",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Metapod",
    "Number": 11,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "3",
    "Catchable": "Wild",
    "Raid Level": "1",
    "Parent": "Caterpie",
    "Descendant": "Butterfree",
    "Candy Cost": "50",
    "Evolution Stage": "2",
    "Evolution Family": 4,
    "Evolution Map - G1": "Linear - 2",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Bug",
    "Type 2": "",
    "Type Combo": "Bug",
    "Type 1 Weather": "Rain",
    "Type 2 Weather": "",
    "Base ATK": 45,
    "Base DEF": 94,
    "Base STA": 100,
    "Max CP @ 30": 306,
    "Max CP @ 40": 419,
    "Buddy Distance (km)": 1,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Tackle",
    "Fast Move 2": "Bug Bite",
    "Fast Moves": "Tackle / Bug Bite",
    "Charge Move 1": "Struggle",
    "Charge Move 2": "",
    "Charge Move 3": "",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Struggle",
    "Unown Letter": "K",
    "Unown Generation": 2,
    "CP in Raid": 1534,
    "Min Catchable CP": 209,
    "Max Catchable CP": 239,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Butterfree",
    "Number": 12,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "4",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "Metapod",
    "Descendant": "",
    "Candy Cost": "-",
    "Evolution Stage": "3",
    "Evolution Family": 4,
    "Evolution Map - G1": "Linear - 3",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Bug",
    "Type 2": "Flying",
    "Type Combo": "Bug / Flying",
    "Type 1 Weather": "Rain",
    "Type 2 Weather": "Windy",
    "Base ATK": 167,
    "Base DEF": 151,
    "Base STA": 120,
    "Max CP @ 30": 1458,
    "Max CP @ 40": 1701,
    "Buddy Distance (km)": 1,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Struggle Bug",
    "Fast Move 2": "Confusion",
    "Fast Moves": "Struggle Bug / Confusion",
    "Charge Move 1": "Psychic",
    "Charge Move 2": "Bug Buzz",
    "Charge Move 3": "Signal Beam",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Psychic / Bug Buzz / Signal Beam",
    "Unown Letter": "L",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Weedle",
    "Number": 13,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "1",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "",
    "Descendant": "Kakuna",
    "Candy Cost": "12",
    "Evolution Stage": "1",
    "Evolution Family": 5,
    "Evolution Map - G1": "Linear - 1",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Bug",
    "Type 2": "Poison",
    "Type Combo": "Bug / Poison",
    "Type 1 Weather": "Rain",
    "Type 2 Weather": "Cloudy",
    "Base ATK": 63,
    "Base DEF": 55,
    "Base STA": 80,
    "Max CP @ 30": 340,
    "Max CP @ 40": 397,
    "Buddy Distance (km)": 1,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Bug Bite",
    "Fast Move 2": "Poison Sting",
    "Fast Moves": "Bug Bite / Poison Sting",
    "Charge Move 1": "Struggle",
    "Charge Move 2": "",
    "Charge Move 3": "",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Struggle",
    "Unown Letter": "M",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Kakuna",
    "Number": 14,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "3",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "Weedle",
    "Descendant": "Beedrill",
    "Candy Cost": "50",
    "Evolution Stage": "2",
    "Evolution Family": 5,
    "Evolution Map - G1": "Linear - 2",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Bug",
    "Type 2": "Poison",
    "Type Combo": "Bug / Poison",
    "Type 1 Weather": "Rain",
    "Type 2 Weather": "Cloudy",
    "Base ATK": 46,
    "Base DEF": 86,
    "Base STA": 90,
    "Max CP @ 30": 336,
    "Max CP @ 40": 392,
    "Buddy Distance (km)": 1,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Bug Bite",
    "Fast Move 2": "Poison Sting",
    "Fast Moves": "Bug Bite / Poison Sting",
    "Charge Move 1": "Struggle",
    "Charge Move 2": "",
    "Charge Move 3": "",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Struggle",
    "Unown Letter": "N",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Beedrill",
    "Number": 15,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "4",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "Kakuna",
    "Descendant": "",
    "Candy Cost": "-",
    "Evolution Stage": "3",
    "Evolution Family": 5,
    "Evolution Map - G1": "Linear - 3",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Bug",
    "Type 2": "Poison",
    "Type Combo": "Bug / Poison",
    "Type 1 Weather": "Rain",
    "Type 2 Weather": "Cloudy",
    "Base ATK": 169,
    "Base DEF": 150,
    "Base STA": 130,
    "Max CP @ 30": 1523,
    "Max CP @ 40": 1777,
    "Buddy Distance (km)": 1,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Infestation",
    "Fast Move 2": "Poison Jab",
    "Fast Moves": "Infestation / Poison Jab",
    "Charge Move 1": "Aerial Ace",
    "Charge Move 2": "Sludge Bomb",
    "Charge Move 3": "X-Scissor",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Aerial Ace / Sludge Bomb / X-Scissor",
    "Unown Letter": "O",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Pidgey",
    "Number": 16,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "1",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "",
    "Descendant": "Pidgeotto",
    "Candy Cost": "12",
    "Evolution Stage": "1",
    "Evolution Family": 6,
    "Evolution Map - G1": "Linear - 1",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Normal",
    "Type 2": "Flying",
    "Type Combo": "Normal / Flying",
    "Type 1 Weather": "Partly Cloudy",
    "Type 2 Weather": "Windy",
    "Base ATK": 85,
    "Base DEF": 76,
    "Base STA": 80,
    "Max CP @ 30": 497,
    "Max CP @ 40": 580,
    "Buddy Distance (km)": 1,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Tackle",
    "Fast Move 2": "Quick Attack",
    "Fast Moves": "Tackle / Quick Attack",
    "Charge Move 1": "Twister",
    "Charge Move 2": "Aerial Ace",
    "Charge Move 3": "Air Cutter",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Twister / Aerial Ace / Air Cutter",
    "Unown Letter": "P",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Pidgeotto",
    "Number": 17,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "3",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "Pidgey",
    "Descendant": "Pidgeot",
    "Candy Cost": "50",
    "Evolution Stage": "2",
    "Evolution Family": 6,
    "Evolution Map - G1": "Linear - 2",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Normal",
    "Type 2": "Flying",
    "Type Combo": "Normal / Flying",
    "Type 1 Weather": "Partly Cloudy",
    "Type 2 Weather": "Windy",
    "Base ATK": 117,
    "Base DEF": 108,
    "Base STA": 126,
    "Max CP @ 30": 930,
    "Max CP @ 40": 1085,
    "Buddy Distance (km)": 1,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Wing Attack",
    "Fast Move 2": "Steel Wing",
    "Fast Moves": "Wing Attack / Steel Wing",
    "Charge Move 1": "Twister",
    "Charge Move 2": "Aerial Ace",
    "Charge Move 3": "Air Cutter",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Twister / Aerial Ace / Air Cutter",
    "Unown Letter": "Q",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Pidgeot",
    "Number": 18,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "4",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "Pidgeotto",
    "Descendant": "",
    "Candy Cost": "-",
    "Evolution Stage": "3",
    "Evolution Family": 6,
    "Evolution Map - G1": "Linear - 3",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Normal",
    "Type 2": "Flying",
    "Type Combo": "Normal / Flying",
    "Type 1 Weather": "Partly Cloudy",
    "Type 2 Weather": "Windy",
    "Base ATK": 166,
    "Base DEF": 157,
    "Base STA": 166,
    "Max CP @ 30": 1709,
    "Max CP @ 40": 1994,
    "Buddy Distance (km)": 1,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Air Slash",
    "Fast Move 2": "Steel Wing",
    "Fast Moves": "Air Slash / Steel Wing",
    "Charge Move 1": "Hurricane",
    "Charge Move 2": "Aerial Ace",
    "Charge Move 3": "Brave Bird",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Hurricane / Aerial Ace / Brave Bird",
    "Unown Letter": "R",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Rattata",
    "Number": 19,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "1",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "",
    "Descendant": "Raticate",
    "Candy Cost": "25",
    "Evolution Stage": "1",
    "Evolution Family": 7,
    "Evolution Map - G1": "Linear - 1",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Normal",
    "Type 2": "",
    "Type Combo": "Normal",
    "Type 1 Weather": "Partly Cloudy",
    "Type 2 Weather": "",
    "Base ATK": 103,
    "Base DEF": 70,
    "Base STA": 60,
    "Max CP @ 30": 504,
    "Max CP @ 40": 588,
    "Buddy Distance (km)": 1,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Tackle",
    "Fast Move 2": "Quick Attack",
    "Fast Moves": "Tackle / Quick Attack",
    "Charge Move 1": "Dig",
    "Charge Move 2": "Hyper Fang",
    "Charge Move 3": "Body Slam",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Dig / Hyper Fang / Body Slam",
    "Unown Letter": "S",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  },
  {
    "Name": "Raticate",
    "Number": 20,
    "Generation": 1,
    "Region": "Global",
    "Rarity": "4",
    "Catchable": "Wild",
    "Raid Level": "",
    "Parent": "Rattata",
    "Descendant": "",
    "Candy Cost": "-",
    "Evolution Stage": "2",
    "Evolution Family": 7,
    "Evolution Map - G1": "Linear - 2",
    "Evolution Map - G2": "",
    "Evolution Map - G3": "",
    "Evolution Map - G4": "",
    "Evolution Map - G5": "",
    "Evolution Map - G6": "",
    "Evolution Map - G7": "",
    "Shiny Availability": "",
    "Type 1": "Normal",
    "Type 2": "",
    "Type Combo": "Normal",
    "Type 1 Weather": "Partly Cloudy",
    "Type 2 Weather": "",
    "Base ATK": 161,
    "Base DEF": 144,
    "Base STA": 110,
    "Max CP @ 30": 1328,
    "Max CP @ 40": 1549,
    "Buddy Distance (km)": 1,
    "Egg": null,
    "FIELD33": "",
    "Fast Move 1": "Bite",
    "Fast Move 2": "Quick Attack",
    "Fast Moves": "Bite / Quick Attack",
    "Charge Move 1": "Dig",
    "Charge Move 2": "Hyper Fang",
    "Charge Move 3": "Hyper Beam",
    "Charge Move 4": "",
    "Charge Move 5+": "",
    "FIELD42": "",
    "FIELD43": "",
    "Charge Moves": "Dig / Hyper Fang / Hyper Beam",
    "Unown Letter": "T",
    "Unown Generation": 2,
    "CP in Raid": null,
    "Min Catchable CP": null,
    "Max Catchable CP": null,
    "FIELD50": "",
    "FIELD51": "",
    "FIELD52": "",
    "FIELD53": "",
    "FIELD54": "",
    "FIELD55": "",
    "FIELD56": "",
    "FIELD57": "",
    "FIELD58": "",
    "FIELD59": ""
  }]
var myData1 = JSON.stringify(data);
var myData = JSON.parse(myData1);

function showAlert(){
    let x = document.getElementById('searchByNumber').value;
    alert("Name: " + myData[x-1].Name + "\n" + "Number: " + myData[x-1].Number + 
    "\n" + "Base Attack: " + myData[x-1]["Base ATK"]);

}

function showAlert2(){
    let y = document.getElementById('searchByName').value;
    for (let i = 0; i < myData.length; i++){
        if(myData[i].Name == y){
            alert("Name: " + myData[i].Name + "\n" + "Number: " + myData[i].Number + 
            "\n" + "Base Attack: " + myData[i]["Base ATK"]);
        }
        
    }
}


