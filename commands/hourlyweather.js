var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports = class hourlyweather {
    constructor() {
        this.name = '-hourlyweather'
        this.alias = ['hw']
        this.usage = '!hourlyweather'
    }
    //run(client,message,ight)hinoyesLW{
    run(message, ight) {

        this.deleteTheMessage(message)

        let singleDigitDay = ""
        let singleDigitMonth = ""
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        if (tomorrow.getMonth()+1 - 10 < 0){
            singleDigitMonth = "0"
        }
        if (tomorrow.getDate() - 10 < 0){
            singleDigitDay = "0"
        }
        let UTCtomorrow = `${tomorrow.getFullYear()}-${singleDigitMonth}${tomorrow.getMonth()+1}-${singleDigitDay}${tomorrow.getDate()}`
        /*
        this.rainProbability(message, UTCtomorrow)
        let temp = this.temp(UTCtomorrow)
        let feelsLike = this.feelsLike(UTCtomorrow)
        let humidity = this.humidity(UTCtomorrow)
        let windSpeed = this.windSpeed(UTCtomorrow)
        let weatherCode = this.weatherCode(UTCtomorrow)
        setTimeout(function() {
            message.channel.send(`temp is ${temp}`)
            message.channel.send(`feelsLike is ${feelsLike}`)
            message.channel.send(`humidity is ${humidity}`)
            message.channel.send(`windeSpeed is ${windSpeed}`)
            message.channel.send(`weatherCode is ${weatherCode}`)
        }, 5000)
        
*/

        

    }
    deleteTheMessage(message){
        message.delete(message);
        
    }

    rainProbability(message, UTCtomorrow) {
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

                message.channel.send("The highestRainProbability is " + highestRainProbability + "%")
                if (highestRainProbability >= 30) {
                    message.channel.send("It might rain today, be cautious")
                } else {
                    message.channel.send("Seems dry today.")
                }
            }
        });

        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=now&end_time=${UTCtomorrow}&fields=precipitation_probability&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
    }

    temp(UTCtomorrow) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"temp":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"temp":`).split(`{"lat":37.5059814,"lon":-77.6491578,"temp":`)
                let messageOnlyValue = [0]
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        messageOnlyValue.push((shorterMessage[i].split(`{"value":`).join("").split(`,"units":"F"}`).join("")))
                    }

                }
                return messageOnlyValue
                //message.channel.send(`the temp array is: ${messageOnlyValue}`)

                
            }
        });

        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=now&end_time=${UTCtomorrow}&fields=temp&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
    }

    feelsLike(UTCtomorrow) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"feels_like":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"feels_like":`).split(`{"lat":37.5059814,"lon":-77.6491578,"feels_like":`)
                let messageOnlyValue = []
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        messageOnlyValue.push((shorterMessage[i].split(`{"value":`).join("").split(`,"units":"F"}`).join("")))
                    }

                }
                return messageOnlyValue
                //message.channel.send(`the feels_like array is: ${messageOnlyValue}`)

                
            }
        });

        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=now&end_time=${UTCtomorrow}&fields=feels_like&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
    }

    humidity(UTCtomorrow) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"humidity":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"humidity":`).split(`{"lat":37.5059814,"lon":-77.6491578,"humidity":`)
                let messageOnlyValue = []
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        messageOnlyValue.push((shorterMessage[i].split(`{"value":`).join("").split(`,"units":"%"}`).join("")))
                    }

                }
                return messageOnlyValue
                //message.channel.send(`the humidity array is: ${messageOnlyValue}`)

                
            }
        });

        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=now&end_time=${UTCtomorrow}&fields=humidity&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
    }

    windSpeed(UTCtomorrow) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"wind_speed":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"wind_speed":`).split(`{"lat":37.5059814,"lon":-77.6491578,"wind_speed":`)
                let messageOnlyValue = []
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        messageOnlyValue.push((shorterMessage[i].split(`{"value":`).join("").split(`,"units":"mph"}`).join("")))
                    }

                }
                return messageOnlyValue
                //message.channel.send(`the wind_speed array is: ${messageOnlyValue}`)

                
            }
        });

        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=now&end_time=${UTCtomorrow}&fields=wind_speed&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
    }

    weatherCode(UTCtomorrow) {
        var data = null;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                let shorterMessage = this.responseText.split(`{"lon":-77.6491578,"lat":37.5059814,"weather_code":`).join(`,"observation_time":`).split(`,"observation_time":`).join(`{"lat":37.5059814,"lon":-77.6491578,"weather_code":`).split(`{"lat":37.5059814,"lon":-77.6491578,"weather_code":`)
                let messageOnlyValue = []
                for (let i = 0; i < shorterMessage.length; i++) {
                    if (i % 2 == 1) {
                        messageOnlyValue.push((shorterMessage[i].split(`{"value":"`).join("").split(`"}`).join("")))//.split(`,"units":"mph"}`).join("")))
                    }

                }
                return messageOnlyValue
                //message.channel.send(`the weather_code array is: ${messageOnlyValue}`)

                
            }
        });

        xhr.open("GET", `https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=us&start_time=now&end_time=${UTCtomorrow}&fields=weather_code&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M`);
        xhr.send(data);
    }

}
