var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports = class testing {
    constructor() {
        this.name = 'testing'
        this.alias = ['testing']
        this.usage = '!testing'
    }
    //run(client,message,ight)hinoyesLW{
    run(message, ight) {

        var data = null;

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://api.climacell.co/v3/weather/forecast/hourly?lat=37.5059814&lon=-77.6491578&unit_system=si&start_time=now&end_time=2020-07-30&fields=precipitation_probability&apikey=xJT1FBEW1QtGpWyCZqQptELe81osYG5M");
        message.channel.send(xhr.send(data));
        
    }
}