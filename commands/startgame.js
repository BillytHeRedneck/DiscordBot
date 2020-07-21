module.exports = class gif {
    constructor(){
        this.name = 'startgame'
        this.alias = ['sg']
        this.usage = '!startgame'
    }
    
    run(message,ight) { 
        message.channel.send(
            "*1*  |  *2*  |  *3*" +
            "*4*  |  *5*  |  *6*" +
            "*7*  |  *8*  |  *9*"
        )
    }
}