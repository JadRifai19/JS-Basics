document.querySelector("[name='button']").onclick = function () {
   let reset = prompt(
     "Do you wnat to reset"
   );
   if (reset == "yes") {
     document.getElementById("name").value = "";
     document.getElementById("surname").value = "";
     document.getElementById("city").value = "";}
     elseIf (reset == "no") 
     alert("no reset")
    
}