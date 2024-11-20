// When the user clicks the button, open the modal 
function btnclick(){
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
function closeclick(){
  let modal = document.getElementsByClassName("modal")[0];
  let span = document.getElementsByClassName("close")[0];
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.addEventListener("click", function(event) {
//   let modal = document.getElementsByClassName("modal")[0];
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

function txtclick(n,t){
  let modal = document.getElementsByClassName(n)[0];
  modal.style.display = "block";
}

function closetxtclick(x,y){
  let modal = document.getElementsByClassName(x)[0];
  modal.style.display = "none";
}