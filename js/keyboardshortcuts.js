// for reference to right click action, see rightclick.js

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substring(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

if (findGetParameter("devmode")!="on")
{
    console.info("Dev mode is not on, remapping keyboard shortcuts");
    document.onkeydown = function(event) {
        if (event.ctrlKey && event.key == 'c') {
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            event.preventDefault();
        }
        else if (event.ctrlKey && event.key == 'I' || event.ctrlKey && event.key == 'u') {
            window.location.replace("https://github.com/TrainsRAwesome/Infinity-Website");
            event.preventDefault();
        }
    }
}
else {
    console.info("Dev mode is on, not remapping keyboard shortcuts");
}


