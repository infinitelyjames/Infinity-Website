var discordBtn = document.getElementById("discordBtn");
var discordModal = document.getElementById("discordMenu");
var discordProfile = document.getElementById("rightsection");
var server1 = document.getElementById("server1");
var server2 = document.getElementById("server2");
var hiddenServer = "server2";
var spanCloseDiscordModal = document.getElementById("closeDiscordModal");


function showDiscordModal() {
    discordModal.style.display = "block";
}

function showOtherServer() {
    if (hiddenServer == "server2") { 
        console.log("showing server 1");
        hiddenServer = "server1";
        server1.hidden = true;
        server2.hidden = false;
    } else {
        console.log("showing server 2");
        hiddenServer = "server2";
        server1.hidden = false;
        server2.hidden = true;
    }
}

function joinMyDiscordServer() {
    window.open("https://discord.com/invite/nacfvPB");
}

discordBtn.onclick = showDiscordModal; 
discordProfile.onclick = showDiscordModal;

// When the user clicks on <closeSpanBtn> (x), close the creditsModal
spanCloseDiscordModal.onclick = function() {
    discordModal.style.display = "none";
  }
  