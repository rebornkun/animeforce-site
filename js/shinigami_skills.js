//////////////////////////
    //shinigami skills///
    //////////////////////////

function rodclick(n){
    let modal = document.getElementsByClassName("0")[0];
    let x = n.toString();

    if (x === "Reverse Demon/Nullify (Hanki)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Reverse Demon/Nullify (Hanki)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Counter Trap";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 165";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ??Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User emits an amount of energy equal to the opponent's atk to cancel it out. pay cp according to the amount of cp opp used to play a charged range attack skill at you to neglect the skill";  
    
    }else if (x === "White Crawl/Prostration (Hakufuku)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "White Crawl/Prostration (Hakufuku)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Causes a target to lose consciousness or dizzy, when you hit target with this attack, target cant use attack skills for 2 of their turns. 4cp to use";  
    
    }else if (x === "Mirror Door/Gate (Kyoumon)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Mirror Door/Gate (Kyoumon)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Wis, ?cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee (retains reflected atk range)";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A high class barrier that reflects attacks from the outside. However, it is easy to break from the inside. you can set up this skill with a bonus action, it will Reflect opponent next ranged or unarmed attack skill back. it can be played in opp turn as a reaction. cp used is the amount of cp opp use for the skill. max damage that can be reflected cant exceed your Wis Score";  

    }else if (x === "Opening Revival (Keikatsu)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Opening Revival (Keikatsu)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Healing";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self or touch";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A healing technique that several characters (even those outside of 4th Division) can use in Bleach: The 3rd Phantom DS game. gain or give hp equal to your wis mod, you play again but cant use atk skills after this util your next turn, you can also use this on another target, same effect happens.";  

    }else if (x === "Purple Tree (Shimoku)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Purple Tree (Shimoku)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: poison";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Until targets hp hits 5 or below";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      " Also used in Bleach: The 3rd Phantom, this ability causes the target to become poisoned.- once it hits, target recieves 1hp poision damage for each of their end turns until their hp reaches 5.";  
    
    }else if (x === "Luminous Healing (Meiyu)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Luminous Healing (Meiyu)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Heal";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp per turn";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: concentration, at least 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: up to concentration time";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Used in Bleach: The 3rd Phantom, it is a healing technique that heals up to five individuals within a small area. while this skill is active, all targets (max targets = wis mod) within range gains +2hp each every of your turn for the the user concentrate on this spell. the user can end this with a bonus action or reaction";  
    
    }else if (x === "Kidō Cannon (Kidōhō)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Kidō Cannon (Kidōhō)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Energy beam";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8cp each";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 actions each, Concentration";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "As the name suggests, the Kidō Cannon is basically a high-intensity energy weapon powered by Kidō. It consists of a crystalline focus point attached to the top of a massive pole, with several smaller crystal structures circling up towards the main one. It is powered by 2 of Shinigami working in concert, creating an energy blast capable of obliterating a small dimension. The blast forms into several animal shapes which roar just before contact. The power of the blast is such that, in addition to destroying its target, it also causes a small amount of damage to both the human world and Soul Society. Despite its power, it is not a reusable weapon, as it burns into a pile of scrap after being fired. requires 2 shinigami , both shinigami must have the skill to use, this skill cant be used again no matter what until the next week. when the attack hits all targets rolls a Con saving throw with DC equal to half damage, taking 6d5 radiant damage on a failed and half as much on sucess.";  
    
    }else if (x === "The Gate of Dragon Tail (Ryubi no Jomon)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "The Gate of Dragon Tail (Ryubi no Jomon)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg / Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Neglect ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      " Hachigen Ushōda used this barrier technique to block Barragan Luisenbarn's aging ability. The technique works by creating over a dozen pillars which are arranged by hand gestures, making them form a gigantic shield or door like barrier between the caster and the opponent. Together with Koko no Jomon, Kigai no Jomon and Hoyoku no Jomon, it forms Shiji no Saimon. it can be used to destroy or nullify opp barrier or deffensive skill opp use, it can be played along any of your attack skill amd takes effect before it. Chant: 'Brethren-in-arms withdrawing for the distance of 8 sun and standing still; blue bolt, white bolt, black bolt, red bolt; sinking into the ocean together seeking redemption.'";  

    }else if (x === "Standing Ovation (Sutandingu Obēshon)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Standing Ovation (Sutandingu Obēshon)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: offensive barriers";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique is a unique Kidō barrier technique by Hachigen Ushōda. Hachi can create barriers around various opponents and then use those barriers to severe the opponent into parts. when this skill hits a target, the target must roll a Con saving throw with DC of half your Str Score, on a fail, Cut out one of targets body part. (if you cut a hand ,target cant use attack skills that require two hands till the end of the game or its healed, if two hands target cant use any attack skills that require hands, if one leg target speed is halved, if both speed turns to 0";  

    }else if (x === "Five Support Cover (Goyōgai)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Five Support Cover (Goyōgai)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: support barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 75xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique creates a pentagonal barrier that is used for stabilization of whatever is inside it. when a target hp is 0 or poisoned, you can use this skill on that target, the target is stabilized and the turns until death doesnt count or hp doesnt reduce unless this barrier is broken, this barrier has 7hp that can be damaged from inside or outside.";  

    }else if (x === "Farewell Box (Hako Okuri)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Farewell Box (Hako Okuri)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: barrier ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 85xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 or upto 3 of attack users turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique creates a barrier around a object that can then be transported wherever the caster wishes. If used in battle you can transport a single ranged attack within range from an opponent to 1 or upto 3 of their turn after and when the time comes the attack plays then.";  

    }else if (x === "Green Paper Teleport"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Green Paper Teleport";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Spatial movement";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp or 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self or 120ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 of opponents turns or Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique was used by Shūsuke Amagai. By throwing special sheets of paper into the area, Amagai can form a green orb of bright light around himself, teleporting himself and anyone he touches to any desired location. While teleporting, the said people's Reiatsu is completely masked. For 2 of your opponents turns you cant receive direct attacks ( attacks that affect only you ) or you and a target you touch can teleport to a desired location wihtin 120ft.";  
    
    }else if (x === "Pyramid Seal Barrier"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Pyramid Seal Barrier";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def/neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: barrier ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique was used by Genryūsai Shigekuni Yamamoto. It forms a green pyramid-shaped barrier around a the caster. It is immensely strong, able to resist all but the strongest of attacks. This barrier is a one time sheild that wont leave you until in a single turn, it receives damage equal to your wis score or above, if not all other damage are blocked and neglected.";
    
    }else if (x === "Quad Burial Barrier (Shisō Kekkai)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Quad Burial Barrier (Shisō Kekkai)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Sealing";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 250xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 10cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous, until target hp reaches 0";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique was used by Genryūsai Shigekuni Yamamoto, and is the seal used to lock away Kōga Kuchiki. Four spears are used to trap the target by their hands and legs. The target rises up into sky and is then sealed in a black coffin-like box with chains wrapping around it. The four spears then pierce the box all at once. if target hp is half than usual, has less Cp and wis scores less than you, the target must roll a CON saving throw with DC Equal to your wis score, on a failure, target is incapacitated and the effects of this skill happens to the target as it is in the description, futhermore, the target losses Hp equal to the users Wis score, the target can repeat the saving throw at their end turns recieving the same damage at every fail or ending this skill on a success, if the target hp reaches 0 due to this skill, it is sealed and the confin goes into the ground, but the target is stable.";
      
    }else if (x === "Quad Burial Barrier Release"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Quad Burial Barrier Release";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: sealing breaker ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: concentration, 2 actions";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The chant used to break the Quad Burial Barrier seal. This is used to break the <b>Quad Burial Barrier</b> skill, Chant: 'Gather round the supreme being with thy cleansing black souls, offering blood, a pact, and an alter. Fly hence from the blackened heavens, my beloved ebon sacrifice. Offer the holy chalice to the evil spirit residing behind the seal, lifting the six locks that have been passed down since antiquity. Now open, coffin once lost!'";  
    
    }else if (x === "Inner World Barrier"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Inner World Barrier";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: skill break";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique was used by Ginrei Kuchiki. While it has not been explained, it forms a green barrier around one's person, that causes Muramasa's attacks to pass through the user. Ginrei explains that one must shut off one's heart to prevent Muramasa from entering their inner world. This skill stops time skills, illusions and skills that control you or effect that command you to tell user your next move and only if they affect you.";
    
    }else if (x === "Adamantine Blast (Kongōbaku)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Adamantine Blast (Kongōbaku)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Energy ball";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 145xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A blast of spherical, red energy similar in strength to a Sōkatsui blast. While both number and classification of this particular spell is not expressly stated, it is clearly a Destructive spell. Deal 8 force damage to opponent which cant be neglected."; 
      
    }else if (x === "Glacier Vapor Storm (Hyōga Seiran)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Glacier Vapor Storm (Hyōga Seiran)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Ice wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft cone";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A spell that fires a massive wave of ice capable of freezing its targets and surrounding area as well as destroying a group of Menos Grande through sheer power. While both number and classification of this particular spell is not expressly stated, it is clearly a Destructive spell. this targets all target within range, they recieve 6 cold damage and are trapped in ice as if they are grappled, at the tart of their turns they can roll a Str saving throw of DC 14, breaking free on a save, on every fail they recieve 2 cold damage.";  

    }else if (x === "Curtain Stripping (Noren Mekuri)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Curtain Stripping (Noren Mekuri)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Neglect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A spell capable of stripping away illusionary effects. Negelect one time skill in the field if the user or effect medium is within range. 3cp";  

    }else if (x === "Time-Out Drop (Tanma Otoshi)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Time-Out Drop (Tanma Otoshi)";
      let category = document.getElementById("skill_category").innerHTML = "Category: nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: -- ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 45xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 45ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Spell that makes someone fall unconscious for a period short of time. ones this hits, target must skip next turn or pay 4cp, you can use another action.";  

    }else if (x === "Forced Slumber (Inemuri)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Forced Slumber (Inemuri)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 78xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Spell that forces someone to fall asleep. the target makes a wis saving throw with DC of 13, on a failed the target falls Unconscious (check conditions in rules). if the target is damaged, the condition ends. also the target can retry this saving throw at the end of its turn ending the effect on a save.";
      
    }else if (x === "Ninety-Six Capitol Fire-Suspended Seal Destruction (Kyūjūrokkei Kakafūmetsu)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Ninety-Six Capitol Fire-Suspended Seal Destruction (Kyūjūrokkei Kakafūmetsu)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Sealing ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 280xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 12cp, Lv20";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 hour";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique was used by Kisuke Urahara when he discovered Aizen had fused with the Hōgyoku, and could not be killed. It activates on its own when the target is weakened, piercing them from the inside out with several sword-shaped beams of light, which then merge into a single, vaguely star-shaped barrier, with the target sealed inside. you can plant this now but can only activate when the target has a quarter of their original hp left, when you plant this skill in a target. you can choose to tell out or tell modder or admin privately. you can then use a bonus action or reaction to activate its effect, once this skill activates, the target rolls a Wis saving throw with DC of 18, on a failed, the effects happen to target and is sealed. this skill will last in a targets body for 1 hour.";  
    
    }else if (x === "Numbing Finger (Shibireyubi)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Numbing Finger (Shibireyubi)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Binding";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 of target turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A binding spell that causes complete physical paralysis in a victim. target rolls a Cha saving throw of DC 14, on a failed target is paralysed for 2 of their turns (see paralysed in conditions) and cant use skills or spells that require movement or somatic demonstration.";
      
    }else if (x === "Thousand-Coil White Snake (Sentan Hakuja)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Thousand-Coil White Snake (Sentan Hakuja)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Dodge/Evade";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp for each person";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A spell that teleports a group of people from one place to another. When 1 or more people within range are to take a ranged/area of effect attack, teleport you and the targets to a spce within 100ft. you cna only target 2 people if the attack does more than 15dmg";  
    
    }else if (x === "Hakudan Keppeki (White Severing Boundary Wall)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hakudan Keppeki (White Severing Boundary Wall)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time/Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 20turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The practitioner creates a protective wall which can completely prevent the entry of any Quincy power for a limited period of time. It was created with traces of Quincy Reiatsu. all Quincy cant enter the barrier and their skills are neglected when they enter it.";  
    
    }else if (x === "Shiba Family Arts: Crane Flower Archery 2nd Style: Adhering Blossom (Kakaku Shahou Niban Kagizaki)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Shiba Family Arts: Crane Flower Archery 2nd Style: Adhering Blossom (Kakaku Shahou Niban Kagizaki)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Summon Arrows";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ??cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 action (Concentration) for the first spell, 1 bonus action each for the second spell";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 300ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A two-part incantation spell. The initial spell controls the launch and its direction, then continuation spell is used to adjust the acceleration and axial position.<br>Initial Spell Chant: 'Yonder, brown avarice covet control of the 36 directions. 72 pairs of illusions, 13 pairs of hunting horns, the right hand of a monkey grasps the star. Embraced by the sun of 25 rings, the cradle of the sand gives forth blood!' <br>*this summons 5 magic arrows which give 3 piercing damage and are counted as magical each(each arrow is regarded as a seprate attack skill), 5cp to use the first spell. the other spells or skills cant be used this turn. <br>Continuation Spell Chant: 'Fate of the three sparrows, bond of the four dragons, obstructing the five directions, return to the six villages. Heavenly wind, orangutan, spoon, cane of elm, a thousand ashes, a thousand wisdoms, the measure of white clouds, tread not on the scarlet light that embraces the moon...' <br>*you can choose the turn you want to fire a arrow , it is not regarded as an action but a bonus action, in another turn therefore you can use other skill but the cp used to fire one arrow is the number of your turns the arrow as been in the field and if the arrow hits your opponent add the cp you paid to the dmg you give, only one arrow can be fired per turn, arrow max dmg is your Con score.";  
    
    }else if (x === "Change Into Sand (Sebba)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Change Into Sand (Sebba)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Neglect wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 89xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Turns solid mass into sand when the user makes a circle motion with their hand. Thus far, only Ganju Shiba has been seen using it. Turn any defense skill within range in the field to sand which means neglected/Destoryed.";  
    
    }else if (x === "Flash Blossom (Senka)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Flash Blossom (Senka)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Instant kill(Strike)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 280xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 9cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: dash range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A special Shunpo technique where one moves to their opponents back. Directly attacking and sealing one's Soul Chain (Saketsu) and Soul Seal (Hakusui) in one strike. The movement is so fast that an opponent may not be able to tell whether he was attacked from the front or the back and even an outside observer may find it impossible to tell what the movements are. only when your speed is 30 or more than targets and target is a living creature thats medium in size and has only half its hp or less, use this skill on that target, target must make a Dex or Wis (Target chooses) saving throw of DC 16, on a fail target instantly dies by having thier soul removed and cant revive back in this battle. this skill cant be neglected or defended against. ";  
    
    }else if (x === "Way of Onmitsu, 3rd of the Shihō - Cicada (Onmitsu Shunpo Shihō no San - Utsusemi)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Way of Onmitsu, 3rd of the Shihō - Cicada (Onmitsu Shunpo Shihō no San - Utsusemi)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Dodge/Evade";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Allows for a movement at great speed leaving an afterimage behind. The afterimage may even appear to have taken damage. Neglect the damage from an attack you take from opponent last turn, damage that can be neglected must not be more than your Dex score.";  
    
    }else if (x === "Forbidden Spells ,Temporal Stasis (Jikanteishi)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Forbidden Spells ,Temporal Stasis (Jikanteishi)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Forbidden (Time stop)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 250xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp for each target affected apart from you every of your end turns";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A forbidden spell used by Tessai along with Spatial Displacement. It is a spell that halts time in a specific area. When this skill is used, all creatures within range are affected, they dont gain any effect they are suppose to get every turn because the turns doesnt move, the turns for you and targets will not increase, affected targets cant play or move unless they have up to x1.5 your speed or are immune to time pause, you and affected targets cant leave this space. if they are unaffected targets which are not in range, they do not play until you and affetced targets are done, for all the things that happen within range are like a Split second to unaffected targets. ";  
    
    }else if (x === "Forbidden Spells ,Spatial Displacement (Kūkanten'i)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Forbidden Spells ,Spatial Displacement (Kūkanten'i)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Forbidden (Spatial Displacement)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 220xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A forbidden spell used by Tessai with Temporal Stasis to teleport a specified portion of space from one point to another, transporting even other active Kidō spells. When a target within range is about to receive damage or targeted for a attack from a direct attack, You can teleport the attacker or the skill and choose who takes the attack instead as far as the new target is within range of this spell, dmg max that can be affected is user wis score. or this skill can be used to change the owner of a particular time of def skill active on the field, cp used is double the skill original cp. ";  
    
    }else if (x === "(AF) burning ball"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) burning ball";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "give 5 fire damage attack to different targets(max targets = user wis mod) within range and 3 fire damage to you. ";  
    
    }else if (x === "Hadou 1: Thrust (Shō)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 1: Thrust (Shō)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: blast";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      " fires a small blast that Pushes the target away from the caster. deals 1 bludgeoning damage to target and pushes that 30ft backward.";  
    
    }else if (x === "Hadou 4: White/Pale Lightning (Byakurai)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 4: White/Pale Lightning (Byakurai)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: lightning bolt";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Fires a bolt of white lightning from the fingertip. Deal 4 lightning damage to a target";  
    
    }else if (x === "Modified Hadou 4: Heavy-Strike Pale Lightning (Jūgeki Byakurai)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Modified Hadou 4: Heavy-Strike Pale Lightning (Jūgeki Byakurai)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: lightning bolt";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A modified version of Hado #4 - Byakurai. Red in color. Deal 7 lightning damage to opponent";  
    
    }else if (x === "Hadou 11: Bound Lightning (Tsuzuri Raiden)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 11: Bound Lightning (Tsuzuri Raiden)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: chain lightning";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Touch";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Electric current flows through any object the user touches and is able to lead electricity, damaging any target that is in contact with the object the current runs through. deals 4 lightning damage to up to 3 Targets which are 5ft within each other.";  
    
    }else if (x === "Hadou 12: Ambush Flare/Lain Fire (Fushibi)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 12: Ambush Flare/Lain Fire (Fushibi)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/ Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp for net, 5cp for explosion";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 or 2 actions";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Momo Hinamori uses this spell in conjunction with Shot of Red Fire and a Kidō net that has entangled her opponents resulting in a large explosion around them all. Rangiku Matsumoto states that it is number 12, but does not specify whether it is a Destructive or a Binding Spell although from the name and effect, it is highly likely to be a Destructive spell. with 3cp, you create a net made of kido and send it to a target or 1 to 3 targets within 5 ft of each other, each target must roll a Dex saving throw of DC 12 escaping this net on a save and moving to a sapce within 10ft or getting Restrained on a fail, if they are still targets trapped in the next, as an action in your next turn, you pay 5cp and you can send a huge explosion to that net, dealing 8 dmg(4 fire + 4 force) to each target in the net.";  
    
    }else if (x === "Hadou 31: Red Flame Cannon/Shot of Red Fire (Shakkahō)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 31: Red Flame Cannon/Shot of Red Fire (Shakkahō)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Energy Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 145xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, 1 action and 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Fires a ball of red energy at a target. If you didn’t receive damage last turn you can use this skill but it will take time to chant the spell so you have to wait for your next turn as a bonus action to fire the attack and give opponent damage(you can chant it for fun). Give opponent 7 dmg(4 fire damage and 3 force damage). <br>Chant: 'O Lord, Mask of blood and flesh, all creation, flutter wings, you who bears the name of Man, Inferno and Pandemonium, the sea barrier surges, March on to the south!'";  
    
    }else if (x === "Hadou 32: Yellow Fire Flash (Ōkasen)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 32: Yellow Fire Flash (Ōkasen)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 84xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Fires a wide arc of yellow energy at a target. Deal 4 Force damage to 1 or 2 targets that are withi 10ft of each other, this damage cant be neglected.";  
    
    }else if (x === "Hadou 33: Blue Fire, Crash Down! (Sōkatsui)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 33: Blue Fire, Crash Down! (Sōkatsui)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 134xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Fires a wave of blue flames from one hand. Deal 6 fire or force damage to opponent.<br> Chant: 'O Lord, mask of flesh and bone, all creation, flutter of wings, ye who bears the name of man, truth and temperance, upon this sinless wall of dreams unleash but slightly the wrath of your claws!'";  
    
    }else if (x === "Hadou 48: Raging Light Fang (Gaki Rekkō)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 48: Raging Light Fang (Gaki Rekkō)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A spell that makes a circle of energy, before firing blasts of green light from its center in a cage-like formation. deal 9 force damage to opponent, any effect that affect this skill in the targets turn is neglected.";  
    
    }else if (x === "(AF) Hadou 50: Countering blast"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Hadou 50: Countering blast";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave (Counter)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ??cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when a blast is fired towards user, user reacts with a blast to cancel out the incoming one. when a target just used a charged/magical ranged atk and you or any of your allies within Range are targets, with this skill, you send out a beam that deals force dmg equal to your Wis mod + Cp you wish to expel for this skill. If your skill damage is more than opponents, give opponent the residual damage left after subtracting both attack dmg, you take the residual damage if its ot the case. opponent doesnt take residual dmg if the skill wasnt targeted to you in the first place. Cp used is user choice.";  
    
    }else if (x === "Hadou 54: Abolishing Flames (Haien)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 54: Abolishing Flames (Haien)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Blast";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 195xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Fires a blast of purple spiritual energy that will incinerate a target of low strength completely when it makes contact. deal 6 + Wis mod(max 10) force dmg to a target, if the target Con score is lower than dmg, the target instanly dies. ";  
    
    }else if (x === "Hadou 58: Orchid Sky (Tenran)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 58: Orchid Sky (Tenran)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Blast";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      " A widening tornado-like blast is fired towards the target. Give opponent Bludgeoning damage according to the difference btw each others hp. Max dmg is users Str Score. if the damage is less than targets Str score, target takes only half the damage.";  
    
    }else if (x === "Hadou 63: Thunder Roar Cannon (Raikouhou)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 63: Thunder Roar Cannon (Raikouhou)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: bolt";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Gathers yellow lightning at fingertips this turn as a action, then fires off as a bolt to pierce the target as a reaction in targets turn. Deals 8 dmg ( 5 lightning + 3 piercing). Chant: 'Scattered beast bones! Spire, Crimson Crystal, Steel Wheels! The wind if it moves, the sky if it stops, the tone of the spear striking fills the lone castle!'";  
    
    }else if (x === "Hadou 73: Twin Lotus of Crashing Blue Fire/Twin Lotus Blue Fire, Crash Down (Sōren Sōkatsui)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 73: Twin Lotus of Crashing Blue Fire/Twin Lotus Blue Fire, Crash Down (Sōren Sōkatsui)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 9cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Essentially a doubled version of #33, this spell fires two shots of blue fire with greater potency than the single-shot variety. sends two seprate attacks to one or seprate targets withi range one at a time, each Dealing 8 ( 4 fire + 4 force )damage to target. Cant be used in your first turn";  
    
    }else if (x === "Hadou 88: Flying Dragon-Striking Heaven-Shaking Thunder Cannon (Hiryu Gekizoku Shinten Raiho)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 88: Flying Dragon-Striking Heaven-Shaking Thunder Cannon (Hiryu Gekizoku Shinten Raiho)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: blast";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 230xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 12cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Fires a gigantic blast of spiritual energy resulting in an truly enormous explosion. Dealing 10 Force dmg to a target in this turn, 5 force damage to every one or thing 10ft circle around the target and if that target recieves the first full damage, the target receives an after effect 10 physic damage at the end of your next turn, if not, the target receives half the physic damage.";  
    
    }else if (x === "Hadou 90: Black Coffin (Kurohitsugi)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 90: Black Coffin (Kurohitsugi)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 300xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv15,  4cp every end turn";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, 3 turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Forms a box of black energy around a target, which is then pierced by dozens of energy 'spears', lacerating the one inside from head to toe. This skill takes 3 of your turns to prepare(you cant do anything during preparation and skipping will not take hp but give you cp), as a reaction in opponent turn after the 3 turns or in the beginning of your fourth turn after activation you say “hodou 90 …. Black coffin”, this attack divides targets hp by 1.5 and also deals additional nerotic damage equal to 2x user Wis mod, target can roll a Wis saving throw of DC 15, taking half the nerotic damage on a save or taking no nerotic damage at all if the roll was a 19 or 20. <br>Chant: 'The crest of turbidity, seeping out. An insolent vessel of madness. Boiling up, denying, numbness, blinking, obstructing slumber. The steel princess who creeps. The mud doll, ever disintegrating. Unite! Oppose! Filling the earth, know your own impotence!'";  
    
    }else if (x === "Hadou 91: Thousand-Hand Bright Heaven Culling-Spear (Senjū Kōten Taihō)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 91: Thousand-Hand Bright Heaven Culling-Spear (Senjū Kōten Taihō)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 320xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv10, 15cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, 2 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 5 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Summons several spears of light that are all fired towards the same focal point where the intended target resides. The culminating explosion is exceedingly devastating.(cant be used in first turn) summon 5 seprate spears, which can be fired any time as an ation or reaction but will disperse after 5 turns. each spear deals raidant damage equal to half the targets hp but damage cant be more than targets con score, <br>Chant: 'Limit of the thousands hands, respectful hands, unable to touch the darkness. Shooting hands unable to reflect the blue sky. The road that basks in light, the wind that ignited the embers, time that gathers when both are together, there is no need to be hesitant, obey my orders. Light bullets, eight bodies, nine items, book of heaven, diseased treasure, great wheel, grey fortress tower. Aim far away, scatter brightly and cleanly when fired.'";  
    
    }else if (x === "Hadou 96: Single Blade Cremation (Ittō Kasō)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hadou 96: Single Blade Cremation (Ittō Kasō)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 350xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv15, 10cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, 2 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "It is a spell that causes a huge pillar of fire to erupt from the ground in the shape of a katana's tip. It is implied to be a forbidden technique that can only be activated by using one's own body as a catalyst. Aizen calls it the spell of sacrifice. Deal fire dmg according to 3x your Wis score to targets in a 30ft x 30ft square, all targets affected Must make a Dex saving throw of DC 17, takig half the damage on a save. this will make your hp turn zero, this damage neglects, AC, immunity or resistance to fire dmg. But if opponent dies by this you win. (cant be used in first turn).";  
    
    }else if (x === "Bakudou 1: Restrain (Sai)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 1: Restrain (Sai)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Bind";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Locks a target's arms in place behind their back. target is binded, cant use skills that require hands and speed is halved, target must make a Str saving throw of DC 9, breaking free on a save. target ca repeat the savig throw at the start of thier turns.";  
     
    }else if (x === "Bakudou 4: Crawling Rope (Hainawa)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 4: Crawling Rope (Hainawa)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Bind";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "An energy rope entangles a target's arms.opponent cant attack you for 2 of their turns. target is binded, cant use skills that require hands and speed is halved, target must make a Str saving throw of DC 12, breaking free on a save. target ca repeat the savig throw at the start of thier turns.";  
    
    }else if (x === "Bakudou 8: Repulse (Seki)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 8: Repulse (Seki)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier (Repel)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Until end of targets next turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Creates a small shield on the forearm that briefly paralyzes and repels whatever hits it. Create a barrier with 5 hp in front of you. if a range attack hits the barrier, after the barrier takes damage the attack is sent back to the attacker (attacks that are repelled deal only 10dmg or less), if the barrier is hit with a unarmed melee attack at melee range, after the barrier takes damage the target is paralysed until the end of its next turn.";  
    
    }else if (x === "Bakudou 9: Strike (Geki)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 9: Strike (Geki)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Engulfs a target in red light, completely paralyzing them. target must make a Wis saving throw of DC 13, on a fail the target is paralysed, the target can repeat the savig throw at the end of their turns ending the effect on a save. wont work on creatures that cant be paralysed or has Wis score more than 20. <br>Chant: 'Disintegrate, black dog of Rondaniini,Look upon your burning soul and sever your throat!'";  
    
    }else if (x === "Bakudou 9: Disintegrating Circle (Hōrin)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 9: Disintegrating Circle (Hōrin)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Bind";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 143xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp every of users end turns";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, 10 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Causes an orange hued tendril with spiraling yellow patterns to erupt from the users hand and attempts to trap a target. The end of it remains in the hands of the user allowing them to control the path of the tendril before and after capture. The kidou is able to connect with another one of itself if both have captured a target and bind them together. 3 rope like tendrils are spawned and each move 50ft per turn, if a tendril is within melee range, you can attempt to restrain the target, target must make a Dex saving throw of DC 13, getting restrained on a fail, the tendril can then only move half its speed and can no longer restrain anyone else. if 2 or the 3 tendrils are 50ft close to each other, with your ous action, you cam joi them together with or without restrained targets. the targets can repeat this saving throw at the end of thier turns, breaking free on a save and destroying that particular tendril. Chant: 'Disintegrate, black dog of Rondaniini, Look upon yourself and tear out your own throat!'";  
    
    }else if (x === "Bakudou 21: Red Smoke Escape (Sekienton)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 21: Red Smoke Escape (Sekienton)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Evade";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 13  0xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Creates a blast upon activation and is used like a ninja's smoke bomb. while a target is within range and can see you, or you are the target of an attack, as a reaction you can use this skill, creating a smoke bomb, you can now move to a space within half your movement speed";  
    
    }else if (x === "Bakudou 26: Curving Light (Kyakko)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 26: Curving Light (Kyakko)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp or 0cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous, 15 of user end turns(second effect)";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Conceals the user's spirit energy or other kidou using spiritual energy, presumably by bending light. After using this skill you play again, you don’t have to say your next skill rather tell it to the modder and the skill will take effect. it doesnt work for physical skills. or you can hide you cp, only you and modder will know how much cp you have left, you can also use another action after this second effect.";  
    
    }else if (x === "Bakudou 30: Beak-Piercing Triple Beam (Shtotsu Sansen)"){ 
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 30: Beak-Piercing Triple Beam (Shtotsu Sansen)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Bind";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Shoots three beams of light that pin the target to one place on a surface, slamming into his/her body in three places in a shape of a perfect triangle. if it hits target, the targets takes radiant damage of 4 and is restrained, Target must the make a Wis saving throw of DC 14 in attempt to break free, targte can repeat this saving throw at the start of their turns.";  
    
    }else if (x === "Bakudou 37: Suspending Star (Tsuriboshi)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 37: Suspending Star (Tsuriboshi)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg/nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp or 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self or 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Creates a star-shaped cushion of Spiritual Energy, which anchors it to nearby objects with 'ropes' of spirit particles. It can stop falling objects, acting like a safety net. When you are about to take force damage from a attack, only take 50% of the damage. max initial damage that can be cut is equal to user con score or can also be used when a target within 60ft is about to take fall damage, they land dafely instead and take no fall damage but fall prone instead.";  
    
    }else if (x === "Bakudou 39: Arc Shield (Enkosen)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 39: Arc Shield (Enkosen)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Shield";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft front";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "as a reaction, Summons a shield of condensed Reiatsu to block opponents' attacks. Summon a sheild with 8hp. this sheild does ot allow residual damage pass";  
    
    }else if (x === "Bakudou 44: Barrier (Sekisho)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 44: Barrier (Sekisho)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 5 of users end turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Creates a fast-forming wall against fairly strong attacks. Creates a shield take can take damage equal to your Wis score in a turn, it is destroyed if hit with attacks that cumulative damage sums up to the damage threshold.";  
    
    }else if (x === "Bakudou 58: Grasp of the Chasing Sparrow (Kakushi Tsuijyaku)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 58: Grasp of the Chasing Sparrow (Kakushi Tsuijyaku)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 60xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 1 cp x targets lv per 30 minutes";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 minute";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 hours";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Tracks and locates any spiritual force the user focuses on. To activate it, the user must draw a circle on the ground, cut into four parts with a specific character in each. The incantation animates the circle, causing various numbers to appear within until the specific set is found. The number set seems to be a variation on longitude and latitude. As it imply it is not basically a battle skill. <br>Chant: 'Heart of the South, Eye of the North, Fingertip of the West, Heel of the East, Carry the Wind and Gather, Banish the Rain and Disband!'";  
    
    }else if (x === "Bakudou 61: Six Rods of Light Prison (Rikujōkōrō)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 61: Six Rods of Light Prison (Rikujōkōrō)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/ Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Bind";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Summons six thin, but wide, beams of light that slam into a target's midsection, holding them in place. target is pushed 20ft backward if he has more than 12 str score or double the distance if less, target recieves 7 piercing damage and if theres a obstacle or wall at the place were target is pushed to, target is pinned down there and restrained. target must make a Str saving throw of DC 14 at the start of every of their turns, breaking free but taking 4 piercing damage also on a success.<br>Chant: 'You who is crowned with the name of Man, wearing a Mask of blood and flesh, flying on ten thousand fluttering wings, with Thunder's carriage and an empty Spinning Wheel, break the Light into six pieces, carve a twin Lotus on a wall of Pale Blue Flames, and await the Blazing Fires to reach the Distant Heavens!'";  
    
    }else if (x === "Bakudou 62: Hundred Steps Fence (Hyappo Rankan)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 62: Hundred Steps Fence (Hyappo Rankan)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged-Phy Atk / Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Pierce/Bind";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 180xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 actions";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A rod formed of energy is thrown towards the target before it disintegrates into numerous short rods which are used to pin the target to the surroundings and render them immobile. Target recieves 9 damage(5 piercing + 4 radiant), if theres a obstacle or wall within 30ft behind the target, the target is pushed back and restrained there until he pays 5cp to break free.";  
    
    }else if (x === "Bakudou 63: Winding Binding Chains (Sajo Sabaku)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 63: Winding Binding Chains (Sajo Sabaku)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Sends ropes of light from the user's fingers to wrap around the arms and torso of the target to restrain it by binding its arms to the torso. target is restrained and Incapacitated and must make a Str Saving throw of DC 16, breaking free on a success. target can repeat this saving throw at the end of their turns.";  
    
    }else if (x === "Bakudou 73: Inverse Mountain Crystal (Tozanshō)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 73: Inverse Mountain Crystal (Tozanshō)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ??cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Creates a pyramid-shaped barrier around the caster. The caster is protected from any outside attack for unlimited time as long as he pays half the damage as cp he recived every time they stay in the barrier, the barrier is destroyed when the user is unabled to pay the complete cp and the user takes half the damage.";  
    
    }else if (x === "Bakudou 75: Quintet of Iron Pillars (Gochu Tekkan)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 75: Quintet of Iron Pillars (Gochu Tekkan)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive Bind";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: (6 + targets level)cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 actions";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Summons five incredibly tall and thick pillars which are connected to each other by chains to pin a target to the ground. targets cant react to this skill, the target must make a Dex saving throw of DC 17, Evading this skill on a sucess, on a fail the target takes 8 bludgeoning damage and is pinned(Restrained and incapacitated). the target must then make a Wis saving throw of DC 15 to break free from this, on a save, the target must divide Their hp with 1.2 aproximately. the saving throw can be repeated at the end of thier turns <br>Chant: 'Wall of iron sand, Tower formed from hate, forge molten iron and neatly finish in silence!'";  
    
    }else if (x === "Bakudou 77: Soaring Net of the Heavens (Tentei Kuura)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 77: Soaring Net of the Heavens (Tentei Kuura)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 hour";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Transmits messages or properties mentally to anyone within an area of the caster's choosing. In addition to reciting the spell, the user must draw specific markings on their arms, which are animated by the spell to convey the messages. The messages can be spoken either by the caster or by another within the vicinity of the caster. <br>Chant: 'Black and white net! Twenty two bridges, sixty six crown strings, footprints, distant thunders, mountain peaks, valleys, night shadows, cloud sea, cyan line! Fill up the circle and zoom to the edges of the sky!'";  
    
    }else if (x === "Bakudou 78: Hexagonal Barrier/Million Shield (Millon Escudo)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 78: Hexagonal Barrier/Million Shield (Millon Escudo)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction or 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous or Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This spell creates a powerful proximity-activation barrier which can be placed upon any part of the body. It activates when an attack reaches the point where it is cast. When the attack hits the barrier, a hexagonal shape appears which can stand up to extremely powerful attacks.this barrier can be used as a reaction turn when he plays any ranged attack skill, nullify the skill and end their turn immediately. this skill can be used in users turn as a bonus action and auto activates when a ranged attack is fired. <br>Chant: 'Black and white net. Twenty-two bridges, sixty-six crowns and belts. Footprints, distant thunder, sharp peak, engulfing land, hidden in the night, sea of clouds, blue line. Form a circle and fly though the heavens.'";  
    
    }else if (x === "Bakudou 79: Nine Sunlight Traps (Kuyō Shibari)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 79: Nine Sunlight Traps (Kuyō Shibari)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 230xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv15, 8cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, 2 actions";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 250ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Creates eight black holes that emit spiritual energy in the personal space surrounding the target, with a ninth black hole manifesting in the center of the target's chest. the target must make a Wis saving throw of DC 18, neglecting this skill on a save, on a fail, the target takes half necrotic and half cold damage equal to half their hp + half their cp added togther. damage max is 100. damage neglects AC, resistance and immunity. this will only affect targets that are users level, lower or 1 level higher than users";  
    
    }else if (x === "Bakudou 81: Splitting Void (Danku)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 81: Splitting Void (Danku)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 240xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 3 of users end turns after this";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Creates an energy barrier in the form of a rectangular wall. According to Byakuya, it is capable of stopping destructive spells up to #89. This is seen also when Aizen uses it to block Tessai's hado #88. the shield is 80ft high and 50ft wide. target cant pass through the shield and it blocks any attack dealt to it unless the attack does 100dmg or more ";  
    
    }else if (x === "Bakudou 99, Part One: Restrain (Kin)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 99, Part One: Restrain (Kin)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Bind";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, 10 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      " this will only work on a humaniod target thats 2 steps bigger than you or smaller. Wraps black cloth around the target and places gray slabs spaced along the cloth,it can be wrapped around any part of the target like the legs,hands etc. target must make a Dex savig throw of DC 17 to evade this skill on a success, on a fail, user chooses the target, if its the legs are target, target is restrained and incapacitated, if hands are targeted, target is restrained and cant use skills that require hands. this skill can be used up to any number of times but the cp usage doubles x1.5 for every time you use it, target can make a Wis or Str savig throw(Target chooses) of DC 14 at the end of every of their turns, ending this skill on a success.";  
    
    }else if (x === "Bakudou 99, Part Two: Ultimate Supression (Bankin)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bakudou 99, Part Two: Ultimate Supression (Bankin)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 300xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Bakudou 99, Part One: Restrain (Kin)(SKill, active)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concenntration, 3 of users turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when you have used 'Bakudou 99, Part One: Restrain (Kin)' on a target and its active then you are allowed to use this skill. this skill can only be used once per turn and must be used one by one in users consecutive turns 3 turns if interupted you can use this skill another time. <br>#First Song, Constriction (Shiyuu)(neg) – Wraps foe in cloth. totally incapacitating the target and neglects saving throws from that target. 4cp.<br>#Second Song, Hundred Bolts (Hyakurensan)(Phy atk) – Pierces foe with iron bolts. 5 different iron bolts strike target dealing 6 piercing damage each to the target. 8cp. <br>#Final Song, Ultimate Seal (Bankin Taihou)(Phy atk) – Drops a gigantic stone block on foe. dealing 15 bludgeoning damage. target is trapped under the stone and must roll a Str or Wis saving throw of DC 16 every of thier end turn. breaking free on a success. 11cp.";  
    
    }else if (x === "Soul Burial (Konsō)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Soul Burial (Konsō)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Instant KILL";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Presses the base of a Zanpakto(melee weapon) hilt against the forehead of an opp, will only affect a target if their hp is left is lower than your wis mod or below(this skill is not regarded as an attack skill), the target must make a Wis saving throw of DC 17, instanly killing them on a fail ,opponent cant come back to life by a skill effect if he dies by this unless overwritten).";  
    
    }else if (x === "ddddd"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "ddddd";
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
    
    
    ////////////////////////////
    // Hollow skills/////////////
    ////////////////////////////
    
    
    
    
    else if (x === "Hollow Flash (Cero)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hollow Flash (Cero)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: beam";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50 X Dex Mod";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Gathers a red ball of energy at a point, then fires it off as a destructive beam. The color may vary depending on the Hollow's personality. Deal 8 damage(4 piercing + 4 force) to a target. this skill can be used more than once but the cp usage increases by 1 everytime";  
    
    }else if (x === "Royal Hollow Flash (Gran Ray Cero)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Royal Hollow Flash (Gran Ray Cero)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: beam";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 180xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv20, 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50 X Dex Mod";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A more powerful version of Cero only used by Espada, blue in color and requires a drop of the Espada's blood to use. Deal 12 damage (6 piercing + 6 necrotic) to a target and deal 2 slashing damage to you. this skill can be used more than once but the cp usage increases by 1 everytime";  
    
    }else if (x === "Heavy Performance Hollow Flash (Cero Doble)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Heavy Performance Hollow Flash (Cero Doble)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Beam, Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 250xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ??cp, any 'Cero' skill(unused)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50 X Dex Mod";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A variation performed by Nelliel Tu Odelschwanck, by swallowing her opponent's Cero and returning it back to the user along with her own Cero, making it more powerful. When an ranged attack that deals force or necrotic damage with sub class of beam or blast is used against you and you have a unused cero skill in your skill set, neglect the attack (dmg neglected must not be more than wis score)of the skill Fired at you and fire the cero in your card as a reaction, the cero damage is now equal to the damage you just neglected plus the cero skill damage (any type of attack skill as far the word cero is in it ) also adding your Str Mod, dealing the ultimate damage to the target. The cp used is double the cp of the cero you use plus the cp used for the first skill(all skills maintain their normal effects and the cero skill is used after this).";  
    
    }else if (x === "Black Hollow Flash (Cero Oscuras)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Black Hollow Flash (Cero Oscuras)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Beam";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 300xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv 20, 10cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50 X Dex Mod";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The strongest of all Ceros, pitch black in color. It's the full power Cero of an Espada. Deal 15 netrotic + wis mod(max 10) damage to a target. this skill cant be neglected or blocked(if blocked and target fails the saving throw, the defense is destroyed and residual damage is done) unless target makes a Dex saving throw of DC 15, neglecting it on a success. this skill can be used more than once but the cp usage increases by 1 everytime";  
    
    }else if (x === "United Hollow Flash (Cero Sincrético)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "United Hollow Flash (Cero Sincrético)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ??cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: cero highest range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Formed when two arrancar merge their Ceros before firing it off, essentially a Fusion of Ceros.after this skill is used, You and an ally are allowed to use any cero skill each, the damage is added together and given to opponent, this atk cant be neglected.";  
    
    }else if (x === "Infinite Ammunition Hollow Flash (Cero Metralleta)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Infinite Ammunition Hollow Flash (Cero Metralleta)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom(summon)";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Blasts";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 220xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: resurrection mode, 9cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A variation performed by Coyote Stark while in his Resurrección. By using his right pistol, Stark is able to fire a barrage of Cero at his opponent. when in your resurrection mode only, you can use this skill to spawn 5 cero balls each with an thunder damage of 7 each, when sent a target, they can use 4cp to destroy a ball other wise they cant be neglected or evaded, each ball act as an extra attack which can be fired as a bonus action or reaction. this skill can be used more than once but the cp usage increases by 1 everytime.";  
    
    }else if (x === "The Gaze (Cero La Mirada)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "The Gaze (Cero La Mirada)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Beam";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 180xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Charges a lime-green Cero in front of both eyes. The two Ceros are generated separately, but fuse together before firing, in a way similar to the Cero Sincrético. Deal 10 netrotic + wis mod(max 5) damage to a target. this skill can be used more than once but the cp usage increases by 1 everytime.";  
    
    }else if (x === "Beautiful Charlotte Chuhlhourne's Final Holy Wonderful Pretty Super Magnum Sexy Sexy Glamourous Cero (Byūtifuru Sharurotte Kūruhōnzu Fainaru Hōrī Wandafuru Puritī Sūpā Magunamu Sekushī Sekushī Guramarasu Sero)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Beautiful Charlotte Chuhlhourne's Final Holy Wonderful Pretty Super Magnum Sexy Sexy Glamourous Cero (Byūtifuru Sharurotte Kūruhōnzu Fainaru Hōrī Wandafuru Puritī Sūpā Magunamu Sekushī Sekushī Guramarasu Sero)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft cone";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A variation of Cero which is performed by Charlotte Chuhlhourne. Despite having a very long name and the shape of a heart, it is just an ordinary Cero as noted by Yumichika Ayasegawa. It does however have a rather wide blast radius. Deal 5 force damage to all targets within range. ";  
    
    }else if (x === "Negación"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Negación";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def/Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 145xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 of users end turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Sends down a column of yellow light on Hollows/Arrancar and returns them to Hueco Mundo while shielding them completely from any damage. Creates a barrier of 10hp, allies within range are also cover by this barrier, if this barrier last for more than 2 of your end turns, you can choose to leave the battle without bearing consequences, if you choose not to you can still remain with the shield.";  
    
    }else if (x === "Bara (Hollow Bullet)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bara (Hollow Bullet)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Beam";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A ball of energy that forms as red lighting around the hand, then fires off as a ball of red energy. Weaker than a Cero, but twenty times faster. Deals 4 piercing damage to target.";  
    
    }else if (x === "Hierro"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hierro";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def/Time/Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 175xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Refers to the hardened skin of the Arrancar, which is a result of their compressed spiritual power. While their skin is strong enough to block even released Zanpakutō bare-handed, it is by no means impenetrable. Stronger Arrancar, such as Espada, have proportionally stronger skin than usual. While this skill is active, any time you take damage you get a damage counter, all damages you take are decreased by the damage counter you have, the damage counter resets at the start of every of your turns with a initial value of 1.";  
    
    }else if (x === "Sonic Twins (Gemelos Sonído)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Sonic Twins (Gemelos Sonído)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Summon(clone)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3 cp to spawn each clone";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Zommari Rureaux is the only Arrancar shown to have been able to use this technique and it allows him to create clone-like afterimages of himself. Up to five clones can be created using this technique. Create from 1 to 5 clones. each can use all your skills except from this one. All clones share same cp and ability scores with you. the clones have 1hp each and they have all your skills including the ones you have used(except this one) but not your KKG. The clones still make use of your cp. only Opponents with special sights can attack you when you and your clones are 5ft within each other, this can also work if the attacker rolls a perception check of DC 13, on a save the attack is directed to you, on a fail it is directed to your clone. The clones are automatically destroyed when your health reaches 5 or less, clones hp cant be more tham 2 although this limit increases +1 for every 5 levels interval you enter from lv 1 respectively.";  
    
    }else if (x === "Loosening Void (Descorrer)"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Loosening Void (Descorrer)";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Conjure(portal)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv20, 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 10 minutes";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A technique used by Espada-level Arrancar and sometimes others, to open a Garganta between the living world and Hueco Mundo. user opens a portal that leads to Hueco Mundo";  
    
    }else if (x === "Pesquisa"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Pesquisa";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Sense";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Arrancar ability similar to that of a Shinigami's to sense spiritual pressure, functions as a sonar. when you cant target or see a target and the target is within range, you can use this skill to dectect that target as far the target has cp and its not masked, the effect that lets you not been able to see or target them are neglected for only you. you use a action to tell another player the location of the target which neglects the effect for them too but only until the targets next turn.";  
    
    }else if (x === "Gonzui"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Gonzui";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff(Hp)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 135xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Str";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Arrancar ability used to absorb multiple weak souls at once. for each dead creature that was living and had life in the field within range,  Gain hp equal to all the targets lv, creatures which this skill as been used on can not be resurrected unless you allow or you are killed. ";  
    
    }else if (x === "(AF) Focus"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Focus";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff(attack)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: --";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After using this, you can use another action, must be an attack, the attack cannot be neglected. ";  
    


      
    }else if (x === "ddddd"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "ddddd";
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
    
    }else if (x === "ddddd"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "ddddd";
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

  if (x === "Slant strike"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "Slant strike";
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

  }else if (x === "Vertical strike"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "Vertical strike";
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
  
  }else if (x === "horizontal strike"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "horizontal strike";
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

  }else if (x === "Sword uppercut"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "Sword uppercut";
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

  }else if (x === "rage spike"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "rage spike";
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

  }else if (x === "sonic leap"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "sonic leap";
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
  
  }else if (x === "vertical arc"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "vertical arc";
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

  }else if (x === "horizontal square"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "horizontal square";
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
  
  }else if (x === "vertical square"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "vertical square";
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

  }else if (x === "snake bite"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "snake bite";
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
  
  }else if (x === "vorpal strike"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "vorpal strike";
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

  }else if (x === "savage fulcrum"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "savage fulcrum";
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
  
  }else if (x === "Serration wave"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "Serration wave";
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
  
  }else if (x === "howling octave"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "howling octave";
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

  }else if (x === "sword block"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "sword block";
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
  
  }else if (x === "tornado spin"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "tornado spin";
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
  
  }else if (x === "spear block"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "spear block";
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

  }else if (x === "360 air manoeuver"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "360 air manoeuver";
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

  }else if (x === "Stab"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "Stab";
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

  }else if (x === "Throw"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "Throw";
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

  }else if (x === "planetary slash"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "planetary slash";
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
    
  }else if (x === "wind cut"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "wind cut";
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

  }else if (x === "timid slice"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "timid slice";
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
  
  }else if (x === "multi Sword Block"){
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

  }else if (x === "Clobber"){
    modal.style.display = "block"; 
    //let image = document.getElementById("item_img").innerHTML = "stick";
    let name = document.getElementById("skill_nametwo").innerHTML = "Clobber";
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
  
    if (x === "Ki Blast"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Ki Blast";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Blast";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 20xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 1 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user blasts a small ball made of ki towards a target dealing 2 force damage on a hit";  
    
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