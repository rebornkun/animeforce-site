function sortTable(n, tab, sort_img) {
    var table, Rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0, sort_Img;
    table = document.getElementById(tab);
    sort_Img = document.getElementById(sort_img); 
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      Rows = table.rows;
      /* Loop through all table Rows (except the first, which contains table headers): */
      for (i = 1; i < (Rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare, one from current row and one from the next: */
        x = Rows[i].getElementsByTagName("TD")[n];
        y = Rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two Rows should switch place, based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            sort_Img.src = "img/asc_sort.png";
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            sort_Img.src = "img/desc_sort.png";
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch and mark that a switch has been done: */
        Rows[i].parentNode.insertBefore(Rows[i + 1], Rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

