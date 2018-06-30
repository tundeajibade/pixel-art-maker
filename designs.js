// Select color input
//var u_color = document.getElementById("colorPicker").value;
// When size is submitted by the user, call makeGrid()
function makeGrid() {
   // Your code goes here!
   // Select size input
   var u_height = document.getElementById("inputHeight").value;
   var u_width = document.getElementById("inputWeight").value;

   var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
   var grid = ""
   for (var i=0; i<u_height; i++) {
      grid += "<tr>"
      for (var ii=0; ii<u_width; ii++) {
         grid += "<td onclick='colorGrid(event);'></td>"
      }
      grid += "</tr>"
   }
   document.getElementById("pixelCanvas").innerHTML = grid
}

function colorGrid(event) {
   //alert(u_color)
   var u_color = document.getElementById("colorPicker").value
   event.target.style.backgroundColor = u_color
}
