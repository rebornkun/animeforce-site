function myFunction(x,y) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementsByClassName(x)[0];
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName(y)[0];
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

function showname(x,y){
  let input = document.getElementsByClassName(x)[0];
  let display = document.getElementsByClassName(y)[0];

  display.innerText = input.value;
}

let Mine_name = document.getElementsByClassName("CMine_name")[0];
let Mine_rank = document.getElementsByClassName("CMine_rank")[0];
let Mine_floor = document.getElementsByClassName("CMine_floor")[0];

function mineranktofloor(){

  if (Mine_rank.value === "F"){

    Mine_floor.min = "1";
    Mine_floor.max = "5";
    Mine_rank.style.color = "black";
    Mine_rank.style.fontweight = "1000";
    if (Mine_floor.value < 1 || Mine_floor.value > 5){
      Mine_floor.value = "1"
    }else{
      Mine_floor.value = Mine_floor.value;
    }

  }else if(Mine_rank.value === "E"){

    Mine_floor.min = "1";
    Mine_floor.max = "6";
    Mine_rank.style.color = "grey";
    Mine_rank.style.fontweight = "1000";
    if (Mine_floor.value < 1 || Mine_floor.value > 6){
      Mine_floor.value = "1"
    }else{
      Mine_floor.value = Mine_floor.value;
    }

  }else if(Mine_rank.value === "D"){

    Mine_floor.min = "1";
    Mine_floor.max = "7";
    Mine_rank.style.color = "lightgreen";
    Mine_rank.style.fontweight = "1000";
    if (Mine_floor.value < 1 || Mine_floor.value > 7){
      Mine_floor.value = "1"
    }else{
      Mine_floor.value = Mine_floor.value;
    }

  }else if(Mine_rank.value === "C"){

    Mine_floor.min = "1";
    Mine_floor.max = "8";
    Mine_rank.style.color = "blue";
    Mine_rank.style.fontweight = "1000";
    if (Mine_floor.value < 1 || Mine_floor.value > 8){
      Mine_floor.value = "1"
    }else{
      Mine_floor.value = Mine_floor.value;
    }

  }else if(Mine_rank.value === "B"){

    Mine_floor.min = "1";
    Mine_floor.max = "9";
    Mine_rank.style.color = "lightblue";
    Mine_rank.style.fontweight = "1000";
    if (Mine_floor.value < 1 || Mine_floor.value > 9){
      Mine_floor.value = "1"
    }else{
      Mine_floor.value = Mine_floor.value;
    }

  }else if(Mine_rank.value === "A"){

    Mine_floor.min = "1";
    Mine_floor.max = "10";
    Mine_rank.style.color = "purple";
    Mine_rank.style.fontweight = "1000";
    if (Mine_floor.value < 1 || Mine_floor.value > 10){
      Mine_floor.value = "1"
    }else{
      Mine_floor.value = Mine_floor.value;
    }

  }else if(Mine_rank.value === "S"){

    Mine_floor.min = "1";
    Mine_floor.max = "11";
    Mine_rank.style.color = "orange";
    Mine_rank.style.fontweight = "1000";
    if (Mine_floor.value < 1 || Mine_floor.value > 11){
      Mine_floor.value = "1"
    }else{
      Mine_floor.value = Mine_floor.value;
    }

  }else if(Mine_rank.value === "SS"){

    Mine_floor.min = "1";
    Mine_floor.max = "12";
    Mine_rank.style.color = "brown";
    Mine_rank.style.fontweight = "1000";
    if (Mine_floor.value < 1 || Mine_floor.value > 12){
      Mine_floor.value = "1"
    }else{
      Mine_floor.value = Mine_floor.value;
    }

  }else if(Mine_rank.value === "Z"){

    Mine_floor.min = "1";
    Mine_floor.max = "13";
    Mine_rank.style.color = "red";
    Mine_rank.style.fontweight = "1000";
    if (Mine_floor.value < 1 || Mine_floor.value > 13){
      Mine_floor.value = "1"
    }else{
      Mine_floor.value = Mine_floor.value;
    }
  }
}

function racepastedrawer(x,y){
  let input = document.getElementsByClassName(y)[0];
  input.value = x;
  input.style.color = "green";
  input.style.fontweight = "1000";

  let Mining_settings = document.getElementsByClassName("MiningBox")[0];
  let Fishing_settings = document.getElementsByClassName("FishingBox")[0];
  let Cooking_settings = document.getElementsByClassName("CookingBox")[0];
  let Building_settings = document.getElementsByClassName("BuildingBox")[0];
  let Crafting_settings = document.getElementsByClassName("CraftingBox")[0];
  let Alchemy_settings = document.getElementsByClassName("AlchemyBox")[0];
  let Enchanting_settings = document.getElementsByClassName("EnchantingBox")[0];
  let Scavenging_settings = document.getElementsByClassName("ScavengingBox")[0];
  let Hunting_settings = document.getElementsByClassName("HuntingBox")[0];

if (x === "Mining"){

    Mining_settings.style.display = "block";
    Fishing_settings.style.display = "none";
    Cooking_settings.style.display = "none";
    Building_settings.style.display = "none";
    Crafting_settings.style.display = "none";
    Alchemy_settings.style.display = "none";
    Enchanting_settings.style.display = "none";
    Scavenging_settings.style.display = "none";
    Hunting_settings.style.display = "none";
    
}else if (x === "Fishing"){
  
    Mining_settings.style.display = "none";
    Fishing_settings.style.display = "block";
    Cooking_settings.style.display = "none";
    Building_settings.style.display = "none";
    Crafting_settings.style.display = "none";
    Alchemy_settings.style.display = "none";
    Enchanting_settings.style.display = "none";
    Scavenging_settings.style.display = "none";
    Hunting_settings.style.display = "none";
   
}else if (x === "Cooking"){

    Mining_settings.style.display = "none";
    Fishing_settings.style.display = "none";
    Cooking_settings.style.display = "block";
    Building_settings.style.display = "none";
    Crafting_settings.style.display = "none";
    Alchemy_settings.style.display = "none";
    Enchanting_settings.style.display = "none";
    Scavenging_settings.style.display = "none";
    Hunting_settings.style.display = "none";
   
}else if (x === "Building"){

    Mining_settings.style.display = "none";
    Fishing_settings.style.display = "none";
    Cooking_settings.style.display = "none";
    Building_settings.style.display = "block";
    Crafting_settings.style.display = "none";
    Alchemy_settings.style.display = "none";
    Enchanting_settings.style.display = "none";
    Scavenging_settings.style.display = "none";
    Hunting_settings.style.display = "none";
   
}else if (x === "Crafting"){

    Mining_settings.style.display = "none";
    Fishing_settings.style.display = "none";
    Cooking_settings.style.display = "none";
    Building_settings.style.display = "none";
    Crafting_settings.style.display = "block";
    Alchemy_settings.style.display = "none";
    Enchanting_settings.style.display = "none";
    Scavenging_settings.style.display = "none";
    Hunting_settings.style.display = "none";
   
}else if (x === "Alchemy"){

    Mining_settings.style.display = "none";
    Fishing_settings.style.display = "none";
    Cooking_settings.style.display = "none";
    Building_settings.style.display = "none";
    Crafting_settings.style.display = "none";
    Alchemy_settings.style.display = "block";
    Enchanting_settings.style.display = "none";
    Scavenging_settings.style.display = "none";
    Hunting_settings.style.display = "none";
   
}else if (x === "Enchanting"){

    Mining_settings.style.display = "none";
    Fishing_settings.style.display = "none";
    Cooking_settings.style.display = "none";
    Building_settings.style.display = "none";
    Crafting_settings.style.display = "none";
    Alchemy_settings.style.display = "none";
    Enchanting_settings.style.display = "block";
    Scavenging_settings.style.display = "none";
    Hunting_settings.style.display = "none";
   
}else if (x === "Scavenging"){

    Mining_settings.style.display = "none";
    Fishing_settings.style.display = "none";
    Cooking_settings.style.display = "none";
    Building_settings.style.display = "none";
    Crafting_settings.style.display = "none";
    Alchemy_settings.style.display = "none";
    Enchanting_settings.style.display = "none";
    Scavenging_settings.style.display = "block";
    Hunting_settings.style.display = "none";
   
}else if (x === "Hunting"){

    Mining_settings.style.display = "none";
    Fishing_settings.style.display = "none";
    Cooking_settings.style.display = "none";
    Building_settings.style.display = "none";
    Crafting_settings.style.display = "none";
    Alchemy_settings.style.display = "none";
    Enchanting_settings.style.display = "none";
    Scavenging_settings.style.display = "none";
    Hunting_settings.style.display = "block";
   
}


}

function pastedrawer(x,y){
  let input = document.getElementsByClassName(y)[0];
  input.value = x;
  input.style.color = "green";
  input.style.fontweight = "1000";
  

  if (x === "Beginning Mines"){

    Mine_rank.value = "F";
    mineranktofloor();
    

  }else if(x === "Horunka Mines"){

    Mine_rank.value = "E";
    mineranktofloor();

  }else if(x === "Ancient Mines of Sunba"){

    Mine_rank.value = "C";
    mineranktofloor();
    
  }else if(x === "Random"){

    Mine_rank.disabled = false;
    mineranktofloor();

  }else{


  }


}

function secpastedrawer(x,y){
  let input = document.getElementsByClassName(y)[0];
  input.value = x;
  mineranktofloor();
}


function mine(){
  let Mine_Result_Writing = document.getElementById("Mine_Result_Writing");

  //alert(minedstuff(Mine_name.value));

  
  
  let minenamesorter = minedstuff(Mine_name.value, Mine_floor.value);

  Mine_Result_Writing.innerText = "Result: " + minenamesorter;
  
}

function minedstuff(mname, mfloor){

  let mine_name = mname;
  let mineFloor = mfloor;

  let allminerals = [
    "Stone",
    "Clay",
    "Coal",
    "Granite",
    "Aluminum Ore",
    "Copper Ore",
    "Iron Ore",
    "Silver Ore",
    "Gold Ore",
    "Admantine Ore",
    "Diamond Ore",
    "Obisdan",
    "Platinum Ore",
    "Asterite",
  ];
  let creatures =[
    {
      CreatureName: "Air Elemental",
      CreatureLv: 5,
      Rank: "D",
      Details: ["Large", "Elemental", "neutral"],
      Habitat: ["Mountains", "Swamp", "Desert", "Coast", "Grassland"],
      Drops: function LootDropped(){
        let giveableLoot = ["green orb", "old shoe"];
        
        dropSorter(giveableLoot);
      }
    },
    {
      CreatureName: "Androsphinx",
      CreatureLv: 17,
      Rank: "S",
      Details: ["Large", "Monstrosity", "Lawful neutral"],
      Habitat: ["Ruins", "Dungeon"],
      Drops: function LootDropped(){
        let giveableLoot = ["golden lance of atropodes", "heart (Androsphinx)", "feather (Androsphinx)","eye (Androsphinx)"];
        
        dropSorter(giveableLoot);
      }
    },
    {
      CreatureName: "Animated Armor",
      CreatureLv: 1,
      Rank: "E",
      Details: ["Medium", "Construct", "Nil"],
      Habitat: ["Mountains", "Desert", "Coast", "Underground", "Ruins", "Dungeon"],
      Drops: function LootDropped(){
        let giveableLoot = ["Rusted Scale M⁠ail", "Pack of nails", "Metal scrap"];
        
        dropSorter(giveableLoot);
      }
    },
    {
      CreatureName: "Ankheg",
      CreatureLv: 2,
      Rank: "E",
      Details: ["Large", "Monstrosity", "Nil"],
      Habitat: ["Ruins", "Desert"],
      Drops: function LootDropped(){
        let giveableLoot = ["vial of acid (Ankheg)", "Bottle of acid (Ankheg)", "rusted metal ring", "claw (Ankheg)" ];
        
        dropSorter(giveableLoot);
      }
    },
    {
      CreatureName: "Ape",
      CreatureLv: 0.5,
      Rank: "F",
      Details: ["Medium", "Beast", "Nil"],
      Habitat: ["Mountains", "Forest"],
      Drops: function LootDropped(){
        let giveableLoot = ["Head (ape)", "Rock", "meat (ape)"];
        
        dropSorter(giveableLoot);
      }
    },
    {
      CreatureName: "Awakened Shrub",
      CreatureLv: 0,
      Rank: "F",
      Details: ["Small", "Plant", "Nil"],
      Habitat: ["Forest", "Swamp", "Grassland" ],
      Drops: function LootDropped(){
        let giveableLoot = ["Shrub", "Stick", "seed (Awakened Shrub)"];
        
        dropSorter(giveableLoot);
      }
    },
    {
      CreatureName: "Awakened Tree",
      CreatureLv: 2,
      Rank: "E",
      Details: ["Huge", "Plant", "Nil"],
      Habitat: ["Forest", "Grassland"],
      Drops: function LootDropped(){
        let giveableLoot = ["Log (Awakened Tree)", "Stick (Awakened Tree)", "leaf (Awakened Tree)", "?? fruit"];
        
        dropSorter(giveableLoot);
      }
    },
    {
      CreatureName: "Axe Beak",
      CreatureLv: 0.25,
      Rank: "F",
      Details: ["Large", "Beast", "Nil"],
      Habitat: ["Mountains", "Grassland"],
      Drops: function LootDropped(){
        let giveableLoot = ["Bone (Axe Beak)", "Feather(Axe Beak)", "Beak(Axe Beak)", "Meat (Axe Beak)"];
        
        dropSorter(giveableLoot);
      }
    },
    {
      CreatureName: "Azer",
      CreatureLv: 2,
      Rank: "E",
      Details: ["Medium", "Elemental", "Lawful Neutral"],
      Habitat: ["Lavagrounds", "Underground"],
      Drops: function LootDropped(){
        let giveableLoot = ["Red orb", "Ashes", "Charcoal", "Warhammer (Azer)"];
        
        dropSorter(giveableLoot);
      }
    },
    {
      CreatureName: "Baboon",
      CreatureLv: 0,
      Rank: "F",
      Details: ["Small", "Beast", "Nil"],
      Habitat: ["Mountains", "Forest"],
      Drops: function LootDropped(){
        let giveableLoot = ["Fur (Baboon)", "Meat (Baboon)"];
        
        dropSorter(giveableLoot);
      }
    },
    {
      CreatureName: "Animated Armor",
      CreatureLv: 1,
      Rank: "E",
      Details: ["Medium", "Construct", "Nil"],
      Habitat: ["Mountains", "Desert", "Coast", "Underground", "Ruins", "Dungeon"],
      Drops: function LootDropped(){
        let giveableLoot = ["Rusted Scale M⁠ail", "Pack of nails", "Metal scrap"];
        
        dropSorter(giveableLoot);
      }
    },


  ];


  if(mine_name === "Beginning Mines"){

    let mined;
    let minedNothing = false;
    let minedMineral = false;
    let minedCreature = false;
    let minedDisaster = false;
    let minedQuote;
    let thisMineMinerals = [
    "Stone",
    "Clay",
    "Coal",
    "Granite",
    "Aluminum Ore",
    ]

    
    // alert(mineFloor);
    // console.log(mineFloor);
    if (mineFloor == 1){

      // alert(mineFloor + " floor 1");
     
      let WinOrLose = d(1,20);
      console.log(WinOrLose);
      if (WinOrLose >= 0 && WinOrLose <= 11){

        minedNothing = true;

      }else if(WinOrLose >= 12 && WinOrLose <= 17){

        let mineralFoundRoll = d(1,20);
        //console.log(mineralFoundRoll);
  
        if (mineralFoundRoll >= 0 && mineralFoundRoll <= 9){
          mined = thisMineMinerals[0];
        }else if(mineralFoundRoll >= 10 && mineralFoundRoll <= 13){
          mined = thisMineMinerals[1];
        }else if(mineralFoundRoll >= 14 && mineralFoundRoll <= 17){
          mined = thisMineMinerals[2];
        }else if(mineralFoundRoll >= 18 && mineralFoundRoll <= 20){
          mined = thisMineMinerals[3];
        }
  
        minedMineral = true;
      
      }else if(WinOrLose >= 18 && WinOrLose <= 20){
  
        let newcreatures = [];
        for(i=0; i<creatures.length; i++){
          if (creatures[i].CreatureLv <= 0){
            newcreatures.push(creatures[i].CreatureName);
          }else{}
        }
        console.log(newcreatures);

        let NoOfCreatures = d(1,4);
        let CreatureSpawnedRollbeta = d(1,newcreatures.length);
        let CreatureSpawnedRoll = CreatureSpawnedRollbeta[0] - 1;
        let CreatureSpawned = newcreatures[CreatureSpawnedRoll] + "x" + NoOfCreatures;
        mined = CreatureSpawned;
  
        minedCreature = true;
  
      }else if(WinOrLose === 21){
  
        minedDisaster = true;
  
      }

    }else if(mineFloor == 2){

      // alert("floor 2");

      let WinOrLose = d(1,20);
      if (WinOrLose >= 0 && WinOrLose <= 9){

        minedNothing = true;

      }else if (WinOrLose >= 10 && WinOrLose <= 16){

        let mineralFoundRoll = d(1,20);
        //console.log(mineralFoundRoll);
  
        if (mineralFoundRoll >= 0 && mineralFoundRoll <= 7){
          mined = thisMineMinerals[0];
        }else if(mineralFoundRoll >= 8 && mineralFoundRoll <= 11){
          mined = thisMineMinerals[1];
        }else if(mineralFoundRoll >= 12 && mineralFoundRoll <= 15){
          mined = thisMineMinerals[2];
        }else if(mineralFoundRoll >= 16 && mineralFoundRoll <= 20){
          mined = thisMineMinerals[3];
        }
  
        minedMineral = true;
      
      }else if(WinOrLose >= 17 && WinOrLose <= 20){
  
        let newcreatures = [];
        for(i=0; i<creatures.length; i++){
          if (creatures[i].CreatureLv <= 1){
            newcreatures.push(creatures[i].CreatureName);
          }else{}
        }

        let NoOfCreatures = d(1,4);
        let CreatureSpawnedRollbeta = d(1,newcreatures.length);
        let CreatureSpawnedRoll = CreatureSpawnedRollbeta[0] - 1;
        let CreatureSpawned = newcreatures[CreatureSpawnedRoll] + "x" + NoOfCreatures;
        mined = CreatureSpawned;
  
        //console.log("winorlose: " + WinOrLose + "\n mined: " + mined + "\n newcreatures: " + newcreatures + "\n CreatureSpawnedRoll: " + CreatureSpawnedRoll + "\n CreatureSpawned: " + CreatureSpawned);

        minedCreature = true;
  
      }else if(WinOrLose == 21){
  
        minedDisaster = true;
  
      }

      

    }

    


    if (minedNothing === true){
      minedQuote = "you found nothing lol.. your luck bad sha" ;

    }else if (minedMineral === true){
      minedQuote = "you found " + mined;

    }else if(minedCreature === true){
      let ifSuprised = d(1,2);
      let feet = d(1,20) * 5;
      if(ifSuprised[0] === 1){
        minedQuote = "oops, you saw " + mined + " from " + feet + "ft away, all players must roll a stealth saving throw of DC equal to the creatures average passive perception to avoid this....";
      }else if(ifSuprised[0] === 2){
        minedQuote = "opps, " + mined + " found you and your party, you all are suprised.";
      }
      
    }else if(minedDisaster === true){
      let disasterType = d(1,3);
      let feet = d(1,20);
      feet = feet[0] * 5;
      let time = d(1,20);
      let Damagestarter = d(1,100);
      let realDamage = d(1,Damagestarter[0]);
      let lavaDamage = d(6,6);
      lavaDamage = lavaDamage[0] + lavaDamage[1] + lavaDamage[2] + lavaDamage[3] + lavaDamage[4] + lavaDamage[5]; 
      if(disasterType[0] === 1){
        minedQuote = "a gasleak has occurred, players have " + time[0] + "turns to leave the mines before the explosion, this explosion moves " + feet + "ft per turn, any creature that this explosion meets recieves "+ realDamage[0] +" fire damage."
      }else if(disasterType[0] === 2){
        minedQuote = "omo, you opened a hole that leads to a lava pit, the body of lava moves " + feet + "ft per turn, when the lava hits a creature or object, they recieve "+ lavaDamage +"fire damage per turn as far you stay in the lava, you ca only swim in lava half your swim speed if you took or are taking damage from this. evem after escaping you still take half the damage for 3 of your turns unless fire is turned off."
      }else if(disasterType[0] === 3){
        minedQuote = "omo, you opened a hole that leads to a water body, the water flows at a speed of " + feet + "ft per turn, players first take "+ lavaDamage +" bludgeoing damage and then are Swallowed by the water and can only last under water for a number of turns equal to thier con mod, after that they lose 5hp per turn."
      }
  
    }
    

    
    //console.log(newcreatures);
    return minedQuote;

  }

  

  
}

function dropSorter(lootlist){
  let giveableLoot = lootlist;
}

function minesorter(h){
  let habitat = h;
  //let roll = d(1,10);
  const randomnr = 1 + Math.random() * 10;
  let roll = Math.floor(randomnr);
  let habitatdroper;

  if (habitat === "Mountains"){
      habitatdroper = "Mountains";
  }else if (habitat === "Swamp"){
     habitatdroper = "Swamp";
  }else if (habitat === "Desert"){
     habitatdroper = "Desert";
  }else if (habitat === "arctic"){
     habitatdroper = "arctic";
  }else if (habitat === "Coast"){
     habitatdroper = "Coast";
  }else if (habitat === "Waters"){
     habitatdroper = "Waters";
  }else if (habitat === "Grassland"){
     habitatdroper = "Grassland";
  }else if (habitat === "Underground"){
     habitatdroper = "Underground";
  }else if (habitat === "Lavagrounds"){
     habitatdroper = "Lavagrounds";
  }else if (habitat === "Ruins"){
     habitatdroper = "Ruins";
  }else if (habitat === "Random"){
     habitatdroper = "Random, No Habitat";
  }else if (habitat === "Any"){
    
    
    if (roll === 1){
      habitatdroper = "Mountains";
    }else if (roll === 2){
      habitatdroper = "Swamp";
    }else if (roll === 3){
      habitatdroper = "Desert";
    }else if (roll === 4){
      habitatdroper = "arctic";
    }else if (roll === 5){
      habitatdroper = "Coast";
    }else if (roll === 6){
      habitatdroper = "Waters";
    }else if (roll === 7){
      habitatdroper = "Grassland";
    }else if (roll === 8){
      habitatdroper = "Underground";
    }else if (roll === 9){
      habitatdroper = "Lavagrounds";
    }else if (roll === 10){
      habitatdroper = "Ruins";
    }
  }

  

  return habitatdroper;
}



function encounter_droper(x,y,h){
  let player_numbers = x;
  let player_levels = y;
  let habitat = h;

  let totalcreatures = [
    "air elemental",
    "androsphinx",
    "animated armor",
    "ankheg",
    "ape",
    "awakened shrub",
    "awakened tree",
    "axe beak",
    "azer",
    "baboon",
    "badger",
    "balor",
    "barbed devil",
    "basilisk",
    "bat",
    "bearded devil",
    "behir",
    "black bear",
    "Black Dragon Wyrmling",
    "black slime",
    "blink dog",
    "blood hawk",
    "blue dragon Wyrmling",
    "boar",
    "Bone Devil",
    "Brass Dragon Wyrmling",
    "Bronze Dragon Wyrmling",
    "Brown bear",
    "Bugbear",
    "Bulette",
    "Camel",
    "Cat",
    "Centaur",
    "Chain devil",
    "Chimera",
    "Chuul",
    "Clay golem",
    "Cloaker",
    "Cloud giant",
    "Cockatrice",
    "Constrictor Snake",
    "Copper Dragon Wyrmling",
    "Couatl",
    "crab",
    "Crocodile",
    "dark mantle",
    "Death dog",
    "deer",
    "ghoul",
    "Giant Boar",
    "Giant Centipede",
    "Giant Constrictor Snake",
    "Giant crab",
    "Giant Crocodile",
    "Giant eagle",
    "Giant elk",
    "Giant goat",
    "Giant rat",
    "Giant wasp",
    "Giant Weasel",
    "Giant wolf spider",
    "Gibbering Mouther",
    "Deva",
    "Dire wolf",
    "Djinni",
    "Doppelganger",
    "Draft Horse",
    "Dragon Turtle",
    "Dretch",
    "Drider",
    "Dryad",
    "Duergar",
    "Dust Mephit",
    "Eagle",
    "Earth Elemental",
    "Efreeti",
    "Elephant",
    "Elf, Drow",
    "Elk",
    "Erinyes",
    "Ettercap",
    "Ettin",
    "Fire Elemental",
    "Fire Giant",
    "Flesh Golem",
    "Flying Snake",
    "Flying Sword",
    "Frog",
    "Frost Giant",
    "Gargoyle",
    "Gelatinous Cube",
    "Ghast",
    "Ghost",
    "Giant Ape",
    "Giant Badger",
    "Giant Bat",
    "Giant Fire Beetle",
    "Giant Frog",
    "Giant Hyena",
    "Giant Lizard",
    "Giant Octopus",
    "Giant Owl",
    "Giant poisonous snake",
    "Giant rat, diseased",
    "Giant Scorpion",
    "Giant SeaHorse",
    "Giant Shark",
    "Giant Spider",
    "Giant Toad",
    "Giant Vulture",
    "Glabrezu",
    "Gnoll",
    "Gnome, Deep",
    "Goat",
    "Goblin",
    "Water Elemental",
  ];

  let lv_one = [

    "Awakened Shrub",
    "Baboon",
    "Badger",
    "Bat",
    "Cat",
    "Crab",
    "Deer",
    "Camel",
    "Giant Crab",
    "Giant Rat",
    "Giant Weasel",
    "Axe Beak",
    "Blink Dog",
    "Blood Hawk",
    "Boar",
    "Constrictor Snake",
    "Giant Centipede",
    "Giant Wolf Spider",
    "Ape",
    "Black Bear",
    "Cockatrice",
    "Crocodile",
    "Dark Mantle",
    "Giant Goat",
    "Giant Wasp",
    "Animated Armor",
    "Brass Dragon Wyrmling",
    "Brown Bear",
    "Bugbear",
    "Copper Dragon Wyrmling",
    "Death Dog",
    "Ghoul",
    "Giant Eagle",

  ];

  let empty = [
    "plain"
  ]

  //Mountains//
  let Mountains_lvone = [

    "Baboon Lv0",
    "Deer Lv0",
    "Axe Beak Lv0.25",
    "Blood Hawk Lv0.25",
    "Ape Lv0.5",
    "Cockatrice lv0.5",
    "Giant Goat lv0.5",
    "Animated Armor Lv1",
    "Brass Dragon Wyrmling Lv1",
    "Bugbear Lv1",
    "Copper Dragon Wyrmling Lv1",
    "Death Dog Lv1",
    "Ghoul Lv1",
    "Giant Eagle Lv1",
    
  ]
  let Mountains_lvtwo = [

    "Black Dragon Wyrmling Lv2",
    "Bronze Dragon Wyrmling Lv2",
    "Giant Elk Lv2",
    
  ]
  let Mountains_lvthree = [

    "Blue Dragon Wyrmling Lv3",
    
  ]
  let Mountains_lvfour = [

    "Couatl Lv4",
    
  ]
  let Mountains_lvfive = [

    "Air Elemental Lv5",
    "Bulette Lv5",
    
  ]
  let Mountains_lvsix = [

    "Chimera Lv6",
    
  ]
  let Mountains_lvnine = [

    "Bone Devil Lv9",
    "Clay Golem lv9",
    "Cloud Giant lv9",
    
  ]
  
  //Swamp//
  let Swamp_lvone = [

    "Awakened Shrub Lv0",
    "Frog Lv0",
    "Giant Crab Lv0.125",
    "Boar Lv0.25",
    "Dretch Lv0.25",
    "Giant Frog Lv0.25",
    "Crocodile Lv0.5",
    "Copper Dragon Wyrmling Lv1",

  ]
  let Swamp_lvtwo = [

    "Black Dragon Wyrmling lv2",
    "Giant Boar lv2",
    "Ghast lv2",

  ]
  let Swamp_lvthree = [

    "Basilisk lv3;",
    "Blue Dragon Wyrmling lv3",

  ]
  let Swamp_lvfour = [

    "Black Slime lv4",

  ]
  let Swamp_lvfive = [

    "Air Elemental lv5",
    "Giant Crocodile lv5",
    "Earth Elemental lv5",

  ]
  let Swamp_lveleven = [

    "Behir lv11",

  ]
  

  let Mountains = [
    empty,
    Mountains_lvone, 
    Mountains_lvtwo, 
    Mountains_lvthree, 
    Mountains_lvfour, 
    Mountains_lvfive, 
    Mountains_lvsix,
    empty, 
    empty, 
    empty, 
    Mountains_lvnine,
    empty, 
    empty, 
    empty, 
    empty, 
    empty, 
    empty, 
  ];  
  let Swamp = [
    empty,
    Swamp_lvone, 
    Swamp_lvtwo, 
    Swamp_lvthree, 
    Swamp_lvfour, 
    Swamp_lvfive, 
    empty,
    empty, 
    empty, 
    empty, 
    empty,
    Swamp_lveleven, 
    empty, 
    empty, 
    empty, 
    empty, 
    empty, 
  ];  

  let spawncreatures = [];
  let picklevel = [];

if (habitat === "Mountains"){
    
  for(let e = 0; e < player_levels;){
    
    const randomnr = 1 + Math.random() * player_levels;
    let lasrandom = Math.floor(randomnr);
    
    picklevel = Mountains[lasrandom];

    if (picklevel[0] === "plain"){
      
      for(let i = 0; picklevel[0] === "plain"; i++){

        //alert("here");
       const randomnrsec = 1 + Math.random() * player_levels;
       let lasrandomsec = Math.floor(randomnrsec);
        
       picklevel = Mountains[lasrandomsec];
       //alert("new roll: " + lasrandomsec);
       console.log(lasrandom, picklevel);
      
       if (picklevel[0] != "plain"){
          e += lasrandomsec;
       }else{

       }
     }
     
    }else{
      e += lasrandom;
    }

      let crearoll = d(1,picklevel.length);
      let finalcrearoll = crearoll-1;
      spawncreatures.push(picklevel[finalcrearoll] + "\n");
   
    
  }

  

}else if (habitat === "Swamp"){
   
  for(let e = 0; e < player_levels;){
    
    const randomnr = 1 + Math.random() * player_levels;
    let lasrandom = Math.floor(randomnr);
    
    picklevel = Swamp[lasrandom];

    if (picklevel[0] === "plain"){
      
      for(let i = 0; picklevel[0] === "plain"; i++){

        //alert("here");
       const randomnrsec = 1 + Math.random() * player_levels;
       let lasrandomsec = Math.floor(randomnrsec);
        
       picklevel = Swamp[lasrandomsec];
       //alert("new roll: " + lasrandomsec);
       console.log(lasrandom, picklevel);
      
       if (picklevel[0] != "plain"){
          e += lasrandomsec;
       }else{

       }
     }
     
    }else{
      e += lasrandom;
    }

      let crearoll = d(1,picklevel.length);
      let finalcrearoll = crearoll-1;
      spawncreatures.push(picklevel[finalcrearoll] + "\n");
   
    
  }

}else if (habitat === "Desert"){
   
}else if (habitat === "arctic"){
   
}else if (habitat === "Coast"){
   
}else if (habitat === "Waters"){
   
}else if (habitat === "Grassland"){
   
}else if (habitat === "Underground"){
   
}else if (habitat === "Lavagrounds"){
   
}else if (habitat === "Ruins"){
   
}else if (habitat === "Random"){
   
}

// for(let e = 0; e <= player_levels; e++){

//   //shinobiskills.push(physicalskills[e]);
// }

// shinobiskills.pop();

// for(let i = 1; i <= 5; i++){
  
//   let skillroll = d(1,shinobiskills.length);
//   let finalskillroll = skillroll-1;
//   allskills.push(shinobiskills[finalskillroll] + "\n");
  
//   shinobiskills.splice(finalskillroll, 1);
  
// }
  
  return spawncreatures;
 }


function d(f,s){
  
  rolls = [];

  for(i=1; i<= f; i++){
    const randomnr = 1 + Math.random() * s;
    let lasrandom = Math.floor(randomnr);
    rolls.push(lasrandom)
  }

  return rolls;
}



// let weight;
// let height;
// let subrace;
// let speed;
// let hp, cp, speed;