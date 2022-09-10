const LANYARD_API_URL = "https://api.lanyard.rest/v1/users/"
const USERID = "684835388505849879"
const COMPLETED_URL = LANYARD_API_URL + USERID.toString();

console.log(COMPLETED_URL);

var data;



fetch(COMPLETED_URL)
    .then(res => res.json())
    .then(data => {
        //throw new Error("cheese");
        console.log(data);
        let text = data.data.discord_status + "<br>";
        let count = 0
        function addActivity(value, index, array) {
            count += 1;
            if (count > 3) {
                return; // max statuses reached
            }
            if (value.name == "Custom Status") {
                text += value.state + "<br>";
            }
            else if (value.name == "Spotify") {
                text += "Listening to " + value.details + " by " + value.state + "<br>";
            }
            else {
                text += "Playing " + value.name + ": " + value.state + "<br>";
            }
        }
        data.data.activities.forEach(addActivity);
        text = text.substring(0, text.length - 4);
        if (text.length > 100) {
            text = text.substring(0, 100) + "...";
        }
        document.getElementById("profiletext").innerHTML = text;
    })
    .catch(err => {
        console.log(err);
        document.getElementById("profiletext").innerHTML = "Content could not be loaded.<br>Something unexpected happened when connecting to the API.";
    });

