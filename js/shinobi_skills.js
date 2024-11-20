function rodclick(n){
    let modal = document.getElementsByClassName("0")[0];
    let x = n.toString();

    if (x === "Bashōsen: Coil of Fire"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bashōsen: Coil of Fire";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5 Cp, Bashōsen or any heavy fan weapon above rare(Equipped).";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Using the Bashōsen, the user waves the fan and unleashes an enormous trail of intense flames which torrents straight towards their intended target. The flames move 20ft per turn, stops when it hits the range limit and deals 7 fire damage when they hit.";  
    
    }else if (x === "Caged Heat Arson Prison"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Caged Heat Arson Prison";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 174";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(Both hands), 6cp(optional)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 400ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: until start of Targets turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "For this skill, AC of 15 and below is neglected. User directs pieces of rubble at a target. By tensing his fingers, User can heat the rubble remotely, causing it to cling to targets when it contacts them and inflict severe burns dealing 3 fire damage to the target and the target is grappled (target can make a Str saving throw of DC 15 i other to break free neglecting the other effect of this skill). By clenching their fist with a reaction in the start of targets turn and paying 6cp, user can make the rubble detonate, creating enough force even to break through Susanoo, dealing 10 fire damage to the target and 5 fire damage to other targets 5ft around the target. ";   
    
    }else if (x === "Cloud-Style Flame Beheading"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Cloud-Style Flame Beheading";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom/Charged Atk/Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave(Arcs), Buff";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Chakra Flow, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: melee weapon, cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: arc atk range - 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user first imbues their blade with fire with 2cp, before slashing in the direction of the desired enemy, resulting in the creation of large arcs of intense flame that follow the trajectory of the previous swing, you pay 2cp to swing flame arc towards a target, this skill can be used so as you have Cp to use if not the fire on the weapon extinguishes. when a arc hits, it deals 4 fire damage to the target. <br><br> (User must be at least lv15 to use this part of this skill). A skilled user of this technique, such as Atsui, is capable of surrounding their immediate area with a circular wall of flames, incinerating multiple targets even if they approach from numerous angles simultaneously. as a reaction, you can pay 3cp and summon a wall of flame around you with is 5ft from you. all targets within range take 3 fire damage";   
    
    }else if (x === "Chained Prison Explosion"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Chained Prison Explosion";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive Restrain ";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Fire Release: Exploding Flame Formation(skill), kusarigama or chain(weapon), 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After User restrains his opponent with his kusarigama (target can make a str saving throw of DC 13 in attempt to break free ending the other effects on a success), he traps them in a sphere of exploding tags before adding fire to it, then it explodes dealing 8 fire damage.";   
    
    }else if (x === "Dance of the Fireball"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Dance of the Fireball";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk/Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp,katana or other one handed melee Weapon, cursed seal lv2(Mode/Powerup)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 Turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User, whilst in the level 2 cursed seal, attacks his opponent with a series of slashes with his katana(replaceable) dealing 2 vertical and 2 slant Strike attacks with damage one by one respectively, before flying into the air above them and releasing a fireball down upon them to finish them off dealing 5 fire damage. Using This Skill Means You Can No Longer Use An Action This Turn. All Skills In This One Proceeds Stage By Stage And Act As Their Own Attack Skill Separately Meaning The Whole Attack Stop If One Is Blocked Or Dodged.";   
    
    }else if (x === "Evening Shower Heavenly Crush"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Evening Shower Heavenly Crush";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Taijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp (you still pay cp for other skills used), Cherry Blossom Impact(Skill, WBU), Fire Release: Great Fireball Technique(Skill, WBU)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 Turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 15ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Only Works On Targets That Are same size with user or One Size Bigger Or Smaller. User kicks their opponent away within dash range dealing kick damage, dashes to where they'll land, and kicks them up in the air dealing kick damage x1.5. user then jumps up above them and proceeds to kick and punch them toward the ground dealing punch and kick damage. then finishes by setting them on fire by using Fire Release: Great Fireball Technique and the landing a Cherry Blossom Impact on them, activating Cherry Blossom Impact and dealing necessary damage. Using This Skill Means You Can No Longer Use An Action This Turn. All Skills In This One Proceeds Stage By Stage And Act As Their Own Attack Skill Separately Meaning The Whole Attack Stop If One Is Blocked Or Dodged.";   
    
    }else if (x === "Exploding Flame Shot"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Exploding Flame Shot";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: balls";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous or Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "By creating a spark from their hands, this technique allows the user to throw multiple balls of flames, which are able to either; <br><br> cause fiery explosions on impact dealing 4 fire damage to the target <br><br> or <br><br> set the target on fire, dealing 1 fire damage to the target for each of their start turns until target is hit by a water skill or takes a turn to put out the flames.";   
    
    }else if (x === "Falling Fire Scatter"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Falling Fire Scatter";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Multi Shot";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 75";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp, cursed seal lv2(mode)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user, whilst in the cursed seal level 2, flies through the opponent and then into the air hovering 40ft on air and 30ft at the other side from target, where he releases a series of small fire shots that rain down upon the opponent. Roll a D8 die, the number you got is the amount of shots fire towards the target and each shots does 2 fire damage.";   
    
    }else if (x === "Fanned Calamity Flames"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fanned Calamity Flames";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 139";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp (you still pay cp for other skills used), Fire Release: Great Fireball Technique(Unused), gunbai or any heavy fan weapon";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 Turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After shooting fire onto the opponent with Fire Release: Great Fireball Technique dealing respective damage, User uses his gunbai to strengthen the flames, which creates a vortex of fire that knocks them into the air dealing 50% more damage and sends target 30ft up and 20ft flying back, target takes fall damage if they fall like that. Using This Skill Means You Can No Longer Use An Action This Turn. All Skills In This One Proceeds Stage By Stage And Act As Their Own Attack Skill Separately Meaning The Whole Attack Stop If One Is Blocked Or Dodged.";   
    
    }else if (x === "Fanned Flame Great Fire"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fanned Flame Great Fire";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: whirls";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 125";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7cp, gunbai or any heavy fan weapon(equipped)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User fans his gunbai to unleash three fire whirls that blast the opponent. The 3 fire whirls are 5ft apart and must move 25ft per turn towards a target but can only change direction 5ft per turn, each of them deal 5 fire damage on impact. the fire extinguishes if they pass the range or the user turns them off with a bonus action or reaction";   
    
    }else if (x === "Fire Release Cooperation Technique: Garuda"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release Cooperation Technique: Garuda";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Co-op, Wave";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp each, Fire Release Cooperation Technique: Garuda";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Three users which are not more than 10ft separate from each other, each breathe a long stream of intense fire, which combine to form a flaming dragon. This attack covers a CONE range with the base 25ft wide and 15ft high and covers the range, all targets in contact receive 15 fire damage.";   
    
    }else if (x === "Fire Release: Ash Pile Burning"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Ash Pile Burning";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Character > Lv 10, 5cp, flint(item)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user spews a stream of chakra-infused gunpowder from their mouth, which surrounds the region the size of a cube of 20ft in size. As the gunpowder is composed entirely of ash, it stays in the air around the victim like a cloud, which can be used like a smokescreen (target is semi-blind within this smoke screen). After surrounding the enemy with the ash, with a bonus action or reaction in the targets start turn, the user can ignite it with a flint placed on their teeth beforehand to create a spark, resulting in a violent explosion, burning the enemy and dealing 10 fire damage. However, this technique requires keen senses to read the air currents, the insight to read the movements of the enemy, the tactical experience to not also enfold one's allies in the flames, and careful attention for the timing of the ignition.";   
    
    }else if (x === "Fire Release: Big Flame Bullet"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Big Flame Bullet";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Senjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp, Sage mode(any)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous or Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique is a Senjutsu altered version of the Fire Release: Flame Bullet. The user fills their mouth cavity with oil, created inside his body with senjutsu chakra. This oil is expelled and at the same time ignited, creating a massive flame, equivalent in power to a multitude of Flame Bullets. The flames can be used as a single projectile dealing 9 fire damage on impact with a target <br><br>or<br><br> a continuous stream of flames which deals 4 fire damage to a target continuously for 3 of your turns, during those of your 3 turns you continue to use this skill on a target, you can’t use any other skill until this skill is done. The target speed is halved and can roll a DC 13 Dex saving throw after the first damage and at the start of every of their turns to dodge this attack, on a fail the target is stunned due to anguish until the next roll.";   
    
    }else if (x === "Fire Release: Blazing Meteors"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Blazing Meteors";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Balls";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user creates a myriad of small fireballs that are then directed towards the target's destination. you can create up to 5 fire balls, each created with 2 cp, you can use a bonus action or reaction to send up to 2 at once, each dealing 3 fire damage on impact with a target";   
    
    }else if (x === "Fire Release: Burning Circle"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Burning Circle";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: balls";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 125";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User creates a circle of 8 fireballs around him, which revolve around him, protecting from attacks and striking the people attacking him with the flame. with a reaction, when you are targeted for a melee attack, you can send a fireball towards that target, each fire ball deals 3 fire damage on impact";   
    
    }else if (x === "Fire Release: Crimson Earth Spider"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Crimson Earth Spider";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 143";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 of users turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user spews out fire that both surrounds the enemy and then transforms into a spider that attacks the enemy. This technique effectively traps and attacks an opponent at the same time, and can be used to force them into another attack. the target is surrounded by a flame wall 10ft from them that deals 5 fire damage when touched. in your next turn, using your action, the fire wall turns to a flaming spider which acts as a new attack and attacks the target, dealing 7 fire damage on hit";   
    
    }else if (x === "Fire Release: Demon Lantern"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Demon Lantern";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 145";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 of users turns, Concentration";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique releases 5 floating fireballs around the user, which take the shape of ghosts at the final stage of the technique. After performing the required hand seal which is complete after the performing time, they attack the opponent in swarms. Each fireball creates a huge flame at the moment of impact dealing 4 fire damage each.";   
    
    }else if (x === "Fire Release: Dragon Fire Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Dragon Fire Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: wave";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 163";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp, wire strings(optional upgrade)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: line 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous or continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user spits flames from their mouth, like a dragon's, quickly travel forward in a straight direction. Upon contact with a target, the affected area is engulfed in flames dealing 8 fire damage to the target. Whereas the Great Fireball Technique will burn everything in the vicinity, the Dragon Fire Technique is more narrowly focused at its initial target, likened to a projectile.<br><br> When first used by Sasuke Uchiha, he uses wire strings to guide the Dragon Fire Technique to his target's face. at atleast Lv5 and equip with a wire string of equal length as targets range, user can aim a particular body part, either head, left or right hand, left or right leg, and send the attack towards the chosen place dealing 8 damage and making that body part scar on a hit. if the body part is the head, and it hits, the target rolls a DC 14 CON saving throw and is knocked unconscious for 2 of their turns on a failed, but on a success the targets just takes a scar to a of their face, if its a creature its agro towards you is increased by 3. if either of targets hands, that particular hand cant be used until healed and is regarded burned. if its either of the targets legs, the target is knocked prone and speed is reduced by half.<br><br> if The anime later shows it burning through a line of enemies, with the flames moving from one enemy to the next. at least at lv 15, with a action you can send the flame from the initial target to another target within 10ft of the initial target by paying 4cp, dealing 6 fire damage to the new target. this can be repeated 2 more times after the first jump whilst paying cp for each transfer. failure to transfer the fire in a turn extinguishes the flame.";   
    
    }else if (x === "Fire Release: Dragon Flame Release Song Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Dragon Flame Release Song Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This is an advanced version of its parent technique. This technique allows the user to expel 3 dragon-headed fireballs from their mouth to cover the frontal, left, and right sides of the opponent. As the dragon-heads move in an erratic manner, it makes the technique much more difficult to avoid. each dragon head acts as different attacks towards the target and deal 5 fire damage when they hit";   
    
    }else if (x === "Fire Release: Exploding Flame Formation"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Exploding Flame Formation";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 9cp, explosive tags x 10";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous/Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique makes use of explosive tags that have had a Fire Release technique applied in advance, which are hidden along the earth's surface. When the target steps in place, the user slams their palm on the ground and causes the explosive tags to stream towards the target, wrapping around their body from the feet upwards and sticking to them. Once in place around the target's legs, the tags detonate simultaneously, causing a large explosion capable of blasting through solid rock and engulfing the target in flames. On one occasion, despite Hanzō commending Nagato for having avoided this technique, the latter still suffered permanent damage to his legs that severely restricted his mobility, attesting to its destructive power. you choose a placement on the map within range, which your opponent doesnt know about, when he tries to pass or stops at that placement, you can use a bonus action in your turn or reaction in their turn to activate the technique dealing 25 fire damage to a target. target takes 5 fire damage if this skill was dodged";   
    
    }else if (x === "Fire Release: Extinguishing Curtain Field"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Extinguishing Curtain Field";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User stomps the ground with his foot, creating a crack that goes under the opponent. He then sends fire into the crack, boiling the earth below the opponent and finishes by clapping his hands together, creating a large and fiery explosion where the opponent is dealing 8 fire damage to the target. this attack cant be blocked because it comes from below the ground and not directly to the target";   
    
    }else if (x === "Fire Release: Fire Dragon Bullet"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Fire Dragon Bullet";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp, Earth Release: Earth Dragon Bullet (Skill, optional)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 90ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A basic Fire Release technique, where the user exhales a flame breath from their mouth dealing 4 fire damage to a target. As shown by Hiruzen, this technique can be used in conjunction with Earth Release: Earth Dragon Bullet to ignite the projectiles fired by the latter technique, making it more devastating, dealing 7 fire damage instead.";   
    
    }else if (x === "Fire Release: Fire Dragon Flame Bullet"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Fire Dragon Flame Bullet";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After kneading chakra, the user breathes fire from their mouth. The flames are manipulated into the shape of a dragon and divided into 3 to strike the target from the left, right, and front all at once. Unlike the Great Fireball, which covers a wide area, the Fire Dragon Flame Bullet makes focused strikes, this skill cant be dodged, target must roll a Dex saving throw of DC of 13, taking the whole 16 fire damage on a failed and taking half the damage on a success. if a target hp hits 0 because of this skill, they quickly reduce to ash. Because of the power of this technique, as well as the amount of skill it takes to control the flames, there are very few ninja who can perform it, the Third Hokage being one such user.";   
    
    }else if (x === "Fire Release: Flame Attack"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Flame Attack";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 45";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 3 of users turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user imbues their fists with Fire Release. Upon striking the target, they will be consumed by flames. when activated, you next melee punch attack deals + 4 fire damage, it lasts for the duration until it is used";   
    
    }else if (x === "Fire Release: Flame Bullet"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Flame Bullet";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 99";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp, oil(optional)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or 2 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user fills their mouth cavity with oil, created inside his body with chakra, this takes 1 action to do unless you choose to use oil you have already kept down which then you dont need to use an action to prepare. with an action, This oil is expelled and at the same time ignited, This technique simply shoots a flame bullet at the enemy dealing 5 fire damage on impact with a target <br><br>or<br><br> a continuous stream of flames which deals 3 fire damage to a target continuously for 3 of your turns, during those of your 3 turns you continue to use this skill on a target, you can’t use any other skill until this skill is done and must pay 2cp each for oil or use more oil from your stash. The target speed is halved and can roll a DC 8 Dex saving throw after the first damage and at the start of every of their turns to dodge this attack, on a fail the target is stunned due to anguish until the next roll";   
    
    }else if (x === "Fire Release: Flame Capture"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Flame Capture";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Conjure";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 54";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 15ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: COntinuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user creates a fire whip with 3cp. It can knock an opponent a considerable distance, strong enough to damage rock. the whip can hit targets within range but deals half damage if the target is within melee range, on a hit the target takes regular whip damage + 2 fire damage. it can also be used a grapple a target with an action, the target within range must roll a Dex saving throw with DC 12 (if target is within 5ft/melee range, the DC is 8), on a failed, the target is grappled but can continue repeating the saving throw at the start of their turns. a target grappled takes 3 fire damage every of their end turns as far they are grappled, user also takes on 'Concentration effect' ";   
    
    }else if (x === "Fire Release: Flame Murdering Boundary"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Flame Murdering Boundary";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action and 1 bonus in users NT";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After the chakra kneaded inside his body is converted into fire which takes an action this turn, with a bonus action in users next turn, user jumps a considerable amount of height equal to their jump height and spews a large orb of flames straight to the opponent, dealing 8 fire damage on impact.";   
    
    }else if (x === "Fire Release: Flame Spear"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Flame Spear";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp(optional)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user creates a blade of fire with 4cp (this weapon gains the properties of a longsword), the flames of which spread horizontally ahead of them. The fire will go out if the user loses consciousness. on a hit with the weapon, the deals +3 fire damage.";   
    
    }else if (x === "Fire Release: Flame Whirlwind"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Flame Whirlwind";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 84";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Fire erupts around the user's body in a spiralling manner which is then launched with his hands towards the target. Once the technique hits the target, the opponent is sent into the air in a spiraling manner up 40ft and their body burns into ashes taking 6 fire damage and if the fall isn’t broken the target takes fall damage.";   
    
    }else if (x === "Fire Release: Flint Yagura"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Flint Yagura";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def/neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 67";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 3 of users turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user throws a lighter on the ground 10ft in front of his opponent and expands the flame into a wall of fire thats 50ft high and 30ft wide. It is noted to be a technique that 'makes a small spark burst into a pillar of fire'. this fire acts as a barrier dealing 4 fire damage to targets that touch it. the wall last for its duration unless extinguish. it consumes physical range attacks that deal less than 5 damage.";   
    
    }else if (x === "Fire Release: Flying Flame Bullet"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Flying Flame Bullet";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp, cursed seal lv(Mode)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 15ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "While in level two cursed seal form, user exhales a stronger short-range version of the Fire Release: Great Fireball Technique. dealing 7 fire damage all target in one direction within range";   
    
    }else if (x === "Fire Release: Fox Fire"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Fox Fire";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 154";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 12cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user manifests ten fire balls in a circle in front of them and launches them with their hand motions. each acting as a separate attack and can be sent to different targets within range. when a ball hits, it deals 3 fire damage";   
    
    }else if (x === "Fire Release: Great Blaze Ball"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Great Blaze Ball";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User exhales a meteor-sized sphere of fire that carries the enemy away back 20ft when it hits and causes a massive explosion on impact dealing 10 fire damage to the target and 5 fire damage to all targets 5ft from the point of explosion. The impact causes the ground around User to break apart while he remains unfazed. This is much like Fire Release: Great Fireball Technique, but a larger and more destructive version.";   
    
    }else if (x === "Fire Release: Great Dragon Fire Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Great Dragon Fire Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp, Fire Release: Dragon Flame Release Song Technique(Unused, skill)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: COntinuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user compresses a large amount of chakra built up inside their body and changes it into a dragon head-shaped fireball. The user then skillfully manipulates that great fire, and attacks their opponent. Even outside of the attack range, its power and reliability are stressed. This dragon shaped fire ball can move like a player with speed of 30ft(user cant control the fire cant move more than the skills range). if the fireball meets with a target in the same placement it explodes dealing 8 fire damage to the target. The flames have a high temperature, which can create an upward movement of air currents which in turn can give rise to thunder clouds. <br><br>(Atleast at lv10)A master of this technique can fire off several flames in succession and anyone caught in the technique could potentially be reduced to ashes. You can spawn up to 3 of these balls by paying cp for each";   
    
    }else if (x === "Fire Release: Great Fire Annihilation"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Great Fire Annihilation";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 250";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 10cp, Fire Release: Great Fireball Technique(Unused, skill)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The pinnacle of Uchiha Fire Release techniques, chakra kneaded inside the body is converted into fire, and then expelled from the mouth and shaped into a literal sea of flames, which covers a wide range as well. This makes the technique extremely difficult to either avoid or contain, with it requiring the combined efforts of several Water Release users in order to extinguish the flames. This attack is shaped like a cone from the user with 35ft base and deals 8 fire damage to anyone caught in it. A opponent using a dodge skill or any skill with the ‘dodge’ sub-category, must make a DC 15 Dex saving throw with the skill being neglected on a failed.  ";   
    
    }else if (x === "Fire Release: Great Fire Destruction"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Great Fire Destruction";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 230";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 9cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A technique where chakra kneaded inside the user's body is converted into fire, and then expelled from the mouth in a massive stream of intense flames that can set a vast area ablaze, engulfing the target in a veritable sea of flames. This attack is shaped like a cone from the user with 35ft base and deals 7 fire damage to anyone caught in it. If used upon a dense, combustible terrain, such as a forest, the confined area can greatly increase the possibility of the target's incineration making the damage 11 instead.";   
    
    }else if (x === "Fire Release: Great Fire Whirlwind"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Great Fire Whirlwind";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 149";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp, any heavy fan";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous or Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User swings his war fan and breathes fire into the swing, creating a wall of flaming whirlwinds. user can either use the whirlwinds to attack dealing 6 fire damage to the target or can place it 5ft from of them as a defensive barrier with the hp of 10(attacks with water in their name or text do double damage to this defense).";   
    
    }else if (x === "Fire Release: Great Fireball Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Great Fireball Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user kneads chakra in their body and turns it into fire, which they then expel from their mouth; the more chakra they use, the more flames that are produced. Sometimes the flames lack a distinct shape, being only a stream, but more often than not they take the form of a giant orb that maintains its shape until hitting a target. Upon impact, the fireball is powerful enough to crater the ground and vaporise the surroundings. Against living targets, the fireball can cause extensive burns. Using 2cp send a fire ball that deals 4 fire damage on hit, using 3cp send a fire ball that deals 5 fire damage on hit or using 4cp send a fire ball that deals 6 fire damage on hit. <br><br>The Great Fireball Technique was created by the Uchiha clan, and over time became one of their signature abilities. The Uchiha in fact used the Great Fireball Technique as a coming of age rite, with members not being considered true adults until they learned to perform it. In keeping with this, the manga has only ever shown Uchiha using this technique; the anime at times depicts non-Uchiha performing it.";   
    
    }else if (x === "Fire Release: Great Fireball Technique: Falling Fire"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Great Fireball Technique: Falling Fire";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Taijutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 154";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7cp, melee weapon(sword), elbow strike, slant strike, Face Knee strike, Fire Release: Great Fireball Technique";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 Turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "after user successfully hits with an elbow strike, this skill can be used as a continuation, user follows by sword strikes (3 slant strikes dealing respective damage) and knee attacks dealing Face Knee strike without any rolls or their effects, before jumping above and behind them and launching a fireball (taking 'Fire Release: Great Fireball Technique' effect). Using This Skill Means You Can No Longer Use An Action This Turn. All Skills In This One Proceeds Stage By Stage And Act As Their Own Attack Skill Separately Meaning The Whole Attack Stop If One Is Blocked Or Dodged.";   
    
    }else if (x === "Fire Release: Great Fireball Technique: First Step"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Great Fireball Technique: First Step";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Taijutsu, Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 160";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp, Fire Release: Great Fireball Technique";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 Turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 Turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User lands a series of hits (dealing 2 punch and 2 kick damage respectively), finishing with an upwards double kick dealing double your kick damage, sending his opponent up in the air. As they fall down, User shoots a burst of fire at them (taking 'Fire Release: Great Fireball Technique' effect). Using This Skill Means You Can No Longer Use An Action This Turn. All Skills In This One Proceeds Stage By Stage And Act As Their Own Attack Skill Separately Meaning The Whole Attack Stop If One Is Blocked Or Dodged.";   
    
    }else if (x === "Fire Release: Great Fireball Technique: Onibi"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Fire Release: Great Fireball Technique: Onibi";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Taijutsu, Shurikenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 160";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp, kunai(W), Fire Release: Great Fireball Technique(S), Shadow Clone Technique(S)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User attacks his opponent with a series of mixed attacks, including kicks (2 kicks), punches(2 punches), and stabs with kunai. During the string, he creates a shadow clone, which attacks with a flurry of shuriken (5 shuriken each dealing 2 damage), and the real User finishes with a fireball attack (taking 'Fire Release: Great Fireball Technique' effect). Using This Skill Means You Can No Longer Use An Action This Turn. All Skills In This One Proceeds Stage By Stage And Act As Their Own Attack Skill Separately Meaning The Whole Attack Stop If One Is Blocked Or Dodged.";   
    


      
      //////////water release///////////
      //////////water release///////////
      //////////water release///////////
      //////////water release///////////
      //////////water release///////////

      

    }else if (x === "Acid Permeation"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Acid Permeation";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ---";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 79";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp, Soap Bubble Ninjutsu(S), Pipe(W)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft, Target Range: 20ft by 20ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User blows acidic bubbles from his pipe that burn anything it comes into contact with. The sheer multitude and wide-range it can cover makes avoiding it very difficult. All targets including allies In range must roll a Dex saving throw with DC equal to user Wis score. Dealing 4 acid damage to all target that fails.";   
    
    }else if (x === "Bashōsen: Coil of Water"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bashōsen: Coil of Water";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: torrent";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp, Bashōsen(W,fan) or any fan";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 4 of users turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Waving the Bashōsen, the user unleashes a torrent of water which chases after their opponent, the torrent moves 20ft per turn. on a hit, it deals 7 bludgeoning damage to a target within range and pushes the target 20ft backwards. the torrent expires after its duration or after it hits";   
    
    }else if (x === "Blinding Bubbles Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Blinding Bubbles Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 78";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp, Soap Bubble Ninjutsu(F)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action+";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User blows bubbles, surrounding the opponent's face with them. if a Target moves from their location the bubbles bursts, target also attacking the bubbles also pops them and user can also use a bonus action in their next turn to pop them. Once popped, the bubbles create a puff of red powder that momentarily blinds the opponent for 2 of their turns. ";   
    
    }else if (x === "Bubble Clone Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bubble Clone Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Clone Techniques";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 88";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp, Soap Bubble Ninjutsu(F), Pipe(W)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User creates a clone of himself by using his Soap Bubble Ninjutsu with his bubble pipe. When hit, the clone pops like a bubble. The clone shows exactly same stats and all like user but can't attack but can move. Only user and Modder knows the real clone.";   
    
    }else if (x === "Water Style: Defensive Bubble Jutsu"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Style: Defensive Bubble Jutsu";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Barrier Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp, Soap Bubble Ninjutsu(F), Pipe(W)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self, 20ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User uses his Soap Bubble Ninjutsu to create a dome around himself and his allies that are within range. This dome is shown to be strong enough to resist large explosions. It is destroyed when hit by damage of 10 or above in a single turn or strike(attack).";   
    
    }else if (x === "Crimson Mist Barrier Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Crimson Mist Barrier Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Barrier Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 124";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft Square";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "By summoning a thick wall of mist, the user can impair sight for all within it. It also masks any sound from being heard outside of the mist. All targets while within it are blinded. it can be ended by user with a bonus action.";   
    
    }else if (x === "Drowning Bubble Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Drowning Bubble Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Suffocate";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp, Soap Bubble Ninjutsu(F), Pipe(W)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "By blowing his bubble pipe, User produces a considerable amount of soap bubbles of various sizes, which are then used to trap an opponent's head in one to subsequently drown them. Target makes a Dex saving throw of DC 12 to evade this skill. On a success it's a miss, on a failed, the target starts drowning and acts like they are grappled. Target can repeat the saving throw once at the start of every of their turn equal to a number of times equal to their Con mod, if target fails after all tries they are knocked unconscious and if not healed or attending to within a number of their turns equal to their Con mod, they die. this skill doesnt affect targets that can breath water.";   
    
    }else if (x === "Dustless Bewildering Cover"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Dustless Bewildering Cover";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 189";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp continually";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The Dustless Bewildering Cover technique utilises water vapour to bend the light around the user essentially making them invisible. This technique allows the user to completely erase their presence, causing them to have neither a physical form nor detectable chakra while the technique is active. As such, they cannot be detected through traditional means such as chakra detection or through heightened senses. User is invisible as far they pay 4cp at the start of every of their turns. user can't be targeted for attacks or skills unless user attacked that turn but turns invisible again the next turn. If a user received damage while this is active, it ends.";   
    
    }else if (x === "Ninja Art: Bubble Bomb"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Ninja Art: Bubble Bomb";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: explosion";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp, Soap Bubble Ninjutsu(F), Pipe(W)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After User blows dozens of bubbles, they make their way towards opponents. Upon popping in front of the target (meaning they cant be dodged unless by moving from the location), they create bright yellow and white flashes along with variously strong explosions that knock back the enemy and everything nearby. The explosions also produce a large amount of smoke, which can be used to obstruct the opponent's vision. “1d12” bubbles are blown towards the target, each dealing 2 fire damage each when they explode and knocking the target 10ft backwards, the bubbles can only be shared to up to 3 targets, targets are blind due to the smoke in their next turn.";   
    
    }else if (x === "Secret Art: Flying Needles of Death and Destruction"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Secret Art: Flying Needles of Death and Destruction";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Spikes";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Hiden, Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 180";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 12cp, Thousand Flying Water Needles of Death(S)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User gathers a larger amount of water from the air and surrounding environment into more than a thousand needles. He then directs the needles to a specific opponent, and leaps back (equal or less to user movements speed) to avoid damage to himself. Dealing 2 piercing damage, 15 times to the target (30dmg).";   
    
    }else if (x === "Heavenly Weeping"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Heavenly Weeping";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Spike";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 98";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A technique in which chakra is kneaded in the user's body, transformed into water and then shaped into senbon in the mouth before finally being expelled at a high velocity. The needles are shot in an attempt to catch the enemy off guard, while also aiming at their vitals. As a reaction, you can use this skill, sending the attack to target and dealing 4 piercing damage to a target.";   
    
    }else if (x === "Hidden Frost Jutsu"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Hidden Frost Jutsu";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 123";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp every end turn while active";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The Hiding in Frost Technique produces visually clouding frost by causing the temperature of air to fall below the freezing point, effectively freezing any ambient water vapour in the vicinity. The frost allows the user to become transparent within it. Upon being struck with an attack, the user becomes visible and it ends. The mist is visible to the naked eye, but since the user is transparent it voids that sense. An effective way of finding the user is tracking them through sound. before you can be a target, they must make a Perception(hearing) check od DC equal to half your int score, on a failed, they cant directly target you.";   
    
    }else if (x === "Ninja Art: Hidden Mist Jutsu"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Ninja Art: Hidden Mist Jutsu";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom/Def/Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 146";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: --cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 90ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 10 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique is a specialty of Kirigakure ninja. Users fill the air with mist and control its thickness with their chakra. Once the mists are thick enough that opponents cannot see ad are lid within it, that in turn means they cannot manage much defense against the user therefore all evade or dodge skills are neglected. Zabuza Momochi famously used this technique to perform assassinations, although he also could not see within the mists, he was able to locate his targets based only on the sounds they made [to directly aim a target, a perception(hearing) check must made ad the DC is half the targets Int score. This affects all within this skill]. The mists can be created using water from the surroundings which cost 3cp (terriann must be swamp or have a water body as big as 20ft by 20ft), or users can create the mists themselves which cost 5cp, which they exhale from their mouths. If the mists are made thick enough with additional 2cp, they can cancel out the enhanced vision of the Sharingan and Rinnegan. Byakugan users are able to see through the mists. Sensors also can still find targets despite the lost visibility.";   
    
    }else if (x === "Ink Bubble Explosion"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Ink Bubble Explosion";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive Barrier";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8cp, Soap Bubble Ninjutsu(F), Pipe(W)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Using his bubble-blower, User sends a rush of bubbles toward the enemies within range, who are subsequently encased in a large bubble, when it hits, target is trapped in the bubble, which then appears to fill itself up with a black liquid for 3 of target turns. each time it fills up, the target takes 5 acid damage. The bubble then pops at the end of the 3rd turn in a black inky splash, if the target hp reaches 0 due to this, it leaves no sign of the corpse behind. this attackig this bubble with an attack of 7 or more, either from the inside or outside pops it and deals 8 acid damage to the target";   
    
    }else if (x === "Instant Water"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Instant Water";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Rush";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Taijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 136";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: User lv10, 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: ??ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Employing their mastery of Water Release, the user releases a wave of water below their feet to act as jets to increase their speed which allows them to dash towards the opponent and attack with a full-body blow. you dash towards a target with double your movement speed, dealing bludgeoning damage equal to user str mod + 5 to them and knocking them 30ft backward.";   
    
    }else if (x === "Medical Water Release: Jellyfish"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Medical Water Release: Jellyfish";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Medical Ninjutsu, Regeneration Techniques";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp, Medical Ninjutsu(F)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action++";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self, melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "By applying jellyfish to a person's form in advance, the jellyfish can store up and spread chakra throughout its host to allow for quick recovery from a recent injury. This technique appears to drain the jellyfish completely as it can only be used once. with an action you can attach the jellyfish to your self or a target, with a bonus action or reaction user can activate the jelly fish and it gives 3hp to its host. this can be done onnly 3 times ad once a turn, after that it disappears.";   
    
    }else if (x === "Medical Water Release: Water Mosquito"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Medical Water Release: Water Mosquito";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Medical Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp, Medical Ninjutsu(F)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self, 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user creates water mosquitoes, that can be used to nullify poison in a target's body. The full extent of this technique was not seen, but it is apparently very painful when applied. the target takes 2hp damage, this techique can only cure C rank or lower posions and toxins. this can be targeted to up to 3 targets and you pay cp for each.";   
    
    }else if (x === "Ninja Art: Dripping Nose"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Ninja Art: Dripping Nose";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk, Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive, Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 145";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ??cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft(tendrils attack range)";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Using nasal fluid, the user creates a water source. They can manipulate the liquid at will to expand into multiple tendrils(up to 7 by paying 3cp for each), with a bonus action you can use one to pierce a target, dealing 4 piercing damage for each. The water can also solidify to maintain its shape and integrity to act as a support structure.";   
    
    }else if (x === "Revolving Throw"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Revolving Throw";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo, Offensive, throw";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8cp, Staff(W, heavy)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User strikes his opponent with a few water attacks using his staff(3 water tendrils strike each acting as a seprate skill/attack and go one at a time, dealing 4 bludeoning damage each), and finishes by hooking them with it and throwing them far back up to 50ft(deal crash damage if they hit a obstacle). the skill continues even if a part is blocked or dodged(unless target moves from range)";   
    
    }else if (x === "Secret Technique: Mist Rain"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Secret Technique: Mist Rain";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Hiden, Ninjutsu, Chakra Absorption Techniques";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 1cp every end turn";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A technique known by Kirigakure hunter-nin. The user makes rain that absorbs any chakra that it comes in contact with, as long as it's not of the same signature as the original user. The effect of this technique is powerful enough to absorb Utakata's Soap Bubble Ninjutsu and Naruto's Rasengan. all targets apart from user within range loses 1cp every end turn, all elemental release skills used within range effects are cut by half(if damage cut by off, if def or skill has hp its cut by half) and are neglected if it stays more than one turn.";   
    
    }else if (x === "Soap Bubble Slime"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Soap Bubble Slime";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support, Binding";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 98";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp, Soap Bubble Ninjutsu(F), Pipe(W)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User blows bubbles, which release a sticky slime when popped, delaying or trapping an opponent. as a action, user just sends the bubbles towards target, when it hits, target cant move from that spot for two turns unless target makes a Str savig throw of DC 14, breaking free on a save. as a bonus action, you can place this bubble on a spot, when target enters that spot, as a reaction and stop the targets movement and the first effect continues. ";   
    
    }else if (x === "Starch Syrup Binding Rope"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Starch Syrup Binding Rope";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support, Binding";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 133";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After kneading chakra in the stomach and converting it to high-viscosity water, the user spits it out, in the form of ropes that restrains the target's movement. Because of the viscosity of the water, it is even more difficult for them to escape its confines. target can continously make a Str saving throw at the start of every of their turns with DC 15. the bind also destroys if fire damage of 5 or more is sent to it but the target takes half the damage.";   
    
    }else if (x === "Water Style: Water Blade Manipulation Jutsu"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Style: Water Blade Manipulation Jutsu";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Conjure, Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Hiden, Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 67";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A secret technique of Takigakure that allows the user to manipulate water into the form of a sword. This sword is also shown to be very resilient as it is able to withstand and cut through most Fire Release techniques. Properties: Versatile, Damage: 4 Slashing Or 5 Piercing, Durability: 70";   
    
    }else if (x === "Secret Jutsu: A Thousand Needles of Death"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Secret Jutsu: A Thousand Needles of Death";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Conjure, Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Hiden, Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 198";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 14cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user creates a thousand long needles from the nearby water, which surround the target. The user carefully aims the needles at the target and fires them at rapid speeds. Targets who are struck by the needles suffer significant injury. When Haku uses this technique against Sasuke Uchiha, Sasuke is able to escape harm by leaping directly upwards. the oly way to dodge this skill is whe the target has a Int stat of 14 or higher and must successfully make a Dex(acrobatics) saving throw of DC 14. on a success, target leaps upward equal to half their movement speed and remain there till their turn. on a fail, target takes 2 piercing damage 20 times(40dmg). ";   
    
    }else if (x === "Tornado of Water"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Tornado of Water";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk, Def, Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive, Defensive, Supplementary";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 143";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self, 5ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This is a technique that utilizes water to create a spinning water vortex around the user. The water vortex acts both as a barrier and an attack mechanism. The power of the vortex is enough to knock an opponent unconscious. as a barrier, it has 13hp but can only defend against physical damages and others except cold damage(half damage is shared to user but the barrier takes full damage), lightning damage is doubled and dealt to user and barrier, force, necrotic, psychic, radiant and thunder(these last ones just bypass the defense). as an attack, user just needs to go close to a target in melee range and the target takes 4 bludgeoning damage and if target has a str of 14 and below is knocked 20ft backward.";   
    
    }else if (x === "Umbrella Shock Wave"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Umbrella Shock Wave";
      let category = document.getElementById("skill_category").innerHTML = "Category: Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive, Defensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 123";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp, umbrella";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User jumps into the air (user movement speed) and, swinging his umbrella, generates a stream of waves that create strong pressure, knocking the enemy to the ground and disorienting him, all targets within a 20ft circle range receive 5 bludegoninng damage and fall prone. Judging by the screams Naruto, Sasuke, and Sakura made when Aoi used this technique against them, the waves crush hard, hurting them.";   
    
    }else if (x === "Water Attacking Gorgon"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Attacking Gorgon";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 89";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique will summon a large amount of water that will then be used to strike at the opponent in several versatile ways. Shizuku has been known to transform it into a dragon with a gaping mouth to attack. User can choose choose a shape he wants the water to form as, either from dragon, giant bird, shark, ram e.t.c. The water used will be stationary till it is sent offensively toward the opponent, when sent, it moves 20ft per turn ad on reaching a target it deals 7 bludeoing damage to them.";   
    
    }else if (x === "Water Characters"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Characters";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 30";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 1cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 30mins";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique allows one to send messages through water. By throwing water on a surface, even a vertical one, the water will rearrange itself into a readable message, which will fade after a while.";   
    
    }else if (x === "Water Clone Barrage"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Clone Barrage";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Taijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8cp, Water Style: Water Clone Jutsu(S)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Attacking the opponent with a series of punches and kicks (4 kicks and 4 punches which deal half their damage repectively) to force them 10ft backwards, User then creates a small pool of water from which a clone of himself emerges. The clone, alongside User then buffets the target with a series of more kicks and punches(8 kicks and 8 punches which deal half thier damage respectively) before delivering a final kick which deals double the users kick damage and the clone then dissipates back into water.";   
    
    }else if (x === "Water Style: Water Clone Jutsu"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Style: Water Clone Jutsu";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Clone Techniques";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp per clone";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique originates from Kirigakure. Using water that was previously stored or from the surroundings, the user creates one or more copies of themselves up to users wis mod (max of 10 for users below lv 20 and max of 15 for users above lv 20). Unlike the standard Clone Technique, these water clones are physically real, allowing them to interact with others and even perform the same jutsu as the user. Although a single water clone can be quite challenging to a standard genin, water clones only have about a tenth of their user's strength meaning its stats are a user’s stats divided by 4(this include hp and cp but not speed). When a water clone is sufficiently damaged, it will revert back into water. In the anime, the clones can alternatively disperse into a mist that act as a smokescreen to briefly covers the area, with a bonus action or reaction, user can do this and the clone smokescreen covers a 10ft by 5ft area, blinding both people at the other side from seeing each other. Water clones cannot travel too far from their user's location(max of 60ft away), meaning that running away is a viable option against them. This aside, water clones are useful as support and diversions. The clones can even be used as mobile bodies of water, through which the user can perform their other water-based jutsu; when this is done, the user will need to perform the necessary hand seals. ";   
    
    }else if (x === "Water Palm Blade"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Palm Blade";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Combo";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Chakra Flow, Taijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 167";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User attacks the opponent with a combination of taijutsu and Water Release. He begins with a simple punch followed by three kicks (each dealig due damage respectively) and then lifting the opponent into the air 50ft where with his mastery of the Water Release, User materialises from his palm, a blade of water that he uses to blast the opponent through the air dealing 5 slashing damage then the target lands and takes fall damage. All Skills In This One Proceeds Stage By Stage And Act As Their Own Attack Skill Separately Meaning The Whole Attack Stop If One Is Blocked Or Dodged.";   
    
    }else if (x === "Water Pillar Thrust"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Pillar Thrust";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User uses his mastery of the Water Release to materialise a small body of water to rise up beneath the opponent in range and thrusting them into the air dealing 3 bludgeoning damage and lift them 60ft upward, dealing fall damage if due.";   
    
    }else if (x === "Water Prison Shark Dance Jutsu"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Prison Shark Dance Jutsu";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time/Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support, Field";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 189";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp, Water Release: Great Exploding Water Colliding Wave(S), Water Prison Technique(S)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft circle(ball)";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After using the Water Release: Great Exploding Water Colliding Wave, User forms the water into a gigantic prison (100ft high and 100ft wide). Because he acts as the centre of the dome of water, the dome alters its position in order to reflect the direction of his movements, making it difficult for his target to escape as long as he continues his pursuit. The Target Starts Drowning. Target Can only stay in this dome for a number of their turns Equal To Their Con Mod, If Target Fails to escape They Are Knocked Unconscious And If Not Healed Or Attending To Within A Number Of Their Turns Equal To Their Con Mod, They Die. This Skill Doesnt Affect Targets That Can Breath Water.";   
    
    }else if (x === "Water Prison Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Prison Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive Barrier";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp or 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Will only work on targets medium sized or smaller. This technique traps a target in a sphere of water; the water can either be drawn from the surroundings with 3cp or expelled from the user's mouth with 5cp. The water that the sphere is made from is noticeably heavy, which restricts the target's movements and can make breathing difficult, therefore; The Target Starts Drowning. Target Can Only Stay In This Dome For A Number Of Their Turns Equal To Their Con Mod, If Target Fails To Escape They Are Knocked Unconscious And If Not Healed Or Attended To Within A Number Of Their Turns Equal To Their Con Mod, They Die. This effect Doesn’t Affect Targets That Can Breath Water. This prison has 7hp As such, those trapped within the water prison cannot ordinarily escape on their own and attacks from inside only deal half damage to the prison. Neji Hyūga was able to free himself by simultaneously releasing chakra from all of his tenketsu, destroying the prison, thus by paying 1.5x the hp or hp left of this prison, target can destroy it with that reaction. In order to maintain the prison, users must stay in contact with the sphere, typically by keeping an arm submerged within it. For this reason, water clones can be used in combination with water prisons, either by having the water clone attack other targets while the user maintains the prison, or by having the clones themselves form the prisons, leaving the user free to act. In cases where a water clone forms the water prison, the water of the clone's body can be used as a source for the prison and you don’t pay cap for it but the water clones hp instead. although In the anime, this contact is shown to not be necessary, allowing users to trap targets from a distance. The water prison's usefulness has caused it to be adapted for other purposes. It can be stored in scrolls, trapping anyone who tries to read their contents without permission. Alternatively, users can confine themselves within a water prison, thus preventing opponents from reaching them. ";   
    
    }else if (x === "Water Release Bullet: Orca"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Release Bullet: Orca";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk, Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 88";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "as a reaction, when a target is moving from their position towards a target, The user sends a huge surge of water crashing down onto the enemy, which with the intensity of the waves produced, restricts their movements. dealing 5 bludgeoning damage, stopping thier movement.";   
    
    }else if (x === "Water Release: Water Bullet Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Release: Water Bullet Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave, Combination";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 68";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 of users turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The Water Release: Water Bullet Technique is a highly versatile Water Release technique with many variations. After kneading chakra in their stomach by skipping a turn (no cp or hp changes), with a bonus action in their next turn, the user expels a large quantity of water in the form of a powerful torrent aimed towards their intended target. Dealing 5 bludgeoning damage to the first target it hits that’s in range. This technique can also be used collaboratively to increase its range and effect. The attack will then be aimed at the target and the range and also damage multiplied by 20%. 20% increase per users.";   
    
    }else if (x === "Water Release: Water Colliding Wave"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Release: Water Colliding Wave";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Defensive, Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp, 1cp every of users end turns";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user creates a massive vortex of water (25ft by 25ft, 70ft high) that protects the user from attacks. It explodes from the top of it in the form of a wave, covering the entire battlefield and people on either side’s view of each other. This water can block or defend damage up to 10. By using hand gestures with an action, the user can manipulate the water to move in any direction. Having changed the battlefield in this way enables the user to follow up with additional Water Release techniques with even using the water as a water source for them. The user can also evaporate the water at will with a bonus action or reaction.";   
    
    }else if (x === "Water Release: Water Shark Bullet Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Release: Water Shark Bullet Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive, Wave";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp, Water Release: Water Bullet Technique(S), ";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 of users turns";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: --";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous Concentration, up to 10 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user manipulates a volume of water with their hand; After kneading chakra in their stomach by skipping a turn (no cp or hp changes), with a bonus action in their next turn, by thrusting their hand in a direction, the manipulated water is sent in that direction. As it moves, the body of water takes the shape of a shark with speed of 50ft, with additional water following in its wake for as long as the user keeps their hand thrust out also paying extra 1cp per their start turn as far this skill has not hit its target. Because of how quickly the shark moves and because of how much water there is, it does extensive damage when it impacts something, dealing 7 bludgeoning damage to a target it hits. Users can also ride within the water shark as it moves, allowing them to travel faster than they're able to swim. ";   
    
    }else if (x === "Water Style: Water Shark Shotgun Jutsu"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Style: Water Shark Shotgun Jutsu";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 15cp, Water Release: Water Shark Bullet Technique(S)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User releases several fast-moving water sharks through the ground, up to 5 sharks, one after the other per users turn. The sharks rush towards the opponent in range and falls on top of them dealing 4 bludgeoning damage per shark. a shark must be used per turn and if they are no targets within range that shark for the turn is wasted.";   
    
    }else if (x === "Water Release: Great Shark Bullet Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Release: Great Shark Bullet Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8cp, Water Release: Water Shark Bullet Technique(S)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The Water Release: Great Shark Bullet Technique is a stronger version of the Water Release: Water Shark Bullet Technique. The user creates a gigantic shark out of water and, by thrusting both hands forward, sends it to attack the opponent either with an action or reaction (reacting to opponents attack or technique). This technique differs from the original, since this is able to absorb the chakra from an opponent's technique and in turn, use that chakra to grow larger and more powerful. Therefore, the stronger the opponent's technique is, the stronger this technique will get. if this shark reacts to another technique and its an attack made of cp, that attack is neglected and the damage of this shark is incresed by the cp used for the attack neglected, it can react to up to 4 attacks at once so far they all are 30ft in range to this attack, are 3 star or below and are active in this turn. the shark normally deals 10 bludgeoning damage to a target when it hits. this shark can also absorb 3 star Def skill made of cp and that can be neglected.";   
    
    }else if (x === "Water Release: Four Sharks Rain"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Release: Four Sharks Rain";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 155";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 7cp, Water Release: Water Shark Bullet Technique(S)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User slams his palm onto a nearby water surface, sending a large surge of water into the air. This water then forms into a group of four water sharks(4 in number), which then rush towards the target from above with the speed of 30ft. Should these sharks be attacked, the water that composes them simply reforms into countless droplet-sized sharks(8 sharks with half its damage but double the speed), which continue to rain down upon the target and inflict damage whenever they come into contact with them. The original shark deals 4 bludgeoning on impact with a target. ";   
    
    }else if (x === "Water Release: Five Feeding Sharks"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Release: Five Feeding Sharks";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Summon";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 189";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 10cp,	Water Release: Water Shark Bullet Technique(S)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user puts their hand on the surface of a body of water thats at least 100ft wide both ways and 50ft high and from the tips of five fingers, chakra is released into the water, changing it into the form of five ferocious sharks with hp of 10 and a bite attack dealing 4 piercing damage each. while being only able to move and reside in the water body, The sharks circle the target with high speed (with movement and swim speed of 40ft), creating a raging stream that takes away their prey's freedom of movement and their sharp teeth tear into the enemy with each consecutive attack. these sharks can regenerate from surrounding water, making them difficult to destroy (they heal 1hp every end turn while still in their water body).";   
    
    }else if (x === "Water Release: Angry Bitter Rain"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Release: Angry Bitter Rain";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 36";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp, Water Release: Water Bullet Technique(S)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous, up to 6 of users turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After water has been shot into the air, such as with the Water Release: Water Bullet Technique, this jutsu turns the water black. When the black water falls on a target it clings to their body and covers their eyes, blocking their vision. Because of the name ('doku' meaning 'poison'), victims are intended to believe the water is poisonous. In truth the water is harmless, and the name is only meant to distract victims long enough for the user to follow up with another attack and/or escape. all target must make a intelligence check of DC 12, getting stunned for their next turn only on a failed.";   
    
    }else if (x === "Water Release: Archerfish"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Release: Archerfish";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 55";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user simply creates a jet of water that can be used to extinguish fire in a 10ft x 10ft square.";   
    
    }else if (x === "Water Style: Azure Dragon Palm"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Style: Azure Dragon Palm";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Taijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 99";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Dash range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User dashes towards his opponent which is withi dash range, pushing his hands forward and when his hands come in contact with them, he unleashes a spiralling torrent of water that deals 7 bludgeoing damage and if they are a medium to small size creature they are knocked up 40ft into the air.";   
    
    }else if (x === "Water Style: Black Rain Jutsu"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Style: Black Rain Jutsu";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support, Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 88";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique creates a flammable black mist that forms a small cloud of 20ft square that has 40hp and movement speed of 20ft. The user can then move the cloud above their target and with a bonus action or reaction disperse it, covering all target under in flammable oil. the target(s) gain an oil couter for each time this was use on it (an oil couter = 1 vail of oil). if a source of fire touches a target with an oil counter, they recieve extra 3 fire damage everyturn, the remove 1 oil counter every time they recieve damage or burns the oil, if the oil couters reaches 0 the fire stops. This technique was first used to burn down Idate Morino's boat, after it was lit with fire.";   
    
    }else if (x === "Water Release: Bubbles Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Release: Bubbles Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support, Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 145";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 10cp, •	Soap Bubble Ninjutsu(F)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft, (users can control bubbles more than 400ft away)";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After blowing dozens of bubbles (up to 20), the user manipulates them to surround the enemy in all directions with each bubble with a movement spd of 30ft. Only the slightest amount of physical contact with an opponent is required to make these bubbles burst, resulting in a small but powerful explosion when they do. if a target thats within 5ft of a bubble or bubbles try to move from the location, he or she must make a Dex saving throw of DC 11, on a failed, all bubbles within 5ft of the target explodes with all targets within 5ft of those bubbles that exploded also explode and the targets within 10ft of the explosion takes 3 fire damage for each bubble that exploded and affected them. with an action, The user can then make them entirety detonate simultaneously with a snap of their fingers.";   
    
    }else if (x === "Water Style: Ice Darts Jutsu"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Style: Ice Darts Jutsu";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 58";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user shoots numerous amount of extremely large jets of water(up to 10) from their mouth at high speeds which can easily shatter rock. dealing 1 x 10 piercing damage to the target. ";   
    
    }else if (x === "Water Style: Showers"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Water Style: Showers";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk / Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user condenses the water vapour in the air to fire multiple blasts of water at the target. after activation this turn, with an action in another turn, user can pay 3 cp and send a ball of water flying towards a target within range. user can send up to 3 at once with an action, if one hits a target, the target recieves 5 bludgeoning damage. this skill ends when user cp turns to 0 or user is knocked unconcoious.";   
    
    }

    
    
      //////////wind release///////////
      //////////wind release///////////
      //////////wind release///////////
      //////////wind release///////////
      //////////wind release///////////
      
      else if (x === "Bashōsen: Coil of Wind"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Bashōsen: Coil of Wind";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), 6 Cp, Bashōsen Or Any Heavy Fan Weapon Above Rare(Equipped).";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Swinging the Bashōsen, the user creates a powerful gust of wind thats 30ft wide which was powerful enough to destroy Kakuzu's lightning-mask. all targets within range recieves 5 Blugdeoning damage and if they have str score less than 15 are pushed 30ft backwards, they are pushed back 10ft if thier str score is more than 15 nut less than 20.";   
    
    }else if (x === "Beast Tearing Palm"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Beast Tearing Palm";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive Wave";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 145";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), 3cp+";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A powerful technique of wind nature chakra that can cut and slash through any material. after activating with a bonus action, User can pay 3cp to summon chakra in his right hand and then with an action in the next turn, swipes a slicing chakra wave which appears to be controlled by User's will and thoughts that hits a target within range and deals 6 slashing damage (this effect can be continously used until the skill is ended). User is also able to use the technique in a rapid-fire, successive motion meaning you can expend 4cp and a action, bonus action or reaction to use it again dealing the same slashing damage. This technique became stronger when Sora was in the influence of the Nine-Tailed Demon Fox's chakra and instead of the usual blue colour, it was red. This skill ends if you use another skill while it is active or the user is knocked unconcious.";   
    
    }else if (x === "Beast Wave: Palm Hurricane"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Beast Wave: Palm Hurricane";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Summon, Offensive, Defensive, Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 258";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(at least one hand), Beast Tearing Palm(skill, NBU), +++cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 100 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique is somewhat of an enhanced version of the Beast Tearing Palm. With an action you can activate this skill, It uses chakra to infuse with and condense a mass amount of wind-chakra to form a massive demonic-like claw extending from the user's hand. This claw last for the duration. the users unarmed physcial melee attacks that require hands can now reach 10ft, With 4cp and an action, User can use the claw to strike and grab a target within range, the claw moves as a ranged attack and must move in a straight line 40ft every turn but cant pass the maximum skill range. On reaching a target deals 5 bludgeoning damage to that target and grapples the target, target must then make a Str saving throw of 14 to break free of the grapple (can repeat the saving throw at the start of all their turns). If the claw is already grappling a target it cant be used for any other effect unless target uses a bonus action to free the grapple. As a reaction and by paying 3cp, This claw can as well as deflect any weapon or attack that deals less than 6dmg (to use this the claw must be within melee range from you). Depending on its use, the user can manipulate the size and length of the claw to attack and defend at any range. In addition to making it a deadly weapon, with an action and 10cp, the extending claw also carries tremendous force that can devastate anything in its path(10ft wide) without affecting the user dealing 12 bludgeoning damage to all targets within range , making it useful for dislodging solid and heavy objects.";   
    
    }else if (x === "Odama Rasenshuriken"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Odama Rasenshuriken";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive Sphere";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Senjutsu, Kinjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 288";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv15, V, S(at least one hand), Sage Mode(Mode, ACT), Wind Release: Rasenshuriken(skill, NBU), shadow clone justu(skill, ACT), 7cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 150ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "By using two shadow clones that are within 5ft from user and his Wind Release nature transformation, User is able to form a Rasengan in the form of a shuriken. The sphere in the technique's centre is considerably larger compared to that of the Rasenshuriken's standard variant. The user can also keep adding chakra to the technique by expending a action or bonus action and 3cp causing it to expand to enormous proportions. In this enormous version, Rasenshuriken shines very brightly in the dark. When thrown to a point or target it causes a tremendous wind sphere upon detonation that can be seen from several kilometres away, and is enough to even neutralise a reincarnated Madara Uchiha long enough to be restrained, while simultaneously destroying both of Hashirama's wood dragons. The attack deals 10 Bludgeoning damage to the target and 5 Bludgeoning damage to every other target in a 5ft x number of times charged. The damage of this skill increases by 5 and 2 for every time charged. You can only charge this skill with the max of 4 times.";   
    
    }else if (x === "Blade of Wind"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Blade of Wind";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Summon(Construct-weapon)";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 138";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: S(one hand), 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User emits chakra from his fingertips, creating an invisible sword out of wind that he attacks opponents with. Because opponents can't see it, and because of how precise User can be with his attacks, there is little opponents can do to defend against this technique therefore target reactions with physical def done with hands or weapons that aint shield or barriers must pass a perception check of DC equal to 5 + the damage the attack is about to deal. the weapon is regarded as a longsword that deals 4 slashing and 5 piercing damage. The Blade of Wind is to the Sickle Weasel Technique what a longsword is to a kunai. this skill ends when the user ends it with a bonus action or is incapicitated or knocked unconcious";   
    
    }else if (x === "Boruto Stream"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Boruto Stream";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 78";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Wind Release: Gale Palm(skill), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "at least one ally must be in melee range to user and they must have the skill 'Wind Release: Gale Palm' in thier card. By utilising Wind Release, the user can accelerate their movements or it can be the other way around(the target for this skill doesnt need to have 'Wind Release: Gale Palm' in their card), creating an effect similar to tunnel vision. To reach higher speeds, the user or target gains aid from others to perform the technique on them by propelling them from their feet. This technique can also be used on an ally to increase their speed. the target of this flys 5ft above the ground and is sent to a point within this skill range(targets choice), if the user or ally reaches the point, they can use an action or bonus action.";   
    
    }else if (x === "Dust Wind Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Dust Wind Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Support, Defensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(at least one hand),  Fan(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft cone, 40ft high";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Until targets next turn ends";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User uses their Giant Folding Fan to generate a gust of wind that layers the surrounding area in a blast of sand. This layer of sand that accumulates on the nearby trees makes it difficult for others to get a good footing. The initial gust can also temporarily blind opponents by lodging sand in their eyes, all affected targets are knocked 10ft back and have thier speed decreaced by 15ft until the end of thier next turns.";   
    
    }else if (x === "Ninja Art: Wind Scythe Jutsu"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Ninja Art: Wind Scythe Jutsu";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 128";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Fan(weapon, equipped),  3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: with HAND SEALS (Snake → Dragon → Bird) - 2 (actions or bonus action) / 2 reactions, with fan - 1 action / 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft ";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Using her Giant Folding Fan, User causes many currents of wind to collide with each other, creating vacuum pockets. On its own, the gust is powerful enough to blow away incoming attacks and knock targets off their feet, as a reaction(with fan equipped)/ 2 reactions with hand seals, when a ranged attack that deals damage less than your str score is sent, user sends a wave of wind in a 50ft cone thats negelects the damage and if the target is within range they must make a str saving of DC equal to users str score, getting knocked prone on a fail. <br> If a target should become engulfed in the winds, their body will be carved up by the countless wind blades.<br>[1] User can control the form that the winds take, such as by making them into a tornado that deals 5 slashing damage to all targets and lifts targets 5ft around a point thats within this skill original range up 60ft into the air.<br>[2] they can also alter the intensity of the wind's cutting power, such as by having them cut open a samurai's armour without harming the samurai inside. user can pay from 3, 4, 5 or 6 cp and deal 5, 6, 7 or 8 damage repectively to a target within rnage. <br><br>      In the anime, one can alternatively use this technique through hand seals rather than through use of a fan, changing the shape of the wind to that of a blade ";   
    
    }else if (x === "Wind Scythe: Maximum Wind Blossoming"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Scythe: Maximum Wind Blossoming";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive, Defensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Fan(weapon, equipped), Ninja Art: Wind Scythe Jutsu(Skill), 10cp as action or 12cp as reaction";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft cone";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Using her Giant Folding Fan, Temari causes many currents of wind to collide with each other, creating vacuum pockets. As the wind moves outward from her, it cuts up whatever it comes into contact with dealing 8 slashing damage to all target it hits and deflects/neglects any attacks coming towards her that that deals damage less than your str score, even sound-based genjutsu that are 3 star or lower as far the attack travels and can be seen. Because of how far the winds travel, this technique is especially useful against opponents that attack from long ranges.";   
    
    }else if (x === "Great Vacuum Cannon"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great Vacuum Cannon";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique utilises the Takumi Village's special Weaknessless Soaring Shortswords. The user shoots small, powerful and near-invisible blasts of wind from the blades. this can be used twice with same action if user has 2 shortswords equipped and pays cp for both attacks. when the attack hits it deals 7 slashing damage to the target";   
    
    }else if (x === "Gunbai Fanned Wind"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Gunbai Fanned Wind";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive(wave)";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 160";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(both hands), gunbai Or Any Heavy Fan Weapon Above Rare(weapon, equipped), 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft cone";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user waves their gunbai as a fan to create powerful gusts of wind, strong enough to blow away several enemies in one swing. all targets within range must make a str saving throw of DC 14, on a failed they are pushed 5ft x user str mod and take bludgeoning damage equal to 5 + user str mod(max 10)";   
    
    }else if (x === "Nadeshiko-Style Hardliner Gale Fist"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Nadeshiko-Style Hardliner Gale Fist";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Chakra Flow";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 92";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "By covering one's own hand with wind-natured chakra, the user attacks the enemy with it. The force of the strike is great enough to produce a powerful shock wave that can cause noticeable fissures without direct contact dealing thunder damage equal to 3 + users punch damage, if this attack was dodge or evaded, the target takes half the damage.";   
    
    }else if (x === "Nadeshiko-Style Hardliner Revolving Cut"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Nadeshiko-Style Hardliner Revolving Cut";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Chakra Flow";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one leg), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user covers one leg with wind chakra and delivers a powerful falling kick to her opponent. This kick was powerful enough to slice through a mechanical puppet. when the kick hits, it deals double the users kick damage as slashing damage.";   
    
    }else if (x === "Peacock Whirlwind"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Peacock Whirlwind";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Utilising the Takumi Village special Weaknessless Soaring Shortswords, the user swings one of the blades to create a powerful whirling gust of wind that when it hits a target within range, deals 8 bludgeoning damage to a target. this skill can be used up to a number of times equal to use int mod but the cp usuage increases by 1 after every use. ";   
    
    }else if (x === "Peacock Whirlwind Formation"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Peacock Whirlwind Formation";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Supplementary";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This is a technique utilising the Takumi Village special Weaknessless Soaring Shortswords, to create a vortex to push away materials covering the user's body. Seimei used it to free himself of Gaara's sand. aa a reaction when you are grappled or restrained but an object or creature that can be seen, the grappler must make a Str saving throw of DC 13, ending the grapple on a fail or undoing the restriant and all targets(including items and weapons) within range of this skill are pushed 15ft back.";   
    
    }else if (x === "Rotating Ferocious Wind"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Rotating Ferocious Wind";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 250";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv10, V, S(at least one hand), Two Shortswords(weapons, equipped), 14cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft cone";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This is a technique used with the Weaknessless Soaring Shortswords, which creates a large gust of wind. When Seimei united the swords with the other three special weapons from Takumi Village, the gust of wind transformed into a very strong whirlwind that deals 12 bluddeoning damage to all targets within range.";   
    
    }else if (x === "Swift Wind Wall"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Swift Wind Wall";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def/Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Defensive(Barrier)";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(both hands), 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 reaction(Hand seals - Ox → Dog → Rat)";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user summons a swirling stream of wind thats 25ft wide with user in the center, encasing the user and repelling incoming attacks. It can also be expanded to protect others near the user, this barrier has 10hp.";   
    
    }else if (x === "Vacuum Sword"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Vacuum Sword";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk/ Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive, Defensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Chakra Flow, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 187";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), any melee weapon with slashing damage(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "as an action, The user swings their sword/melee weapon and a gust of wind is released in the arc that it was swung in and deals slashing damage equal to the weapons slashing damage + user str mod(max 5) + user int mod(max 5) to a target. The technique is strong enough to stop projectiles that are thrown at the user, as a reaction to a ranged attack fired within range, The user swings their sword/melee weapon and a gust of wind is released in the arc that it was swung in and with if the damage this skill deals is greater the other attack, negelect the otther attack.";   
    
    }else if (x === "Violent Whirlwind"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Violent Whirlwind";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: ?cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft line";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user produces a powerful stream of wind from their mouth. This technique was powerful enough to dispel several shadow clones in an instant. user can use from 1cp to 7cp. the Bludgeoning damage dealt to all targets within range is equal to the cp the user decides to use. all targets affected must make a str saving throw of DC 7 + cp used, getting knocked back 15ft on a fail.";   
    
    }else if (x === "Wind Release: Air Bullets"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Air Bullets";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), 0.5cp per bullet";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: HAND SEALS (Bird) - 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique shoots multiple bullets of air at the victim with intense speed. the number of bullets are equal to 2 + users wis mod and deals 2 bludgeoning damage on hit. The bullets also have great power, enough to subdue a whole group of shinobi. user can aim the bullets to one target or differnet targets";   
    
    }else if (x === "Wind Release: Air Current Wild Dance"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Air Current Wild Dance";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Supplementary, Summon(Construct)";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(Both hand), 2cp every of users start turn";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration,  Hand seals (Rabbit → Bird → Rat → Dragon → Bird) - 3 (actions or bonus actions).";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft sqaure";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user creates and controls air currents from the palms of their hands 20ft from them. The technique is able to easily whip up loose dust in the area. It is also performed to create a controllable dust storm. the user can move the dust storm up to 30ft with a action, bonus action or reaction. this dust strom cant be moved pass this skill range. any creatures or object that this dust storm stops moving in the same square its in take 5 bludgeoning damage and is pushed 5 ft from taht point. this dust storm has 10hp but is immune to physical attacks. user can use a bonus action to end this skill or when they run out of cp";   
    
    }else if (x === "Wind Release: Breakthrough"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Breakthrough";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk or Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive, Supplementary";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 160";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(both hand), 10cp or 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, Hand seals (Dog → Horse → Bird) - 2 (actions or bonus actions)";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft cone";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After gathering chakra in their stomach by paying 10cp to start the skill, the user expels it as a gust of wind. This technique is powerful enough to blow away everything within the user's immediate vicinity. dealing 8 bludgeoning damage to all targets within range and pushing them 10ft backward.  <br><br> This technique can also be used for supplementary purposes, such as creating a vortex of wind to save a falling ally. if theres a ally falling and is within range, you can pay 5cp instead and save that falling ally, making them land to 0ft from ground.";   
    
    }else if (x === "Wind Release: Cast Net"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Cast Net";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Cooperation Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(at least one hand), Heavy fan(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Using their Giant Folding Fan, the user launches sharp wind currents in the form of a net to slice their target apart, the target takes 6 slashing damage. When collaborated with other tessenjutsu users, it was powerful enough to inflict wounds on the Third Raikage — a shinobi renown for his tremendous durability. if they are allys with same skill in their set and are 30ft circle around user, they can use the same skill towards that target as far the target is also within range for them, the attacks are counted as one and the damage is added together instead of dealt seprately. ";   
    
    }else if (x === "Wind Release: Dust Cloud Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Dust Cloud Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(both-hands), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, Hand seals (Horse → Monkey → Bird) - 2 (actions or bonus actions)";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft line";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique creates a stream of high-velocity wind containing dust particles, capable of decimating anything caught in it in only a matter of moments dealing 7 slashing damage to all targets within range and their speed are halved for thier next turn only. The completed technique is directed through horizontally overlapped hands that are placed in front of the user's mouth after forming the necessary hand seals.";   
    
    }else if (x === "Wind Release: Flower Scattering Dance"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Flower Scattering Dance";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom / Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 189";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv5, V, S(both-hands), 12cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, Hand seals (Tiger → Hare → Dragon) - 2 (actions or bonus actions)";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, 2 minutes";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique allows the user to summon a cyclone of petals to attack their opponent, the cyclone is occupies a 10ft sqaure and can move 30ft per turn. The user can remain in one spot for the use of the technique, because he or she can direct it anywhere they desire, user can only move this cyclone if they didnt move from thier initial position off thier own will. if the cyclone stops in the same square as targets, they must make a str saving throw of DC 13 + user wis mod (max of 4), taking 8 Slashing damage on a failed save, or on a sucess, the targets only recieves half the damage. Therefore, the user can increase the direction and power of the technique to the maximum as a last resort by paying additional 4cp this attack increases in size to 20ft sqaure and deals additional 5 slashing damage but the skill ends after this is done.";   
    
    }else if (x === "Wind Release: Gale Palm"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Gale Palm";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive, Supplementary";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(Both hands), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, Hand seals (Snake → Ram → Boar → Horse → Bird → Clap Hands Together) - 3 (actions or bonus actions).";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 minutes";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A Wind Release technique where the user either increases their velocity by boosting all users speed by 30, <br><br> or by the user clasping their hands together, wind is compressed and transformed into a powerful gale, which has enough force to knock over a person. When used in conjunction with shuriken or kunai, the tools become more lethal as their speed is increased. all users armed or unarmed physcial melee attacks are buffed by 2 while all thier movement speed increase by 10 for thhe duration.";   
    
    }else if (x === "Wind Release: Great Balloon"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Great Balloon";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive, Supplementary";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv10, V, S(Both hands), 13cp or 16cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, Hand seals (Monkey → Ram → Bird → Hands clapped) - 2 (actions or bonus actions) OR Hand seals (Rabbit → Technique specific seal → Rat → Dragon → Technique specific seal) - 3 (actions or bonus actions).";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft cone";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user gathers an enormous amount of wind and creates a massive twister that targets everything within range. Its power can easily repel two men a considerable distance away. The hand seals for the technique differ depending on which direction the user gathers wind. if 2 actions or bonus actions were used for this skill, <br> the twister deals 10 bludgeoning damage to all targets and sends them flying 50ft back (25ft instead if target STR score is more than 15). <br><br> if 3 actions or bonus actions were used for this skill, <br> the twister deals 15 bludgeoning damage to all targets and sends them flying 80ft back (40ft instead if target STR score is more than 15).";   
    
    }else if (x === "Wind Release: Great Breakthrough"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Great Breakthrough";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 230";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv10, V, S(Both hands), Wind Release: Breakthrough(skill), 13cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, Hand seals (Tiger → Ox → Dog → Rabbit → Snake) - 3 (actions or bonus actions).";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft cone";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user breathes wind from their mouth, blowing away whatever is in front of them Dealing Bludgeoning Damage equal to 10 + users Int mod(max 10) To All Targets Within Range And Pushing Them (5 x user Int mod[max 10])ft Backward.. The technique itself is quite simple, but its power varies significantly depending on the user's skill and how strong they make the winds; Rin no Sho compares Orochimaru's use of this technique against Team 7 to a hurricane, as his is able to uproot trees.";   
    
    }else if (x === "Wind Release: Great Cast Net"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Great Cast Net";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Cooperation Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 199";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv15, V, S(at least one hand), Heavy Fan(Weapon, Equipped), Wind Release: Cast Net(skill), 7cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The Wind Release: Great Cast Net technique works similar to its parent technique whereby the user utilises their Giant Folding Fan to create a multitude of extremely sharp blades of wind to attack their opponent with. These blades of wind overlap with one another forming a figurative net which cuts the target from all angles. this technique cant be dodged/evaded by targets with Dex score of 15 or less, The Target Takes 10 Slashing Damage. This technique can be used in conjunction with other tessenjutsu users for increased power, If They Are Allys With Same Skill In Their Set And Are 30ft Circle Around User, They Can Use The Same Skill Towards That Target As Far The Target Is Also Within Range For Them, The Attacks Are Counted As One And The Damage Is Added Together Instead Of Dealt Seprately..";   
    
    }else if (x === "Wind Release: Great Task of the Dragon"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Great Task of the Dragon";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom / Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Summon(Offensive, Defensive)";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 240";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv10, V, S(at least one hand), Heavy Fan(Weapon, Equipped), 10cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action and 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 4 minutes";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user swings their fan to the sky, causing a giant tornado to descend upon a target. This technique can be set up as a feint as it has a delayed activation, meaning user does not pay cp until user uses a bonus action after the activation og this skill to summon the turnado, user can cancel this skill with a bonus action without paying cp at all. The technique alters weather conditions temporarily creating storm clouds in a 100ft sqaure from this skill range, and attacks from the sky rather than from the person. after the use of the bonus action and paying cp for this skill, the 20ft square wide and 70ft high turnado spawns anywhere within the storm clouds range. The storm clouds that create the attack dissipate immediately after the tornado begins while the tornado continues in a highly concentrated state. this turnado can move 15ft per turn, any creature that starts its turn inside the turnado takes 7 bludgeoning damage and if the creature is Large or smaller and has a Str score less than 20, they must make a Con saving throw of DC 15, getting restrained on a Restrained on a fail and will move where the turnado moves (this saving throw can repeated every of the creatures end turns), on a sucess the creature is pushed 20ft away from the tornado. this turnado does double damage to buildings and constructs. all targets that have str stat of 17 or lower and are 20ft from the tornado are pulled 10ft towards it. this tornado has 20hp and is resistant to physical damages.";   
    
    }else if (x === "Wind Release: Great Wind Protective Wall"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Great Wind Protective Wall";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Defensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Heavy Fan(Weapon, Equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Using thier Giant Folding Fan, User creates a wind wall that pushes all targets within range 20ft away and summons a shield of HP 4 that last for this turn only.";   
    
    }else if (x === "Wind Release: Passing Typhoon"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Passing Typhoon";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Supplementary";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user creates a gust of wind that blows away all weather conditions and hazards. It is powerful enough to dispel even the Hiding in Mist Technique.";   
    
    }else if (x === "Wind Release: Rasengan"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Rasengan";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 121";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), lesser than lv15 requires shadow clone justu (skill), 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 minutes";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After learning Minato Namikaze created the Rasengan with the intention of combining it with his own nature, a task that proved too difficult for him to complete prior to his death, Naruto struggled to combine the Rasengan with his wind-nature, which he described as needing to look left and right at the same time. He is eventually able to overcome this obstacle by using shadow clones: he provides the chakra, one shadow clone shapes the chakra into a sphere, and a second infuses the sphere with wind. The end product becomes the Wind Release: Rasengan, the two clones must be within 5ft of the target. Users who have mastered the Rasengan's shape transformation will only need one shadow clone at above lv7, to provide the wind-nature, and with additional experience users can perform it without any shadow clones at all at lv 15. Naruto's version appears largely identical to a standard Rasengan, but is stronger, and capable of being thrown. the rasengan stays at the users palm and user can move with it, user can use a bonus action to either use the rasengan as a melee attack or throw it within this skill range dealing 6 bludgeoning damage and knocking them 20ft backward and 20ft up.";   
    
    }else if (x === "Wind Release: Rasenshuriken"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Rasenshuriken";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Wind Release: Rasengan(skill), lesser than lv10 requires shadow clone justu (skill), 7cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 (actions or bonus action)";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous OR Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "User typically has the help of two shadow clones that are within melee range from user in the Rasenshuriken's formation: he provides the chakra, one clone helps keep the chakra contained, and the second clone adds his wind nature. It is the completed version of the Wind Release: Rasengan, with four large points around the central Rasengan core, giving the appearance of a fūma shuriken. It also gives off a loud screeching noise. when it hits a target it deals 9 slashing damage to that target and 4 bludgeoning damage to targets within 5 ft from target. By the time of The Last: Naruto the Movie, Naruto is able to create Rasenshuriken without aid and is able to remotely guide it. at lv 10, user will be able to use this skill without the aids of clones and can control the movement of the Rasenshuriken which can move 50ft every turn including opponents turn.";   
    
    }else if (x === "Wind Release: Repeated Rasenshuriken"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Repeated Rasenshuriken";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv 15, V, S(both hand), Nine-Tails Chakra Mode(Mode, active) or Sage Mode(mode, active), Wind Release: Rasenshuriken(skill), 16cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 (actions or bonus action)";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 10 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After activating Kurama Mode or Sage Mode (in the anime), User is able to form two Rasenshuriken and wield both at the same time. Their cutting power is so extreme that by using one of them as a melee weapon, Naruto was able to cut through the Ten-Tails' extremely durable tails with ease. after preparation, user can fire one or both with a bonus action. when thrown to a target within range, each Rasenshuriken deals 11 slashing damage to a target and 6 bludgeoning damage to targets within 5 ft from target. one or both can be used as a melee weapon that deals 11 slashing damage but can only be used with Slant Strike or Vertical Strike ";   
    
    }else if (x === "Wind Release: Sand Cloud Whirlwind"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Sand Cloud Whirlwind";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom/Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Supplementary";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Genjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 152";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(both hands), Yin Release (affinity), 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, Hand seals (Bird → Monkey → Boar → Dragon) - 2 (actions or bonus actions)";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user creates a dome-shaped sandstorm thats 20ft wide (wont work on targets that are bigger than large) and has an HP equal to users wis score, it surrounds the opponent and hinders it from escaping. During the technique's execution, the used sand particles collide against each other, thus creating electro-magnetic waves which place the trapped person under never-ending genjutsu in the form of characterless beings attacking with kunai. While the target is busy fending these illusions off, it is vulnerable for attacks from the outside, when attacked the skill ends. at the start of targets turns, target can roll a Wis saving throw of DC equal to users wis score(max 16), breaking this dome on a success, on a fail everytime, target takes 3 slashing damage.";   
    
    }else if (x === "Wind Release: Shakujō Twister"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Shakujō Twister";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive ";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 213";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv 10, S(at least one hand), Shakujō(weapon, equipped), 7cp or 12cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "By spinning their shakujō above their head, the user is able to produce a very large twister around himself before launching it out. It is powerful enough to easily repel demonic wind blasts. as a reaction and 7cp it can neglect an attack that deals damage equal to double users wis score so far its a charged elemental attack (as far theres an element in the skill text) and can be seen and touch. as a action and 12cp, send the twister to a target within range, dealing 16 slashing damage to the target";   
    
    }else if (x === "Wind Release: Shield of the Wind Count"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Shield of the Wind Count";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def/Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Defensive(Barrier), Supplementary";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 260";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(at least one hand), 8cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Hand seals (Bird) = 1 reaction or 2 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A self-proclaimed invincible barrier; using hand gestures, the user is able to create a protective barrier of wind capable of repelling(damage repel max equal to 3x user wis score[max 50]) any incoming range attack they perceive, back on the original user with equal or greater force as far they are within range. the sent back attack range is the same range as the orignal skill. user can increase the damage by sacrificing another reaction and and 4cp to increase the damage of the attack x1.5";   
    
    }else if (x === "Wind Release: Spiralling Wind Ball"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Spiralling Wind Ball";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(at least one hand), 3cp per ball";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This technique allows the user to breathe wind-infused chakra into the palm of their hand, shaping it into a small, whirlwind-like ball. Then the user will shoot it at their opponent dealing 4 bludgeoning damage. This technique seems to be very fast and powerful, as it is capable of smashing through thick rock. They can be launched in rapid succession, user can use this skill as many times as thier Int mod. this skill ends if user uses another skill.";   
    
    }else if (x === "Wind Release: Vacuum Blade"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Vacuum Blade";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Chakra Flow, Shurikenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 75";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(at least one hand), 3cp or 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Touch";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 5 minutes";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user exhales wind-infused chakra onto a weapon in order to increase its sharpness, range and lethality. For the duration, the user can pay 3cp to infuse a kunai/dagger/knife to resemble a makeshift scimitar or longsword or shortsword or any weapon that has slashing damage or user can pay 2cp to infuse shuriken or projectiles to increase their range x 1.5 and cutting power by 2. In the case of the kunai, wind-natured chakra, which envelopes the weapon, has a distinctive light green colouring and the kunai damage becomes the new weapon damage unless its damage is higher already then all its damages are increased by 2.";   
    
    }else if (x === "Wind Release: Vacuum Sphere"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Vacuum Sphere";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 134";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(both hands), 1.2cp per ball";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, Hand Seals (Rat → Rabbit → Dog) - 2 (Actions Or Bonus Actions)";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user takes a deep breath and exhales several small blasts of wind chakra equal to the users int mod(max 10) + wis mod(max 10) that scatters in different directions, making it very difficult for one to avoid without injury. Due to the properties of this technique, the expelled blasts are capable of piercing into and potentially through an opponent's flesh. In the anime, Danzō could also compress the air to create a spherical-like blast that is powerful enough to break through a wood dome. this attack cant be evaded or dodged unless the target succeds on a Dex saving throw of DC equal to 15. the target recieves 3 piercing damage for each ball spawned, the balls act as different attacks but strike target at the same time. ";   
    
    }else if (x === "Wind Release: Vacuum Great Sphere"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Vacuum Great Sphere";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 213";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv10, V, S(both hands), Wind Release: Vacuum Sphere(skill), 12cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Hand Seals (Tiger → Dog) - 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A stronger version of the Wind Release: Vacuum Sphere technique, where the user instead chooses to compress the entirety of the previously inhaled breath into a single large, crushing sphere of wind chakra that they then proceed to expel from their mouth. this sphere can moves 50ft in a straght line in a turn and when it enters the same sqaure with a target it attacks the target, on hit it deals 19 bludgeoning damage.";   
    
    }else if (x === "Wind Release: Vacuum Wave"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Vacuum Wave";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(Both hand), 10cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, Hand Seals (Rat → Snake → Horse → Dog) - 2 (Actions Or Bonus Actions)";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 25ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user takes a deep breath and spins while exhaling, compressing the released air into a solitary blade of wind that covers a substantial area around the user, due to their circular motion. The resulting sharpened blast is large enough to slice through multiple targets located at a significant distance from the user, causing grievous injuries to those hit dealing 10 slashing damage to all targets within range. as a reacrion and paying 5cp, the range of this skill can be increased to 50ft instead.";   
    
    }else if (x === "Wind Release: Vacuum Serial Waves"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Vacuum Serial Waves";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 289";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv 10, S(Both hands), Wind Release: Vacuum Wave(skill), 8cp per blade";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, Hand Seals (Rat → Snake → Horse → Snake → Dog) - 3 (Actions Or Bonus Actions)";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The user takes a deep breath and exhales several blades of wind at different angles, by rapidly moving their head in various directions. user can spawn up to 5 blades which are fired one at a time. The power of this technique can be dramatically enhanced when utilised in conjunction with the effects of extreme suction, such as that generated by Baku, where the augmented attack proved effective enough to even slice through the defences of Sasuke's humanoid Susanoo. when a blade hits a target, its deals 12 slashing damage. each blade bypasses AC below 30.";   
    
    }else if (x === "Wind Release: Whirlwind Fist"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Whirlwind Fist";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 135";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 5 of user turns after this one";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A technique where the user clads their fist with Wind Release to form somewhat of a typhoon that is a revolving blade of wind. Upon impact against an individual, the technique pierces their body and blows them away with a shock wave. while active, your punch or unarmed skills range are increased by 10, anytime you use punch or any unamred skill that uses hands, it deals piercing damage instead and the damage is increased by 3, the target is also knocked 15ft backward on hit.";   
    
    }else if (x === "Wind Release: Verdant Mountain Gale"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Wind Release: Verdant Mountain Gale";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Chakra Flow, Bukijutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 134";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), any melee weapon(weapon, unequipped), 1cp every end turn after this";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 150ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "By using wind-based chakra, the user can infuse their bladed/melee weapons within range with it from a distance and manipulate them. the user can now use the weapons from a distance and can use them to perform skills, the weapon automaticallys fly 30ft above ground and the user can move the weapon 30ft per turn . the user still uses his action or bonus actions to perform skills with this weapon.";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }else if (x === "Great"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Great";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Offensive";
      let classification = document.getElementById("skill_classification").innerHTML = "Classification: Ninjutsu, Kenjutsu";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 142";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(at least one hand), Shortsword(weapon, equipped), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";   
    
    }
    

    }