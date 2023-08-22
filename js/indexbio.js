var i = 0;
const txts = [
  'A developer with a love for creating the things that once challenged them',
  'A person who codes random stuff whenever they feel like it',
  'Another dude who found python annoying and, well, doesn\'t use it anymore',
  'A homo sapien to be precise, and one that codes - idk what you expected',
  'A developer who seeks to broaden their knowledge to new extremes',
  'A coding enthusiast who turns caffeine into code',
  'An explorer of algorithms and data structures',
  'A tech junkie addicted to solving programming puzzles',
  'A digital artisan crafting lines of innovation',
  'A debugger by day, a dreamer by night',
  'A code composer orchestrating digital symphonies',
  'A troubleshooter who turns errors into opportunities',
  'A pixel perfectionist crafting virtual realms',
  'A keyboard alchemist transmuting logic into magic',
  'A digital storyteller weaving tales with code',
  'A syntax sorcerer conjuring spells in multiple languages',
  'A debugging ninja hunting down elusive bugs',
  'A byte-sized philosopher pondering the binary universe',
  'A coder with a heart for open-source and collaboration',
  'A perpetual learner riding the waves of tech evolution',
  'A coding maestro conducting the orchestra of software',
  'A software samurai mastering the art of clean code',
  'A code hermit meditating on the secrets of programming',
  'A tech wanderer exploring the frontiers of innovation',
  'A command-line poet painting with terminal strokes',
  'A coding nomad on a perpetual journey of discovery',
  'An algorithm architect building castles of logic',
  'A byte-sized revolutionary challenging the status quo',
  'A virtual reality creator sculpting worlds in code',
  'A code ninja stealthily crafting elegant solutions',
  'A debugging virtuoso transforming glitches into elegance',
  'A code astronaut exploring the cosmos of creativity',
  'A software conductor orchestrating digital symphonies',
  'A pixel painter creating art through lines of code',
];
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