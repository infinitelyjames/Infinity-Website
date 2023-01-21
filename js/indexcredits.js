
var creditsModal = document.getElementById("creditsMenu");
var creditsBtn = document.getElementById("creditsBtn");
var closeSpanBtn = document.getElementsByClassName("closeCredits")[0];

// When the user clicks the button, open the creditsModal 
creditsBtn.onclick = function() {
  creditsModal.style.display = "block";
}

// When the user clicks on <closeSpanBtn> (x), close the creditsModal
closeSpanBtn.onclick = function() {
  creditsModal.style.display = "none";
}

// When the user clicks anywhere outside of the creditsModal, close it
window.onclick = function(event) {
  if (event.target == creditsModal) {
    creditsModal.style.display = "none";
  }
}