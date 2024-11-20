//////////////////////////
    //demon skills///
    //////////////////////////

function rodclick(n){
    let modal = document.getElementsByClassName("0")[0];
    let x = n.toString();

    if (x === "(Af)Crest Healing"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Crest Healing";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Heal";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 1cp per heal";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Self/Touch";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "replenish you or an ally within range hp by 2 for every turn you are on concentration. user can end this with a bonus action, it also ends if concentration ends or user cp reaches 0.";  
    
    }else if (x === "(Af)Summon Primal Fire Elemental"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Summon Primal Fire Elemental";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Summon(creature)";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Summon a fire beast with the following stats; Str: 15, Dex: 14, Con: 10, Int: 2 ,Wis: 5, Cha: 10, Fly(hover): 40ft, hp: 7. in your turn, this summon can use its action to make a charged melee attack, dealing 4 fire damage. or throw a fire ball towards a target making a ranged attack(60ft) dealing 3 fire damage.";  
    
    }else if (x === "(Af)Magic Shield"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Magic Shield";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Make a shield with a health of 5. Your health cannot be harmed by opponent until this shield is destroyed. you also dont take residual damage if the attack that destroys the shield has residual damage.";  

    }else if (x === "(Af)Message"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Message";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 0cp or 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous or Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Allows you to talk to animals or players within range through telepathy as far they understand your language. or you can pay 3cp to roll a Wis ability check of DC equal to the Lv of the target(creatures without lv are regarded as lv1) + its owners lv, on a success, you take control of a clone, spawn or summoned monster or item. ";  

    }else if (x === "(Af)Little Aura Pressure"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Little Aura Pressure";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 of targets turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This shows your opponent little of your magic aura, all creatures within range must make a Wis saving throw of DC equal to half your wis score, on a fail, affected targets are frightened of you for the duration, on a success, this skill cant work on them until 24hrs.";  

    }else if (x === "(Af)Full Aura Pressure"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Full Aura Pressure";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 minute";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This shows your opponent all of your magic aura, all creatures within range must make a Wis saving throw of DC equal to your wis score, on a fail, affected targets are frightened of you and Incapacitated for the duration, on a success, this skill cant work on them until 24hrs.";  

    }else if (x === "(Af)Create Greater Item"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Create Greater Item";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Transform";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 10 minutes";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Allows you to change your class instantly, you can only use class that your race allows you to use, you instantly get a basic weapon the class allows, your hp, cp remains the same but your ability scores might change, meaning you can only exchange your score values between each other. when this spell ends everything goes back to normal. you can use another action after This. you can end this with an action";  

    }else if (x === "(Af) Earth Surge"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Earth Surge";
      let category = document.getElementById("skill_category").innerHTML = "Category: Phy Atk/ Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 143xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: atk(40ft) or def(5ft circle)";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous or 2 turns ";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Create a wave of liquid earth, if you use it to attack, do 5 bludgeoning damage to a target or as a defense, a earth wall is created that blocks all your opponent's next attacks in the next turn only.";  

    }else if (x === "(Af)Invisibilty"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Invisibilty";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 1cp every of users end turns";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      " you turn invisible. you cant be seen with the normal eyes, therefore you cannot be a target for attacks but you can be touched. This wears off on you attack a target. your movement cant be tracked normally except by special means like footprints(desert terrain only) e.t.c. if you are in range of splash attacks they will affect you and if they hit the skill ends.";  

    }else if (x === "(Af)Grasp heart"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Grasp heart";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Instant kill";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 260xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action ";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "will only work if the target is of a lower level than you and will only work on living creatures or creatures that have hearts and are at most one step bigger than you in size. you point at the target within range and the target must make a Wis saving throw of DC 12, on a fail the targets heart is crushed and dies instantly. If the target for this skill is higher than user in level, the target can subtract the difference in lv from the DC(max of -5), if you are of an higher lv than the target, you can add the difference in lv to the DC(max of +5). thos skill bypasses Defences.  ";  

    }else if (x === "(Af)Dragon Lightning"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Dragon Lightning";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg / Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 145xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "this skill destroys any defensive skill of rank 3 star or lower currently used by a target and gives the target 6 lightning damage. ";  

    }else if (x === "(Af)Create Death Knight"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Create Death Knight";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Necromancy";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 280xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: lv 10, 10cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Can only be used on a dead player or humaniod creature that was previously a living on the field... raise that creature from the dead into a death knight, the creature is now an undead, the death knight spawns with a shield and a sword, it has the following stats; Str: 18, Dex: 10, Con: 14, Int: 6,Wis: 10, Cha: 10, walk: 30ft, hp: 15, cp: 0, AC: 15. the death knight can use unlimited attacks with its Great Sword(6 Slashing Or 7 Piercing) and use the following skills with it; #Slant Strike, #Vertical Strike, #Horizontal Strike, any humaiod living creature the death knight kills turns into a undead with the following stats; Str: 7, Dex: 6, Con: 6, Int: 1,Wis: 1, Cha: 4, walk: 10ft, hp: 3, cp: 0 with a unlimited bite skill that deals 3 piercing damage.";  

    }else if (x === "(Af)Blood For Power Tribute"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Blood For Power Tribute";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time/Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Tribute/Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: half hp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 20 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Pay half your health and the cp cost of all skills and spells you use for the duration is divided by 2 for the duration.";  

    }else if (x === "(Af)Anti Life Cocoon"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Anti Life Cocoon";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def/Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 5 of opponents turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "creates a barrier around user, All skills that are not magical or charged or do not use cp cannot affect(are neglected) you for the duration.";  

    }else if (x === "(Af)Spatial Goblin Flute"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Spatial Goblin Flute";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Summon";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Summon 2 goblins with the creature card 'goblin' stats.";  

    }else if (x === "(Af)Summon Archangel Flame"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Summon Archangel Flame";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Summon";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Summon an archangel with the following stats; Str: 7, Dex:15, Con:11, Int:12, Wis:15, Cha:15, spd:(walk)40ft fly(60ft), hp:7. this summon as 2 skills which can be used unlimitedly and without any order. <br> Fire strike(Phy melee attack): that deals fire damage of 5 <br> fireball(phy range atk[50ft]): sends a fireball to a target within range, dealing 4 damage on hit.<br><br> Magical Effect: when this archangel receives damage, its master receives the amount of damage as health. ";  

    }else if (x === "(Af)Summon Archangel Justice"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Summon Archangel Justice";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Summon";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Summon an archangel with the following stats; Str: 1, Dex:20, Con:13, Int:19, Wis:18, Cha:19, spd:(walk)30ft, fly(50ft), hp:1. this summon as 1 skills which can be used unlimitedly and without any order. <br> justice arc (charged range atk[40ft]): sends a arc of energy that deals 3 radiant or 2 slashing or 2 piercing (summoners choice). <br><br> Magical Effect: as a reaction when it is destroyed its effect activates; the last attack damage on this creature before its death is given to the attacker as radiant damage as far they are within 200ft when the attack was made. <br> as a bonus action next turn, user must pay 4cp to summon another archangel justice after one dies, this effect will only stop when user doesn't have enough cp.";  

    }else if (x === "(Af)Summon Archangel Holy Smite"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Summon Archangel Holy Smite";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Summon an archangel with the following stats; Str: 7, Dex:17, Con:10, Int:24, Wis:16, Cha:15, spd:(fly/hover)40ft, hp:5 and magical attack with radiant damage of 4(Range{200ft}). ";  

    }else if (x === "(Af)Archangel Ritual"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Archangel Ritual";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: Concentration, 2 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "When you control archangel flame, justice and holy smite out and within range of this skill, Tribute the 3 archangels to summon archangel Lucifer with the following stats; Str: 25, Dex:18, Con:18, Int:16, Wis:18, Cha:20, spd:(fly)70ft, spd:(walk)50ft, Hp:10 and attack that deals necrotic damage(range{melee}) and is determined by the difference between the masters and its targets hp with max damage equal to the masters Wis score, these attacks cannot be neglected, when this summon dies, it comes back to life in next 2 of its masters turns with +3 hp. it can only come back 3 times and the summoner must pay 4cp every time it does unless this effect is cancelled. ";  

    }else if (x === "(Af)Negative Burst"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Negative Burst";
      let category = document.getElementById("skill_category").innerHTML = "Category: Magical atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp x targets";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Give all other creatures within range 5 necrotic damage including allies. 3cp each for all creatures affected. ";  

    }else if (x === "(Af)Scarecrow"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Scarecrow";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 134xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: --";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This brings 4 used skills back except for this one. your turn ends after this is used. you cant use this skill if you already used an action this turn.";  

    }else if (x === "(Af)Super snatch"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Super snatch";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Steal";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 164xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: +2cp only when kkg is used";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This enables user to steal one of an opponents KKG (works on active kkgs too, then the effects just becomes yours) within range until the health of the player whose KKG has been stolen is below 7. You can use this stolen skill even if you are dead but that turn only. KKG stolen can be used now or saved for later. if stolen kkg wasn't used before opponent hp reached the limit, the skill goes back to opponent. you only pay +2cp only when you use the stolen kkg.";  

    }else if (x === "(Af)Positive Burst"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Positive Burst";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Cp Charge";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 145xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2hp x all targets affected";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "you and all allies within range gain 5cp, you pay 2hp for all target affected.";  

    }else if (x === "(Af)Holy Ray"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Holy Ray";
      let category = document.getElementById("skill_category").innerHTML = "Category: Magical Atk or Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Beam";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Sends a beam of light towards a target, dealing 4 radiant damage on hit.";  

    }else if (x === "(Af)Poison"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Poison";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time/Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Debuff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "after a target receives damage from your melee attack, as a bonus action, you can use this skill on the target and the target is poisoned and receives 1 poison damage every of their end turns.";  

    }else if (x === "(Af)Shock Wave"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Shock Wave";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 8cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "send a wave of pure energy to all directions, all targets affected must make a Dex saving throw of DC 13, taking 7 force damage and getting pushed 10ft the their opposite direction and also falling prone. on a save, the target takes half the damage and doesnt fall prone or pushed back";  

    }else if (x === "(Af)Over Attack Resistance"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Over Attack Resistance";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain/Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Def Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 0.5cp every of users end turn";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 10 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "All physical/non magical attack that deal damage of 5 or more are reduced by 25% for the duration, this skill can be ended with a bonus action.";  

    }else if (x === "(Af)Confusion"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Confusion";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Re-Direct";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: cp = attacks cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: sight range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "as a reaction, when you are about to receive any damage from a opp within your range of sight from a range attack skill, direct the attack that damage to another target in the field thats within your range of sight or direct the atk skill to another direction. this will work on melee skills if they is another opponent within 5ft from.";  

    }else if (x === "(Af)Charge Of Stalagmite"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Of Stalagmite";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, Wis, ?cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 turn";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 minute";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      " You can skip an action and double damage of the next atk skill or spell that deals damage within the duration. you pay hp and gain cp normally for the skip.";  

    }else if (x === "(Af) Open Wounds"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Open Wounds";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 134xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "If a target within range received damage in your last turn, deal bleed damage equal to half of all total damage that the target received that turn (this damage is due to internal bleeding) in this turn, if the damage given is less than 5 you can still use another action. ";  

    }else if (x === "(Af)Word Of Curse"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Word Of Curse";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 180xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp for each verse";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: --";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Until all verses have been used";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "once this skill is active you can use any of its verses, it is not regarded as a time skill, to use a verse requires an action, you just have to say word of curse then the verse. you can only use a verse once. you can also start this skill by using a verse from it. before using any different skills in any of your turns you must have used all 3 verses.<br>***Verse 1 (ranged spell, 50ft)- target cannot use cp for their next 2 turns. (treated as a time skill, doesn't affect the real skill if destroyed)<br>***Verse 2 (ranged spell, 50ft)- target cannot give you damage for 2 of their turns  (treated as a time skill, doesn't affect the real skill if destroyed).<br> ***Verse 3 (ranged spell, 50ft)- Every skill target uses has its cp cost multiplied by 1.5 for next their next 2 turns.  (treated as a time skill, doesn't affect the real skill if destroyed";  

    }else if (x === "(Af)Blind Senses"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Blind Senses";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: until target is damaged";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "sends a wave of energy to a target, once this hits a target, the target cannot sense you or any other creature within its line if sight, smell or hearing, which means target cannot directly attack you or use reactions against your melee attack skills, this spell wears off when the target receives damage.";  

    }else if (x === "(Af)Speed-Demon"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Speed-Demon";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 198xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: --";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This is a skill which allows its user to play, at most two already used(cannot duplicate) moves, one with an action and the other with a bonus action which will be counted as one single action/skill under this skill, cp for skills are still used if required.";  

    }else if (x === "(Af)Tribute"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Tribute";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Tribute";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 230xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(two hands), Wis, ?cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "When the user's life is at 1, user can start this spell, at the end of the preforming time, with a bonus action that turn or in a reaction in the opponents turn, you can target a creature within range, the creature makes a Wis saving throw of DC 17, on a fail the target is forced to commit suicide else the effect doesnt work and user dies. can only work when the target's hp health is users Wis score or below.";  

    }else if (x === "(Af)Hell Flame"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Hell Flame";
      let category = document.getElementById("skill_category").innerHTML = "Category: Magical Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Atk";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 250xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(one hands), lv5, 9cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Does 10 (4 fire + 6 necrotic) damage to target, this skill neglects Basic AC. the fire stays on that part of the targets body dealing additional 3(2 fire + 1 necrotic) every of their end turns. target can spend an action to turn off the fire or it turns off automatically if the target is hit with a skill or spell or item that has holy water in its name or description. if this skill hits a leather armor, it does double damage to its Durability. all damages dealt by this skill decreases the targets hit point maximum and neglects regeneration or healing";  

    }else if (x === "(Af)Sealing Crystal"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Sealing Crystal";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg/Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Sealing";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 170xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(Two hands) 1cp every of users end turns";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 20 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Seal a targets 3 star or lower skill/ 5th tier or lower spell thats out on the field and within range, the skill might be summons, projectiles, barriers, power ups/modes or even time skills e.t.c even active skills can be sealed. they are turned to crystals and cant move or activate their effects unless it is already activated but then the effects will be neglected until the sealing ends. ";  

    }else if (x === "(Af)Black Hole"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Black Hole";
      let category = document.getElementById("skill_category").innerHTML = "Category:  Atk/Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Summon";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 350xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(one hand), lv 20, Sight, 20cp, ";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: sight range or 60ft(if no sight range)";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user uses this skill to summon a 10ft by 10ft black hole anywhere within its line of sight, the black hole as hp equal to x2 the users Int score and is immune to physical attacks. every turn, this black hole continues to draw in all objects and targets and ranged attacks 100ft from it to 20ft towards its direction, all thier speeds are divided by 3 while in its range. using a range skill that has less or equal attack spd(after division) that the sucking speed within range of the blackhole automatically sucks it into the black hole and neglects it but damages the black hole. when a summon or player is 0ft or less to the black hole, they must make a Wis saving throw of DC equal to the black hole hp, on a failed, the target is sucked inside and recieve unneglectable nectoric damage of 50 (bypasses immunity and changes it to resistance and totally neglects resistance).";  

    }else if (x === "(Af)Appraisal Magic Item"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Appraisal Magic Item";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: View";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 30xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(one hand), 1cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Can be used to know the details, including skills of a weapon or item/magic item within range. ";  

    }else if (x === "(Af)Alarm"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Alarm";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 0.2cp every of users end turns";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 hour";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "created a invisible barrier, once a creature with cp and can be sensed enters this barrier you are notified and as a reaction, you can use an action in that turn.";  

    }else if (x === "(Af)Reinforce Armor"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Reinforce Armor";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 1cp every of the skill targets end turns";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self or touch";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 5 of targets end turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "increases users or targets AC by 3 for the duration.";  

    }else if (x === "(Af)Super blood Gun"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Super blood Gun";
      let category = document.getElementById("skill_category").innerHTML = "Category: Phy/ Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Atk";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: -1hp, 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Does 7 damage (3 piercing and 4 acid) to a target.";  

    }else if (x === "(Af)Guard"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Guard";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Block";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 25xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(Both hands)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: next end turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "can be used after another skill. Block an opponent's next melee atk skill that deals damage less than your half your con score of next turn only.";  

    }else if (x === "(Af) super Guard"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) super Guard";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Block";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 132xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(Both hands), lv 5, 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 reactions";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      " as a reaction, can be used 2 times in a turn. Block the first 2 atk skills targeted at you that deals damage less than your con score.";  

    }else if (x === "(Af)Twine Plant"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Twine Plant";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Grapple";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(atleast one hands), M(seed), 0.5cp per turns active";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "with a bonus action you can send twine vines to attempt to grapple a target within range, target must make a Dex saving throw of DC 13, dodging on a save or being grappled on a fail. a grappled target at the end of thier turns can make Str saving throws od DC 12, breaking free on a save.";  

    }else if (x === "(Af)Magic Arrow"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Magic Arrow";
      let category = document.getElementById("skill_category").innerHTML = "Category: Magical Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Conjure";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(atleast one hands), Bow(weapon, 'optional'), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 150ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "sends a arrow made from magic to a target, Does 4 Piercing damage to opponent, this attack cannot be blocked with physical hands but with shields, if it is used with a bow, you add the weapon damage to this attack, in addition it destroys any 3 star/5th tier or below defense skill or spell trying to block it or does double damage to the sheild durability. ";  

    }else if (x === "(Af) Light Healing"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Light Healing";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Heal";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40xp";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(both hands) 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 15ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Give up to 3 allies within range 3hp.";  

    }else if (x === "(Af)Curse Wound"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Curse Wound";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Debuff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(atleast one hands), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 10 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when a target is hit and damaged with an attack skill, you can use this skill instantly against that target, target is cursed and has his hp limit reduced by that damage for the duration. ";  

    }else if (x === "(Af)Counter Vanish"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Counter Vanish";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Neglect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 134xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 90ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "When a target within range is about to use an attack skill that gives 10 or below initial damage, neglect the skill and all its effect.";  

    }else if (x === "(Af)Full Counter"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Full Counter";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Reflect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 250xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(atleast one hand), cp = half the attempted reflect damage";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee, Reflected Atk skill: orginal attack skill range";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "as a reaction in opponents turn, when a  or magical Atk skill or spell is fired at you or an ally(will only work for allies if half your speed can get to the ally and is also more than than the atk skill speed), reflect the damage(you receive no damage) and send it back to the attacker as if you are the one using the attack but multipliing the damage x1.5. the damage max you can reflect is equal to your Wis score, this skill doesn't work for attack that deal more than your max. ";  

    }else if (x === "(Af)Skill Theft"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Skill Theft";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Steal";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 138xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: user base walk spd ";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "When a target within range attempts to use an attacking skill on you, before it activates, steal the skill and keep it for yourself to be used in the battle. it ends targets turn but you have to skip your next turn. skill that can be stolen must not be ranked above 3 stars. this doesnt work on kkgs";  

    }else if (x === "(Af)Ultimate Sacrifice"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Ultimate Sacrifice";
      let category = document.getElementById("skill_category").innerHTML = "Category: Magical Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Tribute";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(atleast one hand), 8cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "When your health is at 3 or below, send a wave of dark energy that gives everyone within range including yourself 8 necrotic damage, creatures killed by this are cursed and cannot revive by any means in until the curse is lifed. ";  

    }else if (x === "(Af)Full Concentration"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Full Concentration";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 76xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: --";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After using this, you take another action, must be an attack, the attack cannot be neglected even by a target that you cannot attack and also does double damage to defenses with hp.";  

    }else if (x === "(Af)Redo"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Redo";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Counter Neglect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: ";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Anytime a target attempts to use a neglect or redirect skill to neglect or redirect your attack, use this skill to neglect that skill and continue to use your first skill. ";  

    }else if (x === "(Af)Super magic shot"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Super magic shot";
      let category = document.getElementById("skill_category").innerHTML = "Category: Magical Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(Both hands), 7cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 200ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Sends a huge ball of Magical energy to a target, Give a target 8 force damage, when it hits, sends magic balls to all targets within 10ft of the first target, dealing 3 force damage on hit.";  

    }else if (x === "(Af)Pressure Nullification"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Pressure Nullification";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(one hand), 1cp per user end turn active";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "this barrier can block up to 2 attacks that give damage equal or less to 3 + users wis mod, it stays till it completely defends against the attacks. if an higher damage attack hits it, it is instantly destroyed. ";  

    }else if (x === "(Af) mana gain"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) mana gain";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Cp Gain";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 100xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "You gain 5cp, you can still take another action but you cant use attack skills this turn anymore.";  

    }else if (x === "(Af)Kami Chigiri"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)Kami Chigiri";
      let category = document.getElementById("skill_category").innerHTML = "Category:  Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 86xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(one hand), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Give a target 3 thunder damage, a target continues to lose 1hp from Psychic damage for 3 of their end turns.";  

    }else if (x === "(Af)rise killing intent"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)rise killing intent";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: --";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, lv10, 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: --";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "this turn the battle into a forced death battle if it wasn't already one. if this was used in your turn, you can use another action and gain 3cp.";  

    }else if (x === "(Af)magic circle"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)magic circle";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(one hand), 2cp or 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user creates a magic circles before using a spell or skill, therefore enhancing them. you can increase all the damages, durations, and gains of your skills or spells by plus or minus one. after you use this skill, you must use another skill with a reaction or action or bonus action which this skill affects. 2cp, but you can increase the gain to plus 2 instead of 1 by paying 4cp instead.";  

    }else if (x === "(Af)killing ground"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Mirro";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 170xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 4cp each";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user creates a barrier with hp equals to users Str and Con score added together, this barrier goes around them and target or targets within range, no one can escape unless this barrier is destroyed and this barrier cant be destroyed by neg skills, only when its hp reaches 0. you or the target cant leave this battle as far this skill is still on and every body affected by this takes double the damage of all attack skills used and double the cp each to use them therefore this effect does not work for physical skills, you can use a action after this skill, all targets affected must pay 4cp each and if they don't have the enough, they must pay with hp.";  

    }else if (x === "(Af)bleeding coffin"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af)bleeding coffin";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(two hands), --";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "user creates a barrier with hp equals to users Wis and Int score added together, this barrier goes around them and target or targets within range, no one can escape unless this barrier is destroyed and this barrier cant b destroyed by neg skills, only when its hp reaches 0. you or the target cant leave this battle as far this skill is still on and every body affected by this including you cant heal or be healed(gain hp) within this barrier no matter what.";  

    }else if (x === "(Af) Overheat Shield"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Overheat Shield";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 172xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(Both hands), 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      " as a reaction, you create a barrier that has an hp equal to 2x users Con score, this barrier will give its user residual damage when it is destroyed. after that turn the barrier destroys.";  

    }else if (x === "(Af) Explosion"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Explosion";
      let category = document.getElementById("skill_category").innerHTML = "Category: Magical atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Area of effect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(Both hands, >lv10 one hand), 10cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "sends a ball of fire to a location within range. the ball spreads from its point to a 60ft circle of explosion and deals 13 fire damage to all targets within range. deals double damage to buildings and land. the damage can be increased to 17 fire damage by paying 14cp instead.";  

    }else if (x === "(Af) Plasma cannon"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Plasma cannon";
      let category = document.getElementById("skill_category").innerHTML = "Category: Magical atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Area of effect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(Both hands, >lv10 one hand), 8cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "sends a huge ray of plasma thats 40ft wide. this does 10 (5 lightning + 5 fire) damage to a targets within range ";  

    }else if (x === "(Af) Meteor swarm"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Meteor swarm";
      let category = document.getElementById("skill_category").innerHTML = "Category:  atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Area of effect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 250xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(Both hands, >lv15 one hand), ?cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action and 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: concentration, 1 minute";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Summons mini Meteors up 50ft above user. target can pay 5cp to summon 2 meteors and can continuously do this with a bonus action this turn. and with an action in another turn before this skill ends user can send the Meteors to up to 3 targets that are within 10ft of each other and within range. the Meteor can be split to hit each target in any order the user likes, each Meteor deals 5 fire damage to that target and does extra 3 fire damage to targets 10ft of it.";  

    }else if (x === "(Af) Soul Feeding"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Soul Feeding";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Steal";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(one hand), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Touch";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "only when User touches a Target, the target loses hp equal to 3 + users wis mod(max 7) and the user gains it as HP.";  

    }else if (x === "(Af) Soul Rebuke"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Soul Rebuke";
      let category = document.getElementById("skill_category").innerHTML = "Category: Magical Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(one hand), 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Touch";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "only when User Receives damage from an attack last turn, with an action, target touches a creature and deals necrotic damage equal to the damage it received last turn. max damage user can deal with this skill is equal to their wis score. deal the max damage if the damage is more than the max.";  

    }else if (x === "(Af) Saving Grace"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Saving Grace";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "As a reaction to a saving throw that you failed, you can roll a 1D4 die and add it to the saving throw.";  

    }else if (x === "(Af) Worm Hole"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Worm Hole";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: V, S(one hand), Damage absorption";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "As a reaction to a mid to long range attack that you are 30ft from, spawn a worm hole 5ft forward from you, creatures cant pass this worm hole, this worm hole has hp of 50 and will take all the damage until its hp depletes to 0 and deals residual damage to the user. the worm hole will also absorb area of effect damage fire to that one direction making all other targets behind user to recieve no damage. if the attack sent range is circle that goes to all direction, you only absorb damage that goes to your direction. the worm hole disappears after this turn.";  

    }else if (x === "(Af) E Shock you"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) E Shock you";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Damage absorption";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: --";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "As a reaction when you use a skill, you can use this skill. it allows you use the first skill regardless of the condition you are in. Status effect or effects that dont let you use actions or reactions, grappled or prone are neglected for this turn only.";  

    }else if (x === "(Af) Attack Mine"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Attack Mine";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 210xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, ?cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "As a reaction when a target within range is about to fire a  ranged skill, you can pay the cp used for the attack and make the attack explode in front of the user, they take half the damage from the attack, all creatures within 10ft circle also takes the same damage.";  

    }else if (x === "(Af) Mana Tax"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Mana Tax";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain/Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 160xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 minutes";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "As an action, the next skill or spell a target within range uses before the duration ends are doubled. As a reaction when a target within range is about to use skill, the target must pay double the cp for that skill or spell. if the target doesnt have enough cp the skill or spell is neglected, if the skill or spell cant be neglected, the target loses that action but can use the skill again later.";  

    }else if (x === "(Af) Grid Barrier"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Grid Barrier";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 260xp";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(one hand) 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 turn";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "this Barrier can be used as much times equal to your wis mod until after a long rest. a Barrier spawns around the user, this barrier protects every creature or object within the circle. it has hp equal to users level plus + thier wis score. this barrier only lasts for a turn and will not give residual damage if destroyed.";  

    }else if (x === "(Af) Avalanche"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Avalanche";
      let category = document.getElementById("skill_category").innerHTML = "Category:  Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Area of effect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(one hand), 8cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft cone";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 20 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "A moutain of Ice is fired towards the direction, all targets within range take 12 cold damaged and are grappled. at the start of every of targets turns, they can roll a Str saving throw of DC 14, breaking free on a save but falling prone after breaking free.  ";  

    }else if (x === "(Af) Shadow Jump"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Shadow Jump";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Travel";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: (30 x wis mod) ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "as far the terrian has light and its not in a cave or underground. as far the target casts a shadow and is within range of this skill, you can swiftly move and appear within 5ft of the target.  ";  

    }else if (x === "(Af) Evasive stance"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Evasive stance";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Evade";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: ??";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, 5 minute";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "With an action you activate this time skill, as a reaction by paying 3cp you can move half your original base speed anytime an attack is targeted at you or is about to affect you. the cp use increases by 1.5 every other time it is used before this skill ends.";  

    } 
    else if (x === "Mirro"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "Mirro";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200xp";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: Wis, ?cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee (retains reflected atk range)";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "";  

    }
    

    }
