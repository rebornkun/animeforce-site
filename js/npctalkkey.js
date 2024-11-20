function talkclick(n){
    //let modal = document.getElementsByClassName("merchant_modal")[0];
    let name = document.getElementById("npc_name");
    let x = n.toString();
    //alert(x);

    /////////////////////////////
    // town of beginnings Gate //
    /////////////////////////////
    
    if (x === "Guard 1"){
      let modal = document.getElementsByClassName("ballon")[0];
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;
      let chat = document.getElementById("npc_chat").innerHTML = 
      "Are you new here?";  
    
    }else if (x === "Guard 2"){
      let modal = document.getElementsByClassName("ballon")[0];
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;
      let chat = document.getElementById("npc_chat").innerHTML = 
      "mmm... something about you seems fishy";  
    
    }else if (x === "Guard 3"){
      let modal = document.getElementsByClassName("ballon")[0];
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;
      let chat = document.getElementById("npc_chat").innerHTML = 
      "i wanted to do something better with my life...(Sighhhh)";  
    
    }else if (x === "Guard 4"){
      let modal = document.getElementsByClassName("ballon")[0];
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;
      let chat = document.getElementById("npc_chat").innerHTML = 
      "Sapa press my neck like wetin de sup";  
    
    }else if (x === "Guard 5"){
      let modal = document.getElementsByClassName("ballon")[0];
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;
      let chat = document.getElementById("npc_chat").innerHTML = 
      "hey you!!! give me money";  
    
    }else if (x === "Guard 6"){
      let modal = document.getElementsByClassName("conballon")[0];
      modal.style.display = "block"; 
      let name = document.getElementById("npc_nametwo");
      name.innerText = x;
      let chat = document.getElementById("npc_chattwo").innerHTML = 
      "want to here a secret?";  

       gateconversation();
      
    
    }//else if (x === "Guard 6"){
    //   let modal = document.getElementsByClassName("ballon")[0];
    //   modal.style.display = "block"; 
    //   //let image = document.getElementById("item_img").innerHTML = "stick";
    //   name.innerText = x;
    //   let chat = document.getElementById("npc_chat").innerHTML = 
    //   "Omo";  
    
    // }

    /////////////////////////////
    // Room of Resurrection //
    /////////////////////////////

    else if (x === "Pacifist"){
      let modal = document.getElementsByClassName("ballon")[0];
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;
      let chat = document.getElementById("npc_chat").innerHTML = 
      "Who de breet!!! <br> you nor strong you de go fight, who you wan impress. Hello!!";  
    
    }
    
    /////////////////////////////
    // Town hall  //
    /////////////////////////////


    else if (x === "Mr tart(mayor)"){
      let modal = document.getElementsByClassName("ballon")[0];
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;
      let chat = document.getElementById("npc_chat").innerHTML = 
      "Hello im the mayor of this town, tell me if you need anything";  
    
    }else if (x === "Mr tart(mayor)"){
      let modal = document.getElementsByClassName("ballon")[0];
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;
      let chat = document.getElementById("npc_chat").innerHTML = 
      "Hello im the mayor of this town, tell me if you need anything";  
    
    }else if (x === "Mr pochr(PA)"){
      let modal = document.getElementsByClassName("ballon")[0];
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;
      let chat = document.getElementById("npc_chat").innerHTML = 
      "The mayor isn't someone i really trust anymore, something changed in him.";  
    
    }else if (x === "lora (Receptionist)"){
      let modal = document.getElementsByClassName("ballon")[0];
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;
      let chat = document.getElementById("npc_chat").innerHTML = 
      "are you here for the mayor?";  
    
    }
    
    /////////////////////////////
    // Town hall  //
    /////////////////////////////
    
    else if (x === "half dead man (dungeon)"){
      let modal = document.getElementsByClassName("ballon")[0];
      modal.style.display = "block"; 
      //let image = document.getElementById("item_img").innerHTML = "stick";
      name.innerText = x;
      let chat = document.getElementById("npc_chat").innerHTML = 
      "it appears in one of the rooms..... not letting you get out or anyone else in...... i only faked my death but i guess it was for nath....";  
    
    }
    
    }

    function gateconversation() {
      $(".npc_option1").bind("click", function(){
        let chat = document.getElementById("npc_chattwo").innerHTML = 
        "rumor has it that theres a secret dungeon at the back of the black iron palace but only one person know where it is and he might already be dead";
        let yes = document.getElementsByClassName("npc_option1")[0];
        let no = document.getElementsByClassName("npc_option2")[0];
        yes.style.display = "none";
        no.style.display = "none";
      });
    }