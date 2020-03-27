module.exports = class rnd {
    constructor() {
        this.name = 'rnd'
        this.alias = ['r']
        this.usage = '!rnd'
    }
    run(message,ight) { 
        var num = ight[1]
        var willIWork = Math.floor(Math.random() * Math.floor(2));
        if (willIWork == 0) {
            message.channel.send("These controls seem to be damaged! Have no fear, I’m sure I can do it! Arrgh...this isn't working!")
            muted = true
                setTimeout(function (){
                    muted=false
                }, 5000)
        } else {
            message.channel.send("Your random number is... " + (Math.floor(Math.random() * Math.floor(num)) + 1) )
        }
    }
}