//////////////////////////
    //physical hand to hand///
    //////////////////////////

function rodclick(n){
    let modal = document.getElementsByClassName("0")[0];
    let x = n.toString();

    if (x === "(AF) Smash"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Smash";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Punch)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 75";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when the target is on guard with a physical def skill with BP lower than your Str Stats, destroy that skill and give the target 4 bludgeoning dmg, the target must then make a str saving throw with DC equal to your Str Stat, on a failed target is knocked prone";  
    
    }else if (x === "(AF) Double punch"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Double punch";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Punch)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user gives a target one punch with their left hand and then another with the right hand in succession(or both punches with one hand), give a target your punch damage with the boost intact, if it hits you can repeat it.";  
    
    }else if (x === "(AF) Grab"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Grab";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: grapple";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str Dex";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "as an action you hold a target, the target rolls a str saving throw with your str Stat as DC, on a failed target is grappled by you. target can repeat the saving throw at the start of their turns. while you grappled a target you cant use skills or spell that requires movement";  

    }else if (x === "(AF) Head butt"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Head butt";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Head)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Dex";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "you hold a target by the head and hit them with your head, this wont work on targets bigger or smaller than you. you and the target both roll a str saving throw, the higher roll wins and the loser takes bludgeoning damage equal to the difference between the rolls";  

    }else if (x === "(AF) Balls Crusher"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Balls Crusher";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: illegal Strike (kick)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "you try to kick a target at its balls, this will only work if the target is male, the target makes a dex saving throw with your Dex stat as DC, on a failed, the target receives 4 bludgeoning damage and is stunned for 1d4 turns, on a success, you target grabs your leg giving him the effect of the grab skill against you and also ending your turn.";  
    
    }else if (x === "(AF) Nipple squeezer"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Nipple squeezer";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Grapple";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 65xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: concentration";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "you try to hold the targets nipples with both hands, if the target is female they can use a reaction to make a dex saving throw of DC 10, instantly slapping which gives you 5 slashing damage on a success but falls prone on a failed. else the target makes a dex saving throw with your Dex stat as DC, on a failed, the target receives 1 piercing damage, on a success, the effect ends. target can repeat saving throws at the start of their turn and taking the damage every time it fails.";  
    
    }else if (x === "(AF) Dive"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Dive";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Evade";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: SPD";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "dodge a ranged attack fired towards you with speed less than your speed (if attack doesnt have speed use attackers base spd). if the atk gives area of effect damage you take half damage";  
    
    }else if (x === "(AF) UpperCut"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) UpperCut";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Punch) ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction or bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      " this skill can be used as a reaction if you just neglect, evaded or block an opponents, or as a bonus action when you successfully used kick and punch in same turn in succession. you can then use punch, adding your dex mod to the damage and the target is stunned for their next turn";  

    }else if (x === "(AF) Jab"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Jab";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Punch)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Dex";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user directs the punch from the side to a target. deal punch damage to a target, if this skill is blocked or dodged, you can use a bonus action";  

    }else if (x === "(AF) Hook"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Hook";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Kick)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 65xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user gives target a kick from the side, target takes your kick damage + half your dex mod";  

    }else if (x === "(AF) Cross"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Cross";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (punch) ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 85xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "a straight forward punch towards a target, (BP = Str) target takes punch damage and speed is reduce by half for their next turn";  

    }else if (x === "(AF) Elbow Strike"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Elbow Strike";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Elbow) ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Dex";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user dodges or evade an attack and gives target a Strike from below to the chin with their elbow, when you successfully dodged, evade or blocked an attack and you are within melee range of the target, give the target half your punch damage, target is stunned for their next turn";  
    
    }else if (x === "(AF)Face Knee strike"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF)Face Knee strike";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Knee) ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "you target a stunned creature, same size or with only one step larger or smaller than you, you hold the creatures head, the creature must make a dex saving throw breaking the grip on a success and ending your turn and it been stunned, and on a success you use your knee to strike the target to the head, the target takes double your kick damage, the target then makes a CON saving throw with the damage has DC, being knocked unconscious on a failed";
    
    }else if (x === "(AF) Rear leg push kick"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Rear leg push kick";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Kick)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "if target dashes towards you the effect of this skill doubles, user uses rear foot to hit targets face or chest with full momentum dealing 4 bludgoining dmg, target gets pushed back '10 feet x your str Mod'(distance rules applies) backward in a straight line, if the target hits a solid object they take 4 bludgeoning and is stunned for their next turn if they still have hp left";
      
    }else if (x === "(AF) round kick body"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) round kick body";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Kick) ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user give a target a 90 degree side kick to their body, give the target your kick dmg, if your speed is higher than the target you can use another action against that target only";  
    
    }else if (x === "(AF) Double leg takedown"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Double leg takedown";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Takedown (Leg)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      " will only work on a target thats same size or a step bigger than you. if your Dex Stat is higher than the target str stats, you qucikly bend down and grab both the targets legs, making an attempt to trip them down, the target takes 3 bludgeoning dmg and both you and the target is knocked prone";
    
    }else if (x === "(AF) Leg trip takedown"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Leg trip takedown";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Takedown (Leg)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "will only work on a target thats same size or a step bigger than you. if your Dex Stat is higher than the target str stats and you have the target grappled, as a bonus action you quickly place one of your leg behind targets legs and shove him forward making an attempt to trip them down, the target takes 5 bludgeoning dmg and the target is knocked prone"; 
      
    }else if (x === "(AF) Offensive strike using fist"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Offensive strike using fist";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Grapple, Strike (punch)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when a target is prone, you quickly gets on top the target, siting on them, then you can use punch, the target must roll a Str saving throw at the start of every of their turn, if the target fails the throw they are still grappled by you can you can use punch in your turn";  

    }else if (x === "(AF) Offensive strike using elbow"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Offensive strike using elbow";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Counter, Strike (punch)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when you are prone and a target attempts a grapple on you or you are already grappled, you can use a reaction to give the target your punch damage + 1 and you break free";  

    }else if (x === "(AF) Defensive using fist"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Defensive using fist";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: block (Hands)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 135xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when you are prone and target tries to attack you with a unarmed physical atk, you can block that attack while prone";  

    }else if (x === "(AF) Defensive using Elbow"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Defensive using Elbow";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Block (Elbow)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when you are prone and target tries to attack you with a unarmed physical atk, you can block that attack while prone, you exit being prone and target falls prone.";
      
    }else if (x === "(AF) Rear neck choke"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Rear neck choke";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Kick) ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user give a target a 90 degree side kick to their body, give the target your kick dmg, if your speed is higher than the target you can use another action against that target only";  
    
    }else if (x === "(AF) Triangle Choke"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Triangle Choke";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Grapple (Hands)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when a target is prone or standing and is same or a step bigger or smaller than you. user can use this skill. user wraps their hands in a triangle shape with target head in the middle and the target is grappled. target must roll a str saving throw of DC equal to half users str score, the target can repeat the saving throw at the starts of their turns. when the target fails this saving throw equal to the number of targets str mod, the target is knocked unconscious. on a success the skill ends.";
      
    }else if (x === "(AF) Spine Strike"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Spine Strike";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (hand chop)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user quickly moves behind the target and strike their spine, the target is surprised, receiving 4 piercing damage and 4 internal bleed damage in targets turn";  
    
    }else if (x === "(AF) 540 Kick"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) 540 Kick";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike (Kick) ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Dex";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee (Dash 20 feet)";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "also known as inside turning kick, jump inside kick, and 'hyper' tornado kick is a jump kick move. It involves a rotation of approximately 540 degrees (although when performed correctly the performer has only done a spin of 360 degrees), when it hits a target you give the target double your kick damage, only give half damage if the target Dex score is higher than yours.";  
    
    }else if (x === "dd"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "dd";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";  
    
    }
    

    }


    //////////////////////////
    //physical weapon melee///
    //////////////////////////

function rodclicktwo(n){
  let modal = document.getElementsByClassName("1")[0];
  let x = n.toString();

  if (x === "(AF) Slant strike"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) Slant strike";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 30xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/1star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing, bludgeoning)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a simple skill striking diagonally giving target the weapon damage. as a reaction it can be use to def against vertical strike";  

  }else if (x === "(AF) Vertical strike"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) Vertical strike";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 30xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/1star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing, bludgeoning)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a simple skill striking vertically giving target the weapon damage. as a reaction it can be use to def against slant strike";
  
  }else if (x === "(AF) horizontal strike"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) horizontal strike";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 120xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/3star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing) ";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a simple skill striking horizontally giving target the weapon damage + half your str mod, if you have used slant strike(skill) and vertical strike(skill) within two of your previous turns and they hit, make it + your whole str mod.";  

  }else if (x === "(AF) Sword uppercut"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) Sword uppercut";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 70xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/2star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a simple sword skill which the user points the tip of the blade up and use it like giving an uppercut, if this hits give target half the weapon damage else if it doesn't, you can use kick on the target.";  

  }else if (x === "(AF) rage spike"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) rage spike";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 30xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/1star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a basic weak skill that leaps at the enemy and follows with an upward strike , dealing half the weapon dmg to the target, if it hits target is pushed back and falls prone.";  

  }else if (x === "(AF) sonic leap"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) sonic leap";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 60xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/2star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing), 2cp";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a charge type sword skill that dashes 5 to 10 feet toward the enemy to deal a downward strike dealing weapon damage + 1 and cant be neglected or blocked by a skill below BP3. 2cp to use (this skill is still regarded as a physical attack because the cp does not go to the attack but the feet of the user).";  
  
  }else if (x === "(AF) vertical arc"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) vertical arc";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike (2 hits)";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 70xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/2star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a simple sword skill creating a ‘v’ shape trajectory. This gives target the weapon damage at first for the diagonal first strike, after that hits, give target the weapon damage again for the second strike (this counts as 2 separate attack skills in one).";  

  }else if (x === "(AF) horizontal square"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) horizontal square";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike (4 hits)";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 140xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/3star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a mid level sword skill tracing the shape of a rhombus, give target the weapon damage when the first strike hit, after that give target half the weapon damage then another half the weapon damage then the weapon damage, each attack hits one after the other and stop if anyone is blocked (this counts as different separate attack skills in one)";  
  
  }else if (x === "(AF) vertical square"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) vertical square";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike (4 hits)";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 130xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/3star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a mid level sword skill tracing the shape of a Square, give target hlaf the weapon damage when the first strike hit, after that give target the weapon damage then another weapon damage then half the weapon damage, each attack hits one after the other and stop if anyone is blocked (this counts as different separate attack skills in one)";  

  }else if (x === "(AF) snake bite"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) snake bite";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike (2 hits)";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 110xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/3star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "two left and right swings that target the opponents weapon with the chance of breaking it. Break a weapon with durability less that your str mod + this weapons damage at the moment and below.";  
  
  }else if (x === "(AF) vorpal strike"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) vorpal strike";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 125xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/3star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing) property(heavy)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: 10 feet";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a heavy one handed sword skill with a reach that is double the length of the blade and has high attack power. Give target double this weapons attack, you cant use attack skill next turn.";  

  }else if (x === "(AF) savage fulcrum"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) savage fulcrum";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike (2 hits)";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 60xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/2star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: 2 turns";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a sword skill that trace number 4 in the air. Give target the weapon damage this turn and half the weapon damage at the start of targets next turn.";  
  
  }else if (x === "(AF) Serration wave"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) Serration wave";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk/Neg";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 40xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/1star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "a single hit area of effect one handed melee skill, a technique meant to impede movement barely dealing damage. Target cant use time skill next turn, if this skill was neglected, give target half of weapons damage"; 
  
  }else if (x === "(AF) howling octave"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) howling octave";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike (8 hits)";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 200xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/4star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: lv15, Weapon(slashing) ";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "five high speed continuous thrust then cut downward, upward, before another full force upward cut. Give target the weapon damage + half your str mod for the first attack, this first attack cant be neglected or blocked or dodged, then give target half the weapon damage reducing targets speed by half for next turn only, another half the weapon damage , then the weapon damage. each attack hits one after the other and stop if anyone is blocked(this counts as different separate attack skills in one)";  

  }else if (x === "(AF) sword block"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) sword block";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Def";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Block";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 40xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/2star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing) ";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 reaction";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "as a reaction, Block a weapon atk skill that deals damage equal or lower than your str mod + 2";  
  
  }else if (x === "(AF) tornado spin"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) tornado spin";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 180xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/4star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: lv10, Weapon(spear only)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "the user tosses the spear towards target with enough force that it spins like a tornado towards its target, dealing double the spear damage to the target, you can pay cp to add more force to the throw increasing the attack by the amount of cp added. this skill is still regarded as a physical attack because the cp is enhances the users body not the spear, max cp that can be added is equal to your Con Mod. the spear becomes unequipped after this skill."; 
  
  }else if (x === "(AF) spear block"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) spear block";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Def";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Block";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 30xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/1star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(spear only)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "user spins the spear around in front be him facing the direction where the attack is coming from, you receive no damage from the first physical attack in next targets turn only.";  

  }else if (x === "(AF) 360 air manoeuver"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) 360 air manoeuver";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 40xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/1star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(piercing)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee(15feet)";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "User dashes 5 to 15 feet towards the target, hen jumps into the air, above the target and lands behind them then piercing then after landing, if the target as more speed than you or has a higher DEX stat than user, this skill can be neglected if not it cant, deal the weapon damage + half your dex mod ."; 

  }else if (x === "(AF) Stab"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) Stab";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 70xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/2star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(piercing)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "user stabs target with the weapon, if the attack hits, Does piercing damage according to the difference btw the weapon damage and amount of cp your target has, max of you str mod,then you can pay 2cp to pull the weapon out and have it still equipped or don't pay and leave it there, the weapon becomes unequipped and as a reaction the target can pay 2 cp to equip it, giving the target 2 internal piercing dmg. the target receives 1dmg for each of their end turns the weapon stays inside them.";  

  }else if (x === "(AF) Throw"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) Throw";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 130xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/3star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(piercing), property(throw)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: 30feet(if weapon doesnt already have)";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "user tosses their weapon towards target, if it hits Does the weapon piercing damage to target + Str mod. By using this skill, the weapon is unequipped, as a reaction target can pay 2cp to pull the weapon out giving the target internal piercing dmg equal to your str mod with the max of 5 and have it equipped or don't pay and leave it there. the target receives 1dmg for each of their end turns the weapon stays inside them";  

  }else if (x === "(AF) planetary slash"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) planetary slash";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 150xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/3star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing) (spear only)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: concentration up to user choice";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "user rotates the spear around gathering more force and then deal great damage to target, when this skill is in play you cant use any other skills, you can skip as much turn as you want, the attack damage is 3 slashing damage and increases by 1 per turn skipped (skipping does not take hp and does not give cp), you can then choose not to skip in a turn and use that turn's action to attack, deal the weapons damage x half the amount of turns skipped, if the damage hit and exceeds the target CON Stat, the target loses a limb(your choice)."; 
    
  }else if (x === "(AF) wind cut"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) wind cut";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 35xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/1star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: 5 to 30 feet";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "user slashes the air and forms it forms a curved blade made from air going toward the target, dealing dmg equal to the weapons slashing dmg.";  

  }else if (x === "(AF) timid slice"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) timid slice";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 140xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/3star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(slashing)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee(15 feet)";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "when target is prone and within range, user dashes to target placing one foot on the targets limb and and makes an attempt of slicing it off with the weapon, the target must make a str saving throw using user str mod has DC, on a failed, the target takes the weapon slashing damage and 5 slashing damage (damage from wound), on a success, the target only takes the first damage and has no limbs cut off.";  
  
  }else if (x === "(AF) multi Sword Block"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "dd";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Def";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: block";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 135xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/3star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "this skill enables you to use sword block as much times in a single turn as your DEX mod (only if you possess sword block in your card, even if it has been used).";  

  }else if (x === "(AF) Clobber"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) Clobber";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Strike";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 70xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/2star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Weapon(bludgeoning)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "user raises the weapon straight above and brings it down with force to target. deal weapon damage + str mod to the target";  
  
  }else if (x === "(AF) Shield Bash"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) Shield Bash";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Rush";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 120xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/3star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Shield(Equipped)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: movement range";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "User uses the shield to shove a target within range, sending an enemy flying. dealing 6 bludgeoning damage, the target can make a str saving throw of DC 12, on a fail, they are knocked back 40ft away to the opposite direction. ";  
  
  }else if (x === "(AF) Shield Wall"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "(AF) Shield Wall";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Def";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Combination Defense";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 150xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/3star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Shield(Equipped)";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: 5ft";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "creates a wall of shields. when they are two or more people 5ft of each other that have shield equipped. this skill makes all those targets to line up in a straight line. all targets affect gain resistance to Phy and charged damage caused by attacks. attacks or users cant pass through that line until the formation is broken. all targets affected are cant use action or reactions unless they use a action to break free.";  
  
  }else if (x === "dd"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "dd";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Wave";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 50xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/2star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Str";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "";  
  
  }else if (x === "dd"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "dd";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Wave";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 50xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/2star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Str";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "";  
  
  }else if (x === "dd"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "dd";
    let category = document.getElementById("skill_categorytwo").innerHTML = "Category: Atk";
    let subcategory = document.getElementById("skill_subcategorytwo").innerHTML = "Sub-Category: Wave";
    let xprequired = document.getElementById("skill_xprequiredtwo").innerHTML = "Xp required: 50xp";
    let rank = document.getElementById("skill_imagetwo").src = "img/2star.png";
    let skill_requirements = document.getElementById("skill_requirementstwo").innerHTML = "Requirements: Str";
    let skill_performingtime = document.getElementById("skill_performingtimetwo").innerHTML = "Preforming time: 1 action";
    let skill_range = document.getElementById("skill_rangetwo").innerHTML = "Range: melee";
    let skill_duration = document.getElementById("skill_durationtwo").innerHTML = "Duration: Instantaneous";
    let skill_details = document.getElementById("skill_detailstwo").innerHTML = 
    "";  
  
  }
  

  }



  //////////////////////////
    //physical weapon range///
    //////////////////////////





  function rodclickthree(n){
    let modal = document.getElementsByClassName("2")[0];
    let x = n.toString();
  
    if (x === "(AF) Straight shot"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Straight shot";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Shot";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 20xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ammunition(1), weapon type(Gun, Bow), weapon(piercing, bludgeoning) ";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: weapon range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user fires a shot directly at the target, dealing weapon damage";  
    
    }else if (x === "(AF) Dance shot"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Dance shot";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Shot (2 hit strike)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ammunition(1 each), weapon type(dual Guns, Bow), weapon(piercing, bludgeoning), 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when user is equipped with dual guns or user loads two arrows in their bow. user fires two set of ammunition towards the target, the ammunition twist around each other in the form of water waves clinging to each other, when they hit the target the ammunition continue moving till it digs deep in targets body, dealing double the weapon damage. uses 4cp (this attack remains a physical attack cause the cp doesn't follow the ammunition but just used on force to fire).";  
    
    }else if (x === "(AF) Burst shot"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Burst shot";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Shot buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ammunition(1 each), weapon type(dual Guns, Bow), weapon(piercing, bludgeoning), 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when user is equipped with dual guns or user loads two arrows in their bow. user fires two set of ammunition towards the target, the ammunition twist around each other in the form of water waves clinging to each other, when they hit the target the ammunition continue moving till it digs deep in targets body, dealing double the weapon damage. uses 4cp (this attack remains a physical attack cause the cp doesn't follow the ammunition but just used on force to fire).";  
    
    }elbow
    
  
    }

    const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
    
    console.log(fruits.splice(1, 3))