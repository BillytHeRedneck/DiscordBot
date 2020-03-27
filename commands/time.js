const moment = require("moment-timezone");

module.exports = class time {
    constructor() {
        this.name = 'time'
        this.alias = ['time']
        this.usage = '!time'
    }
    run(message,ight) { 
        message.channel.send("Hello Traveler. The time is " + moment().tz("America/New_York").format("h:mm A"))
    }
}