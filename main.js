const colors = ["red", "orange", "yellow", "rgb(148, 110, 143)"];

//Generates table
function Generate() {
  let cols = document.getElementById("addCols").value;
  let rows = document.getElementById("addRows").value;

  var x = 0;

  //replaces old tBody with new
  const old_tbody = document.getElementById("tBody")
  const new_tbody = document.createElement('tbody');
  new_tbody.setAttribute("id", "tBody");
  old_tbody.parentNode.replaceChild(new_tbody, old_tbody)

  if (cols > 100 || rows > 100 || rows < 1 || cols < 1) {
    alert("Please enter a valid number. Between 1-100 for both inputs");
  } else {
    for (i = 0; i < rows; i++) {
      let tableRef = document.getElementById("table");
      let newRow = tableRef.insertRow(i);
      for (j = 0; j < cols; j++) {
        x++;
        let newCell = newRow.insertCell(j);
        newCell.setAttribute("id", "box" + x);
        newCell.setAttribute("onmouseover", "Hover()");
      }
    }
  }
}

//Makes hover effect over table cells
function Hover(e) {
  
  //Gets id of hovered cell
  var targ;
  if (!e) var e = window.event;
  if (e.target) targ = e.target;
  else if (e.srcElement) targ = e.srcElement;

  let box = document.getElementById(targ.id);

  //loop through colors with delay
  var i = 0;
  function myLoop() {
    setTimeout(function () {
      box.style.backgroundColor = colors[i];
      i++;
      if (i < 10) {
        myLoop();
      }
    }, 200);
  }
  myLoop();
}

//Changes colors in array
function changeColor() {
  colors[0] = document.getElementById("colorPicker1").value;
  colors[1] = document.getElementById("colorPicker2").value;
  colors[2] = document.getElementById("colorPicker3").value;
}


