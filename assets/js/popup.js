// Modal Pop-up Script

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

window.onload = function() {
  if(sessionStorage.getItem('popState') != 'shown'){
        modal.style.display = "block";
        sessionStorage.setItem('popState','shown')
    }
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

