import lastBoy from './Users/billytheredneck/Test/commands/unbox.js';
module.exports = class setboy {
    constructor() {
        this.name = 'setboy'
        this.alias = ['setboy']
        this.usage = '!setboy'
    }
    run(message,ight) { 
        setLastBoy(ight[1])
        message.channel.send("The last unboxer has been set to " + lastBoy)
    }
    setLastBoy(name){
        lastBoy=name;
    }
}