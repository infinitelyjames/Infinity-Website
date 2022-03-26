var i = 0;
var txt = 'A developer with a love for creating the things that once challenged me';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewrite").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();