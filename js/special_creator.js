
function specpastedrawer(x){
  let input = document.getElementsByClassName("Ctype")[0];
  input.value = x;
  input.style.color = "green";
  input.style.fontweight = "1000";
}

function rolldice(){
  let dice_amount = document.getElementsByClassName("CAmo")[0]; 
  let dice_faces = document.getElementsByClassName("CFac")[0]; 
  let dice_result = document.getElementsByClassName("Cres")[0]; 

  let roll_result = d(dice_amount.value,dice_faces.value);
  
  dice_result.style.display = "block";
  dice_result.value = roll_result;

}

function generate_card(){
  let Type = document.getElementById("Type");
  let Ability_class = document.getElementById("Ability_class");
  let Ability_element = document.getElementById("Ability_element");
  let Apperance_transformation = document.getElementById("Apperance_transformation");
  let Weapon_transformation = document.getElementById("Weapon_transformation");
  let Range = document.getElementById("Range");
  let Targets = document.getElementById("Targets");
  let Ability = document.getElementById("Ability");


  let Special_type = document.getElementsByClassName("Ctype")[0];
  
  let ability_class_ok = abilityclass();
  let ability_class_type = abilityclasstype(ability_class_ok);
  let ability_element = abilityelement();
  let apperance_transformation = Apperancetransformation();
  let weapon_transformation = Weapontransformation();
  let range = Rangeff();
  let targets = targetsff();
  let combination = ShikaiCombination(ability_class_type,ability_element,range,targets);

  

  Type.innerText = "Ability Type: " + Special_type.value;
  Ability_class.innerText = "Ability Class " + ability_class_ok + " (" + ability_class_type + ")";
  Ability_element.innerText = "Ability Element " + ability_element;
  Apperance_transformation.innerText = "Appearance Transformation: " + apperance_transformation;
  Weapon_transformation.innerText = "Weapon transformation: " + weapon_transformation;
  Range.innerText = "Effect Range: " + range;
  Targets.innerText = "Target(s): " + targets;
  Ability.innerText =  combination;
  
  

  
}


function abilityclass(){

  let roll = d(1,8);
  let classs;

  if (roll[0] === 1){
    classs = "Conjuration";
  }else if (roll[0] === 2){
    classs = "Abjuration";
  }else if (roll[0] === 3){
    classs = "Divination";
  }else if (roll[0] === 4){
    classs = "Enchantment";
  }else if (roll[0] === 5){
    classs = "Evocation";
  }else if (roll[0] === 6){
    classs = "Illusion";
  }else if (roll[0] === 7){
    classs = "Necromancy";
  }else if (roll[0] === 8){
    classs = "Transmutation";
  }

  return classs;

}

function abilityclasstype(x){

  
  let classs = x;
  let class_type;

  if (classs === "Conjuration"){

    let roll = d(1,1);

    if (roll[0] === 1){
      class_type = "Summon Construct"
    }
    
  }else if (classs === "Abjuration"){

    let roll = d(1,3);

    if (roll[0] === 1){
      class_type = "Body enhancement"
    }else if (roll[0] === 2){
      class_type = "Defense"
    }else if (roll[0] === 3){
      class_type = "Counter"
    }
    
  }else if (classs === "Divination"){

    let roll = d(1,4);

    if (roll[0] === 1){
      class_type = "Detection"
    }else if (roll[0] === 2){
      class_type = "Clairvoyance"
    }else if (roll[0] === 3){
      class_type = "Swift Learning"
    }else if (roll[0] === 4){
      class_type = "Mind enhancement"
    }
    
  }else if (classs === "Enchantment"){
    
    let roll = d(1,4);

    if (roll[0] === 1){
      class_type = "Mind control"
    }else if (roll[0] === 2){
      class_type = "Body Buffs"
    }else if (roll[0] === 3){
      class_type = "Weapon Buffs"
    }else if (roll[0] === 4){
      class_type = "Mind Attack"
    }

  }else if (classs === "Evocation"){

    let roll = d(1,3);

    if (roll[0] === 1){
      class_type = "Raw Elemental Creation"
    }else if (roll[0] === 2){
      class_type = "Healing"
    }else if (roll[0] === 3){
      class_type = "Manipulation"
    }
    
  }else if (classs === "Illusion"){

    let roll = d(1,4);

    if (roll[0] === 1){
      class_type = "Creative Illusions"
    }else if (roll[0] === 2){
      class_type = "Damage Creative Illusions"
    }else if (roll[0] === 3){
      class_type = "Mechanical Illusions"
    }else if (roll[0] === 4){
      class_type = "Mind Charming"
    }
    
  }else if (classs === "Necromancy"){

    let roll = d(1,4);

    if (roll[0] === 1){
      class_type = "Steal"
    }else if (roll[0] === 2){
      class_type = "Body Debuff"
    }else if (roll[0] === 3){
      class_type = "Status Debuff"
    }else if (roll[0] === 4){
      class_type = "Summon"
    }
    
  }else if (classs === "Transmutation"){
    
    let roll = d(1,5);

    if (roll[0] === 1){
      class_type = "Matter Alter"
    }else if (roll[0] === 2){
      class_type = "Aura Body buff"
    }else if (roll[0] === 3){
      class_type = "Environment change"
    }else if (roll[0] === 4){
      class_type = "Effect Debuff"
    }else if (roll[0] === 5){
      class_type = "Damage buff"
    }

  }

  return class_type;

}

function abilityelement(){

  let roll = d(1,10);
  let element;

  if (roll[0] === 1){
    element = "Fire";
  }else if (roll[0] === 2){
    element = "Water";
  }else if (roll[0] === 3){
    element = "Earth";
  }else if (roll[0] === 4){
    element = "Light";
  }else if (roll[0] === 5){
    element = "Wind";
  }else if (roll[0] === 6){
    element = "Lightning";
  }else if (roll[0] === 7){
    element = "Darkness";
  }else{
    element = "Others";
  }

  if(element === "Others"){
    element = otherelements();
  }else{
    element = element;
  }

  return element;

}

function otherelements(){

  let roll = d(1,15);
  let otelement;

  if (roll[0] === 1){
    otelement = "Ice";
  }else if (roll[0] === 2){
    otelement = "Wood";
  }else if (roll[0] === 3){
    otelement = "Puppet";
  }else if (roll[0] === 4){
    otelement = "Steam";
  }else if (roll[0] === 5){
    otelement = "Plants";
  }else if (roll[0] === 6){
    otelement = "Poison";
  }else if (roll[0] === 7){
    otelement = "Crystal";
  }else if (roll[0] === 8){
    otelement = "Lava";
  }else if (roll[0] === 9){
    otelement = "Weight";
  }else if (roll[0] === 10){
    otelement = "Time";
  }else if (roll[0] === 11){
    otelement = "Sound";
  }else if (roll[0] === 12){
    otelement = "Spatial";
  }else if (roll[0] === 13){
    otelement = "Hell flame";
  }else if (roll[0] === 14){
    otelement = "Gravity";
  }else if (roll[0] === 15){
    otelement = "Decay";
  }

  return otelement;

}

function Apperancetransformation(){

  let rol = d(1,4);
  let allskills = [];

  let transform = [
    "Wings",
    "Crown",
    "Clothes",
    "Eyes",
    "Hand",
    "Tail",
    "Claws",
    "Scales",
    "Horns",
    "Tattoo",
    "Fangs",
    "Limbs",
    "Creature",
    "Customs",
    
  ]

  //saiyanskills.pop();

  for(let i = 1; i <= rol[0]; i++){
    
    let skillroll = d(1,transform.length);
    let finalskillroll = skillroll-1;
    allskills.push(transform[finalskillroll] + "\n");
    
    transform.splice(finalskillroll, 1);
    
  }

  return allskills;

}

function Weapontransformation(){

  let transform = [
    "Colour change",
    "length change(short)",
    "length change(long)",
    "Blade shape change",
    "Battleaxe",
    "Dagger",
    "Dual Dagger",
    "Dart",
    "Flail",
    "Glaive",
    "Great sword",
    "Quarterstaff",
    "Short sword",
    "Dual short sword",
    "Sickle",
    "Shield",
    "Spear",
    "Knuckles",
    "Trident",
    "None(absorbed)",
    "Customs",
    
  ]

  let roll = d(1,transform.length);

  let weapon = transform[roll];


  return weapon;

}

function Rangeff(){

  let roll = d(1,6);
  let range;

  if (roll[0] === 1){
    range = "Weapon touch";
  }else if (roll[0] === 2){
    range = "touch";
  }else if (roll[0] === 3){
    range = "Mid range";
  }else if (roll[0] === 4){
    range = "Attack touch";
  }else if (roll[0] === 5){
    range = "Long range";
  }else if (roll[0] === 6){
    range = "Field range";
  }


  return range;

}

function targetsff(){

  let roll = d(1,2);
  //let rollf = d(1,10);
  let range;

  if (roll[0] === 1){
    range = "all within range";
  }else if (roll[0] === 2){
    range = "touch and splash";
  }


  return range;

}

function ShikaiCombination(act,ae,r,t){

  let abilityclasstype = act;
  let abilityelement = ae;
  let range = r;
  let targets = t;
  let ability = [];

  if(abilityclasstype === "Summon Construct"){


    if(abilityelement === "Fire"){
      
      if(range === "Weapon touch"){

        if(targets === "all within range"){

          ability.push(1);
          ability.push("Rank: B");
          ability.push("Cp Usage: 7");
          ability.push("Activate Chant: Blow up");
          ability.push("when activated, you spawn metal trojan house with flaming hair and calves. the horse having the following stats; Hp: 15, Str: 14,Dex: 8,Con: 4,Wis: 6,Int: 6,Cha: 10,Spd(fly: 40ft, walk: 5ft). when a bird touch a target, the user can use a bonus action to activate the blow up effect, the bird blows up and deals 4 fire damage to the target.");

        }else if(targets === "touch and splash"){
          
          ability.push(2);
          ability.push("Rank: B");
          ability.push("Cp Usage: 7");
          ability.push("Activate Chant: Blow up");
          ability.push("when activated, you spawn 5 fire elemental birds. each bird having the following stats; Hp: 3, Str: 4,Dex: 8,Con: 4,Wis: 6,Int: 6,Cha: 10,Spd(fly: 40ft, walk: 5ft). when a bird touch a target, the user can use a bonus action to activate the blow up effect, the bird blows up and deals 4 fire damage to the target.");

        }

      }else if(range === "touch"){

        if(targets === "all within range"){

          ability.push(3);
          ability.push("Rank: A");
          ability.push("Cp Usage: 10");
          ability.push("Activate Chant: Wild fire");
          ability.push("when activated, you spawn 3 medium sized wooden statues, one shaped as a lion, one shaped as a tiger, and one shaped as a cheetah. \nthe lion having the following stats; Hp: 8, Str: 14,Dex: 10,Con: 13,Wis: 8,Int: 6,Cha: 12,Spd(walk: 40ft), slashing damage of 5 and can attack with an action in its turn. instead of the normal attack, the lion can use the flame roar action, range: 30ft cone, dealing 5 fire damage to all target within range \n\n the Tiger having the following stats; Hp: 7, Str: 16,Dex: 10,Con: 15,Wis: 10,Int: 6,Cha: 12,Spd(walk: 30ft), slashing damage of 4 and can attack with an action in its turn. when the tiger attacks a target and gives it damage, the target receives an extra 3 fire damage in their turn. \n\n the CHeetah having the following stats; Hp: 5, Str: 10,Dex: 15,Con: 10,Wis: 10,Int: 9,Cha: 13,Spd(walk: 50ft), slashing damage of 3 and can attack with an action in its turn. when the cheetah ends its turn in a box, all targets 10ft around the cheetah receives 4 fire damage.");

        }else if(targets === "touch and splash"){

          ability.push(4);
          ability.push("Rank: B");
          ability.push("Cp Usage: 7");
          ability.push("Activate Chant: Blow up");
          ability.push("when activated, you spawn 5 fire elemental birds. each bird having the following stats; Hp: 3, Str: 4,Dex: 8,Con: 4,Wis: 6,Int: 6,Cha: 10,Spd(fly: 40ft, walk: 5ft). when a bird touch a target, the user can use a bonus action to activate the blow up effect, the bird blows up and deals 4 fire damage to the target.");

        }

      }else if(range === "Mid range"){

        if(targets === "all within range"){

        

        }else if(targets === "touch and splash"){



        }

      }else if(range === "Attack touch"){

        if(targets === "all within range"){

          

        }else if(targets === "touch and splash"){



        }

      }else if(range === "Long range"){

        if(targets === "all within range"){

          

        }else if(targets === "touch and splash"){



        }

      }else if(range === "Field range"){

        if(targets === "all within range"){

          

        }else if(targets === "touch and splash"){



        }

      }

    }else if(abilityelement === "Water"){
      
    }else if(abilityelement === "Earth"){
      
    }else if(abilityelement === "Light"){
      
    }else if(abilityelement === "Wind"){
      
    }else if(abilityelement === "Lightning"){
      
    }else if(abilityelement === "Darkness"){
      
    }else if(abilityelement === "Ice"){
      
    }else if(abilityelement === "Wood"){
      
    }else if(abilityelement === "Puppet"){
      
    }else if(abilityelement === "Steam"){
      
    }else if(abilityelement === "Plants"){
      
    }else if(abilityelement === "Poison"){
      
    }else if(abilityelement === "Crystal"){
      
    }else if(abilityelement === "Lava"){
      
    }else if(abilityelement === "Weight"){
      
    }else if(abilityelement === "Time"){
      
    }else if(abilityelement === "Sound"){
      
    }else if(abilityelement === "Spatial"){
      
    }else if(abilityelement === "Hell flame"){
      
    }else if(abilityelement === "Gravity"){
      
    }else if(abilityelement === "Decay"){
      
    }


  }else if(abilityclasstype === "Body enhancement"){

  }else if(abilityclasstype === "Defense"){

  }else if(abilityclasstype === "Counter"){

  }else if(abilityclasstype === "Detection"){

  }else if(abilityclasstype === "Clairvoyance"){

  }else if(abilityclasstype === "Swift Learning"){

  }else if(abilityclasstype === "Mind control"){

  }else if(abilityclasstype === "Body Buffs"){

  }else if(abilityclasstype === "Weapon Buffs"){

  }else if(abilityclasstype === "Mind Attack"){

  }else if(abilityclasstype === "Raw Elemental Creation"){

  }else if(abilityclasstype === "Healing"){

  }else if(abilityclasstype === "Manipulation"){

  }else if(abilityclasstype === "Creative Illusions"){

  }else if(abilityclasstype === "Damage Creative Illusions"){

  }else if(abilityclasstype === "Mechanical Illusions"){

  }else if(abilityclasstype === "Mind Charming"){

  }else if(abilityclasstype === "Steal"){

  }else if(abilityclasstype === "Body Debuff"){

  }else if(abilityclasstype === "Status Debuff"){

  }else if(abilityclasstype === "Summon"){

  }else if(abilityclasstype === "Matter Alter"){

  }else if(abilityclasstype === "Aura Body buff"){

  }else if(abilityclasstype === "Environment change"){

  }else if(abilityclasstype === "Effect Debuff"){

  }else if(abilityclasstype === "Damage buff"){

  }
  

  return ability;
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