function rodclick(n){
    let modal = document.getElementsByClassName("0")[0];
    let x = n.toString();

    if (x === "Ki Blast"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Ki Blast";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Blast";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 20xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 1 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user blasts a small ball made of ki towards a target dealing 2 force damage on a hit";  
    
    }else if (x === "Finger Beam"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Finger Beam";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Beam";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user holds out their index finger and releases an energy beam from their fingertip and fires it towards a target dealing 4 piercing damage, this attack is usually fast, a target within 100ft of you have to roll a Dex saving throw of DC 15, on a fail the target is unable to react to this skill using a reaction.";  
    
    }else if (x === "Energy Wave"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Energy Wave";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 45xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 600ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user sends a wave of ki towards a target, dealing 5 bludgeoning damage on a hit.";  
    
    }else if (x === "Kamehameha"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Kamehameha";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 400ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: , Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A powerful Ki blast fired with two hands after concentrating a large amount of Ki, you can concentrate more energy into the attack for using a turn to charge the attack, for each turn you charge this attack you pay 2cp and the attack damage increases by 3 force damage, you must charge this attack for at least 2 turns before using a bonus action in your next turn or as a reaction in the start of the targets to attack. you can only charge this attack at max of 5 turns.";  
    
    }else if (x === "Bending Kamehameha"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bending Kamehameha";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Trick";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 400ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A version of the Kamehameha for which the user can change the course, allowing the user to surprise his or her opponent. when you just used a kamehameha attack and it was evaded or dodged, as a reaction with this skill you can change the direction of the attack to another target or same target as far as the targets are within range.";  
    
    }else if (x === "Flying Kamehameha"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Flying Kamehameha";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 60xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 400ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "An aerial version of the Kamehameha. this is a kamehameha used while the user is on fly or above ground level to target. it takes the effect of a normal kamehameha.";  
    
    }else if (x === "Twin dragon shot"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Twin dragon shot";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 300ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 of users end turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A double energy sphere controlled version of the Kamehameha, user fires two kamehameha like waves with both hands, the beams move 40ft per turn(moves starts immediately this skill is used) and can last until it hits a target or for its duration until then it gets extinguished. when it hits a target, the target receives 5 force damage ";  
    
    }else if (x === "Max power Kamehameha"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Max power Kamehameha";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 500ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A utilization of the Kamehameha in which the user uses their max power, you can concentrate more energy into the attack for using a turn to charge the attack, for each turn you charge this attack you pay 4cp and the attack damage increases by 6 force damage, you must charge this attack for at least 2 turns before using a bonus action in your next turn or as a reaction in the start of the targets turn to attack. you can only charge this attack at max of 5 turns.";  
    
    }else if (x === "Super Kamehameha"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Super Kamehameha";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp, super saiyan 1,2,3,4,5";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 500ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "An advanced and more powerful version of the Kamehameha, this Kamehameha is yellow in colour instead of blue. you can concentrate more energy into the attack for using a turn to charge the attack, for each turn you charge this attack you pay 5cp and the attack damage increases by 7 force damage, you must charge this attack for at least 2 turns before using a bonus action in your next turn or as a reaction in the start of the targets turn to attack. you can only charge this attack at max of 4 turns.";  
    
    }else if (x === "Angry Kamehameha"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Angry Kamehameha";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 60xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A one-handed version of the Kamehameha, unlike the other version, this kamehameha does less damage and takes less time to charge, with an action you fire this attack towards a target, if it hits, it deals 5 force damage to target and you can use a bonus action to dash towards a target with your original speed";  
    
    }else if (x === "Instant Kamehameha"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Instant Kamehameha";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Teleport";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 600ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A combination of the Instant Transmission and Super Kamehameha, while the super kamehameha is active, at the point of attack, you can use this skill as a bonus action which lets you teleport with the kamehameha and appear in front of the target before firing. target has to roll a Dex saving throw of DC 15 + your Dex mod, on a failed save, the kamehameha cant be reacted to or neglected";  
    
    }else if (x === "True Kamehameha"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "True Kamehameha";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 1 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 700ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A more powerful version of the Super Kamehameha, you can concentrate more energy into the attack for using a turn to charge the attack, for each turn you charge this attack you pay 7cp and the attack damage increases by 10 force damage, you must charge this attack for at least 1 turn before using a bonus action in your next turn or as a reaction in the start of the targets turn to attack. you can only charge this attack at max of 5 turns.";  
    
    }else if (x === "Limitbreaker Kamehameha"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Limitbreaker Kamehameha";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 160xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp, atleast super saiyan 1";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 700ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A more powerful version of the Super Kamehameha. you can concentrate more energy into the attack for using a turn to charge the attack, for each turn you charge this attack you pay 6cp and the attack damage increases by 9 force damage, you must charge this attack for at least 2 turns before using a bonus action in your next turn or as a reaction in the start of the targets turn to attack. you can only charge this attack at max of 4 turns. when the targets defense successfully blocks this attack with a def skill or spell, user turns into a mode if not already in a mode, then amps up this attack damage, paying cp and adding damage as normal like charging and the attack tries again as if the attack its a new attack.";  
    
    }else if (x === "god Kamehameha"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "god Kamehameha";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp, atleast super saiyan god";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 300ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A powerful variation of the Kamehameha used when in super saiyan god mode. you can concentrate more energy into the attack for using a turn to charge the attack, for each turn you charge this attack you pay 2cp and the attack damage increases by 4 force damage, you must charge this attack for at least 2 turns before using a bonus action in your next turn or as a reaction in the start of the targets turn to attack. you can only charge this attack at max of 5 turns.";  
    
    }else if (x === "10x god Kamehameha"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "10x god Kamehameha";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 180xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp, atleast super saiyan god super saiyan 1";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 500ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A powerful variation of the Kamehameha used when in super saiyan god super saiyan 1 mode. you can concentrate more energy into the attack for using a turn to charge the attack, for each turn you charge this attack you pay 4cp and the attack damage increases by 8 force damage, you must charge this attack for at least 2 turns before using a bonus action in your next turn or as a reaction in the start of the targets turn to attack. you can only charge this attack at max of 5 turns.";  
    
    }else if (x === "Follow Up Blast"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Follow Up Blast";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combination (wave and blasts)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: ";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "after using a wave skill, and you have ki blast in your skill set thats not yet used, as a bonus action you can use that ki blast now and can repeat it up to 3 times one after the other, you pay cp for each ki blast plus the cp for using this skill";  
    
    }else if (x === "Spirit shot"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Spirit shot";
      let category = document.getElementById("skill_category").innerHTML = "Category: Phy/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: blast";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 60xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A two-handed energy technique in which the user stretches their arms out and blows the opponent(s) away with dual Kiai blasts. Kiai is a technique where the user affects the air currents around him with ki to produce powerful shockwaves in order to strike the opponent at mid range. when it hits, deals 3 bludgeoning damage to target and if target Str score is less than 10 + your Str mod, target is pushed 30ft backward unless it is blocked and target is only pushed 10ft back";  
    
    }else if (x === "Invisible eye blast"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Invisible eye blast";
      let category = document.getElementById("skill_category").innerHTML = "Category: Phy/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Blast";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "a Kiai technique shot from the eyes. when it hits, deals 6 bludgeoning damage to target and if target Str score is less than 13 + your Str mod, target is pushed 50ft backward unless it is blocked and target is only pushed 30ft back";  
    
    }else if (x === "Destructo Disc"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Destructo Disc";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Disc";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, 2 actions";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "a razor-sharp disc of Ki that can slice through almost any substance, this attack cant be blocked and bypasses armor class below 25. when it hits it deals 5 slashing damage";  
    
    }else if (x === "Destructo Disc Hexa blade"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Destructo Disc Hexa blade";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Disc";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 145xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 15 Cp, Destructo Disc in Card";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, 2 end turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user fires what appears to be a single Destructo Disc, which ends up splitting into six separate discs to home in on the foe multiple times. when this skill is sent, it can target one foe or multiple foes, each retaining the effect of a Destructo Disc";  
    
    }else if (x === "Explosive wave"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Explosive wave";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft Circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A technique where the user bursts out ki from all over their body in order to repel the opponents around them, dealing 5 force damage to all target within range";  
    
    }else if (x === "Super Explosive wave"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Super Explosive wave";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 160xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft Circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, up to 2 of users turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A powerful energy explosion attack and is a more powerful version of the Explosive Wave. the waves move 25ft both all directions in your first turn and completes its range in the second turn. dealing 8 force damage to all target within range";  
    
    }else if (x === "Spirit Bomb"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Spirit Bomb";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Charged Sphere";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, until it hits a target or is dodged";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Users gather huge amounts of energy from all chosen surrounding life forms and inanimate objects to conduct that energy into a massive sphere of astounding destructive power. this attack is 5ft by 5ft in size, you can concentrate more energy into the attack from your surroundings, for using a turn to charge the attack, each turn this attack gains 3cp, the attack damage increases by 3 radiant damage and its size increases by 5ft in height and width, you must charge this attack for at least 2 turns before using an action in your next turn after charge to complete the attack sending it towards a target. the attack moves 30ft every turn until it hits a target following a straight line. you can only charge this attack at max of 5 turns";  
    
    }else if (x === "Fusion Spirit Bomb"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fusion Spirit Bomb";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Tag Team";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 0 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A normal Spirit Bomb formed with the energy gathered and then granted to someone else. when a spirit bomb ready, instead of throwing it at a target, with a bonus you can pass this attack to an ally within 50ft."

    }else if (x === "Large Spirit Bomb"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Large Spirit Bomb";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Charged Sphere";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8 Cp, fly active";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, until it hits a target or is dodged";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A larger and more powerful version of the Spirit Bomb, in which user stores the energy in the form of a giant light blue energy sphere in the sky. this attack is 10ft by 10ft in size. while on fly, you can concentrate more energy into the attack from your surroundings, for using a turn to charge the attack, each turn this attack gains 5cp, the attack damage increases by 5 radiant damage and its size increases by 10ft in height and width, you must charge this attack for at least 2 turns before using an action in your next turn after charge to complete the attack sending it towards a target. the attack moves 30ft every turn until it hits a target following a straight line. you can only charge this attack at max of 6 turns";  
    
    }else if (x === "Instant Spirit Bomb"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Instant Spirit Bomb";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Teleport";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 600ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A combination of the Instant Transmission and Spirit Bomb, while the Spirit Bomb is active, at the point of attack, you can use this skill as a bonus action which lets you teleport with the Spirit Bomb and appear in front of the target before firing. target has to roll a Dex saving throw of DC 15 + your Dex mod, on a failed save, the Spirit Bomb cant be reacted to or neglected";  
    
    }else if (x === "Super Spirit Bomb"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Super Spirit Bomb";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Charged Sphere";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 250xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 10 Cp, fly active";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 3 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, until it hits a target or is dodged";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "a larger and more powerful version of the Large Spirit Bomb, which is directly powered by the energy of the living beings and User needs them to raise their hands to accumulate their energy. this attack is 10ft by 10ft in size. while on fly, you concentrate more energy into the attack from your people, for using a turn to charge the attack, you roll a d10 die + your CHA Mod (the die represents the people who raised their hands in millions i.e rolling 5 means 5 million people raised their hands this turn), the attack damage(Radiant damage) is increased by the amount rolled and its size increases by 15ft in height and width, you must charge this attack for at least 3 turns before using an action in your next turn after charge to complete the attack sending it towards a target. the attack moves 30ft every turn until it hits a target following a straight line. you can only charge this attack at max of 6 turns";  
    
    }else if (x === "Gravity bash"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Gravity bash";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Rush Attack";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Dash reach";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User creates an energy sphere, which he holds in his hand, and charges at his opponent to hit them with it. with an action users creates two energy balls in both hands, each having 3 force damage each. user can then dash towards a target in range and use each hand to attack the target on at a time";  
    
    }else if (x === "Charged energy ball"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Charged energy ball";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Charged Sphere";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 160xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user creates a sphere of energy and then fires it at the opponent, inflicting greater damage than the normal energy sphere. on hit, deals 7 force damage to a target within range";  
    
    }else if (x === "Transcendence"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Transcendence";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 60xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Dash range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "only when your base walk speed is double the targets speed, User moves around the opponent, surrounds his opponent with four energy spheres then blasting them away dealing 7 force damage + 5 fire damage. ";  
    
    }else if (x === "Solar Flare"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Solar Flare";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user places their hands close to the center of their face with the fingers spread toward their eyes. The user then calls out the name of the technique, which provokes a white light to fire out and blind everything watching except the user, since they are projecting the light. a targets in range must roll a CON Saving throw of DC 13, on a failed, target is stunned for their next turn and blinded for 2 of their turns.";  
    
    }else if (x === "Kaio-Ken"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Kaio-Ken";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2hp every end turn ";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: ---";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A technique that multiplies the user's ki for a 'heart beat' - thus increasing his/her power and speed and enabling him/her to inflict serious damage to opponents who are considerably stronger than him/her. However, the downside of the Kaio-ken is that it takes a heavy toll on the user's body, making them more vulnerable to enemy attacks. While in the state, the user's aura color becomes crimson. The technique requires the use of ki control to handle it properly.<br><br> while in this state all your attack damage skills and speed are multiplied by 1.5. you lose 2hp every of your end turns excluding this turn while in this state, you can turn this off with an action";  
    
    }else if (x === "Kaio-Ken x3"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Kaio-Ken x3";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4hp every end turn ";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: ---";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "this retains all effects of Kaio-Ken except, while in this state all your attack damage skills and speed are multiplied by 2. you lose 4hp every of your end turns excluding this turn while in this state, you can turn this off with an action";  
    
    }else if (x === "Kaio-Ken x10"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Kaio-Ken x10";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 300xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8hp every end turn ";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: ---";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "this retains all effects of Kaio-Ken except, while in this state all your attack damage skills and speed are multiplied by 3. you lose 8hp every of your end turns excluding this turn while in this state, you can turn this off with an action";  
    
    }else if (x === "Give me energy!"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Give me energy!";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Recovery";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 60xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: --";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Lifting up his hands towards the sky, user concentrates on drawing a massive amount of energy above his head. However, it takes time to draw it in, leading User to be wide open and stuck in place for several seconds. for each turn you use to concentrate you gain 2cp. you can only do this for 4 turns";  
    
    }else if (x === "Suspended Blast"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Suspended Blast";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Blast";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, until estinguish";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The one handed energy attack, the attack can be suspended at the front of users palm until the user wishes to fire. you can hold this attack for as long as you like base on the duration. this attack deals 4 damage on hit.";  
    
    }else if (x === "Energy Shield"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Energy Shield";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Shield";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 60xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: ---";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A technique used to generate an energy shield around the user to protect them from attacks, this shield has 7hp and user cant receive damage until the shield is destroyed";  
    
    }else if (x === "Energy Landmine"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Energy Landmine";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 35xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: ---";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User drops from his hands small energy spheres that explode at contact. after activation, if the target wants to move from thier position, they must make a Dex ability check of DC 13, on a fail the target takes 2 fire damage and is stunned and blinded for that turn due to smoke.";  
    
    }else if (x === "god Bind"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "god Bind";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Bind";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: achieved SSG, 3 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: --";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "By channeling the Saiyan God power through the user's hands, the user can use the energy generated to stop an opponent in their tracks. when you use this skill with an action, the target must make a Wisdom saving throw of DC 16, on a fail the target is paralyzed, the target can repeat the saving throw everytime at the start of turn until they get a success releasing them from the effect. the effect is also dispersed if the target or caster receives damage";  
    
    }else if (x === "Cloning"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Cloning";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Illusion";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "the user creates up to 3 illusionary clones which are used as distraction. clones can do nothing but move around and do physical attacks that doesnt use cp the player has in their cards.";  
    
    }else if (x === "Healing"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Healing";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Healing";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User is able to heal himself by holding his palm up to a wounded body part. you can expend cp and you gain hp equal to the Cp expended. max Cp you can Expend is equal to your Wis mod.";  
    
    }else if (x === "Super god fist"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Super god fist";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Punch";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? + 2Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 15ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user charges up ki in his hand, then launches forth with a punch to the opponent's face, dealing their damage + any amount of cp user wishes to expend. max cp that can be expended equal to users Wis mod";  
    
    }else if (x === "Pressure Point Attack"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Pressure Point Attack";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/ Phy Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "can only be used on humaniods from sizes large to small. A technique which, by touching or hitting weakly certain pressure points on an opponent's body, can incite effects such as paralysis or knock the opponent out. Enough prolonged pressure on the pressure points can also kill the opponent. when you use punch and it hits, you can use this skill in reaction to your punch. if the target Wis score is 7 or less the target is Knocked unconscious, if its above 7 but less than 15 the target is paralyzed for the number of turns equal to your Wis mod.";  
    
    }else if (x === "Dragonthrow"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Dragonthrow";
      let category = document.getElementById("skill_category").innerHTML = "Category: Phy Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Throw";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "only works on targets that are one size bigger or smaller. The user grabs his opponent's arm, leg, tail, or antenna, then he spins and throws them away. target is thrown 50ft towards a direct and receives fall damage(bludgeoning) equal to users str mod then is also knocked prone.";  
    
    }else if (x === "Full-Nelson"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Full-Nelson";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Grapple";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 60xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user puts their arms over their opponent's shoulders by going under the arm pits, making the opponent unable to move as freely as usual. the target is grappled and needs to make a Strength saving throw of DC equal to users Str score. target is grappled until the saving throw is a success. target can repeat the saving throw at the start of every their turns";  
    
    }else if (x === "Kaio-ken Finish"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Kaio-ken Finish";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 320xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 15 Cp, fly, double axe-handle(unused), Kaio-ken(Unused)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 Turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: User Dash range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "only works on targets that are one size bigger or smaller. First, User charges/Dashes at the opponent within range and kicks them up into the air dealing kick damage. Then, he flies up after the opponent and double axe-handle punches them down to the ground dealing users double axe-handle damage and fall/crash damage(bludgeoning) equal to users str mod. Next, he powers up to his Kaio-ken technique (kaio-ken must not be active before this stage) as he charges down at the opponent and double-punches them in their back dealing two separate punch damages. Finally, user quickly lands on the ground and catches the opponent on their back before throwing them onto the ground, inflicting another fall damage (bludgeoning) equal to users str mod. using this skill means you can no longer use an action this turn. all skills in this one proceeds stage by stage and act as their own attack skill separately meaning the whole attack stop if one is blocked or dodged.";  
    
    }else if (x === "Kaio-ken Attack"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Kaio-ken Attack";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 300xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 12 Cp, Kaio-ken x3(Unused), fly, roundhouse kicks(Unused), hook kicks(Unused)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 Turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: User Dash range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "only works on targets that are one size bigger or smaller. User powers up to Kaio-ken x3 as he charges at the opponent and roundhouse kicks them up into the air dealing roundhouse kick damage. Then, he flies up in the air and punches the opponent away dealing punch damage. Next, he flies up over the opponent and down behind to double kick them further up into the air dealing two separate kick damage. Finally, User flies up into the air around the opponent and hook kicks them down into the ground, inflicting hook kick damage and fall damage(bludgeoning) equal to users str mod. using this skill means you can no longer use an action this turn. all skills in this one proceeds stage by stage and act as their own attack skill separately meaning the whole attack stop if one is blocked or dodged.";  
    
    }else if (x === "Meteor Combination"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Meteor Combination";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 250xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7 Cp, elbow strike, super kamehameha";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 Turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: User Dash range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "only works on targets that are one size bigger or smaller. First, User charges at the opponent and elbows them away dealing elbow strike damage. Then, he attacks the opponent with a powerful barrage of kicks and punches dealing 2 punches and 2 kicks damage respectively, ending with a heavy punch to their stomach dealing punch damage x1.5. When the opponent lays on the ground paralyzed, User jumps up in the air and fires a Super Kamehameha(user uses cp for this skill regardless) down at the opponent, user can charge the super kamehameha as usual but target remains paralyzed until they come out successful on a Str Saving throw of DC 15(saving throw can be repeated at the start of targets turns). all skills in this one proceeds stage by stage and act as their own attack skill separately meaning the whole attack stop if one is blocked or dodged.";  
    
    }else if (x === "Meteor Smash"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Meteor Smash";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8 Cp, hook kick(Unused), axe kick(Unused), fly";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 Turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "only works on targets that are one size bigger or smaller. User punches the opponent in the stomach dealing punch damage x1.5. Then, he punches the opponent away and flies after them to right hook kick them in their face dealing punch and hook kick damage respectively. Finally, User axe kicks the side of the opponent's head, knocking them away and dealing axe kick damage and fall damage equal to users Str mod. all skills in this one proceeds stage by stage and act as their own attack skill separately meaning the whole attack stops if one is blocked or dodged.";  
    
    }else if (x === "Now I'm Really Mad!"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Now I'm Really Mad!";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 170xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp, left hook(Unused), Double Axe Handle(unused) ";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 Turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "only works on targets that are one size bigger or smaller. User punches the opponent away with a left hook and hits them in the back with a Double Axe Handle, knocking them to the ground. target takes left hook damage and Double Axe handle damage and becomes prone. all skills in this one proceeds stage by stage and act as their own attack skill separately meaning the whole attack stops if one is blocked or dodged.";  
    
    }else if (x === "lv1 Teleport"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "lv1 Teleport";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Spatial movement";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user instant moves and appears at a space within the range of this skill";  
    
    }else if (x === "Can You Follow Me?"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Can You Follow Me?";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 9 Cp, hook kick, any skill with 'teleport' in its name";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "First, User teleports in front of the opponent and attacks with a strong left punch dealing punch damage. He then attacks the opponent with several high-speed punches and kicks dealing 2 punches and 2 kicks damage(each take effect one by one) . User finishes the attack by knocking the enemy away with a left-hook kick, inflicting hook kick damage.all skills in this one proceeds stage by stage and act as their own attack skill separately meaning the whole attack stops if one is blocked or dodged";  
    
    }else if (x === "Celestial Whirlwind"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Celestial Whirlwind";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8 Cp, any skill with 'teleport' in its name";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft Circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User disappears and teleports behind the opponent with an arm raised and hits them with an invisible burst of strikes dealing 4 different force damage equal to users punch damage, the 4 attacks happen at same time (meaning all attacks act as one single attack) and cant be blocked or dodged unless user rolls a Dex saving throw with DC equal to the total damage (max of 15), if successful, the target has a chance to use a evade/dodge skill or block skill, if also successful but if the roll is less than 19, target takes half that damage.";  
    
    }else if (x === "Wild Sense"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wild Sense";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Counter";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: --";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A variation of the Afterimage Technique that allows the user to counterattack right after dodging the opponent's attack. when you just evaded or dodged a target attack, as a reaction you can use an attack skill";  
    
    }else if (x === "Tornado"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Tornado";
      let category = document.getElementById("skill_category").innerHTML = "Category: Phy Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Spin Attack";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: User dash range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After calling the name of the attack, User spins while rushing on the opponent to attack him/her dealing bludgeoning damage equal to 5 + Dex mod + Str Mod";  
    
    }else if (x === "Afterimage Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Afterimage Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Evade/dodge";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: ---";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "An ability to move so swiftly that an image of the user is left behind. as a bonus action user can use this skill, user must move to another space. in opponents next turn only, if opponent targets user for a attack, they roll a Perception Check of DC 13 and on a failed, opponent must strike or attack users previous position while on a success opponent can strike user.<br> As a reaction, user can evade an incoming attack by moving to an open space within users base movement range";  
    
    }else if (x === "Fusion Dance"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fusion Dance";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Fusion/Transformation";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: both users must have this skill and must be same level ";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 50 turns";
      let skill_details = documenElementById("skill_details").innerHTML = 
      "a short series of poses that are performed by two characters of equal power levels and roughly equal size. To correctly perform the Fusion, the fusees must strike the poses in a perfectly symmetrical image of one another. The result of a correctly performed Fusion Dance is a superior being whose power is multiplied several-fold over that of the individual fusees. both fusees roll a d6 die, if one of them rolls a even and the other rolls a odd, it is a fail and the following happens; a being is formed with both fusees hp, cp, speed, ability scores are added together and all are divided by 2 each.<br><br> If both fusees rolls evens or odds its a success and the following happens; a bring is created with the addition of fusees Hp, Cp, speed, ability scores, perks, features, skills etc, this new being can use 2 actions in a turn as if its normal and has a name equal to half of both fusees first names.";  
    
    }else if (x === "Galick Gun"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Galick Gun";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Blast";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 500ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User's signature technique. User curls his fingers and places both his hands together at chest level facing the same direction (so that the palm of one hand is on the back of the other). Then, once enough ki is gathered, he thrusts both hands forward to fire a powerful blast of energy. The result is a powerful, huge, fuchsia-colored ki beam that emanates from his hands and body. It is capable of destroying large planets if enough power is put into it. <br> you can concentrate more energy into the attack for using a turn to charge the attack, for each turn you charge this attack you pay 3cp and the attack damage increases by 4 force damage, you must charge this attack for at least 2 turns before using a bonus action in your next turn or as a reaction in the start of the targets to attack. you can only charge this attack at max of 5 turns.";  
    
    }else if (x === "Final Galick Cannon"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Final Galick Cannon";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 220xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7cp + galick gun Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 Turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User charges at the opponent and punches them in their face dealing punch damage. Then, he attacks the opponent with a rapid barrage of punches and kicks(2 punches and 2 kicks dealing their damages repectively and accordingly) before punching them in their stomach dealing punch damage x 1.5. Finally, User charges purple energy in his fist and fires the energy in the form of a Galick Gun through the opponent's stomach, the galick gun takes the original skill 'galick gun effects'. all skills in this one proceeds stage by stage and act as their own attack skill separately meaning the whole attack stops if one is blocked or dodged.";  
    
    }else if (x === "Final Burst Cannon"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Final Burst Cannon";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 180xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, at least 2 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 600ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "To perform the attack, User draws his hands out to his sides as he powers up, creating an enormous whitish-purple aura around his body. Then, he throws his arms out in front of him and fires a large Galick Gun energy wave at the opponent, inflicting a huge amount of damage. you can concentrate more energy into the attack for using a turn to charge the attack, for each turn you charge this attack you pay 4cp and the attack damage increases by 7 force damage, you must charge this attack for at least 2 turns before using a bonus action in your next turn or as a reaction in the start of the targets to attack. you can only charge this attack at max of 6 turns.";  
    
    }else if (x === "Galick Blazer"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Galick Blazer";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 60xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User shoots the attack from one hand, with the other arm supporting the one that is firing the attack dealing 5 force damage.";  
    
    }else if (x === "Double Galick Cannon"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Double Galick Cannon";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Huge, Blast";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: dash range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "First, User charges at the opponent within Dash range, but stops right in front of them and places both of his hands on the opponent's chest. Then, he charges yellow energy in his hands. Finally, User fires the yellow energy in the form of a massive energy wave against the opponent, inflicting 7 force damage.";  
    
    }else if (x === "Super Galick Blaster"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Super Galick Blaster";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 180xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "When he performs this move, User opens his mouth and fires a pink energy wave toward the opponent, inflicting 10 necrotic damage.";  
    
    }else if (x === "Galaxy Breaker"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Galaxy Breaker";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave, Huge";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 170xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft Circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "First, User generates electricity around his chest and converts it into a bluish-white aura around his body. Then, he thrusts his chest forward and fires a huge energy wave at the opponent, inflicting a high amount of damage equal to 14 (7 lightning + 7 necrotic) damage as well as causing the opponent's body to violently contort thus stunning target affected for the next turn.";  
    
    }else if (x === "Shine Shot"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Shine Shot";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Sphere";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuos";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user prepares a ball of fire in their hands and throws it, tossing the fireball at the opponent to severely burn them or worse dealing 5 fire damage and after effect burn damage of 1 fire damage for 5 of targets end turns. after effect offs if the target is strike with a water attack or enters a water terrain space.";  
    
    }else if (x === "Tail Slicer"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Tail Slicer";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Disc";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, 2 actions";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "a red version of the destructo disc. a razor-sharp disc of Ki that can slice through almost any substance, this attack cant be blocked and bypasses armor class below 25. when it hits it deals 5 slashing damage.";  
    
    }else if (x === "Ultimate Explosive Wave"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Ultimate Explosive Wave";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 160xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft Circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user stands charging energy around their body, then they explode with a gigantic energy sphere around their body affecting every square within range. If the foe comes in contact with the Super Explosive Wave, it will deal much greater damage than the normal or super Explosive Wave which is 13 (8 force + 5 fire) damage. It can also be used for defense and offense at the very same time meaning a ranged attack that travels attack that is sent towards user when this attack is active is neglected if it has less dmg than this attack, if same damage, users must both roll D20 die each and the player with the lower number has their attack cancelled, if roll is same number, both attacks are cancelled.";  
    
    }else if (x === "Dirty Fireworks"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Dirty Fireworks";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Explosion, Huge";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "With the enemy on the ground or in the air, User aims at them with his outstretched index and middle fingers held together and creates a huge explosion on the opponent, inflicting 8 damage(4 fire + 4 force) damage.";  
    
    }else if (x === "Lucora Gun"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Lucora Gun";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: energy bullet";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 1 Cp per shot";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous / continuos";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A Continuous Energy Bullet. user fires a number energy bullets equal to their Wis mod (max 10), each bullet dealing 3 force damage and attacking on by one in succession. user can only fire 2 bullets in an action and this skill duration spills over as continuos if the bullet counts are not finished yet. user can choose to end this anytime";  
    
    }else if (x === "Big Bang Attack"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Big Bang Attack";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 135xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, At Least 2 Turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "In order to perform it, User extends his arm, opens his palm and turns his hand up at a 90 degree angle. He then powers up and fires a powerful energy sphere at the opponent. This attack creates an enormous explosion upon contact and leaves a huge mushroom cloud affect everyone else 30ft circle around the target giving them half the damage. You Can Concentrate More Energy Into The Attack For Using A Turn To Charge The Attack, For Each Turn You Charge This Attack You Pay 3cp And The Attack Damage Increases By 5 Force Damage, You Must Charge This Attack For At Least 2 Turns Before Using A Bonus Action In Your Next Turn Or As A Reaction In The Start Of The Targets To Attack. You Can Only Charge This Attack At Max Of 3 Turns.";  
    
    }else if (x === "Photon Bomber"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Photon Bomber";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Sphere";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 73xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "First, the user raises his right hand as he curls his fingers and charges a white energy sphere. Then, he brings his hand forward and fires the energy sphere in the form of an energy wave at the opponent, inflicting 6 (3 force + 3 radiant) damage.";  
    
    }else if (x === "Final Flash"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Final Flash";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Sphere";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, At Least 2 Turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 600ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The Final Flash is formed by drawing both hands back while gathering ki. Then, the user place bottom of their palms together, forming a sphere of energy that emits sporadic bolts of electric yellow ki that shoot out in all direction. Finally, the user discharges a massive golden beam of energy with electric ki streaming around it towards his opponent. You Can Concentrate More Energy Into The Attack For Using A Turn To Charge The Attack, For Each Turn You Charge This Attack You Pay 4cp And The Attack Damage Increases By 7 (4 force + 3 lightning) Damage, You Must Charge This Attack For At Least 2 Turns Before Using A Bonus Action In Your Next Turn Or As A Reaction In The Start Of The Targets To Attack. You Can Only Charge This Attack At Max Of 6 Turns.";  
    
    }else if (x === "Final Crash"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Final Crash";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Sphere";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ? Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, At Least 1 Turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "First, User draws his hands to his sides and charges two whitish-blue energy spheres with streaks of electricity. Then, he brings his hands together with fingers spread apart and fires a massive energy wave at the opponent, inflicting a large amount of damage. You Can Concentrate More Energy Into The Attack For Using A Turn To Charge The Attack, For Each Turn You Charge This Attack You Pay 3cp And The Attack Damage Increases By 5 (2 force + 3 lightning) Damage, You Must Charge This Attack For At Least 1 Turn Before Using A Bonus Action In Your Next Turn Or As A Reaction In The Start Of The Targets To Attack. You Can Only Charge This Attack At Max Of 4 Turns.";  
    
    }else if (x === "Final Impact"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Final Impact";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Bolt";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 10 Cp, Majin mode";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User when in Majin mode raises his index finger, middle finger, and thumb forward and fires a powerful bolt of energy at the opponent, inflicting 15 (10 necrotic + 5 lightning) damage.";  
    
    }else if (x === "Final Explosion"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Final Explosion";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Explosion";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 195xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements:";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft Circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "can only be used when user hp is half its original. To begin the attack, User gathers his life force and converts it into energy, creating flame-like ribbons of energy that spiral around his body. Both his and his opponent's bodies begin emitting small flecks of golden light, resembling dust blowing off of their skin. all target within range are affected by this. the user left over cp and hp are added together and multiplied by 2 and done to all targets as force damage. user dies after this skill is used ";  
    
    }else if (x === "Heat Dome Attack"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Heat Dome Attack";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 150ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "can only be used to target opponents in the air and within range. user points both his hands up in the air. Then, he charges a large dome of yellow energy around himself that is 20ft around user dealing 4 force damage to those affected. From this energy dome expels a gigantic Finish Buster up at the opponent, inflicting an enormous amount of damage equal to 12 force damage. the target then falls to the ground if it heats receiving fall damage.";  
    
    }else if (x === "Spirit Sword"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Spirit Sword";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Construct";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 60xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: ---";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: until disperse or user goes unconscious";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "a sword shape energy protrudes from users hand, this energy created sword can be used to attack with short or long sword techniques with 5 slashing and 5 piercing damage. you can disperse this sword with an action";  
    
    }else if (x === "Sphere of Destruction"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Sphere of Destruction";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: sphere";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 160xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: ---";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user summons a 20ft Height And Width red sphere which moves at 30ft per turn in one straight direction. if the sphere hits a target, it explodes and does 4 fire damage to the surrounding area and targets in a 20ft circle and does 7 necrotic damage to the target it hits";  
    
    }else if (x === "Full Power Energy Ball"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Full Power Energy Ball";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Sphere";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 10 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft Circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User creates a large red ball of energy nearly identical to the Death Ball, this ball is 30ft Height And Width which moves at 20ft per turn in one straight direction. if the sphere hits a target, it explodes and does 6 force damage to the surrounding area and targets in a 20ft circle and does 15(10 force + 5 fire) damage to the target it hits. the user can make the ball explode with a bonus action without it hitting a target";  
    
    }else if (x === "Final Blow"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Final Blow";
      let category = document.getElementById("skill_category").innerHTML = "Category: Phy Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Rush atk";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Dash range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User launches himself forward within range, and in an instant, delivers a hard punch to the opponent's stomach dealing double the punch damage.";  
    
    }else if (x === "Final Strike"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Final Strike";
      let category = document.getElementById("skill_category").innerHTML = "Category: Phy Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Kick, Strike";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User delivers an unblockable kick to the opponent that sends them flying 100ft into the air. breaking all defense if theres active and neglects blocks. this skill deals double users kick damage";  
    
    }else if (x === "Ignite Strike"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Ignite Strike";
      let category = document.getElementById("skill_category").innerHTML = "Category: Phy Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Strike";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7 Cp, SDGSS1";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User attacks with a powerful strike, either a punch or kick dealing 3x the damage";  
    
    }else if (x === "Hand Crush"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hand Crush";
      let category = document.getElementById("skill_category").innerHTML = "Category: Phy Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Grapple";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 0 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "the target can only be a target one step smaller than user. the target is grappled and must make a Str saving throw of DC equal to users Str score (Max 25). on a failed, every of the start of users turns, target receives 3 bludgeoning damage. target can repeat the saving throw every of their turns ending the effect on a success.";  
    
    }else if (x === "Elite Assault"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Elite Assault";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp, headbutts, Double Axe Handle";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Only Works On Targets That Are One Size Bigger Or Smaller, User first headbutts the opponent dealing headbutt damage, sending them flying away at users dash range. He then flies to them and kicks them in the face dealing kick damage. With the opponent stunned, User attacks them with a Double Axe Handle dealing double Axe handle damage, sending them to the ground dealing fall damage equal to target str mod(max 10). All Skills In This One Proceeds Stage By Stage And Act As Their Own Attack Skill Separately Meaning The Whole Attack Stop If One Is Blocked Or Dodged.";  
    
    }else if (x === "Genocide Breaker"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Genocide Breaker";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 220xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7 Cp, hand chop";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Dash range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Only Works On Targets That Are One Size Bigger Or Smaller. First, User charges at the opponent within dash range and kicks them up into the air dealing kick damage x 1.5. Then, he flies up in the air after the opponent and immobilizes them with a hand chop to their ribs dealing hand chop damage. Finally, User puts his hand over the opponent's face and blasts them away with an energy wave, inflicting force damage equal to 6 + user Cha mod(max 5). All Skills In This One Proceeds Stage By Stage And Act As Their Own Attack Skill Separately Meaning The Whole Attack Stop If One Is Blocked Or Dodged.";  
    
    }else if (x === "Amazing Impact"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Amazing Impact";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6 Cp, Backflip, double kick, Double Axe Handle.";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction ";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Only Works On Targets That Are One Size Bigger Or Smaller. As a reaction, User dodges the opponent's punch and lays on the ground to double kick them up into the air dealing double kick damage. Then, he backflips up onto his feet and flies up into the air above the opponent. Finally, User knocks the opponent down to the ground with a Double Axe Handle, inflicting double axe handle damage x 1.5. All Skills In This One Proceeds Stage By Stage And Act As Their Own Attack Skill Separately Meaning The Whole Attack Stop If One Is Blocked Or Dodged.";  
    
    }else if (x === "Wild Hunt"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wild Hunt";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 260xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8 Cp, uppercut, double kick, Double Axe Handle, double fist flying charge";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Only Works On Targets That Are One Size Bigger Or Smaller. The user starts the attack by knocking the opponent away with an uppercut dealing uppercut damage, then uses a flying dash to get around behind the opponent to deliver an aerial version of Amazing Impact's double kick to send the opponent flying away again dealing double kick damage, then flies up into the air to deliver the Double Axe Handle portion of Amazing Impact knocking the opponent into the ground dealing Double Axe Handle damage, before powering up with their arms & legs outstretched like a star, then performs a double fist flying charge (similar to Nova Strike) to presumably finish off the helpless opponent causing the effect of a double fist flying charge. All Skills In This One Proceeds Stage By Stage And Act As Their Own Attack Skill Separately Meaning The Whole Attack Stop If One Is Blocked Or Dodged.";  
    
    }else if (x === "Energy Rings"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Energy Rings";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Grapple";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuos";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User extends his right arm and points his middle and index fingers at the opponent, as if they were about to use the Final Impact attack. Then, user fires five powerful rings made out of pure energy at his enemy, trapping them by their arms, legs, and neck so that User can attack them while the opponent is incapable of fighting back. user is grappled by the rings and must make a Str saving throw with DC 15 destroying the rings on a success and ending the grapple. opponent can repeat this saving throw at the start of their turns";  
    
    }else if (x === "Hellzone Grenade"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hellzone Grenade";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Spheres";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 1 Cp for each orb";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuos";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User charges up and fires several energy spheres randomly in the opponent's direction (roll a D12 to know how many spheres summoned), disregarding accuracy and with no intent on actually hitting the enemy. With efficient ki control, the multiple energy spheres are suspended in the air, completely surrounding them, the energy orbs are left at that location until user wants to fire them. Finally with an reaction or bonus action, User commands the energy spheres, which change from a yellow to purple color, to rapidly spin around the opponent and inevitably rain down on them with a vicious onslaught from every direction, filling the sky with a blinding light and inflicting 2 force damage for each orb and the number of orbs";  
    
    }else if (x === "dd"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "dd";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged/Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft Circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";  
    
    }
    

    }