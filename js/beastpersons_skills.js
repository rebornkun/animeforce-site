function rodclick(n){
    let modal = document.getElementsByClassName("0")[0];
    let x = n.toString();

    if (x === "(AF) beast frenzy"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) beast frenzy";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4 Cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 4 of your end turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "all your speed increases by 30 for the duration.";  
    
    }else if (x === "(AF) beast call"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) beast call";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: summon";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 10ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "spawn a lv1 or below beast type creature from the creature list.";  
    
    }else if (x === "(AF) Sealing"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Sealing";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Sealing";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 110";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(Both hands), 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: touch";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "once you touch a target, you can use this skill which Seals one of targets's skills in their skill set, user will have to say the skill name or the alphabet it represents or roll a D20 die. the skill can no longer be used in that battle until the victims hp is equal or less than their int mod.";  
    
    }else if (x === "(AF) Slug Wall"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Slug Wall";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: V, S(one hand), 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 5th end turn after activation";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "a wall barrier forms around the user, This divides all damage done by charged attacks by an opponent by 2.";  
    
    }else if (x === "(AF) Ritual"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Ritual";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: switch";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 60";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(one hands), 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: touch";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "once you touch a target, This allows its user to switch one of their unused Skill with one of opponent's unused Skill. The name of the skills should not be said, but instead the letter of the skills on the players card, but to use each other skills, the requirements must be met. you can use an action after this.";  
    
    }else if (x === "(AF) Voodoo"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Voodoo";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Redirect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(both hands), 6cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 2 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft square";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuos";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when active, When your opponent gives you damage and is within the range of effect of this skill, they must make a Wid saving throw of DC equal to your wis score, on a fail, the attacker also takes the same damage at the end of the turn. This effect lasts till the end of the battle after it is used. This effect cannot occur when you die, cannot redirect damage that is more than 4 + Wis mod, cannot also redirect Necrotic or radiant damage.";  
    
    }else if (x === "(AF) Rennin Gakido"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Rennin Gakido";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: redirect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This skill removes all damage done to you in the last turn by neglectable skills & gives opponent(s) that attacked you that turn the same damages as far they are within range and you can see them, each damage you received last turn is same you give back to each opponents that gave damage. you can only neg and reflect skills that damages are not more than 10 + your Con mod.";  
    
    }else if (x === "(AF) Occular"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Occular";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: nullify";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This removes all damage done to you in previous turn as far the total damages are less than users con score. non neglectable damage aint counted.";  
    
    }else if (x === "(AF) Mana Draining Jutsu"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Mana Draining Jutsu";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time/gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Steal";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: S(one hand), 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Touch";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continuos";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "the target just need to be in range for this skill to take effect after that the target just needs to remain within 500ft range for the effect to still be active. Take one cp from opponent and add it to yours, occurs at every of your end turns after activation. This effect ends when targets's cp reaches 0 or this skill is dispelled.";  
    
    }else if (x === "(AF) regen"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) regen";
      let category = document.getElementById("skill_category").innerHTML = "Category: Magical atk/ gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: wave, healing";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft, self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "If used as an atk, deal 3 force damage to a target within range. if used as gain, +4hp to user.";  
    
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

    }else if (x === "(AF) Equlibrium"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Equlibrium";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "targets an opponent or ally within range, wave of energy appears beneath the target, the user must roll a Int (Arcana) Spell check of DC equal to the targets hp, on a save, User's health must become equal to that of the targets increasing or decreasing hp limit too (user hp turns same as target hp).";  
    
    }else if (x === "(AF) Reverse Equlibrium"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Reverse Equlibrium";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: switch";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 30ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "targets an opponent or ally within range, wave of energy appears beneath the target, the user must roll a Int (Arcana) Spell check of DC equal to the targets hp, on a save, target's health must become equal to that of the users increasing or decreasing hp limit too (targets hp turns same as users hp).";  
    
    }else if (x === "(AF) Cannengan"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Cannengan";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: switch";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 3cp after skill";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft square";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "targets a creature within range, This move switches your cp with that of your opponent, cannot switch cp that is more than users Int score.";  
    
    }else if (x === "(AF) Tailnigan"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Tailnigan";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap/neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Neglect, Redirect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(two hands), 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 50ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Can be used anytime a skill that reflects or redirect or neglects damage from an Attack skill is used and it affects yours or an allies thats within range and the target is within range, neglect that reflect skill(if it can be neglected) and double the damage of the skill that was targeted by the reflect skill.";  
    
    }else if (x === "(AF) Renzenko Shite"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Renzenko Shite";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Neglect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 190";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This skill affects all players (within range) that have time skills active, destroy the skills & give all players affected by this 4 physic damage";  
    
    }else if (x === "(AF) Auto Defence"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Auto Defence";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: block";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This Skill automatically stops a target from taking damage below 5 by an attacking skill. 1cp to use. it doesnt count as a reaction meaning you can make one more reaction after this.";  
    
    }else if (x === "(AF) Pain Day"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Pain Day";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 10 of users end turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "after activation, Multiply all damage caused by your attacking skills by 2. You die after 10 of your end turns after activation as long as this skill is still active. this skill cant be neglected or destroyed. when you die, even if its a friendly battle, you die like in death battles and also even after the battle the skill still counts and will stop only if you take a effect stable potion.";  
    
    }else if (x === "(AF) Body Switching"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Body Switching";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Switch";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 180";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 5cp before switch";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 40ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 5 of targets turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "when you choose a target within range and the target hp is equal or lower than 10 + your wis score, the target makes a wis saving throw of DC equal to half your Wis score (max of 20), on a failed, Switch your card, health & cp with that of your opponent. This lasts for 5 of your target's end turns, each targets affected can only use skills that they know each other have and ain't allowed to see each other cards, a player that uses a skill that is no longer in the card skips that turn.";  
    
    }else if (x === "(AF) Seal Breaker"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Seal Breaker";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Neglect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Destroy a time skill which its user is within range and give the user 4 physic damage.";  
    
    }else if (x === "(AF) Fire Barrier"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Fire Barrier";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Barrier, Reflect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 200";
      let rank = document.getElementById("skill_image").src = "img/4star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(both hands), 1cp every end turn";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, Continous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Creates a barrier of fire that has hp equal to your Wis score. a target that uses a unarmed melee attack on the barrier takes back half the damage as fire damage every time.";  
    
    }else if (x === "(AF) Last Moment"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Last Moment";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 80";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 0cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Add 6cp to user, can be used when your hp is 3 or below, you can use another action.";  
    
    }else if (x === "(AF) Red Blood Sacrifice"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Red Blood Sacrifice";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Ritual, Field, Debuff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 130";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 5cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft square";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, Continuos";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Everyone in range(including you) loses 2hp every of your end turn. you can use Blue mana sacrifice as a bonus action this turn if you have it in your card.";  
    
    }else if (x === "(AF) Blue Mana Sacrifice"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Blue Mana Sacrifice";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Ritual, Field, Debuff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements:V, 3hp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft square";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, Continuos";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Everyone in range(including you) loses 2cp every of your end turn. you can use Red Blood Sacrifice as a bonus action this turn if you have it in your card";  
    
    }else if (x === "(AF) The Ruler"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) The Ruler";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Debunk";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "The damage your are about to take from a single attack is divided equally into health and cp for you. max Damage is equal to your Con score (max 20)";  
    
    }else if (x === "(AF) Sacrificial Clone Ultimate Technique"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Sacrificial Clone Ultimate Technique";
      let category = document.getElementById("skill_category").innerHTML = "Category: Nom";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Ritual";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 250";
      let rank = document.getElementById("skill_image").src = "img/5star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, S(both hands), 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 100ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 3 of users end turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "This skill can only be used if your health and Cp(mana) is 5 or below and when you have used both Red Blood Sacrifice & Blue Mana Sacrifice within the last 20 turns. Spawn a clone, opponent cannot attack or damage you as long as the clone is present and within 100ft of you, anytime they try to attack, as a reaction you and the clone switches positions. The clone has HP equal to total of all damage the user has received and all damage the user has dealt. the clone has same stats as user and same movement speed but cant use skills, spells or even attack. The clone automatically destroys after 3 of your end turns and on the start of the targets turn. a wave of dark energy spreads to a 70ft circle dealing necrotic damage to all targets within range (apart from you but including allies) equal to the hp the clone had left. If you want to further increase damage, reduce your health to 0.5 and give opponent the damage multiplied by 1.5 . if your opponent does not die by this skill, you die automatically.";  
    
    }else if (x === "(AF) Revolution"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Revolution";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Neglect";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 150";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Neglect a neglect skill that is about to activate as far the user is within range.";  
    
    }else if (x === "(AF) Focus"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Focus";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 50";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "After using this, you use another action, must be an attack, the attack cannot be neglected.";  
    
    }else if (x === "(AF) Disintegrating Circle"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Disintegrating Circle";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Restrict";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(one hand), 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: touch";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 4 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "the Touched target cannot use any neglect or defensive skills for 4 turns.";  
    
    }else if (x === "(AF) Air Sand Protective Wall"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Air Sand Protective Wall";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Block";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 40";
      let rank = document.getElementById("skill_image").src = "img/1star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(one hand), 1cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Defend against an attack of 7 and below.";  
    
    }else if (x === "(AF) Apinermal"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Apinermal";
      let category = document.getElementById("skill_category").innerHTML = "Category: Charged Atk";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: wave";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(one hand), 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 80ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Give opponent 8 force damage, if opponent does not die or knockout after you use this, you go unconscious.";  
    
    }else if (x === "(AF) Azure Stream"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Azure Stream";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 5 of users turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "All your attacks are buffed by 1 for the duration. this buff adds to the attacks initial damage allowing it to be multiplied with buffs";  
    
    }else if (x === "(AF) Mind Block"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Mind Block";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Block";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 2cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Defend against an attack skill or spell that deals of 7 or below.";  
    
    }else if (x === "(AF) Mana Protective Shield"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Mana Protective Shield";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Shield";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 145";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 5ft circle";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Continous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Opponents cannot enter inside this shield by moving into it. any time this shield is attacked or damaged, you lose cp equal to the damage. this shield is destroyed if you no longer have mana to control it, you do not take residual damage when it is destroyed by an attack but you pay all the cp you have left. you can use a bonus action to turn of the shield.";  
    
    }else if (x === "(AF) Friendly Fire"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Friendly Fire";
      let category = document.getElementById("skill_category").innerHTML = "Category: Neg";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Restrict";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 95";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 20ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 of targets turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "only work with a target with Int score less than 12 + users int mod, when used the target cannot use any attack skills or spells for 2 of its turns. a creature can choose to use their Str stat instead of Int.";  
    
    }else if (x === "(AF) Cheerful Giver"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(AF) Cheerful Giver";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Assist Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 95";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: V, 3cp or 3hp ";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: Melee";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 2 of targets turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Used to transfer hp or cp from yours to friends or anyone but it must not pass the limit which is your 5 + users con mod. if you give hp you pay 3hp, if cp you pay 3cp.";  
    
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

    }else if (x === "(Af) Mana Cloak"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Mana Cloak";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Cp gain";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 70xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: self";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Concentration, Continous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Gain 2cp every of your end turn until you receive a damage equal or higher than 5 + users con mod(max of 15) in a turn.";  

    }else if (x === "(Af) Beast Block"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Beast Block";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Block";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 3cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: ??";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "if you have a summoned beast or creature and you are within their movement speed, as a reaction to you being attacked the beast can move to you and take all the damage from all attacks this turn as far its still alive. attack that gives area of effect damage will give you only half the damage.";  

    }else if (x === "(Af) Beast Senses"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Beast Senses";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 4cp";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 bonus action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: ??";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 minute";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "you gain super passive perception that allows you to sense Targets within range even if they are invisible and enables you to target them for attack.";  

    }else if (x === "(Af) Beast Skin"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Beast Skin";
      let category = document.getElementById("skill_category").innerHTML = "Category: Def/Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Buff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: 1cp every of users end turns";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: ??";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 1 minute";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "decreases all attack skills or spell damage done to you by Con mod(max 5) for the duration.";  

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

    }else if (x === "(Af) Slime trap"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Slime Trap";
      let category = document.getElementById("skill_category").innerHTML = "Category: Time";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Evade";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 120xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(one hand or mouth)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 60ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: 10 turns";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "you send a ball of sticky slime towards a target, the target must make a Dex saving throw of DC 12, on a fail the target is grappled and cant move from that spot until the duration ends or it destroys the slime by attacking it (slime has an hp of 8). Creatures with Str mod of 15 or more can still move half their speed.";  

    }else if (x === "(Af) Slow Down"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Slow Down";
      let category = document.getElementById("skill_category").innerHTML = "Category: Gain";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: Debuff";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 90xp";
      let rank = document.getElementById("skill_image").src = "img/2star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(one hand)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: 70ft";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "as a reaction to when a target attempts to move, you can target that creature and reduce its speed by 20ft for that turn only.";  

    }else if (x === "(Af) Possibility"){
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      let name = document.getElementById("skill_name").innerHTML = "(Af) Possibility";
      let category = document.getElementById("skill_category").innerHTML = "Category: Trap";
      let subcategory = document.getElementById("skill_subcategory").innerHTML = "Sub-Category: ";
      let xprequired = document.getElementById("skill_xprequired").innerHTML = "Xp required: 140xp";
      let rank = document.getElementById("skill_image").src = "img/3star.png";
      let skill_requirements = document.getElementById("skill_requirements").innerHTML = "Requirements: S(one hand)";
      let skill_performingtime = document.getElementById("skill_performingtime").innerHTML = "Preforming time: 1 action or reaction";
      let skill_range = document.getElementById("skill_range").innerHTML = "Range: ";
      let skill_duration = document.getElementById("skill_duration").innerHTML = "Duration: Instantaneous";
      let skill_details = document.getElementById("skill_details").innerHTML = 
      "Allows you use a skill that needs an action as a bonus action or reaction.";  

    }
    

    }