links = ["https://top.gg/bot/690256111282290834","https://bots.discordlabs.org/bot/690256111282290834","https://bladelist.gg/bots/690256111282290834","https://discord.boats/bot/690256111282290834","https://discordextremelist.xyz/en-US/bots/690256111282290834"];

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

window.location.replace(choose(links));