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
  let input = document.getElementsByClassName("Crace")[0];
  input.value = x;
  input.style.color = "green";
  input.style.fontweight = "1000";
}

function classpastedrawer(x){
  let input = document.getElementsByClassName("Cclass")[0];
  input.value = x;
  input.style.color = "green";
  input.style.fontweight = "1000";
}

function backpastedrawer(x){
  let input = document.getElementsByClassName("Cbackground")[0];
  input.value = x;
  input.style.color = "green";
  input.style.fontweight = "1000";
}

function alignpastedrawer(x){
  let input = document.getElementsByClassName("CAlignment")[0];
  input.value = x;
  input.style.color = "green";
  input.style.fontweight = "1000";
}

function generate_card(){
  let Name = document.getElementById("first_section");
  let Forcer_Name = document.getElementById("Forcer_Name");
  let Age = document.getElementById("Age");
  let Gender = document.getElementById("Gender");
  let Background = document.getElementById("Background");
  let Backgroundchoices = document.getElementById("Backgroundchoices");
  let Alignment = document.getElementById("Alignment");
  let Race = document.getElementById("Race");
  let Sub_race = document.getElementById("Sub_race");
  let Class = document.getElementById("Class");
  let Str_score = document.getElementById("Str_score");
  let Dex_score = document.getElementById("Dex_score");
  let Con_score = document.getElementById("Con_score");
  let Int_score = document.getElementById("Int_score");
  let Wis_score = document.getElementById("Wis_score");
  let Cha_score = document.getElementById("Cha_score");
  let Height = document.getElementById("Height");
  let Weight = document.getElementById("Weight");
  let Country = document.getElementById("Country");
  let Hp = document.getElementById("Hp");
  let Cp = document.getElementById("Cp");
  let Speed = document.getElementById("Speed");
  let Xp = document.getElementById("Xp");
  let Languages = document.getElementById("Languages");
  let ArmorProficiency = document.getElementById("ArmorProficiency");
  let WeaponProficiency = document.getElementById("WeaponProficiency");
  let Tools = document.getElementById("Tools");
  let Techniques = document.getElementById("Techniques");
  let Saving_throws = document.getElementById("Saving_throws");
  let Features = document.getElementById("Features");
  let Perks = document.getElementById("Perks");
  let Skills = document.getElementById("Skills");
  let KKG = document.getElementById("KKG");
  let Free_slots = document.getElementById("Free_slots");
  

  let cp = document.getElementById("cp");
  let Sp = document.getElementById("Sp");
  let Gp = document.getElementById("Gp");
  let Inventory = document.getElementById("Inventory");

  let Character_name = document.getElementsByClassName("Cname")[0];
  let Character_age = document.getElementsByClassName("Cage")[0];
  let Character_gender = document.getElementsByClassName("Cgender")[0];
  let Character_background = document.getElementsByClassName("Cbackground")[0];
  let Character_alignment = document.getElementsByClassName("CAlignment")[0];
  let Character_race = document.getElementsByClassName("Crace")[0];
  let Character_class = document.getElementsByClassName("Cclass")[0];

  
  let Str = 5;
  let Dex = 5;
  let Con = 5;
  let Int = 5;
  let Wis = 5;
  let Cha = 5;

  
    
  for (let i = 0; i < 30; i++){
    const randomnr = 1 + Math.random() * 6;
    let lasrandom = Math.floor(randomnr);
    //alert(lasrandom);

    if (lasrandom === 1){
      Str += 1;
    }else if(lasrandom === 2){
      Dex += 1;
    }else if(lasrandom === 3){
      Con += 1;
    }else if(lasrandom === 4){
      Int += 1;
    }else if(lasrandom === 5){
      Wis += 1;
    }else if(lasrandom === 6){
      Cha += 1;
    }
  }
  

  let collected_subrace;
  if (Character_race.value === ""){
    collected_subrace = ""
  }else{
    collected_subrace = subracesorter(Character_race.value);
  }

  let given_subrace_subrace;
  if (collected_subrace === ""){
    given_subrace_subrace = ""
  }else{
    given_subrace_subrace = subracesubracesorter(collected_subrace);
  }

  let gen_height;
  let gen_weight;
  if (Character_race.value === ""){
    gen_height = "";
    gen_weight = "";
  }else{
    if(collected_subrace === "Dwarves"){
      gen_height = heightsorter(Character_race.value) - 1.0;
    }else{
      gen_height = heightsorter(Character_race.value);
    }
    gen_weight = weightsorter(Character_race.value);
  }
  
  let race_sub = subraceabilityscores(collected_subrace, given_subrace_subrace);

  let true_Str = Str + race_sub[0];
  let true_Dex = Dex + race_sub[1];
  let true_Con = Con + race_sub[2];
  let true_Int = Int + race_sub[3];
  let true_Wis = Wis + race_sub[4];
  let true_Cha = Cha + race_sub[5];

  let strmodifier = abilitysorter(true_Str);
  let dexmodifier = abilitysorter(true_Dex);
  let conmodifier = abilitysorter(true_Con);
  let intmodifier = abilitysorter(true_Int);
  let wismodifier = abilitysorter(true_Wis);
  let chamodifier = abilitysorter(true_Cha);
  
  let allmod = [strmodifier, dexmodifier, conmodifier, intmodifier, wismodifier, chamodifier]
  let true_hp;
  let true_cp;
  
  if (Character_race.value === "" || Character_class.value === ""){
    true_hp = "";
    true_cp = "";
  }else if(Character_race.value === "Race" || Character_class.value === "Class"){
    true_hp = "";
    true_cp = "";
  }else{
    true_hp = Hpsorter(Character_race.value,Character_class.value,allmod);
    true_cp = Cpsorter(Character_race.value,Character_class.value,allmod);
  }

  let walkspeed = racespeedsorter(Character_race.value);
  let allspeed = subracespeedsorter(collected_subrace, given_subrace_subrace, walkspeed);

  let racelanguages = racelanguagesorter(Character_race.value);
  let alllanguages = subracelanguagesorter(collected_subrace, given_subrace_subrace, racelanguages);
  let morelanguages = backgroundlanguagesorter(Character_background.value, alllanguages);
  
  //let Backgroundchoicesgiven = backgroundchoicessorter(Character_background.value);

  let raceclassarmorprof = armorprofsorter(Character_race.value,Character_class.value);

  let raceclassweaponprof = weaponprofsorter(Character_race.value,Character_class.value);

  let raceclasstoolsprof = toolsprofsorter(Character_race.value,Character_class.value);
  let subracetoolsprof = toolssubraceprofsorter(collected_subrace, given_subrace_subrace,raceclasstoolsprof);
  let backraceclasstoolsprof = backgroundToolssorter(Character_background.value,subracetoolsprof);

  let techprof = techniqueprofsorter(Character_race.value,Character_class.value);
  let subtechprof = techsubraceprofsorter(collected_subrace, given_subrace_subrace,techprof);
  let backsubtechprof = backgroundTechsorter(Character_background.value, subtechprof);

  let savingthr = savingthrowprofsorter(Character_race.value,Character_class.value);

  let racefeature = featuressorter(Character_race.value);
  let subracefeature = featuresubraceprofsorter(collected_subrace, given_subrace_subrace,racefeature);
  //let backfeature = backgroundfeaturessorter(Character_background.value,subracefeature);

  let classperks = classperkssorter(Character_class.value);
  //console.log(raceclassarmorprof);

  let character_skills = skillsorter(Character_race.value,collected_subrace); 
  let skillone = character_skills[0];
  let skilltwo = character_skills[1];
  let skillthree = character_skills[2];
  let skillfour = character_skills[3];
  let skillfive = character_skills[4];

  let freeslots = freeslotssorter(Character_race.value);

  let allkkg = kkgsorter(collected_subrace, given_subrace_subrace);

  let inv = Raceinventorysorter(Character_race.value)
  let inventory = backgroundinventorysorter(Character_background.value,inv)

  Name.innerText = "Character Name: " + Character_name.value;
  Forcer_Name.innerText = "Forcer Name: Unlock at GAG Rank";
  Age.innerText = "Age: " + Character_age.value + " '' ";
  Gender.innerText = " Gender: " + Character_gender.value;
  Background.innerText = "Background: " + Character_background.value;
  //Backgroundchoices.innerText = "Background: ";
  Alignment.innerText = "Alignment: " + Character_alignment.value;
  Race.innerText = "Race: " + Character_race.value;
  Sub_race.innerText = "''Sub-race: " + collected_subrace + given_subrace_subrace;
  Class.innerText = "Class: " + Character_class.value;
  Str_score.innerText = "Str: " + true_Str + " (" + strmodifier + ") ";
  Dex_score.innerText = "Dex: " + true_Dex + " (" + dexmodifier + ") ";
  Con_score.innerText = "Con: " + true_Con + " (" + conmodifier + ") ";
  Int_score.innerText = "Int: " + true_Int + " (" + intmodifier + ") ";
  Wis_score.innerText = "Wis: " + true_Wis + " (" + wismodifier + ") ";
  Cha_score.innerText = "Cha: " + true_Cha + " (" + chamodifier + ") ";
  Height.innerText = "Height: " + gen_height + "ft ";
  Weight.innerText = " Weight: " + gen_weight + "lb";
  Country.innerText = "Country: ";
  Hp.innerText = "Hp: " + true_hp;
  Cp.innerText = "Cp: " + true_cp;
  Speed.innerText = "Speed: " + allspeed;
  Languages.innerText = "Languages: " + morelanguages;
  ArmorProficiency.innerText = "Armor Proficiency: " + raceclassarmorprof;
  WeaponProficiency.innerText = "Weapon Proficiency: " + raceclassweaponprof;
  Tools.innerText = "Tools: " + backraceclasstoolsprof;
  Techniques.innerText = "Techniques: " + backsubtechprof;
  Saving_throws.innerText = "Saving throws: " + savingthr;
  Features.innerText = "Features -- " + subracefeature;
  Perks.innerText = "Perks -- " + classperks;
  Skills.innerText = "C- " + skillone + "D- " + skilltwo + "E- " + skillthree + "F- " + skillfour + "G- " + skillfive;
  Free_slots.innerText = freeslots;
  KKG.innerText = "[KKG]\n" + allkkg;

  cp.innerText = "CP: ";
  Sp.innerText = "SP: ";
  Gp.innerText = "GP: ";
  Inventory.innerText = inventory;
  

  
}

function abilitysorter(x){
  let abilityscore = x;
  let modifer;
  if(abilityscore === 1){
      modifer = "-5"
  }else if(abilityscore === 2 || abilityscore === 3){
      modifer = "-4"
  }else if(abilityscore === 4 || abilityscore === 5){
  modifer = "-3"
  }else if(abilityscore === 6 || abilityscore === 7){
    modifer = "-2"
  }else if(abilityscore === 8 || abilityscore === 9){
    modifer = "-1"
  }else if(abilityscore === 10 || abilityscore === 11){
    modifer = "+0"
  }else if(abilityscore === 12 || abilityscore === 13){
    modifer = "+1"
  }else if(abilityscore === 14 || abilityscore === 15){
    modifer = "+2"
  }else if(abilityscore === 16 || abilityscore === 17){
    modifer = "+3"
  }else if(abilityscore === 18 || abilityscore === 19){
    modifer = "+4"
  }else if(abilityscore === 20 || abilityscore === 21){
    modifer = "+5"
  }else if(abilityscore === 22 || abilityscore === 23){
    modifer = "+6"
  }else if(abilityscore === 24 || abilityscore === 25){
    modifer = "+7"
  }else if(abilityscore === 26 || abilityscore === 27){
    modifer = "+8"
  }else if(abilityscore === 28 || abilityscore === 29){
    modifer = "+9"
  }else if(abilityscore === 30 || abilityscore === 31){
    modifer = "+10"
  }else if(abilityscore === 32 || abilityscore === 33){
    modifer = "+11"
  }else if(abilityscore === 34 || abilityscore === 35){
    modifer = "+12"
  }else if(abilityscore === 36 || abilityscore === 37){
    modifer = "+13"
  }else if(abilityscore === 38 || abilityscore === 39){
    modifer = "+14"
  }else if(abilityscore === 40 || abilityscore === 41){
    modifer = "+15"
  }else if(abilityscore === 42 || abilityscore === 43){
    modifer = "+16"
  }else if(abilityscore === 44 || abilityscore === 45){
    modifer = "+17"
  }else if(abilityscore === 46 || abilityscore === 47){
    modifer = "+18"
  }else if(abilityscore === 48 || abilityscore === 49){
    modifer = "+19"
  }else if(abilityscore === 50){
    modifer = "+20"
  }

  return modifer;
}

function subracesorter(r){
  let choosenrace = r;
  let givensubrace;
  
  const randomnr = 1 + Math.random() * 20;
  let lasrandom = Math.floor(randomnr);
  
  if (choosenrace === "Saiyan"){

    if(lasrandom <= 2){
      givensubrace = "Legendary Super Saiyan"
    }else if(lasrandom >= 3 && lasrandom <= 6){
      givensubrace = "Saiyan Royalty"
    }else if(lasrandom >= 7 && lasrandom <= 11){
      givensubrace = "Elite Level Saiyan"
    }else if(lasrandom >= 12 && lasrandom <= 20){
      givensubrace = "Low Level Saiyan"
    }

  }else if(choosenrace === "Shinobi"){

    if(lasrandom >= 1 && lasrandom <= 5){
      givensubrace = "Uzumaki Clan"
    }else if(lasrandom >= 6 && lasrandom <= 10){
      givensubrace = "Senju Clan"
    }else if(lasrandom >= 11 && lasrandom <= 15){
      givensubrace = "Uchiha Clan"
    }else if(lasrandom >= 16 && lasrandom <= 20){
      givensubrace = "Hyuga Clan"
    }

  }else if(choosenrace === "Shinigami"){

    if(lasrandom >= 1 && lasrandom <= 8){
      givensubrace = "Soul Reaper"
    }else if(lasrandom >= 9 && lasrandom <= 12){
      givensubrace = "Vizard"
    }else if(lasrandom >= 13 && lasrandom <= 20){
      givensubrace = "Hollow"
    }

  }else if(choosenrace === "Demon"){

    if(lasrandom >= 1 && lasrandom <= 8){
      givensubrace = "Demon Mob"
    }else if(lasrandom >= 9 && lasrandom <= 13){
      givensubrace = "Ancient Demon"
    }else if(lasrandom >= 14 && lasrandom <= 16){
      givensubrace = "Demon Knight"
    }else if(lasrandom >= 17 && lasrandom <= 18){
      givensubrace = "Vampire"
    }else if(lasrandom >= 19 && lasrandom <= 20){
      givensubrace = "Fallen"
    }

  }else if(choosenrace === "Beast-Person"){

    if(lasrandom >= 1 && lasrandom <= 2){
      givensubrace = "Dragonoid"
    }else if(lasrandom >= 3 && lasrandom <= 6){
      givensubrace = "Lizard Folk"
    }else if(lasrandom >= 7 && lasrandom <= 9){
      givensubrace = "Werecat"
    }else if(lasrandom >= 10 && lasrandom <= 13){
      givensubrace = "WereWolf"
    }else if(lasrandom >= 14 && lasrandom <= 17){
      givensubrace = "Elf"
    }else if(lasrandom >= 18 && lasrandom <= 20){
      givensubrace = "Dwarves"
    }

  }

  return givensubrace;
}

function subracesubracesorter(sr){
  let givensubrace = sr;
  let givensubsubrace;
  
  const randomnr = 1 + Math.random() * 20;
  let lasrandom = Math.floor(randomnr);

  const Dragonoidroll = 1 + Math.random() * 10;
  let fin_Dragonoidroll = Math.floor(Dragonoidroll);
  
  const werecatroll = 1 + Math.random() * 6;
  let fin_werecatroll = Math.floor(werecatroll);
  
  if (givensubrace === "Dragonoid"){

    if(fin_Dragonoidroll === 1){
      givensubsubrace = "(Red Dragon)";
    }else if(fin_Dragonoidroll === 2){
      givensubsubrace = "(Blue Dragon)";
    }else if(fin_Dragonoidroll === 3){
      givensubsubrace = "(Green Dragon)";
    }else if(fin_Dragonoidroll === 4){
      givensubsubrace = "(Black Dragon)";
    }else if(fin_Dragonoidroll === 5){
      givensubsubrace = "(Gold Dragon)";
    }else if(fin_Dragonoidroll === 6){
      givensubsubrace = "(Silver Dragon)";
    }else if(fin_Dragonoidroll === 7){
      givensubsubrace = "(Bronze Dragon)";
    }else if(fin_Dragonoidroll === 8){
      givensubsubrace = "(Copper Dragon)";
    }else if(fin_Dragonoidroll === 8){
      givensubsubrace = "(White Dragon)";
    }else if(fin_Dragonoidroll === 8){
      givensubsubrace = "(Brass Dragon)";
    }

  }else if(givensubrace === "Werecat"){

    if(fin_werecatroll === 1){
      givensubsubrace = "(Domestic Cat)";
    }else if(fin_werecatroll === 2){
      givensubsubrace = "(Tiger)";
    }else if(fin_werecatroll === 3){
      givensubsubrace = "(Lion)";
    }else if(fin_werecatroll === 4){
      givensubsubrace = "(Panther)";
    }else if(fin_werecatroll === 5){
      givensubsubrace = "(Cheetah)";
    }else if(fin_werecatroll === 6){
      givensubsubrace = "(Leopard)";
    }

  }else if(givensubrace === "WereWolf"){

      givensubsubrace = "(Beta)";
    
  }else if(givensubrace === "Elf"){

    if(fin_werecatroll >= 1 && fin_werecatroll <= 3){
      givensubsubrace = "(Dark Elf)";
    }else if(fin_werecatroll >= 4 && fin_werecatroll <= 6){
      givensubsubrace = "(Seraph Elf)";
    }

  }else{
    givensubsubrace = "";
  }

  return givensubsubrace;
}

function subraceabilityscores(s,ssr){
  let subracegotten = s;
  let subsubracegotten = ssr;
  let subbuff = [];
  
  if(subracegotten === "Legendary Super Saiyan"){
    subbuff.push(5,0,4,1,1,2)
  }else if(subracegotten === "Saiyan Royalty"){
    subbuff.push(3,1,2,2,1,3)
  }else if(subracegotten === "Elite Level Saiyan"){
    subbuff.push(2,3,2,1,2,2)
  }else if(subracegotten === "Low Level Saiyan"){
    subbuff.push(3,3,2,1,1,1)
  }else if(subracegotten === "Uzumaki Clan"){
    subbuff.push()
  }else if(subracegotten === "Senju Clan"){
    subbuff.push(1,2,1,2,3,1)
  }else if(subracegotten === "Uchiha Clan"){
    subbuff.push(1,1,1,3,1,3)
  }else if(subracegotten === "Hyuga Clan"){
    subbuff.push(2,2,1,2,1,2)
  }else if(subracegotten === "Soul Reaper"){
    subbuff.push(2,2,2,2,1,1)
  }else if(subracegotten === "Vizard"){
    subbuff.push(3,3,3,1,1,1)
  }else if(subracegotten === "Hollow"){
    subbuff.push(3,1,3,1,1,1)
  }else if(subracegotten === "Demon Mob"){
    subbuff.push(2,2,2,2,1,1)
  }else if(subracegotten === "Ancient Demon"){
    subbuff.push(2,2,3,3,1,0)
  }else if(subracegotten === "Demon Knight"){
    subbuff.push(4,3,2,0,1,1)
  }else if(subracegotten === "Vampire"){
    subbuff.push(3,3,2,1,2,2)
  }else if(subracegotten === "Fallen"){
    subbuff.push(4,3,1,2,1,2)
  }else if(subracegotten === "Dragonoid"){
    subbuff.push(4,3,2,1,1,2)
  }else if(subracegotten === "Lizard Folk"){
    subbuff.push(2,2,2,1,2,1)
  }else if(subracegotten === "Werecat"){

    if(subsubracegotten === "(Domestic Cat)"){
      subbuff.push(1,3,1,1,1,3)
    }else if(subsubracegotten === "(Tiger)"){
      subbuff.push(3,4,1,1,1,1)
    }else if(subsubracegotten === "(Lion)"){
      subbuff.push(3,3,3,1,1,1)
    }else if(subsubracegotten === "(Panther)"){
      subbuff.push(2,4,1,1,1,1)
    }else if(subsubracegotten === "(Cheetah)"){
      subbuff.push(1,5,1,1,1,1)
    }else if(subsubracegotten === "(Leopard)"){
      subbuff.push(2,2,1,1,1,1)
    }
    
  }else if(subracegotten === "WereWolf"){

    if(subsubracegotten === "(Beta)"){
      subbuff.push(4,4,1,1,0,1)
    }else{
      subbuff.push(4,4,1,1,0,1)
    }
    
  }else if(subracegotten === "Elf"){

    if(subsubracegotten === "(Dark Elf)"){
      subbuff.push(0,3,1,1,4,2)
    }else if(subsubracegotten === "(Seraph Elf)"){
      subbuff.push(0,4,1,1,3,2)
    }
    
  }else if(subracegotten === "Dwarves"){
    subbuff.push(3,1,3,1,2,0)
  }

  return subbuff;
}

function heightsorter(r){
  let choosenrace = r;
  let baseheight = 4.8;
  let fullheight;
  
  let heightroll = d(2,10);
  let firstnumber = heightroll[0] / 10;
  let secondnumber = heightroll[1] / 10;
  
  let totaldeciheight = firstnumber + secondnumber;

  if (choosenrace === "Saiyan"){

    fullheight = baseheight + totaldeciheight;

  }else if(choosenrace === "Shinobi"){

    fullheight = baseheight + totaldeciheight;

  }else if(choosenrace === "Shinigami"){

    fullheight = baseheight + totaldeciheight;

  }else if(choosenrace === "Demon"){

    fullheight = baseheight + totaldeciheight;

  }else if(choosenrace === "Beast-Person"){

    fullheight = baseheight + totaldeciheight;

  }
  let truefullheight = fullheight.toFixed(1);

  return truefullheight;
}

function weightsorter(r){
  let choosenrace = r;
  let fullweight;

  let weightroll = d(2,4);
  let heightroll = d(2,10);
  let firstnumber = weightroll[0];
  let secondnumber = weightroll[1];
  let firstnumberh = heightroll[0];
  let secondnumberh = heightroll[1];
  
  let totalweight = firstnumber + secondnumber * firstnumberh + secondnumberh;

  if (choosenrace === "Saiyan"){

    fullweight = 130 + totalweight;

  }else if(choosenrace === "Shinobi"){

    fullweight = 100 + totalweight;

  }else if(choosenrace === "Shinigami"){

    fullweight = 100 + totalweight;

  }else if(choosenrace === "Demon"){

    fullweight = 110 + totalweight;

  }else if(choosenrace === "Beast-Person"){

    fullweight = 110 + totalweight;

  }

  return fullweight;
}

function Hpsorter(r,c,mod){
  let choosenrace = r;
  let choosenclass = c;
  let modifiers = mod;
  let hp;
  
  if (choosenrace === "Saiyan"){

    if(choosenclass === "Fighter"){
      hp = 25 + 3 + modifiers[2];
    }else if(choosenclass === "BattleMage"){
      hp = 25 + 3 + modifiers[2];
    }else if(choosenclass === "Assassin"){
      hp = 25 + 2 + modifiers[2];
    }else if(choosenclass === "Tank"){
      hp = 25 + 4 + modifiers[2];
    }

  }else if(choosenrace === "Shinobi"){

    if(choosenclass === "Fighter"){
      hp = 17 + 3 + modifiers[2];
    }else if(choosenclass === "BattleMage"){
      hp = 17 + 3 + modifiers[2];
    }else if(choosenclass === "Ranger"){
      hp = 17 + 2 + modifiers[2];
    }else if(choosenclass === "Priest"){
      hp = 17 + 1 + modifiers[2];
    }else if(choosenclass === "Assassin"){
      hp = 17 + 2 + modifiers[2];
    }else if(choosenclass === "Summoner"){
      hp = 17 + 2 + modifiers[2];
    }else if(choosenclass === "Paladin"){
      hp = 17 + 2 + modifiers[2];
    }

  }else if(choosenrace === "Shinigami"){

    if(choosenclass === "Fighter"){
      hp = 22 + 3 + modifiers[2];
    }else if(choosenclass === "Paladin"){
      hp = 22 + 2 + modifiers[2];
    }else if(choosenclass === "Assassin"){
      hp = 22 + 2 + modifiers[2];
    }else if(choosenclass === "Priest"){
      hp = 22 + 1 + modifiers[2];
    }else if(choosenclass === "Tank"){
      hp = 22 + 4 + modifiers[2];
    }

  }else if(choosenrace === "Demon"){

    if(choosenclass === "Fighter"){
      hp = 21 + 3 + modifiers[2];
    }else if(choosenclass === "BattleMage"){
      hp = 21 + 3 + modifiers[2];
    }else if(choosenclass === "Ranger"){
      hp = 21 + 2 + modifiers[2];
    }else if(choosenclass === "Mage"){
      hp = 21 + 0 + modifiers[2];
    }else if(choosenclass === "Necromancer"){
      hp = 21 + 2 + modifiers[2];
    }else if(choosenclass === "Assassin"){
      hp = 21 + 2 + modifiers[2];
    }else if(choosenclass === "Summoner"){
      hp = 21 + 2 + modifiers[2];
    }else if(choosenclass === "Tank"){
      hp = 21 + 4 + modifiers[2];
    }else if(choosenclass === "Bard"){
      hp = 21 + 2 + modifiers[2];
    }

  }else if(choosenrace === "Beast-Person"){

    if(choosenclass === "Fighter"){
      hp = 18 + 3 + modifiers[2];
    }else if(choosenclass === "BattleMage"){
      hp = 18 + 3 + modifiers[2];
    }else if(choosenclass === "Ranger"){
      hp = 18 + 2 + modifiers[2];
    }else if(choosenclass === "Mage"){
      hp = 18 + 0 + modifiers[2];
    }else if(choosenclass === "Necromancer"){
      hp = 18 + 2 + modifiers[2];
    }else if(choosenclass === "Assassin"){
      hp = 18 + 2 + modifiers[2];
    }else if(choosenclass === "Summoner"){
      hp = 18 + 2 + modifiers[2];
    }else if(choosenclass === "Tank"){
      hp = 18 + 4 + modifiers[2];
    }else if(choosenclass === "Bard"){
      hp = 18 + 2 + modifiers[2];
    }else if(choosenclass === "Priest"){
      hp = 18 + 1 + modifiers[2];
    }else if(choosenclass === "Paladin"){
      hp = 18 + 2 + modifiers[2];
    }
  }

  return hp;
}

function Cpsorter(r,c,mod){
  let choosenrace = r;
  let choosenclass = c;
  let modifiers = mod;
  let cp;
  
  if (choosenrace === "Saiyan"){

    if(choosenclass === "Fighter"){
      cp = 15 + 2 + modifiers[4];
    }else if(choosenclass === "BattleMage"){
      cp = 15 + 3 + modifiers[4];
    }else if(choosenclass === "Assassin"){
      cp = 15 + 2 + modifiers[4];
    }else if(choosenclass === "Tank"){
      cp = 15 + 0 + modifiers[4];
    }

  }else if(choosenrace === "Shinobi"){

    if(choosenclass === "Fighter"){
      cp = 23 + 2 + modifiers[4];
    }else if(choosenclass === "BattleMage"){
      cp = 23 + 3 + modifiers[4];
    }else if(choosenclass === "Ranger"){
      cp = 23 + 2 + modifiers[4];
    }else if(choosenclass === "Priest"){
      cp = 23 + 4 + modifiers[4];
    }else if(choosenclass === "Assassin"){
      cp = 23 + 2 + modifiers[4];
    }else if(choosenclass === "Summoner"){
      cp = 23 + 3 + modifiers[4];
    }else if(choosenclass === "Paladin"){
      cp = 23 + 3 + modifiers[4];
    }

  }else if(choosenrace === "Shinigami"){

    if(choosenclass === "Fighter"){
      cp = 18 + 2 + modifiers[4];
    }else if(choosenclass === "Paladin"){
      cp = 18 + 3 + modifiers[4];
    }else if(choosenclass === "Assassin"){
      cp = 18 + 2 + modifiers[4];
    }else if(choosenclass === "Priest"){
      cp = 18 + 4 + modifiers[4];
    }else if(choosenclass === "Tank"){
      cp = 18 + 0 + modifiers[4];
    }

  }else if(choosenrace === "Demon"){

    if(choosenclass === "Fighter"){
      cp = 19 + 2 + modifiers[4];
    }else if(choosenclass === "BattleMage"){
      cp = 19 + 3 + modifiers[4];
    }else if(choosenclass === "Ranger"){
      cp = 19 + 2 + modifiers[4];
    }else if(choosenclass === "Mage"){
      cp = 19 + 5 + modifiers[3];
    }else if(choosenclass === "Necromancer"){
      cp = 19 + 3 + modifiers[4];
    }else if(choosenclass === "Assassin"){
      cp = 19 + 2 + modifiers[4];
    }else if(choosenclass === "Summoner"){
      cp = 19 + 3 + modifiers[4];
    }else if(choosenclass === "Tank"){
      cp = 19 + 0 + modifiers[4];
    }else if(choosenclass === "Bard"){
      cp = 19 + 3 + modifiers[4];
    }

  }else if(choosenrace === "Beast-Person"){

    if(choosenclass === "Fighter"){
      cp = 22 + 2 + modifiers[4];
    }else if(choosenclass === "BattleMage"){
      cp = 22 + 3 + modifiers[4];
    }else if(choosenclass === "Ranger"){
      cp = 22 + 2 + modifiers[4];
    }else if(choosenclass === "Mage"){
      cp = 22 + 5 + modifiers[3];
    }else if(choosenclass === "Necromancer"){
      cp = 22 + 3 + modifiers[4];
    }else if(choosenclass === "Assassin"){
      cp = 22 + 2 + modifiers[4];
    }else if(choosenclass === "Summoner"){
      cp = 22 + 3 + modifiers[4];
    }else if(choosenclass === "Tank"){
      cp = 22 + 0 + modifiers[4];
    }else if(choosenclass === "Bard"){
      cp = 22 + 3 + modifiers[4];
    }else if(choosenclass === "Priest"){
      cp = 22 + 4 + modifiers[4];
    }else if(choosenclass === "Paladin"){
      cp = 22 + 3 + modifiers[4];
    }
  }

  return cp;
}

function racespeedsorter(r){
  let choosenrace = r;
  let speed = [];
  

  if (choosenrace === "Saiyan"){

    speed.push(30);

  }else if(choosenrace === "Shinobi"){

    speed.push(20);

  }else if(choosenrace === "Shinigami"){

    speed.push(25);

  }else if(choosenrace === "Demon"){

    speed.push(30);

  }else if(choosenrace === "Beast-Person"){

    speed.push(20);

  }

  return speed;
}

function subracespeedsorter(s,ssr,sped){
  let subracegotten = s;
  let subsubracegotten = ssr;
  let speed = sped;
  
  if(subracegotten === "Legendary Super Saiyan"){
    speed[0] -= 5;
  }else if(subracegotten === "Saiyan Royalty"){
    
  }else if(subracegotten === "Elite Level Saiyan"){

  }else if(subracegotten === "Low Level Saiyan"){
    
  }else if(subracegotten === "Uzumaki Clan"){
    
  }else if(subracegotten === "Senju Clan"){
    
  }else if(subracegotten === "Uchiha Clan"){
    speed[0] += "+5(Active Sharigan)";
  }else if(subracegotten === "Hyuga Clan"){
    
  }else if(subracegotten === "Soul Reaper"){
    
  }else if(subracegotten === "Vizard"){
    
  }else if(subracegotten === "Hollow"){
    
  }else if(subracegotten === "Demon Mob"){
    
  }else if(subracegotten === "Ancient Demon"){
    
  }else if(subracegotten === "Demon Knight"){
    
  }else if(subracegotten === "Vampire"){
    
  }else if(subracegotten === "Fallen"){
    
  }else if(subracegotten === "Dragonoid"){
    speed[0] = 30;
    speed.push("fly: 50ft"); 
  }else if(subracegotten === "Lizard Folk"){
    
  }else if(subracegotten === "Werecat"){

    if(subsubracegotten === "(Domestic Cat)"){
      
    }else if(subsubracegotten === "(Tiger)"){
      speed[0] += " (+10 only to run/dash)";
    }else if(subsubracegotten === "(Lion)"){
      speed[0] += " (+5 only to run/dash)";
    }else if(subsubracegotten === "(Panther)"){
      speed[0] += " (+5 only to run/dash) (+10 to walk if on ice)";
    }else if(subsubracegotten === "(Cheetah)"){
      speed[0] += " (+15 only to run/dash) (+20 if on grass plain)";
    }else if(subsubracegotten === "(Leopard)"){
      speed[0] += " (+5 only to run/dash)";
      speed.push("climb: + 10spd")
    }
    
  }else if(subracegotten === "WereWolf"){
    speed[0] += 5;
    
  }else if(subracegotten === "Elf"){

    if(subsubracegotten === "(Dark Elf)"){
      
    }else if(subsubracegotten === "(Seraph Elf)"){
      
    }
    
  }else if(subracegotten === "Dwarves"){
    
  }


  return speed;
}

function racelanguagesorter(r){
  let choosenrace = r;
  let language = [];
  

  if (choosenrace === "Saiyan"){

    language.push("Common");

  }else if(choosenrace === "Shinobi"){

    language.push("Common");

  }else if(choosenrace === "Shinigami"){

    language.push("Common");

  }else if(choosenrace === "Demon"){

    language.push("Common", "Abyssal");

  }else if(choosenrace === "Beast-Person"){

    language.push("Common");

  }

  return language;
}

function subracelanguagesorter(s,ssr,lan){
  let subracegotten = s;
  let subsubracegotten = ssr;
  let languages = lan;
  
  if(subracegotten === "Legendary Super Saiyan"){
    
  }else if(subracegotten === "Saiyan Royalty"){
    
  }else if(subracegotten === "Elite Level Saiyan"){

  }else if(subracegotten === "Low Level Saiyan"){
    
  }else if(subracegotten === "Uzumaki Clan"){
    
  }else if(subracegotten === "Senju Clan"){
    
  }else if(subracegotten === "Uchiha Clan"){
    
  }else if(subracegotten === "Hyuga Clan"){
    
  }else if(subracegotten === "Soul Reaper"){
    
  }else if(subracegotten === "Vizard"){
    languages.push("Abyssal");
  }else if(subracegotten === "Hollow"){
    languages.push("Infernal");
  }else if(subracegotten === "Demon Mob"){
    
  }else if(subracegotten === "Ancient Demon"){
    languages.push("Infernal");
  }else if(subracegotten === "Demon Knight"){
    
  }else if(subracegotten === "Vampire"){
    languages.push("Infernal");
  }else if(subracegotten === "Fallen"){
    languages.push("Infernal");
  }else if(subracegotten === "Dragonoid"){
    languages.push("Draconic");
  }else if(subracegotten === "Lizard Folk"){
    languages.push("Draconic");
  }else if(subracegotten === "Werecat"){
    languages.push("Sylvan");
    if(subsubracegotten === "(Domestic Cat)"){
      
    }else if(subsubracegotten === "(Tiger)"){
      
    }else if(subsubracegotten === "(Lion)"){
      
    }else if(subsubracegotten === "(Panther)"){
      
    }else if(subsubracegotten === "(Cheetah)"){
      
    }else if(subsubracegotten === "(Leopard)"){
      
    }
    
  }else if(subracegotten === "WereWolf"){
    
    
  }else if(subracegotten === "Elf"){
    languages.push("Elvish");
    if(subsubracegotten === "(Dark Elf)"){
      
    }else if(subsubracegotten === "(Seraph Elf)"){
      
    }
    
  }else if(subracegotten === "Dwarves"){
    languages.push("Dwarvish");
  }


  return languages;
}

function backgroundlanguagesorter(b,lan){
  let choosenbackground = b;
  let language = lan;

  if (choosenbackground === "Acolyte"){
    language.push("+any 2 of your choice");
  }else if(choosenbackground === "Artisan"){
    
  }else if(choosenbackground === "Bounty-Hunter"){
    language.push("Thieves' Cant");
  }else if(choosenbackground === "Charlatan"){
    
  }else if(choosenbackground === "City-Watch"){
    language.push("+any 2 of your choice");
  }else if(choosenbackground === "Commoner"){
    
  }else if(choosenbackground === "Criminal"){
    
  }else if(choosenbackground === "Entertainer"){
    
  }else if(choosenbackground === "Far-Traveler"){
    language.push("+any 1 of your choice");
  }else if(choosenbackground === "Urchin"){
    
  }else if(choosenbackground === "Thug"){
    
  }else if(choosenbackground === "Spy"){
    
  }else if(choosenbackground === "Soldier"){
    
  }else if(choosenbackground === "Sailor"){
    
  }else if(choosenbackground === "Sage"){
    language.push("+any 2 of your choice");
  }
  
  return language;
}

// function backgroundchoicessorter(b){
//   let choosenbackground = b;
//   let choices = [];

//   let d8 = d(1,8);
//   let d6 = d(1,6);

//   if (choosenbackground === "Acolyte"){
//     let pt = d(1,8);
//     if(pt === 1){
//       choices.push("Personality trait: I Idolize A Particular Hero Of My Faith, And Constantly Refer To That Person’s Deeds And Example. ");
//     }else if (pt === 2){
//       choices.push("Personality trait: I Can Find Common Ground Between The Fiercest Enemies, Empathizing With Them And Always Working Toward Peace.");
//     }else if (pt === 3){
//       choices.push("Personality trait: I See Omens In Every Event And Action. The Gods Try To Speak To Us, We Just Need To Listen.");
//     }else if (pt === 4){
//       choices.push("Personality trait: Nothing Can Shake My Optimistic Attitude.");
//     }else if (pt === 5){
//       choices.push("Personality trait: I Quote (Or Misquote) Sacred Texts And Proverbs In Almost Every Situation.");
//     }else if (pt === 6){
//       choices.push("Personality trait: I Am Tolerant (Or Intolerant) Of Other Faiths And Respect (Or Condemn) The Worship Of Other Gods.");
//     }else if (pt === 7){
//       choices.push("Personality trait: I’ve Enjoyed Fine Food, Drink, And High Society Among My Temple’s Elite. Rough Living Grates On Me.");
//     }else if (pt === 8){
//       choices.push("Personality trait: I’ve Spent So Long In The Temple That I Have Little Practical Experience Dealing With People In The Outside World.");
//     }

//     let id = d(1,8);
//     if(id === 1){
//       choices.push("Ideal: I Idolize A Particular Hero Of My Faith, And Constantly Refer To That Person’s Deeds And Example. ");
//     }else if (id === 2){
//       choices.push("Personality trait: I Can Find Common Ground Between The Fiercest Enemies, Empathizing With Them And Always Working Toward Peace.");
//     }

    
//   }else if(choosenbackground === "Artisan"){
    
//   }else if(choosenbackground === "Bounty-Hunter"){
    
//   }else if(choosenbackground === "Charlatan"){
    
//   }else if(choosenbackground === "City-Watch"){
    
//   }else if(choosenbackground === "Commoner"){
    
//   }else if(choosenbackground === "Criminal"){
    
//   }else if(choosenbackground === "Entertainer"){
    
//   }else if(choosenbackground === "Far-Traveler"){
   
//   }else if(choosenbackground === "Urchin"){
    
//   }else if(choosenbackground === "Thug"){
    
//   }else if(choosenbackground === "Spy"){
    
//   }else if(choosenbackground === "Soldier"){
    
//   }else if(choosenbackground === "Sailor"){
    
//   }else if(choosenbackground === "Sage"){
    
//   }
  
//   return choices;
// }

function armorprofsorter(r,c){
  let choosenrace = r;
  let choosenclass = c;
  let armorprof = [];
  
  
  if (choosenrace === "Saiyan"){
      armorprof.push("Light armor")
    if(choosenclass === "Fighter"){
      armorprof[0] = ("All Armors")
      armorprof.push("Sheilds")
    }else if(choosenclass === "BattleMage"){
      
    }else if(choosenclass === "Assassin"){
      
    }else if(choosenclass === "Tank"){
      armorprof[0] = ("All Armors")
      armorprof.push("Sheilds")
    }

  }else if(choosenrace === "Shinobi"){

    if(choosenclass === "Fighter"){
      armorprof.push("All Armors", "Sheilds")
    }else if(choosenclass === "BattleMage"){
      armorprof.push("Light armor")
    }else if(choosenclass === "Ranger"){
      armorprof.push("Light armor", "medium armor", "Shields")
    }else if(choosenclass === "Priest"){
      armorprof.push("Light armor", "medium armor", "Shields")
    }else if(choosenclass === "Assassin"){
      armorprof.push("Light armor")
    }else if(choosenclass === "Summoner"){
      armorprof.push("Light armor")
    }else if(choosenclass === "Paladin"){
      armorprof.push("All Armors", "Sheilds")
    }

  }else if(choosenrace === "Shinigami"){

    if(choosenclass === "Fighter"){
      armorprof.push("All Armors", "Sheilds")
    }else if(choosenclass === "Paladin"){
      armorprof.push("All Armors", "Sheilds")
    }else if(choosenclass === "Assassin"){
      armorprof.push("Light armor")
    }else if(choosenclass === "Priest"){
      armorprof.push("Light armor", "medium armor", "Shields")
    }else if(choosenclass === "Tank"){
      armorprof.push("All Armors", "Sheilds")
    }

  }else if(choosenrace === "Demon"){

    if(choosenclass === "Fighter"){
      armorprof.push("All Armors", "Sheilds")
    }else if(choosenclass === "BattleMage"){
      armorprof.push("Light armor")
    }else if(choosenclass === "Ranger"){
      armorprof.push("Light armor", "medium armor", "Shields")
    }else if(choosenclass === "Mage"){
      armorprof.push("None")
    }else if(choosenclass === "Necromancer"){
      armorprof.push("None")
    }else if(choosenclass === "Assassin"){
      armorprof.push("Light armor")
    }else if(choosenclass === "Summoner"){
      armorprof.push("Light armor")
    }else if(choosenclass === "Tank"){
      armorprof.push("All Armors", "Sheilds")
    }else if(choosenclass === "Bard"){
      armorprof.push("Light armor")
    }

  }else if(choosenrace === "Beast-Person"){

    if(choosenclass === "Fighter"){
      armorprof.push("All Armors", "Sheilds")
    }else if(choosenclass === "BattleMage"){
      armorprof.push("Light armor")
    }else if(choosenclass === "Ranger"){
      armorprof.push("Light armor", "medium armor", "Shields")
    }else if(choosenclass === "Mage"){
      armorprof.push("None")
    }else if(choosenclass === "Necromancer"){
      armorprof.push("None")
    }else if(choosenclass === "Assassin"){
      armorprof.push("Light armor")
    }else if(choosenclass === "Summoner"){
      armorprof.push("Light armor")
    }else if(choosenclass === "Tank"){
      armorprof.push("All Armors", "Sheilds")
    }else if(choosenclass === "Bard"){
      armorprof.push("Light armor")
    }else if(choosenclass === "Priest"){
      armorprof.push("Light armor", "medium armor", "Shields")
    }else if(choosenclass === "Paladin"){
      armorprof.push("All Armors", "Sheilds")
    }
  }

  return armorprof;
}

function weaponprofsorter(r,c){
  let choosenrace = r;
  let choosenclass = c;
  let weaponprof = [];
  
  
  if (choosenrace === "Saiyan"){
      
    if(choosenclass === "Fighter"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }else if(choosenclass === "BattleMage"){
      weaponprof.push("Simple Melee Weapons", "ShortSwords")
    }else if(choosenclass === "Assassin"){
      weaponprof.push("Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "ShortSwords")
    }else if(choosenclass === "Tank"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }

  }else if(choosenrace === "Shinobi"){

    if(choosenclass === "Fighter"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }else if(choosenclass === "BattleMage"){
      weaponprof.push("Simple Melee Weapons", "ShortSwords")
    }else if(choosenclass === "Ranger"){
      weaponprof.push("Simple Ranged Weapons", "Martial Ranged Weapons")
    }else if(choosenclass === "Priest"){
      weaponprof.push("Simple Weapons")
    }else if(choosenclass === "Assassin"){
      weaponprof.push("Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "ShortSwords")
    }else if(choosenclass === "Summoner"){
      weaponprof.push("Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows")
    }else if(choosenclass === "Paladin"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }

  }else if(choosenrace === "Shinigami"){

    if(choosenclass === "Fighter"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }else if(choosenclass === "Paladin"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }else if(choosenclass === "Assassin"){
      weaponprof.push("Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "ShortSwords")
    }else if(choosenclass === "Priest"){
      weaponprof.push("Simple Weapons")
    }else if(choosenclass === "Tank"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }

  }else if(choosenrace === "Demon"){

    if(choosenclass === "Fighter"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }else if(choosenclass === "BattleMage"){
      weaponprof.push("Simple Melee Weapons", "ShortSwords")
    }else if(choosenclass === "Ranger"){
      weaponprof.push("Simple Ranged Weapons", "Martial Ranged Weapons")
    }else if(choosenclass === "Mage"){
      weaponprof.push("Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows")
    }else if(choosenclass === "Necromancer"){
      weaponprof.push("Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows")
    }else if(choosenclass === "Assassin"){
      weaponprof.push("Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "ShortSwords")
    }else if(choosenclass === "Summoner"){
      weaponprof.push("Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "ShortSwords")
    }else if(choosenclass === "Tank"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }else if(choosenclass === "Bard"){
      weaponprof.push("Simple Melee Weapons", "ShortSwords")
    }

  }else if(choosenrace === "Beast-Person"){

    if(choosenclass === "Fighter"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }else if(choosenclass === "BattleMage"){
      weaponprof.push("Simple Melee Weapons", "ShortSwords")
    }else if(choosenclass === "Ranger"){
      weaponprof.push("Simple Ranged Weapons", "Martial Ranged Weapons")
    }else if(choosenclass === "Mage"){
      weaponprof.push("Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows")
    }else if(choosenclass === "Necromancer"){
      weaponprof.push("Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows")
    }else if(choosenclass === "Assassin"){
      weaponprof.push("Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "ShortSwords")
    }else if(choosenclass === "Summoner"){
      weaponprof.push("Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "ShortSwords")
    }else if(choosenclass === "Tank"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }else if(choosenclass === "Bard"){
      weaponprof.push("Simple Melee Weapons", "ShortSwords")
    }else if(choosenclass === "Priest"){
      weaponprof.push("Simple Weapons")
    }else if(choosenclass === "Paladin"){
      weaponprof.push("Simple Melee Weapons", "Martial Melee Weapons")
    }
  }

  return weaponprof;
}

function toolsprofsorter(r,c){
  let choosenrace = r;
  let choosenclass = c;
  let toolsprof = [];
  
  
  if (choosenrace === "Saiyan"){
      
    if(choosenclass === "Fighter"){
      toolsprof.push("None")
    }else if(choosenclass === "BattleMage"){
      toolsprof.push("Choose One Type Of Artisan's Tools Or One Musical Instument")
    }else if(choosenclass === "Assassin"){
      toolsprof.push("Thieves' Tools")
    }else if(choosenclass === "Tank"){
      toolsprof.push("None")
    }

  }else if(choosenrace === "Shinobi"){

    if(choosenclass === "Fighter"){
      toolsprof.push("None")
    }else if(choosenclass === "BattleMage"){
      toolsprof.push("Choose One Type Of Artisan's Tools Or One Musical Instument")
    }else if(choosenclass === "Ranger"){
      toolsprof.push("Choose One Type Of Artisan's Tools Or One Musical Instument")
    }else if(choosenclass === "Priest"){
      toolsprof.push("None")
    }else if(choosenclass === "Assassin"){
      toolsprof.push("Thieves' Tools")
    }else if(choosenclass === "Summoner"){
      toolsprof.push("None")
    }else if(choosenclass === "Paladin"){
      toolsprof.push("None")
    }

  }else if(choosenrace === "Shinigami"){

    if(choosenclass === "Fighter"){
      toolsprof.push("None")
    }else if(choosenclass === "Paladin"){
      toolsprof.push("None")
    }else if(choosenclass === "Assassin"){
      toolsprof.push("Thieves' Tools")
    }else if(choosenclass === "Priest"){
      toolsprof.push("None")
    }else if(choosenclass === "Tank"){
      toolsprof.push("None")
    }

  }else if(choosenrace === "Demon"){

    if(choosenclass === "Fighter"){
      toolsprof.push("None")
    }else if(choosenclass === "BattleMage"){
      toolsprof.push("Choose One Type Of Artisan's Tools Or One Musical Instument")
    }else if(choosenclass === "Ranger"){
      toolsprof.push("Choose One Type Of Artisan's Tools Or One Musical Instument")
    }else if(choosenclass === "Mage"){
      toolsprof.push("None")
    }else if(choosenclass === "Necromancer"){
      toolsprof.push("None")
    }else if(choosenclass === "Assassin"){
      toolsprof.push("Thieves' Tools")
    }else if(choosenclass === "Summoner"){
      toolsprof.push("None")
    }else if(choosenclass === "Tank"){
      toolsprof.push("None")
    }else if(choosenclass === "Bard"){
      toolsprof.push("Choose 3 different Musical Instuments")
    }

  }else if(choosenrace === "Beast-Person"){

    if(choosenclass === "Fighter"){
      toolsprof.push("None")
    }else if(choosenclass === "BattleMage"){
      toolsprof.push("Choose One Type Of Artisan's Tools Or One Musical Instument")
    }else if(choosenclass === "Ranger"){
      toolsprof.push("Choose One Type Of Artisan's Tools Or One Musical Instument")
    }else if(choosenclass === "Mage"){
      toolsprof.push("None")
    }else if(choosenclass === "Necromancer"){
      toolsprof.push("None")
    }else if(choosenclass === "Assassin"){
      toolsprof.push("Thieves' Tools")
    }else if(choosenclass === "Summoner"){
      toolsprof.push("None")
    }else if(choosenclass === "Tank"){
      toolsprof.push("None")
    }else if(choosenclass === "Bard"){
      toolsprof.push("Choose 3 different Musical Instuments")
    }else if(choosenclass === "Priest"){
      toolsprof.push("None")
    }else if(choosenclass === "Paladin"){
      toolsprof.push("None")
    }
  }

  return toolsprof;
}

function toolssubraceprofsorter(s,ssr,too){
  let subracegotten = s;
  let subsubracegotten = ssr;
  let tools = too;
  
  if(subracegotten === "Legendary Super Saiyan"){
    
  }else if(subracegotten === "Saiyan Royalty"){
    
  }else if(subracegotten === "Elite Level Saiyan"){

  }else if(subracegotten === "Low Level Saiyan"){
    
  }else if(subracegotten === "Uzumaki Clan"){
    
  }else if(subracegotten === "Senju Clan"){
    
  }else if(subracegotten === "Uchiha Clan"){
    
  }else if(subracegotten === "Hyuga Clan"){
    
  }else if(subracegotten === "Soul Reaper"){
    
  }else if(subracegotten === "Vizard"){
    
  }else if(subracegotten === "Hollow"){
    
  }else if(subracegotten === "Demon Mob"){
    
  }else if(subracegotten === "Ancient Demon"){
    
  }else if(subracegotten === "Demon Knight"){
    
  }else if(subracegotten === "Vampire"){
    
  }else if(subracegotten === "Fallen"){
    
  }else if(subracegotten === "Dragonoid"){
    
  }else if(subracegotten === "Lizard Folk"){
    
  }else if(subracegotten === "Werecat"){
    
    if(subsubracegotten === "(Domestic Cat)"){
      
    }else if(subsubracegotten === "(Tiger)"){
      
    }else if(subsubracegotten === "(Lion)"){
      
    }else if(subsubracegotten === "(Panther)"){
      
    }else if(subsubracegotten === "(Cheetah)"){
      
    }else if(subsubracegotten === "(Leopard)"){
      
    }
    
  }else if(subracegotten === "WereWolf"){
    
    
  }else if(subracegotten === "Elf"){
    
    if(subsubracegotten === "(Dark Elf)"){
      
    }else if(subsubracegotten === "(Seraph Elf)"){
      
    }
    
  }else if(subracegotten === "Dwarves"){

    if (tools[0] === "None"){
      tools[0] = "Choose one from Smith Tools, Brewers Tools, Masons Tools."
    }else{
      tools.push("Choose one from Smith Tools, Brewers Tools, Masons Tools.");
    }
    
  }


  return tools;
}

function backgroundToolssorter(b,too){
  let choosenbackground = b;
  let tools = too;

  if (choosenbackground === "Acolyte"){
    
  }else if(choosenbackground === "Artisan"){
    if (tools[0] === "None"){
      tools[0] = ("you gain tools that matches your background crafting profession")
    }else{tools.push("you gain tools that matches your background crafting profession");
  }
  }else if(choosenbackground === "Bounty-Hunter"){
    if (tools[0] === "None"){
      tools[0] = ("Thieves' Cant")
    }else{
      tools.push("Thieves' Cant");
    }
  }else if(choosenbackground === "Charlatan"){
    if (tools[0] === "None"){
      tools[0] = ("Disguise Kit")
      tools.push("Forgery Kit")
    }else{
      tools.push("Disguise Kit", "Forgery Kit");
    }
  }else if(choosenbackground === "City-Watch"){
    
  }else if(choosenbackground === "Commoner"){
    
  }else if(choosenbackground === "Criminal"){
    if (tools[0] === "None"){
      tools[0] = ("One Type Of Gaming Set")
      tools.push("Thieves’ Tools")
    }else{
      tools.push("One Type Of Gaming Set", "Thieves’ Tools");
    }
  }else if(choosenbackground === "Entertainer"){
    if (tools[0] === "None"){
      tools[0] = ("Disguise Kit")
      tools.push("One Type Of Musical Instrument")
    }else{
      tools.push("Disguise Kit", "One Type Of Musical Instrument");
    } 
  }else if(choosenbackground === "Far-Traveler"){
    if (tools[0] === "None"){
      tools[0] = ("Any One Musical Instrument Or Gaming Set Of Your Choice, Likely Something Native To Your Homeland")
    }else{
      tools.push("Any One Musical Instrument Or Gaming Set Of Your Choice, Likely Something Native To Your Homeland");
    }
  }else if(choosenbackground === "Urchin"){
    if (tools[0] === "None"){
      tools[0] = ("Disguise Kit")
      tools.push("Thieves’ Tools")
    }else{
      tools.push("Disguise Kit", "Thieves’ Tools");
    }
  }else if(choosenbackground === "Thug"){
    
  }else if(choosenbackground === "Spy"){
    if (tools[0] === "None"){
      tools[0] = ("Disguise Kit")
      tools.push("Thieves’ Tools")
    }else{
      tools.push("Disguise Kit", "Thieves’ Tools");
    }
  }else if(choosenbackground === "Soldier"){
    if (tools[0] === "None"){
      tools[0] = ("One Type Of Gaming Set")
      tools.push("Vehicles (Land)")
    }else{
      tools.push("One Type Of Gaming Set", "Vehicles (Land)");
    }
  }else if(choosenbackground === "Sailor"){
    if (tools[0] === "None"){
      tools[0] = ("Navigator’s Tools")
      tools.push("Vehicles (Water)")
    }else{
      tools.push("Navigator’s Tools", "Vehicles (Water)");
    }
  }else if(choosenbackground === "Sage"){
    tools.push("+any 2 of your choice");
  }
  
  return tools;
}

function techniqueprofsorter(r,c){
  let choosenrace = r;
  let choosenclass = c;
  let techprof = [];
  
  
  if (choosenrace === "Saiyan"){
      techprof.push("Perception") 
    if(choosenclass === "Fighter"){
      techprof.push("(Choose 2 Techniques From Acrobatics, Animal Handling, Athlectics, History, Insight, Intimidation, Perception And Survival)")
    }else if(choosenclass === "BattleMage"){
      techprof.push("(Choose 2 Techniques From Acrobatics, Carrying Capacity, Athlectics, Performance, Insight, Intimidation, Perception And Stealth)")
    }else if(choosenclass === "Assassin"){
      techprof.push("(Choose Four From Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight Of Hand And Stealth)")
    }else if(choosenclass === "Tank"){
      techprof.push("(Choose Two From Acrobatics, Animal Handling, Athlectics, History, Insight, Intimidation, Perception And Survival)")
    }

  }else if(choosenrace === "Shinobi"){
      techprof.push("Stealth")
    if(choosenclass === "Fighter"){
      techprof.push("(Choose 2 Techniques From Acrobatics, Animal Handling, Athlectics, History, Insight, Intimidation, Perception And Survival)")
    }else if(choosenclass === "BattleMage"){
      techprof.push("(Choose 2 Techniques From Acrobatics, Carrying Capacity, Athlectics, Performance, Insight, Intimidation, Perception And Stealth)")
    }else if(choosenclass === "Ranger"){
      techprof.push("(Choose 3 Techniques From Animal Handling, Athletics, Survival, Insight, Investigation, Perception, Nature And Stealth.)")
    }else if(choosenclass === "Priest"){
      techprof.push("(Choose 2 Techniques From History, Insight, Medicine, Persaution And Religoin)")
    }else if(choosenclass === "Assassin"){
      techprof.push("(Choose Four From Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight Of Hand And Stealth)")
    }else if(choosenclass === "Summoner"){
      techprof.push("(Choose 3 Techniques From Animal Handling, Athlectics, Survival, Insight, Investigation, Erception, Nature And Stealth.)")
    }else if(choosenclass === "Paladin"){
      techprof.push("(Choose 2 Techniques From Athletics, Insight, Intimidation, Medicine, Persuasion, And Religion)")
    }

  }else if(choosenrace === "Shinigami"){

    if(choosenclass === "Fighter"){
      techprof.push("(Choose 2 Techniques From Acrobatics, Animal Handling, Athlectics, History, Insight, Intimidation, Perception And Survival)")
    }else if(choosenclass === "Paladin"){
      techprof.push("(Choose 2 Techniques From Athletics, Insight, Intimidation, Medicine, Persuasion, And Religion)")
    }else if(choosenclass === "Assassin"){
      techprof.push("(Choose Four From Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight Of Hand And Stealth)")
    }else if(choosenclass === "Priest"){
      techprof.push("(Choose 2 Techniques From History, Insight, Medicine, Persaution And Religoin.)")
    }else if(choosenclass === "Tank"){
      techprof.push("(Choose Two From Acrobatics, Animal Handling, Athlectics, History, Insight, Intimidation, Perception And Survival)")
    }

  }else if(choosenrace === "Demon"){

    if(choosenclass === "Fighter"){
      techprof.push("(Choose 2 Techniques From Acrobatics, Animal Handling, Athlectics, History, Insight, Intimidation, Perception And Survival)")
    }else if(choosenclass === "BattleMage"){
      techprof.push("(Choose 2 Techniques From Acrobatics, Carrying Capacity, Athlectics, Performance, Insight, Intimidation, Perception And Stealth)")
    }else if(choosenclass === "Ranger"){
      techprof.push("(Choose 3 Techniques From Animal Handling, Athletics, Survival, Insight, Investigation, Perception, Nature And Stealth.)")
    }else if(choosenclass === "Mage"){
      techprof.push("(Choose 2 Techniques From Arcana, History, Insight, Investigation, Medicine, And Religion)")
    }else if(choosenclass === "Necromancer"){
      techprof.push("(Choose 2 Techniques From Arcana, History, Insight, Investigation, Medicine, And Religion)")
    }else if(choosenclass === "Assassin"){
      techprof.push("(Choose Four From Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight Of Hand And Stealth)")
    }else if(choosenclass === "Summoner"){
      techprof.push("(Choose 3 Techniques From Animal Handling, Athlectics, Survival, Insight, Investigation, Perception, Nature And Stealth.)")
    }else if(choosenclass === "Tank"){
      techprof.push("(Choose Two From Acrobatics, Animal Handling, Athlectics, History, Insight, Intimidation, Perception And Survival)")
    }else if(choosenclass === "Bard"){
      techprof.push("(Choose 3 Techniques From Animal Handling, Athlectics, Survival, Insight, Investigation, Perception, Nature And Stealth.)")
    }

  }else if(choosenrace === "Beast-Person"){

    if(choosenclass === "Fighter"){
      techprof.push("(Choose 2 Techniques From Acrobatics, Animal Handling, Athlectics, History, Insight, Intimidation, Perception And Survival)")
    }else if(choosenclass === "BattleMage"){
      techprof.push("(Choose 2 Techniques From Acrobatics, Carrying Capacity, Athlectics, Performance, Insight, Intimidation, Perception And Stealth)")
    }else if(choosenclass === "Ranger"){
      techprof.push("(Choose 3 Techniques From Animal Handling, Athletics, Survival, Insight, Investigation, Perception, Nature And Stealth)")
    }else if(choosenclass === "Mage"){
      techprof.push("(Choose 2 Techniques From Arcana, History, Insight, Investigation, Medicine, And Religion)")
    }else if(choosenclass === "Necromancer"){
      techprof.push("(Choose 2 Techniques From Arcana, History, Insight, Investigation, Medicine, And Religion)")
    }else if(choosenclass === "Assassin"){
      techprof.push("(Choose Four From Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight Of Hand And Stealth)")
    }else if(choosenclass === "Summoner"){
      techprof.push("(Choose 3 Techniques From Animal Handling, Athlectics, Survival, Insight, Investigation, Perception, Nature And Stealth)")
    }else if(choosenclass === "Tank"){
      techprof.push("(Choose Two From Acrobatics, Animal Handling, Athlectics, History, Insight, Intimidation, Perception And Survival)")
    }else if(choosenclass === "Bard"){
      techprof.push("(Choose 3 Techniques From Animal Handling, Athlectics, Survival, Insight, Investigation, Perception, Nature And Stealth)")
    }else if(choosenclass === "Priest"){
      techprof.push("(Choose 2 Techniques From History, Insight, Medicine, Persaution And Religoin)")
    }else if(choosenclass === "Paladin"){
      techprof.push("(Choose 2 Techniques From Athletics, Insight, Intimidation, Medicine, Persuasion, And Religion)")
    }
  }

  return techprof;
}

function techsubraceprofsorter(s,ssr,tec){
  let subracegotten = s;
  let subsubracegotten = ssr;
  let tech = tec;
  
  if(subracegotten === "Legendary Super Saiyan"){
    
  }else if(subracegotten === "Saiyan Royalty"){
    
  }else if(subracegotten === "Elite Level Saiyan"){

  }else if(subracegotten === "Low Level Saiyan"){
    
  }else if(subracegotten === "Uzumaki Clan"){
    
  }else if(subracegotten === "Senju Clan"){
    
  }else if(subracegotten === "Uchiha Clan"){
    
  }else if(subracegotten === "Hyuga Clan"){
    
  }else if(subracegotten === "Soul Reaper"){
    
  }else if(subracegotten === "Vizard"){
    
  }else if(subracegotten === "Hollow"){
    
  }else if(subracegotten === "Demon Mob"){
    
  }else if(subracegotten === "Ancient Demon"){
    
  }else if(subracegotten === "Demon Knight"){
    
  }else if(subracegotten === "Vampire"){
    
  }else if(subracegotten === "Fallen"){
    
  }else if(subracegotten === "Dragonoid"){
    tech.push("Perception");
  }else if(subracegotten === "Lizard Folk"){
    tech.push("Perception", "Stealth");
  }else if(subracegotten === "Werecat"){
    tech.push("Perception", "Stealth");
    if(subsubracegotten === "(Domestic Cat)"){
      
    }else if(subsubracegotten === "(Tiger)"){
      
    }else if(subsubracegotten === "(Lion)"){
      
    }else if(subsubracegotten === "(Panther)"){
      
    }else if(subsubracegotten === "(Cheetah)"){
      
    }else if(subsubracegotten === "(Leopard)"){
      
    }
    
  }else if(subracegotten === "WereWolf"){
    tech.push("Perception");
  }else if(subracegotten === "Elf"){
    
    if(subsubracegotten === "(Dark Elf)"){
      
    }else if(subsubracegotten === "(Seraph Elf)"){
      tech.push("Stealth");
    }
    
  }else if(subracegotten === "Dwarves"){
    
  }


  return tech;
}

function backgroundTechsorter(b,tec){
  let choosenbackground = b;
  let tech = tec;

  if (choosenbackground === "Acolyte"){
    tech.push("Insight", "Religion"); 
  }else if(choosenbackground === "Artisan"){
    tech.push("Gather Rumors", "Knowledge (Folklore)", "Persuade", "Profession");
  }else if(choosenbackground === "Bounty-Hunter"){
    tech.push("Intimidation", "Deception");
  }else if(choosenbackground === "Charlatan"){
    tech.push("Sleight Of Hand", "Deception");
  }else if(choosenbackground === "City-Watch"){
    tech.push("Athletics", "Insight");
  }else if(choosenbackground === "Commoner"){
    tech.push("Gather Rumors", "Knowledge (Folklore)", "Persuade", "Profession");
  }else if(choosenbackground === "Criminal"){
    tech.push("Stealth", "Deception");
  }else if(choosenbackground === "Entertainer"){
    tech.push("Acrobatics", "Performance");
  }else if(choosenbackground === "Far-Traveler"){
    tech.push("Perception", "Insight");
  }else if(choosenbackground === "Urchin"){
    tech.push("Sleight Of Hand", "Stealth");
  }else if(choosenbackground === "Thug"){
    tech.push("Gather Rumors", "Intimidation", "Spot", "Use Rope");
  }else if(choosenbackground === "Spy"){
    tech.push("Perception", "Stealth");
  }else if(choosenbackground === "Soldier"){
    tech.push("Athletics", "Intimidation");
  }else if(choosenbackground === "Sailor"){
    tech.push("Athletics", "Perception");
  }else if(choosenbackground === "Sage"){
    tech.push("Arcana", "History");
  }
  
  return tech;
}

function savingthrowprofsorter(r,c){
  let choosenrace = r;
  let choosenclass = c;
  let savingthrows = [];
  
  
  if (choosenrace === "Saiyan"){
      
    if(choosenclass === "Fighter"){
      savingthrows.push("Strength", "Constitution")
    }else if(choosenclass === "BattleMage"){
      savingthrows.push("Strength", "Dexterity")
    }else if(choosenclass === "Assassin"){
      savingthrows.push("Dexterity", "Intelligence")
    }else if(choosenclass === "Tank"){
      savingthrows.push("Strength", "Constitution")
    }

  }else if(choosenrace === "Shinobi"){

    if(choosenclass === "Fighter"){
      savingthrows.push("Strength", "Constitution")
    }else if(choosenclass === "BattleMage"){
      savingthrows.push("Strength", "Dexterity")
    }else if(choosenclass === "Ranger"){
      savingthrows.push("Strength", "Dexterity")
    }else if(choosenclass === "Priest"){
      savingthrows.push("Wisdom", "Charisma")
    }else if(choosenclass === "Assassin"){
      savingthrows.push("Dexterity", "Intelligence")
    }else if(choosenclass === "Summoner"){
      savingthrows.push("Intelligence", "Wisdom")
    }else if(choosenclass === "Paladin"){
      savingthrows.push("Charisma", "Wisdom")
    }

  }else if(choosenrace === "Shinigami"){

    if(choosenclass === "Fighter"){
      savingthrows.push("Strength", "Constitution")
    }else if(choosenclass === "Paladin"){
      savingthrows.push("Charisma", "Wisdom")
    }else if(choosenclass === "Assassin"){
      savingthrows.push("Dexterity", "Intelligence")
    }else if(choosenclass === "Priest"){
      savingthrows.push("Wisdom", "Charisma")
    }else if(choosenclass === "Tank"){
      savingthrows.push("Strength", "Constitution")
    }

  }else if(choosenrace === "Demon"){

    if(choosenclass === "Fighter"){
      savingthrows.push("Strength", "Constitution")
    }else if(choosenclass === "BattleMage"){
      savingthrows.push("Strength", "Dexterity")
    }else if(choosenclass === "Ranger"){
      savingthrows.push("Strength", "Dexterity")
    }else if(choosenclass === "Mage"){
      savingthrows.push("Intelligence", "Wisdom")
    }else if(choosenclass === "Necromancer"){
      savingthrows.push("Constitution", "Charisma")
    }else if(choosenclass === "Assassin"){
      savingthrows.push("Dexterity", "Intelligence")
    }else if(choosenclass === "Summoner"){
      savingthrows.push("Intelligence", "Wisdom")
    }else if(choosenclass === "Tank"){
      savingthrows.push("Strength", "Constitution")
    }else if(choosenclass === "Bard"){
      savingthrows.push("Dexterity", "Charisma")
    }

  }else if(choosenrace === "Beast-Person"){

    if(choosenclass === "Fighter"){
      savingthrows.push("Strength", "Constitution")
    }else if(choosenclass === "BattleMage"){
      savingthrows.push("Strength", "Dexterity")
    }else if(choosenclass === "Ranger"){
      savingthrows.push("Strength", "Dexterity")
    }else if(choosenclass === "Mage"){
      savingthrows.push("Intelligence", "Wisdom")
    }else if(choosenclass === "Necromancer"){
      savingthrows.push("Constitution", "Charisma")
    }else if(choosenclass === "Assassin"){
      savingthrows.push("Dexterity", "Intelligence")
    }else if(choosenclass === "Summoner"){
      savingthrows.push("Intelligence", "Wisdom")
    }else if(choosenclass === "Tank"){
      savingthrows.push("Strength", "Constitution")
    }else if(choosenclass === "Bard"){
      savingthrows.push("Dexterity", "Charisma")
    }else if(choosenclass === "Priest"){
      savingthrows.push("Wisdom", "Charisma")
    }else if(choosenclass === "Paladin"){
      savingthrows.push("Wisdom", "Charisma")
    }
  }

  return savingthrows;
}

function featuressorter(r){
  let choosenrace = r;
  let features = [];
  
  
  if (choosenrace === "Saiyan"){
    features.push("\nArmor Wearer: Your Speed Is Not Reduced By Wearing Heavy Armor(race)")

  }else if(choosenrace === "Shinobi"){

  }else if(choosenrace === "Shinigami"){

  }else if(choosenrace === "Demon"){
    features.push("\nHellish Rebuke: As A Demon You Have Resistance To Hell Fire Damage(race)","\nDemon Wings(race)")

  }else if(choosenrace === "Beast-Person"){

  }

  return features;
}

function featuresubraceprofsorter(s,ssr,fea){
  let subracegotten = s;
  let subsubracegotten = ssr;
  let features = fea;
  
  if(subracegotten === "Legendary Super Saiyan"){
    features.push("\nbulky body: your base walk speed is reduce by 5(subrace)\n");
  }else if(subracegotten === "Saiyan Royalty"){
    
  }else if(subracegotten === "Elite Level Saiyan"){

  }else if(subracegotten === "Low Level Saiyan"){
    
  }else if(subracegotten === "Uzumaki Clan"){
    features.push("\nElement Affinity: you can affinty to wind. At Lv5 You Can Unlock One More Basic Element Of Your Choice And Another At 15(subrace)");
  }else if(subracegotten === "Senju Clan"){
    features.push("\nElement Affinity: You Can Use All 5 Basic Elements And The Non Elemental Medical Ninjutsu(Ying)(subrace)");
  }else if(subracegotten === "Uchiha Clan"){
    features.push("\nElement Affinity: you can affinty to Fire. At Lv5 You Can Unlock Lightning Element And Another Basic Element At Lv15(subrace)","\nClan apperance: Your Hair Is Black, Eyes Are Black(subrace)","\nDojustu: Sharigan(subrace)");
  }else if(subracegotten === "Hyuga Clan"){
    features.push("\nDojustu: Byakugan(subrace)", "\nElement Affinity: you can affinty to ying and yang which allows you use the gentle fist and eight trigrams technique(subrace)");
  }else if(subracegotten === "Soul Reaper"){
    features.push("\nSpiritual Weapon: Zanpakutō(subrace)");
  }else if(subracegotten === "Vizard"){
    features.push("\nSpiritual Weapon: Zanpakutō(subrace)");
  }else if(subracegotten === "Hollow"){
    features.push("\nSpiritual Weapon: Zanpakutō(subrace)","\nhollow rank: when you are in below lv 20 you are regarded as an arracar and when you are in lv 20 and above you are regarded as an espada.","\nUnarmed Strike Buff: your unarmed strikes damages are punch 3 + Str Mod(max 5) bludgeoning and kick 3 + Str Mod(max 5) bludgeoning");
  }else if(subracegotten === "Demon Mob"){
    
  }else if(subracegotten === "Ancient Demon"){
    
  }else if(subracegotten === "Demon Knight"){
    
  }else if(subracegotten === "Vampire"){
    
  }else if(subracegotten === "Fallen"){
    
  }else if(subracegotten === "Dragonoid"){
    features.push("\nKeen Senses: You Gain The Perception Techinque(subrace)");
  }else if(subracegotten === "Lizard Folk"){
    features.push("\nKeen Senses: You Gain The Perception Techinque(subrace)", "\nStealth Machine: You Also Gain The Stealth Techinque(subrace)","\nReptilian DarkVision 60ft(subrace)","\nReptile mobility: You Can Climb Difficult Terrians With Your Base Speed, Rocky Terrians Do Not Affect You And You Have Movement Advantage In Caves(subrace)", "\nNatural weapon: You Have Sharp And Hard Claws And Fangs Which Are Always Out(subrace)");
  }else if(subracegotten === "Werecat"){
    features.push("\nKeen Senses: You Gain The Perception Techinque(subrace)", "\nStealth Machine: You Also Gain The Stealth Techinque(subrace)","\nNatural weapon: You Have Sharp And Hard Claws And Fangs Which You Can Sprout Out By Using An Action(subrace)");
    if(subsubracegotten === "(Domestic Cat)"){
      
    }else if(subsubracegotten === "(Tiger)"){
      
    }else if(subsubracegotten === "(Lion)"){
      
    }else if(subsubracegotten === "(Panther)"){
      
    }else if(subsubracegotten === "(Cheetah)"){
      
    }else if(subsubracegotten === "(Leopard)"){
      
    }
    
  }else if(subracegotten === "WereWolf"){
    features.push("\nKeen Senses: You Gain The Perception Techinque(subrace)","\nNatural weapon: You Have Sharp And Hard Claws And Fangs Which You Can Sprout Out By Using An Action(subrace)");
  }else if(subracegotten === "Elf"){
    features.push("\nKeen Senses: You Gain The Perception Techinque(subrace)","\nFey Ancestry: You Have Advantage On Saving Throws Against Being Charmed, And Magic Cant Put You To Sleep(subrace)","\nTrance: Elves Dont Need To Sleep, Instead They Meditate Deeply, Remaining Semiconscious, For 4 Hours A Day. After Resting This Way, You Gain Same Benefit As A Human Would With Long Rest Of 8 Hours(subrace)");
    if(subsubracegotten === "(Dark Elf)"){
      
    }else if(subsubracegotten === "(Seraph Elf)"){
      
    }
    
  }else if(subracegotten === "Dwarves"){
    features.push("\nArmor Wearer: Your Speed Is Not Reduced By Wearing Heavy Armor(subrace)","\nDwarven Combat Training: You Have Proficiency With Battle Axe, Handaxe, Light Hammer And War Hammer(subrace)","\nDarkvision: You Gain Darkvision Of 60ft(subrace)","\Craft Mastery: Any Ability Check You Make Due To Crafting, You Add Double The Modifier(subrace)");
  }


  return features;
}

// function backgroundfeaturessorter(b,fea){
//   let choosenbackground = b;
//   let feature = fea;

//   if (choosenbackground === "Acolyte"){
//     feature.push("Insight", "Religion"); 
//   }else if(choosenbackground === "Artisan"){
//     feature.push("Gather Rumors", "Knowledge (Folklore)", "Persuade", "Profession");
//   }else if(choosenbackground === "Bounty-Hunter"){
//     feature.push("Intimidation", "Deception");
//   }else if(choosenbackground === "Charlatan"){
//     feature.push("Sleight Of Hand", "Deception");
//   }else if(choosenbackground === "City-Watch"){
//     feature.push("Athletics", "Insight");
//   }else if(choosenbackground === "Commoner"){
//     feature.push("Gather Rumors", "Knowledge (Folklore)", "Persuade", "Profession");
//   }else if(choosenbackground === "Criminal"){
//     feature.push("Stealth", "Deception");
//   }else if(choosenbackground === "Entertainer"){
//     feature.push("Acrobatics", "Performance");
//   }else if(choosenbackground === "Far-Traveler"){
//     feature.push("Perception", "Insight");
//   }else if(choosenbackground === "Urchin"){
//     feature.push("Sleight Of Hand", "Stealth");
//   }else if(choosenbackground === "Thug"){
//     feature.push("Gather Rumors", "Intimidation", "Spot", "Use Rope");
//   }else if(choosenbackground === "Spy"){
//     feature.push("Perception", "Stealth");
//   }else if(choosenbackground === "Soldier"){
//     feature.push("Athletics", "Intimidation");
//   }else if(choosenbackground === "Sailor"){
//     feature.push("Athletics", "Perception");
//   }else if(choosenbackground === "Sage"){
//     feature.push("Arcana", "History");
//   }
  
//   return feature;
// }

function classperkssorter(c){
  
  let choosenclass = c;
  let perks = [];
  
  if(choosenclass === "Fighter"){
    perks.push("\nFIGHTING STYLE: Choose One Of The Following Options, Dueling, Great weapon Fighting, Protection, Dual Weilding", "\nSecond Wind")
  }else if(choosenclass === "BattleMage"){
    perks.push("\nUnarmored Defense","\nMartial Arts")
  }else if(choosenclass === "Ranger"){
    perks.push("\nFavored Enemy", "\nNatural Explorer", "\nWeapon Style: Choose from WAY OF THE ARROWS or WAY OF THE GUNS")
  }else if(choosenclass === "Mage"){
    perks.push("\nMage Archetype: choose from Clover Mage or Arcane Mage")
  }else if(choosenclass === "Necromancer"){
    perks.push("\nRitual Casting","\nSpellcasting Focus")
  }else if(choosenclass === "Assassin"){
    perks.push("\nSneak Attack","\nSwift Strike")
  }else if(choosenclass === "Summoner"){
    perks.push("\nLittle Summon: You Choose A Creature From The Creature List With A Lv Of 0.5 Or Below, If You Choose A Lv 0 Creature, You Get 3 Of Same Type.")
  }else if(choosenclass === "Tank"){
    perks.push("\nUnarmored Armor: Your AC Is 10 + Your Str Modifier", "\nAGRO CRY", "\nSuper Unarmored Defense: While You Are Wearing No Armor Or Sheilds, Physical Attacks Against You Are Decreased By 2.")
  }else if(choosenclass === "Bard"){
    
  }else if(choosenclass === "Priest"){
    perks.push("\nRitual Casting","\nSpellcasting Focus","\nDivine Domain: Choose One Domain Related To Your Deity: Knowledge, Life, Light, Nature, Tempest, Trickery, Arcana, Death Or War","\nDomain Spells")
  }else if(choosenclass === "Paladin"){
    perks.push("\nDivine Sense", "\nLay On Hands")
  }



  return perks;
}

function skillsorter(r,sr){
  let choosenrace = r;
  let givensubrace = sr;
  let allskills = [];
  
  let physicalskills = [
    "Smash",
    "Double punch",
    "Grab",
    "Head butt",
    "Balls Crusher",
    'Nipple squeezer',
    "Dive",
    "UpperCut",
    "Jab",
    "Hook",
    "Cross",
    'Elbow Stike',
    'Face Knee strike',
    "Rear leg push kick",
    "round kick body",
    "Double leg takedown",
    "Leg trip takedown",
    "Offensive strike using fist",
    "Offensive strike using elbow",
    "Defensive using fist",
    "Defensive using Elbow",
    "Rear neck choke",
    "Triangle Choke",
    "Spine Strike",
    "540 Kick",
    
  ]

  if (choosenrace === "Saiyan"){

    let saiyanskills = [
      "Ki Blast",
      "Finger Beam",
      "Energy Wave",
      "Kamehameha",
      "Bending Kamehameha",
      "Flying Kamehameha",
      "Twin dragon shot",
      "Max power Kamehameha",
      //"Super Kamehameha",
      "Angry Kamehameha",
      "Instant Kamehameha",
      "True Kamehameha",
      //"Limitbreaker Kamehameha",
      //"god Kamehameha",
      //"10x god Kamehameha",
      "Follow Up Blast",
      "Spirit shot",
      "Invisible eye blast",
      "Destructo Disc",
      //"Destructo Disc Hexa blade",
      "Explosive wave",
      "Super Explosive wave",
      "Spirit Bomb",
      "Fusion Spirit Bomb",
      "Large Spirit Bomb",
      "Instant Spirit Bomb",
      "Super Spirit Bomb",
      "Gravity bash",
      "Fullpower energy ball",
      "Transcendence",
      "Solar Flare",
      "Kaio-Ken",
      "Kaio-Ken x3",
      "Kaio-Ken x10",
      "Give me energy!",
      "Suspended Blast",
      "Energy Shield",
      "Energy Landmine",
      //"god Bind",
      "Cloning",
      "Healing",
      "Super god fist",
      "Pressure Point Attack",
      "Dragonthrow",
      "Full-Nelson",
      "Kaio-ken Finish",
      "Kaio-ken Attack",
      //"Meteor Combination",
      //"Meteor Smash",
      //"Now I'm Really Mad!",
      "lv1 Teleport",
      //"Can You Follow Me?",
      //"Celestial Whirlwind",
      "Wild Sense",
      "Tornado",
      "Afterimage Technique",
      "Fusion Dance",
      "Galick Gun",
      "Final Galick Cannon",
      "Final Burst Cannon",
      "Galick Blazer",

      "Double Galick Cannon",
      "Super Galick Blaster",
      "Galaxy Breaker",
      "Shine Shot",
      "Tail Slicer",
      "Super Explosive Wave",
      "Dirty Fireworks",
      "Lucora Gun",
      "Big Bang Attack",
      "Photon Bomber",
      "Final Flash",
      "Final Crash",
      "Final Impact",
      "Final Explosion",
      "Heat Dome Attack",
      "Spirit Sword",
      "Sphere of Destruction",
      "Full Power Energy Ball",
      "Final Blow",
      "Final Strike",
      "Ignite Strike",
      "Hand Crush",
      //"Elite Assault",
      //"Genocide Breaker",
      //"Amazing Impact",
      //"Wild Hunt",
      "Energy Rings",
      "Hellzone Grenade",
    ]

    for(let e = 0; e <= physicalskills.length; e++){
      saiyanskills.push(physicalskills[e]);
    }

    saiyanskills.pop();

    for(let i = 1; i <= 5; i++){
      
      let skillroll = d(1,saiyanskills.length);
      let finalskillroll = skillroll-1;
      allskills.push(saiyanskills[finalskillroll] + "\n");
      
      saiyanskills.splice(finalskillroll, 1);
      
    }
        
  }else if(choosenrace === "Shinobi"){

    let shinobiskills = [
      
    ]

    for(let e = 0; e <= physicalskills.length; e++){
      shinobiskills.push(physicalskills[e]);
    }

    shinobiskills.pop();

    for(let i = 1; i <= 5; i++){
      
      let skillroll = d(1,shinobiskills.length);
      let finalskillroll = skillroll-1;
      allskills.push(shinobiskills[finalskillroll] + "\n");
      
      shinobiskills.splice(finalskillroll, 1);
      
    }

  }else if(choosenrace === "Shinigami"){

    if (givensubrace === "Soul Reaper"){

      let shinigamiskills = [
      
        "Reverse Demon/Nullify (Hanki)",
        "White Crawl/Prostration (Hakufuku)",
        "Mirror Door/Gate (Kyoumon)",
        "Opening Revival (Keikatsu)",
        "Purple Tree (Shimoku)",
        "Luminous Healing (Meiyu)",
        "Kidō Cannon (Kidōhō)",
        "The Gate of Dragon Tail (Ryubi no Jomon)",
        "Standing Ovation (Sutandingu Obēshon)",
        "Five Support Cover (Goyōgai)",
        "Farewell Box (Hako Okuri)",
        "Green Paper Teleport",
        "Pyramid Seal Barrier",
        "Quad Burial Barrier (Shisō Kekkai)",
        "Quad Burial Barrier Release",
        "Inner World Barrier",
        "Adamantine Blast (Kongōbaku)",
        "Glacier Vapor Storm (Hyōga Seiran)",
        "Curtain Stripping (Noren Mekuri)",
        "Time-Out Drop (Tanma Otoshi)",
        "Forced Slumber (Inemuri)",
        "Ninety-Six Capitol Fire-Suspended Seal Destruction (Kyūjūrokkei Kakafūmetsu)",
        "Numbing Finger (Shibireyubi)",
        "Thousand-Coil White Snake (Sentan Hakuja)",
        "Hakudan Keppeki (White Severing Boundary Wall)",
        "Shiba Family Arts: Crane Flower Archery 2nd Style: Adhering Blossom (Kakaku Shahou Niban Kagizaki)",
        "Change Into Sand (Sebba)",
        "Flash Blossom (Senka)",
        "Way of Onmitsu, 3rd of the Shihō - Cicada (Onmitsu Shunpo Shihō no San - Utsusemi)",
        "Forbidden Spells ,Temporal Stasis (Jikanteishi)",
        "Forbidden Spells ,Spatial Displacement (Kūkanten'i)",
        "(AF) burning ball",
        "Hadou 1: Thrust (Shō)",
        "Hadou 4: White/Pale Lightning (Byakurai)",
        "Modified Hadou 4: Heavy-Strike Pale Lightning (Jūgeki Byakurai)",
        "Hadou 11: Bound Lightning (Tsuzuri Raiden)",
        "Hadou 12: Ambush Flare/Lain Fire (Fushibi)",
        "Hadou 31: Red Flame Cannon/Shot of Red Fire (Shakkahō)",
        "Hadou 32: Yellow Fire Flash (Ōkasen)",
        "Hadou 33: Blue Fire, Crash Down! (Sōkatsui)",
        "Hadou 48: Raging Light Fang (Gaki Rekkō)",
        "(AF) Hadou 50: Countering blast",
        "Hadou 54: Abolishing Flames (Haien)",
        "Hadou 58: Orchid Sky (Tenran)",
        "Hadou 63: Thunder Roar Cannon (Raikouhou)",
        "Hadou 73: Twin Lotus of Crashing Blue Fire/Twin Lotus Blue Fire, Crash Down (Sōren Sōkatsui)",
        "Hadou 88: Flying Dragon-Striking Heaven-Shaking Thunder Cannon (Hiryu Gekizoku Shinten Raiho)",
        "Hadou 90: Black Coffin (Kurohitsugi)",
        "Hadou 91: Thousand-Hand Bright Heaven Culling-Spear (Senjū Kōten Taihō)",
        "Hadou 96: Single Blade Cremation (Ittō Kasō)",
        "Bakudou 1: Restrain (Sai)",
        "Bakudou 4: Crawling Rope (Hainawa)",
        "Bakudou 8: Repulse (Seki)",
        "Bakudou 9: Strike (Geki)",
        "Bakudou 9: Disintegrating Circle (Hōrin)",
        "Bakudou 21: Red Smoke Escape (Sekienton)",
        "Bakudou 26: Curving Light (Kyakko)",
        "Bakudou 30: Beak-Piercing Triple Beam (Shtotsu Sansen)",
        "Bakudou 37: Suspending Star (Tsuriboshi)",
        "Bakudou 39: Arc Shield (Enkosen)",
        "Bakudou 44: Barrier (Sekisho)",
        "Bakudou 58: Grasp of the Chasing Sparrow (Kakushi Tsuijyaku)",
        "Bakudou 61: Six Rods of Light Prison (Rikujōkōrō)",
        "Bakudou 62: Hundred Steps Fence (Hyappo Rankan)",
        "Bakudou 63: Winding Binding Chains (Sajo Sabaku)",
        "Bakudou 73: Inverse Mountain Crystal (Tozanshō)",
        "Bakudou 75: Quintet of Iron Pillars (Gochu Tekkan)",
        "Bakudou 77: Soaring Net of the Heavens (Tentei Kuura)",
        "Bakudou 78: Hexagonal Barrier/Million Shield (Millon Escudo)",
        "Bakudou 79: Nine Sunlight Traps (Kuyō Shibari)",
        "Bakudou 81: Splitting Void (Danku)",
        "Bakudou 99, Part One: Restrain (Kin)",
        "Bakudou 99, Part Two: Ultimate Supression (Bankin)",
        "Soul Burial (Konsō)"

      ]
  
      for(let e = 0; e <= physicalskills.length; e++){
        shinigamiskills.push(physicalskills[e]);
      }
  
      shinigamiskills.pop();
  
      for(let i = 1; i <= 5; i++){
        
        let skillroll = d(1,shinigamiskills.length);
        let finalskillroll = skillroll-1;
        allskills.push(shinigamiskills[finalskillroll] + "\n");
        
        shinigamiskills.splice(finalskillroll, 1);
        
      }

    }else if (givensubrace === "Vizard"){

      let shinigamiskills = [
      
        "Reverse Demon/Nullify (Hanki)",
        "White Crawl/Prostration (Hakufuku)",
        "Mirror Door/Gate (Kyoumon)",
        "Opening Revival (Keikatsu)",
        "Purple Tree (Shimoku)",
        "Luminous Healing (Meiyu)",
        "Kidō Cannon (Kidōhō)",
        "The Gate of Dragon Tail (Ryubi no Jomon)",
        "Standing Ovation (Sutandingu Obēshon)",
        "Five Support Cover (Goyōgai)",
        "Farewell Box (Hako Okuri)",
        "Green Paper Teleport",
        "Pyramid Seal Barrier",
        "Quad Burial Barrier (Shisō Kekkai)",
        "Quad Burial Barrier Release",
        "Inner World Barrier",
        "Adamantine Blast (Kongōbaku)",
        "Glacier Vapor Storm (Hyōga Seiran)",
        "Curtain Stripping (Noren Mekuri)",
        "Time-Out Drop (Tanma Otoshi)",
        "Forced Slumber (Inemuri)",
        "Ninety-Six Capitol Fire-Suspended Seal Destruction (Kyūjūrokkei Kakafūmetsu)",
        "Numbing Finger (Shibireyubi)",
        "Thousand-Coil White Snake (Sentan Hakuja)",
        "Hakudan Keppeki (White Severing Boundary Wall)",
        "Shiba Family Arts: Crane Flower Archery 2nd Style: Adhering Blossom (Kakaku Shahou Niban Kagizaki)",
        "Change Into Sand (Sebba)",
        "Flash Blossom (Senka)",
        "Way of Onmitsu, 3rd of the Shihō - Cicada (Onmitsu Shunpo Shihō no San - Utsusemi)",
        "Forbidden Spells ,Temporal Stasis (Jikanteishi)",
        "Forbidden Spells ,Spatial Displacement (Kūkanten'i)",
        "(AF) burning ball",
        "Hadou 1: Thrust (Shō)",
        "Hadou 4: White/Pale Lightning (Byakurai)",
        "Modified Hadou 4: Heavy-Strike Pale Lightning (Jūgeki Byakurai)",
        "Hadou 11: Bound Lightning (Tsuzuri Raiden)",
        "Hadou 12: Ambush Flare/Lain Fire (Fushibi)",
        "Hadou 31: Red Flame Cannon/Shot of Red Fire (Shakkahō)",
        "Hadou 32: Yellow Fire Flash (Ōkasen)",
        "Hadou 33: Blue Fire, Crash Down! (Sōkatsui)",
        "Hadou 48: Raging Light Fang (Gaki Rekkō)",
        "(AF) Hadou 50: Countering blast",
        "Hadou 54: Abolishing Flames (Haien)",
        "Hadou 58: Orchid Sky (Tenran)",
        "Hadou 63: Thunder Roar Cannon (Raikouhou)",
        "Hadou 73: Twin Lotus of Crashing Blue Fire/Twin Lotus Blue Fire, Crash Down (Sōren Sōkatsui)",
        "Hadou 88: Flying Dragon-Striking Heaven-Shaking Thunder Cannon (Hiryu Gekizoku Shinten Raiho)",
        "Hadou 90: Black Coffin (Kurohitsugi)",
        "Hadou 91: Thousand-Hand Bright Heaven Culling-Spear (Senjū Kōten Taihō)",
        "Hadou 96: Single Blade Cremation (Ittō Kasō)",
        "Bakudou 1: Restrain (Sai)",
        "Bakudou 4: Crawling Rope (Hainawa)",
        "Bakudou 8: Repulse (Seki)",
        "Bakudou 9: Strike (Geki)",
        "Bakudou 9: Disintegrating Circle (Hōrin)",
        "Bakudou 21: Red Smoke Escape (Sekienton)",
        "Bakudou 26: Curving Light (Kyakko)",
        "Bakudou 30: Beak-Piercing Triple Beam (Shtotsu Sansen)",
        "Bakudou 37: Suspending Star (Tsuriboshi)",
        "Bakudou 39: Arc Shield (Enkosen)",
        "Bakudou 44: Barrier (Sekisho)",
        "Bakudou 58: Grasp of the Chasing Sparrow (Kakushi Tsuijyaku)",
        "Bakudou 61: Six Rods of Light Prison (Rikujōkōrō)",
        "Bakudou 62: Hundred Steps Fence (Hyappo Rankan)",
        "Bakudou 63: Winding Binding Chains (Sajo Sabaku)",
        "Bakudou 73: Inverse Mountain Crystal (Tozanshō)",
        "Bakudou 75: Quintet of Iron Pillars (Gochu Tekkan)",
        "Bakudou 77: Soaring Net of the Heavens (Tentei Kuura)",
        "Bakudou 78: Hexagonal Barrier/Million Shield (Millon Escudo)",
        "Bakudou 79: Nine Sunlight Traps (Kuyō Shibari)",
        "Bakudou 81: Splitting Void (Danku)",
        "Bakudou 99, Part One: Restrain (Kin)",
        "Bakudou 99, Part Two: Ultimate Supression (Bankin)",
        "Soul Burial (Konsō)",
        "Hollow Flash (Cero)",
        "Royal Hollow Flash (Gran Ray Cero)",
        "Heavy Performance Hollow Flash (Cero Doble)",
        "Black Hollow Flash (Cero Oscuras)",
        "United Hollow Flash (Cero Sincrético)",
        "Infinite Ammunition Hollow Flash (Cero Metralleta)",
        "The Gaze (Cero La Mirada)",
        "Beautiful Charlotte Chuhlhourne's Final Holy Wonderful Pretty Super Magnum Sexy Sexy Glamourous Cero (Byūtifuru Sharurotte Kūruhōnzu Fainaru Hōrī Wandafuru Puritī Sūpā Magunamu Sekushī Sekushī Guramarasu Sero)",
        "Negación",
        "Bara (Hollow Bullet)",
        "Hierro",
        "Sonic Twins (Gemelos Sonído)",
        "Loosening Void (Descorrer)",
        "Pesquisa",
        "Gonzui",
        "(AF) Focus"

      ]
  
      for(let e = 0; e <= physicalskills.length; e++){
        shinigamiskills.push(physicalskills[e]);
      }
  
      shinigamiskills.pop();
  
      for(let i = 1; i <= 5; i++){
        
        let skillroll = d(1,shinigamiskills.length);
        let finalskillroll = skillroll-1;
        allskills.push(shinigamiskills[finalskillroll] + "\n");
        
        shinigamiskills.splice(finalskillroll, 1);
        
      }

    }else if (givensubrace === "Hollow"){

      let shinigamiskills = [
      
        "Hollow Flash (Cero)",
        "Royal Hollow Flash (Gran Ray Cero)",
        "Heavy Performance Hollow Flash (Cero Doble)",
        "Black Hollow Flash (Cero Oscuras)",
        "United Hollow Flash (Cero Sincrético)",
        "Infinite Ammunition Hollow Flash (Cero Metralleta)",
        "The Gaze (Cero La Mirada)",
        "Beautiful Charlotte Chuhlhourne's Final Holy Wonderful Pretty Super Magnum Sexy Sexy Glamourous Cero (Byūtifuru Sharurotte Kūruhōnzu Fainaru Hōrī Wandafuru Puritī Sūpā Magunamu Sekushī Sekushī Guramarasu Sero)",
        "Negación",
        "Bara (Hollow Bullet)",
        "Hierro",
        "Sonic Twins (Gemelos Sonído)",
        "Loosening Void (Descorrer)",
        "Pesquisa",
        "Gonzui",
        "(AF) Focus"

      ]
  
      for(let e = 0; e <= physicalskills.length; e++){
        shinigamiskills.push(physicalskills[e]);
      }
  
      shinigamiskills.pop();
  
      for(let i = 1; i <= 5; i++){
        
        let skillroll = d(1,shinigamiskills.length);
        let finalskillroll = skillroll-1;
        allskills.push(shinigamiskills[finalskillroll] + "\n");
        
        shinigamiskills.splice(finalskillroll, 1);
        
      }

    }
    

  }else if(choosenrace === "Demon"){

    let demonskills = [

      "(Af)Crest Healing",
      "(Af)Summon Primal Fire Elemental",
      "(Af)Magic Shield",
      "(Af)Message",
      "(Af)Little Aura Pressure",
      "(Af)Full Aura Pressure",
      "(Af)Create Greater Item",
      "(Af) Earth Surge",
      "(Af)Invisibilty",
      "(Af)Grasp heart",
      "(Af)Dragon Lightning",
      "(Af)Create Death Knight",
      "(Af)Blood For Power Tribute",
      "(Af)Anti Life Cocoon",
      "(Af)Spatial Goblin Flute",
      "(Af)Summon Archangel Flame",
      "(Af)Summon Archangel Justice",
      "(Af)Summon Archangel Holy Smite",
      "(Af)Archangel Ritual",
      "(Af)Negative Burst",
      "(Af)Scarecrow",
      "(Af)Super snatch",
      "(Af)Positive Burst",
      "(Af)Holy Ray",
      "(Af)Poison",
      "(Af)Shock Wave",
      "(Af)Over Attack Resistance",
      "(Af)Confusion",
      "(Af)Charge Of Stalagmite",
      "(Af) Open Wounds",
      "(Af)Word Of Curse",
      "(Af)Blind Senses",
      "(Af)Speed-Demon",
      "(Af)Tribute",
      "(Af)Hell Flame",
      "(Af)Sealing Crystal",
      "(Af)Black Hole",
      "(Af)Appraisal Magic Item",
      "(Af)Alarm",
      "(Af)Reinforce Armor",
      "(Af)Super blood Gun",
      "(Af)Guard",
      "(Af) super Guard",
      "(Af)Twine Plant",
      "(Af)Magic Arrow",
      "(Af) Light Healing",
      "(Af)Curse Wound",
      "(Af)Counter Vanish",
      "(Af)Full Counter",
      "(Af)Skill Theft",
      "(Af)Ultimate Sacrifice",
      "(Af)Full Concentration",
      "(Af)Redo",
      "(Af)Super magic shot",
      "(Af)Pressure Nullification",
      "(Af) mana gain",
      "(Af)Kami Chigiri",
      "(Af)rise killing intent",
      "(Af)magic circle",
      "(Af)killing ground",
      "(Af)bleeding cofin",
      
    ]

    for(let e = 0; e <= physicalskills.length; e++){
      demonskills.push(physicalskills[e]);
    }

    demonskills.pop();

    for(let i = 1; i <= 5; i++){
      
      let skillroll = d(1,demonskills.length);
      let finalskillroll = skillroll-1;
      allskills.push(demonskills[finalskillroll] + "\n");
      
      demonskills.splice(finalskillroll, 1);
      
    }    

  }else if(choosenrace === "Beast-Person"){

    let beast_personskills = [
      
      "tier 0: control flames",
      "tier 0: create bonfire",
      "tier 0: druidcraft",
      "tier 0: frostbite",
      "tier 0: guidance",
      "tier 0: gust",
      "tier 0: infestation",
      "tier 0: magic stone",
      "tier 0: mending",
      "tier 0: mold earth",
      "tier 0: poison spray",
      "tier 0: primal savagery",
      "tier 0: produce flame",
      "tier 0: resistance",
      "tier 0: shape water",
      "tier 0: shillelagh",
      "tier 0: thorn whip",
      "tier 0: thunderclap",
      "(AF) beast frenzy",
      "(AF) beast call",
      "(AF) Sealing",
      "(AF) Slug Wall",
      "(AF) Ritual",      
      "(AF) Voodoo",      
      "(AF) Rennin Gakido",
      "(AF) Occular",
      "(AF) Mana Draining Jutsu",
      "(AF) regen",     
      "(AF) Tribute",
      "(AF) Equlibrium",
      "(AF) Reverse Equlibrium",
      "(AF) Cannengan",
      "(AF) Tailnigan",
      "(AF) Renzenko Shite",
      "(AF) Auto Defence",
      "(AF) Pain Day",
      "(AF) Body Switching",
      "(AF) Seal Breaker",
      "(AF) Fire Barrier",
      "(AF) Last Moment",
      "(AF) Red Blood Sacrifice",
      "(AF) Blue Mana Sacrifice",
      "(AF) Sacrificial Clone Ultimate Technique",
      "(AF) The Ruler",
      "(AF) Revolution",
      "(AF) Focus",     
      "(AF) Disintegrating Circle",
      "(AF) Air Sand Protective Wall",
      "(AF) Apinermal",
      "(AF) Azure Stream",

    ]

    for(let e = 0; e <= physicalskills.length; e++){
      beast_personskills.push(physicalskills[e]);
    }

    beast_personskills.pop();

    for(let i = 1; i <= 5; i++){
      
      let skillroll = d(1,beast_personskills.length);
      let finalskillroll = skillroll-1;
      allskills.push(beast_personskills[finalskillroll] + "\n");
      
      beast_personskills.splice(finalskillroll, 1);
      
    }

  }
  //let truefullheight = fullheight.toFixed(1);

  
  return allskills;
}

function freeslotssorter(r){
  let choosenrace = r;
  let free = [];
  
  
  if (choosenrace === "Saiyan"){
    free.push("Free slot\nFree slot\nFree slot\nLocked Slot(20xp to unlock)\nLocked Slot(lv 5 needed, 40xp to unlock)\nLocked Slot(lv 7 needed, 80xp to unlock)\nLocked Slot(lv 10 needed, 120xp to unlock)\nLocked Slot(lv 14 needed, 160xp to unlock)\nLocked Slot(lv 19 needed, 200xp to unlock)\nLocked Slot(lv 25 needed, 240xp to unlock)\nLocked Slot(lv 32 needed, 280xp to unlock)\nLocked Slot(lv 40 needed, 320xp to unlock)")

  }else if(choosenrace === "Shinobi"){
    free.push("Free slot\nFree slot\nFree slot\nFree slot\nFree slot\nLocked Slot(20xp to unlock)\nLocked Slot(lv 5 needed, 40xp to unlock)\nLocked Slot(lv 7 needed, 80xp to unlock)\nLocked Slot(lv 10 needed, 120xp to unlock)\nLocked Slot(lv 14 needed, 160xp to unlock)\nLocked Slot(lv 19 needed, 200xp to unlock)\nLocked Slot(lv 25 needed, 240xp to unlock)\nLocked Slot(lv 32 needed, 280xp to unlock)\nLocked Slot(lv 40 needed, 320xp to unlock)")

  }else if(choosenrace === "Shinigami"){
    free.push("Free slot\nFree slot\nFree slot\nLocked Slot(20xp to unlock)\nLocked Slot(lv 5 needed, 40xp to unlock)\nLocked Slot(lv 7 needed, 80xp to unlock)\nLocked Slot(lv 10 needed, 120xp to unlock)\nLocked Slot(lv 14 needed, 160xp to unlock)\nLocked Slot(lv 19 needed, 200xp to unlock)\nLocked Slot(lv 25 needed, 240xp to unlock)\nLocked Slot(lv 32 needed, 280xp to unlock)\nLocked Slot(lv 40 needed, 320xp to unlock)\nLocked Slot(lv 49 needed, 360xp to unlock)\nLocked Slot(lv 59 needed, 400xp to unlock)")

  }else if(choosenrace === "Demon"){
    free.push("Free slot\nFree slot\nFree slot\nFree slot\nFree slot\nLocked Slot(20xp to unlock)\nLocked Slot(lv 5 needed, 40xp to unlock)\nLocked Slot(lv 7 needed, 80xp to unlock)\nLocked Slot(lv 10 needed, 120xp to unlock)\nLocked Slot(lv 14 needed, 160xp to unlock)\nLocked Slot(lv 19 needed, 200xp to unlock)\nLocked Slot(lv 25 needed, 240xp to unlock)\nLocked Slot(lv 32 needed, 280xp to unlock)")

  }else if(choosenrace === "Beast-Person"){
    free.push("Free slot\nFree slot\nFree slot\nLocked Slot(20xp to unlock)\nLocked Slot(lv 5 needed, 40xp to unlock)\nLocked Slot(lv 7 needed, 80xp to unlock)\nLocked Slot(lv 10 needed, 120xp to unlock)\nLocked Slot(lv 14 needed, 160xp to unlock)\nLocked Slot(lv 19 needed, 200xp to unlock)\nLocked Slot(lv 25 needed, 240xp to unlock)\nLocked Slot(lv 32 needed, 280xp to unlock)\nLocked Slot(lv 40 needed, 320xp to unlock)\nLocked Slot(lv 49 needed, 360xp to unlock)\nLocked Slot(lv 59 needed, 400xp to unlock)")

  }

  return free;
}

function kkgsorter(s,ssr){
  let subracegotten = s;
  let subsubracegotten = ssr;
  let Kkg = [];
  
  if(subracegotten === "Legendary Super Saiyan"){
    Kkg.push("*Fly\n*Rage Madness\n*Ape Rage\n*World Color Changing Hand Blast\n")
  }else if(subracegotten === "Saiyan Royalty"){
    Kkg.push("*Fly\n*Royal Shine\n")
  }else if(subracegotten === "Elite Level Saiyan"){
    Kkg.push('*Fly\n*Monkey Restilence\n')
  }else if(subracegotten === "Low Level Saiyan"){
    Kkg.push("*Fly\n*Battle Cry\n")
  }else if(subracegotten === "Uzumaki Clan"){
    Kkg.push("*Superior Lifeforce\n*Superior Endurance\n*Generosity")
  }else if(subracegotten === "Senju Clan"){
    Kkg.push("*Superior Lifeforce\n*Superior Endurance\n*Generosity")
  }else if(subracegotten === "Uchiha Clan"){
    Kkg.push("*1 Dot Sharigan")
  }else if(subracegotten === "Hyuga Clan"){
    Kkg.push("*Chi Block")
  }else if(subracegotten === "Soul Reaper"){
    Kkg.push("*Fly\n*Flash Step\n*Shikai (Chant-{You Get To Choose Your Chant})")
  }else if(subracegotten === "Vizard"){
    Kkg.push("*Fly\n*Flash Step\n*Shikai (Chant-{You Get To Choose Your Chant})\n*Visored")
  }else if(subracegotten === "Hollow"){
    Kkg.push("*Fly\n*High-Speed Regeneration\n*Echoing Movement (Sonido)\n*Hollow Flash (Cero)")
  }else if(subracegotten === "Demon Mob"){
    Kkg.push("*Fly\n*Dark Regenration\n*High-Speed Regeneration")
  }else if(subracegotten === "Ancient Demon"){
    Kkg.push("*Fly\n*Dark Regenration")
  }else if(subracegotten === "Demon Knight"){
    Kkg.push("*Fly\n*Split\n*High-Speed Regeneration")
  }else if(subracegotten === "Vampire"){
    Kkg.push("*Fly\n*Familiar\n*Vamp Bite\n*High-Speed Regeneration")
  }else if(subracegotten === "Fallen"){
    Kkg.push("*Fly\n*Supreme Copy\n*High-Speed Regeneration")
  }else if(subracegotten === "Dragonoid"){
    Kkg.push("*Bite\n*Claw\n*Fly\n*Scaly Durability")
  }else if(subracegotten === "Lizard Folk"){
    Kkg.push("*Bite\n*Claw\n*Tail\n*Scaly Durability")
  }else if(subracegotten === "Werecat"){
    Kkg.push("*Bite\n*Claw\n*Swift Flexibility")
    if(subsubracegotten === "(Domestic Cat)"){
      
    }else if(subsubracegotten === "(Tiger)"){
      
    }else if(subsubracegotten === "(Lion)"){
      
    }else if(subsubracegotten === "(Panther)"){
      
    }else if(subsubracegotten === "(Cheetah)"){
      
    }else if(subsubracegotten === "(Leopard)"){
      
    }
    
  }else if(subracegotten === "WereWolf"){
    Kkg.push("*Bite\n*Claw\n*Pack Buff")
    if(subsubracegotten === "(Beta)"){
      
    }else{
      
    }
    
  }else if(subracegotten === "Elf"){
    Kkg.push("*Mana Farming\n*Field blend")
    if(subsubracegotten === "(Dark Elf)"){
      
    }else if(subsubracegotten === "(Seraph Elf)"){
      
    }
    
  }else if(subracegotten === "Dwarves"){
    Kkg.push("*----")
  }

  return Kkg;
}

function Raceinventorysorter(r){
  let choosenrace = r;
  let inv = [];
  
  
  if (choosenrace === "Saiyan"){
    inv.push("Saiyan body suit\nsaiyan armor(padded armor)\nsaiyan battle boots\n1x senzu bean\n")

  }else if(choosenrace === "Shinobi"){
    inv.push("Shinobi jump suit\nshinobi sandals\nkunia(10)\nGrey Shinobi head band(hidden leaf)\n")

  }else if(choosenrace === "Shinigami"){
    inv.push("Shingami robe\nshinigami sandals\nZampaktuo\n")

  }else if(choosenrace === "Demon"){
    inv.push("leather Jacket\nleather pants\nwooden sandals\ndemon seed")

  }else if(choosenrace === "Beast-Person"){
    inv.push("leather shirt\nleather pants\nwooden sandals\norb")

  }

  return inv;
}

function backgroundinventorysorter(b,inv){
  let choosenbackground = b;
  let inventory = inv;

  if (choosenbackground === "Acolyte"){
    inventory.push("Holy Symbol (A Gift To You When You Entered The Priesthood)\nA Prayer Book Or Prayer Wheel\n5 Sticks Of Incense\nVestments\nPouch(15 Gp)");
  }else if(choosenbackground === "Artisan"){
    inventory.push("Tool Kit (Appropriate To Your Craft)\nSmall Steel Mirror\nAutographed Or Otherwise Marked Masterwork Of Well-Known Artisan (Appropriate To Your Craft)\n39 Gp, And 5sp.");
  }else if(choosenbackground === "Bounty-Hunter"){
    inventory.push("Ink Bottle\nInk Pen\n5 Pages Of Parchment\n2 Hunting Traps\nThieves' Tools\n3 Trinkets From Previous Bounties\nBelt Pouch(10 Gold)");
  }else if(choosenbackground === "Charlatan"){
    inventory.push("Disguise Kit\nTools Of The Con Of Your Choice (Ten Stoppered Bottles Filled With Colored Liquid\nA Set Of Weighted Dice\nA Deck Of Marked Cards, Or A Signet Ring Of An Imaginary Duke)\nBelt Pouch(15 Gp)");
  }else if(choosenbackground === "City-Watch"){
    inventory.push("Uniform In The Style Of Your Unit And Indicative Of Your Rank\nA Horn With Which To Summon Help\nA Set Of Manacles\nPouch(10 Gp)");
  }else if(choosenbackground === "Commoner"){
    inventory.push("Iron Pot\nSpade\nFlask Of Rotgut\nTool Kit (Appropriate To Your Profession)\n14 Gp, And 4 Sp.");
  }else if(choosenbackground === "Criminal"){
    inventory.push("Crowbar\nA Set Of Dark Common Clothes Including A Hood\nBelt Pouch(15 Gp)");
  }else if(choosenbackground === "Entertainer"){
    inventory.push("Musical Instrument (One OF Your Choice)\nThe Favor Of An Admirer (Love Letter, Lock Of Hair, Or Trinket)\nA Costume\nBelt Pouch(15 Gp)");
  }else if(choosenbackground === "Far-Traveler"){
    inventory.push("One Set Of Traveler's Clothes\nAny One Musical Instrument Or Gaming Set You Are Proficient With\nPoorly Wrought Maps From Your Homeland That Depict Where You Are In Faerun\nA Small Piece Of Jewelry Worth 10 Gp In The Style Of Your Homeland's Craftsmanship\nPouch(5 Gp)");
  }else if(choosenbackground === "Urchin"){
    inventory.push("Knife(small)\nA Map Of The City You Grew Up In\nA Pet Mouse\nA Token To Remember Your Parents By\nBelt Pouch(10 Gp)");
  }else if(choosenbackground === "Thug"){
    inventory.push("Sap (Equivalent To Club)\nTattoo\nHalf Of A Set Of Manacles\n28 Gp, And 4 Sp.");
  }else if(choosenbackground === "Spy"){
    inventory.push("A Knife\nA Disguise Kit\nA Small Crumpled Note With Secrets You Stole (Could Be Battle Plans, Blackmail Material, Or Coordinates To An Unknown Place)\nSmall Pouch(15gp)");
  }else if(choosenbackground === "Soldier"){
    inventory.push("An Insignia Of Rank\nA Trophy Taken From A Fallen Enemy (A Dagger, Broken Blade, Or Piece Of A Banner)\nA Set Of Bone Dice Or Deck Of Cards\nBelt Pouch(10 Gp)");
  }else if(choosenbackground === "Sailor"){
    inventory.push("A Belaying Pin (Club)\nRope(Silk, 50 Feet)\nA Lucky Charm Such As A Rabbit Foot Or A Small Stone With A Hole In The Center\nBelt Pouch(10 Gp)");
  }else if(choosenbackground === "Sage"){
    inventory.push("Bottle Of Black Ink\nA Quill\nKnife(small)\nA Letter From A Dead Colleague Posing A Question You Have Not Yet Been Able To Answer\nBelt Pouch(10 Gp)");
  }
  
  return inventory;
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