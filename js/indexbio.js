var i = 0;
const txts = ['A developer with a love for creating the things that once challenged me','A person who codes random stuff whenever they feel like it','Another dude who found python annoying and, well, doesn\'t use it anymore'];
const txt = txts[Math.floor(Math.random() * txts.length)];
const speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewrite").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();