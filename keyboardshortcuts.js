// for reference to right click action, see rightclick.js

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