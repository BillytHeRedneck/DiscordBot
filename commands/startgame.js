module.exports = class startgame {
    constructor(){
        this.name = 'startgame'
        this.alias = ['sg']
        this.usage = '!startgame'
    }
    
    run(message,ight) { 
        message.channel.send(
            "You will be X, I will be O. Refer to the game directions if Umar hasn't told you how to play\n" +
            "I will be nice and let you go first\n"+
            "*1*  |  *2*  |  *3*\n" +
            "*4*  |  *5*  |  *6*\n" +
            "*7*  |  *8*  |  *9*\n"
        )
    }
}