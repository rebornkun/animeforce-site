function pppclick(n){
    //let modal = document.getElementsByClassName("00")[0];
    
    //let modal = document.getElementsByClassName("ballon")[0];
    let x = n.toString();
    //alert(x);

    if (x === "flinn"){
      let door = document.getElementsByClassName("hidden_dungeon")[0];
      let modal = document.getElementsByClassName("conballon")[0];
      
      door.style.display = "block";
      door.style.color = "red";

      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;

      let chat = document.getElementById("npc_chattwo").innerHTML = 
        "Hello sir, pls can you help me find my dad... he was always saying things about a hidden treasure.. pls sir bring him back to me.";  
  
        let yes = document.getElementsByClassName("npc_option1").innerHTML = "ok i will";
        let no = document.getElementsByClassName("npc_option2").innerHTML = "na me born you?";

      $(".npc_option1").bind("click", function(){
        let chat = document.getElementById("npc_chattwo").innerHTML = 
        "ok thank you sir.<br><br> YOU JUST ACCEPTED THE QUEST 'HIDDEN DUNGEON'";
        let yes = document.getElementsByClassName("npc_option1")[0];
        let no = document.getElementsByClassName("npc_option2")[0];
        yes.style.display = "none";
        no.style.display = "none";
      });

      $(".npc_option2").bind("click", function(){
        let chat = document.getElementById("npc_chattwo").innerHTML = 
        "God will punish you sir.";
        let yes = document.getElementsByClassName("npc_option1")[0];
        let no = document.getElementsByClassName("npc_option2")[0];
        yes.style.display = "none";
        no.style.display = "none";
      });
    }
    
    }

    function gateconversation_hiddendungeon() {
      
    }