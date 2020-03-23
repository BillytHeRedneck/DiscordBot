const moment = require("moment-timezone");
var schedule = require('node-schedule');
const Discord = require('discord.js');
const { prefix, prefix2, token } = require('./config.json');
const client = new Discord.Client();
const { CommandHandler } = require('djs-commands')
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: ['!']
})
let meme = 0;
let dailyMeme = 0
var lastBoy

//setter for unboxing
function setLastBoy(name){
    lastBoy=name;
}


client.on('ready', () => {
    console.log('Bot is logged in!')
})

//scheduled message for meme-a-day
client.on('ready', () => {
    const channel = client.channels.cache.get('570344442255376387')
    const channel1 = client.channels.cache.get('688827517913530565')
    var dailyMemeReminder = schedule.scheduleJob("0 0 * * 1,2,3,4,5", function () {
        if (dailyMeme == 0) {
            channel.send("Sure is lonely around here... wish I had a meme.")
            dailyMeme++
        }
    })
    var dailyMemeReminderWeekend = schedule.scheduleJob("0 1 * * 6", function () {    
            channel.send("Sure is lonely arou - Wrong day. Carry on.")  
    })
    var dailyMemeReminderWeekend1 = schedule.scheduleJob("38 21 * * 1", function () {    
        channel1.send("Day 1 - Monday")  
})
    
    var dailyMemeReset = schedule.scheduleJob("0 4 * * *", function () {
        dailyMeme == 0
    })

})


client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    msg = message.content.toLowerCase()
    if (message.channel.id == 570344442255376387) {
        
        meme++
        if (meme == 1) {
            setTimeout(function () {
                message.channel.send("Seeya next time!")
                meme = 0;
                dailyMeme++
            }, 1500)

        }
        return
    }
    let ight = msg.split(" ")
    let command = ight[0]
    let cmd = CH.getCommand(command)
    if(!cmd){
        message.channel.send("Hmmmm, that's not a command. I'm just gonna pretend I didn't hear it.")
        return
    } 
    try{
        cmd.run(client,message,ight)
    } catch(e){
        message.channel.send("I caught a million switching lanes... tHat part AKA ERROR")
    }


    msg = message.content.toLowerCase()
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    //Help
    else if (msg.startsWith(prefix + "help")) {
        message.channel.send("Greetings Traveller! There are new gif-commands available at the Fyrestone Bounty-board!")
/*
    //GIF
    } else if (msg.startsWith(prefix + "eric")) {
        message.channel.send({ files: ["./Images/Eric Andre Unimpressed.gif"] })

    } else if (msg.startsWith(prefix + "yesss")) {
        message.channel.send({ files: ["./Images/Yesss.gif"] })

    } else if (msg.startsWith(prefix + "enjoythat")) {
        message.channel.send({ files: ["./Images/EnjoyThat.gif"] })

    } else if (msg.startsWith(prefix + "nooice")) {
        message.channel.send({ files: ["./Images/NOOICE.gif"] })

    } else if (msg.startsWith(prefix + "ora")) {
        message.channel.send({ files: ["./Images/CatchHands.gif"] })

    } else if (msg.startsWith(prefix + "wrong")) {
        message.channel.send({ files: ["./Images/Wrong.gif"] })

    } else if (msg.startsWith(prefix + "fistbump")) {
        message.channel.send({ files: ["./Images/Fa-la-la-la-la.gif"] })

    } else if (msg.startsWith(prefix + "idk")) {
        message.channel.send({ files: ["./Images/IDK.gif"] })

    } else if (msg.startsWith(prefix + "lblaugh")) {
        message.channel.send({ files: ["./Images/Long Beach Laugh.gif"] })

    } else if (msg.startsWith(prefix + "yesyes")) {
        message.channel.send({ files: ["./Images/M Bison Yes! Yes!.gif"] })

    } else if (msg.startsWith(prefix + "spedcomp")) {
        message.channel.send({ files: ["./Images/Nice Competetion.gif"] })

    } else if (msg.startsWith(prefix + "tea")) {
        message.channel.send({ files: ["./Images/The Tea.gif"] })

    } else if (msg.startsWith(prefix + "window")) {
        message.channel.send({ files: ["./Images/Throw You Out The Window.gif"] })

    } else if (msg.startsWith(prefix + "whathesay")) {
        message.channel.send({ files: ["./Images/What Did He Just Say.gif"] })

    } else if (msg.startsWith(prefix + "neverwin")) {
        message.channel.send({ files: ["./Images/You Never Win.gif"] })

    } else if (msg.startsWith(prefix + "hurtmyear")) {
        message.channel.send({ files: ["./Images/You're Hurting My Ear.gif"] })

    } else if (msg.startsWith(prefix + "highestfive")) {
        message.channel.send({ files: ["./Images/Highest of Fives.gif"] })

    } else if (msg.startsWith(prefix + "bigshaqno")) {
        message.channel.send({ files: ["./Images/Big Shaq No.gif"] })

    } else if (msg.startsWith(prefix + "bigshaqok")) {
        message.channel.send({ files: ["./Images/Big Shaq Ok.gif"] })

    } else if (msg.startsWith(prefix + "garretsmh")) {
        message.channel.send({ files: ["./Images/Garret Shake Head.gif"] })

    } else if (msg.startsWith(prefix + "amazing")) {
        message.channel.send({ files: ["./Images/Squidward Amazing.gif"] })

    } else if (msg.startsWith(prefix + "sweating")) {
        message.channel.send({ files: ["./Images/Sweating.gif"] })

    } else if (msg.startsWith(prefix + "t1cringe")) {
        message.channel.send({ files: ["./Images/Tyler1 Unimpressed.gif"] })

    } else if (msg.startsWith(prefix + "devilno")) {
        message.channel.send({ files: ["./Images/Yeah...no.gif"] })

    } else if (msg.startsWith(prefix + "hehe")){
        message.channel.send({ files: ["./Images/HeheBoy.gif"] })
*/
    //meme-a-day
    } else if (message.channel.id == 570344442255376387) {
        
        meme++
        if (meme == 1) {
            setTimeout(function () {
                message.channel.send("Seeya next time!")
                meme = 0;
                dailyMeme++
            }, 1500)

        }

    //OTHER
    //time
    } else if (msg.startsWith(prefix + "time")) {
        message.channel.send("Hello Traveler. The time is " + moment().tz("America/New_York").format("h:mm A"))

    //random number generator
    } else if (msg.startsWith(prefix + "rnd")) {
        const args = msg.slice(prefix.length).split(' ');
        var num = parseInt(args[1], 10);
        var willIWork = Math.floor(Math.random() * Math.floor(2));
        if (willIWork == 0) {
            message.channel.send("These controls seem to be damaged! Have no fear, I’m sure I can do it! Arrgh...this isn't working!")
        } else {
            message.channel.send("Your random number is... " + Math.floor(Math.random() * Math.floor(num)))
        }


    //unbox
    } else if (msg.startsWith(prefix + "unbox")){
        if (lastBoy == undefined){
            message.channel.send("I just searched my records and I cannot seem to find who the last unboxer was." +
            " You should set it next time by calling !setboy but anyway, ONTO THE UNBOXING!")
        } else {
            message.channel.send("Last unboxing, the unboxer was " + lastBoy)
        }
        setTimeout(function(){
            message.channel.send("Today's unboxer is... drum roll please...")
        },1000)
        var whichBoyNum = Math.floor(Math.random() * Math.floor(3));
        var whichBoy;
        switch (whichBoyNum){
            case 0:
                whichBoy = "Junaid"
                break
            case 1:
                whichBoy = "Jahanzeb"
                break
            case 2:
                whichBoy = "Umar"
                break
        }
        if (whichBoy == lastBoy){
            setTimeout(function(){
                message.channel.send("Well that's boring... it's " + whichBoy + " again...")
            }, 3000)
            setLastBoy(whichBoy)
        } else {
            setTimeout(function() {
                message.channel.send(whichBoy +"!!! This way! The [loot]box is awaiting your attention!")
            }, 3000)
            setLastBoy(whichBoy)
        }

    //setter for lastBoy
    } else if(msg.startsWith(prefix + "setboy")){ 
        const args = message.content.split(' ');
        setLastBoy(args[1])
        message.channel.send("The last unboxer has been set to " + lastBoy)

    //getter for lastBoy
    } else if (msg.startsWith(prefix + "getboy")){
        if(lastBoy == undefined){
            message.channel.send("I don't know who the last unboxer was :scream::scream: ")
            message.channel.send("Please don't shoot me, please don't shoot me, please don't shoot me!")
        } else
        message.channel.send("The last unboxer was " + lastBoy)
         
    //heads or tails
    } else if (msg.startsWith(prefix + "ht")) {
        const args = msg.slice(prefix.length).split(' ');
        var num = parseInt(args[1], 10);
        var willIWork = Math.floor(Math.random() * Math.floor(2));
        var counter = 0;
        if (willIWork == 0) {
            message.channel.send("These controls seem to be damaged! Have no fear, I’m sure I can do it! Arrgh...this isn't working!")
            /*
            let botMemberObj = '688847850469457952';
            if(botMemberObj) {
                //let mainrole = message.guild.roles.find(role => role.name === "General Purpose Robot");
                let roleID = '689862628809769024'
                //person.roles.remove(mainrole.id)
                message.member.guild.roles.add(roleID)
                message.channel.send("role should be added")
                //botMemberObj.roles.add('\@mute')
                setTimeout(function(){
                    //person.roles.add(mainrole.id)
                    message.member.roles.remove(roleID).catch(console.log)
                    message.channel.send("Rebooted!!")
                }, 10000);            
            }
            
            msg = "!mute @CL4P-TP"
            var person  = msg.mentions.members.first();
            let mainrole = person.guild.roles.find(role => role.name === "General Purpose Robot");
            let role = person.guild.roles.cache.find(role => role.name === "mute");
            person.roles.remove(mainrole.id)
            person.roles.add(role)
            setTimeout(function(){
                person.roles.add(mainrole.id)
                person.roles.remove(role.id);
                message.channel.send("Rebooted!!")
            }, 10000);
            ACTUAL ENDING FOR COMMENT SHOULD GO HERE!!!!!!!!!!!!!!!! */
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

})

client.login(token);

/*
scheduleJob():
hours -> real life time
4->0
5->1
6->2
7->3
8->4
9->5
10->6
11->7
12->8
13->9
14->10
15->11
16->12
17->13
18->14
19->15
20->16
21->17
22->18
23->19
0->20
1->21
2->22
3->23

Day -> Day
5-> Friday
6-> Saturday
1-> Sunday
1-> Monday
*/
