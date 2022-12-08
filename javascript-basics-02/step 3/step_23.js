let newDiv = document.createElement("div");
document.body.appendChild(newDiv);
newDiv.className = "output";

var insert = document.querySelector(".output");
var input = document.getElementById("name");
document.getElementById("name").onkeyup = function () {
  insert.innerHTML = input.value;
};