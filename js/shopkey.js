function shopclick(n){
    //let modal = document.getElementsByClassName("merchant_modal")[0];
    let x = n.toString();
    //alert(x);

    if (x === "Merchant"){
      let modal = document.getElementsByClassName("merchant_modal")[0];
      let Scrollmodal = document.getElementsByClassName("ah")[0];
      Scrollmodal.style.display = "none"; 
      modal.style.display = "block"; 
      
    }else if (x === "Bulletin board"){
      let modal = document.getElementsByClassName("Bulletin_modal")[0];
      let Scrollmodal = document.getElementsByClassName("ah")[0];
      Scrollmodal.style.display = "none"; 
      modal.style.display = "block"; 
    }
    
    }