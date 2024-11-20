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


function racepastedrawer(x){
  let input = document.getElementsByClassName("CHabitat")[0];
  input.value = x;
  input.style.color = "green";
  input.style.fontweight = "1000";
}

function generate_card(){
  let Habitat = document.getElementById("Habitat");
  let Habitat_Effect = document.getElementById("Habitat_Effect");
  let Creatures = document.getElementById("Creatures");
  

  let Player_numbers = document.getElementsByClassName("Cpnumbers")[0];
  let Player_levels = document.getElementsByClassName("Cplevels")[0];
  let Collect_habitat = document.getElementsByClassName("CHabitat")[0];
  
  let habitatgen = habitatsorter(Collect_habitat.value)
  let allcreatures = encounter_droper(Player_numbers.value, Player_levels.value, habitatgen);

  Habitat.innerText = "Haitat: " + habitatgen;
  Habitat_Effect.innerText = "Habitat Effects: ";
  Creatures.innerText = "Spawned Creatures: \n" + allcreatures;
  
}



function habitatsorter(h){
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