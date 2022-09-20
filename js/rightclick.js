// for keyboard shortcut redirects see ./keyboardshortcuts.js

clickmenu = document.getElementById("rightclickmenu");
copybtn = document.getElementById("copybtn");
var mouse_x = 0;
var mouse_y = 0;

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(event) {
        clickmenu.style.visibility = "visible";
        clickmenu.style.top = mouse_y + "px";
        clickmenu.style.left = mouse_x + "px";
        console.log("right btn clicked");
        event.preventDefault();
    }, false);
    document.addEventListener("click", function(event) {
        clickmenu.style.visibility = "hidden";
        console.log("left btn clicked");
    })
} else {
    document.attachEvent('oncontextmenu', function() {
      alert("You've tried to open context menu");
      window.event.returnValue = false; // backwards compatability, deprecated on newer browsers
    });
}

document.onmousemove = function(e){
    mouse_x = e.clientX;
    mouse_y = e.clientY;
}

copybtn.onclick = function() {
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}
