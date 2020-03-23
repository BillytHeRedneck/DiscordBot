module.exports = class ht {
    constructor(){
        this.name = 'ht'
        this.alias = ['h']
        this.usage = '!ht'
    }
    run(client,message,ight){
        var willIWork = Math.floor(Math.random() * Math.floor(2));
        var counter = 0;
        var num = ight[1]
        if (willIWork == 0) {
            message.channel.send("These controls seem to be damaged! Have no fear, I’m sure I can do it! Arrgh...this isn't working!")
            
        } else {
            for (var i = 1; i <= num; i++) {
                var rand = Math.floor(Math.random() * Math.floor(2));
                if (rand == 0) {
                    counter++;
                } else {
                    counter--;
                }
            }
            message.channel.send("On " + num + " rolls, the winner is... ")
            if (counter > 0) {
                message.channel.send({ files: ["./Images/Psycho Head.jpg"] })
                
            } else if (counter < 0) {
                message.channel.send({ files: ["./Images/Skag Tail.jpg"] })
                
            } else {
                message.channel.send("No one... what's this? I'm detecting a motor unit malfunction... I can't move! I'm paralyzed with fear!")
                message.channel.send({ files: ["./Images/CL4P-TP Neutral.jpg"] })
                

            }
        }
    }
}