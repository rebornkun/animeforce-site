

function myfiltFunction(x,y) {

  let habitat = x;
  

    var filter, table, tr, td, i, txtValue;
    filter = habitat.toUpperCase();
    table = document.getElementsByClassName(y)[0];
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  
function myRankFilter(x,y) {

  let habitat = x;
  

    var filter, table, tr, td, i, txtValue;
    filter = habitat.toUpperCase();
    table = document.getElementsByClassName(y)[0];
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }