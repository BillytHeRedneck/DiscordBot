var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports = class rainCheck {
    constructor() {
        this.name = '-raincheck'
        this.alias = ['rc']
        this.usage = '!raincheck'
    }
    //run(client,message,ight)hinoyesLW{
    run(message, ight) {

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"precipitation_probability":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"precipitation_probability":`).split(`{"lat":37.5059814,"lon":-77.6491578,"precipitation_probability":`)
                let messageOnlyValue = []
                let counter = 0
                let highestRainProbability = 0;
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        messageOnlyValue.push((shorterMessage[i].split(`{"value":`).join("").split(`,"units":"%"}`).join("")))
                        let curr = parseInt(messageOnlyValue[counter], 10)
                        curr = curr * 2 + 5 //test algorithm
                        if (highestRainProbability < curr) {
                            highestRainProbability = curr
                        }
                        counter++
                    }

                }
                //message.channel.send(messageOnlyValue)

                message.channel.send("The highestRainProbability is " + highestRainProbability)
                if (highestRainProbability >= 30) {
                    message.channel.send("It might rain today, be cautious")
                } else {
                    message.channel.send("Seems dry today.")
                }
            }
        });


        xhr.open("GET", "https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=si&start_time=now&end_time=2020-08-11T17:00:00.000&fields=precipitation_probability&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M");
        xhr.send(data);

    }
}