var a = document.querySelectorAll("a");

var text = document.getElementById("texte")

a.forEach(function(element) {
    console.log(element.id)
    if (element.id == "show") {
        element.onclick = function () {
            text.style.display = "block"
        }
    } 
    if (element.id == "hide") {
        element.onclick = function () {
            text.style.display = "none"
        }
    } 
});