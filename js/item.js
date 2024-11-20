var wpEdits = document.querySelectorAll(".itemko");

for (let i = 0; i < wpEdits.length; i++){
    wpEdits[i].addEventListener("click", showID);
}
  

function showID(evt) {
  for (let i = 0; i < wpEdits.length; i++){
    if(wpEdits[i] == evt.target){
        alert(i); 
    } 
  }
}