const moment = require("moment-timezone");
var schedule = require('node-schedule');
const Discord = require('discord.js');
const{ prefix, prefix2, token } = require ('./config.json');
const client = new Discord.Client();
let meme = 0;
let dailyMeme=0
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [4];
rule.hour = 16;
rule.minute = 29;


client.once('ready', () => { 
    console.log('Bot is logged in!')
})

client.on('ready', () => {
    const channel = client.channels.cache.get('688827517913530565')
    
    const j = schedule.scheduleJob("44 20 * * *", function(){
        //if(dailyMeme==0) {
        //const channel = 688827517913530565
        channel.send("20")
        dailyMeme++
        //}
      })
      
      

    /*
    setInterval(function()  {
        if ((moment().tz("America/New_York").format("ddd") != 'Sat') && 
            (moment().tz("America/New_York").format("ddd") != 'Sun') &&
            (moment().tz("America/New_York").format("HH:dd") == '15:35') &&
            dailyMeme == 0) {
            const channel = client.channels.cache.get('688827517913530565');
            channel.send('Sure is lonely around here. Wish I had a meme...');
            dailyMeme++
        }
        if ((moment().tz("America/New_York").format("HH:mm") == '00:00')){
            dailyMeme=0
        }
    },60*1000)
    */
   var u = schedule.scheduleJob("44 19 * * *", function(){
    //const channel = 688827517913530565
    channel.send("19")
    dailyMeme==0
  })

  var v = schedule.scheduleJob("44 21 * * *", function(){
    //const channel = 688827517913530565
    channel.send("21")
    dailyMeme==0
  })
})


client.on('message', message=> {
    
    msg = message.content.toLowerCase()
    if (message.author.bot) return; 
    
    //Help
    else if(msg.startsWith(prefix + "help")) {
        message.channel.send("Greetings Traveller! There are new gif-commands available at the Fyrestone Bounty-board!")
        message.channel.send(dailyMeme)
        

    //GIF
    } else if(msg.startsWith(prefix + "eric")){
        message.channel.send({files : ["./Images/Eric Andre Unimpressed.gif"]})
    
    } else if(msg.startsWith(prefix + "yesss")){
        message.channel.send({files : ["./Images/Yesss.gif"]})
    
    } else if(msg.startsWith(prefix + "enjoythat")){
        message.channel.send({files : ["./Images/EnjoyThat.gif"]})
    
    } else if(msg.startsWith(prefix + "nooice")){
        message.channel.send({files : ["./Images/NOOICE.gif"]})
    
    } else if(msg.startsWith(prefix + "ora")){
        message.channel.send({files : ["./Images/CatchHands.gif"]})
   
    } else if(msg.startsWith(prefix + "wrong")){
        message.channel.send({files : ["./Images/Wrong.gif"]})
   
    } else if(msg.startsWith(prefix + "fistbump")){
        message.channel.send({files : ["./Images/Fa-la-la-la-la.gif"]})
   
    } else if(msg.startsWith(prefix + "idk")){
        message.channel.send({files : ["./Images/IDK.gif"]})
   
    } else if(msg.startsWith(prefix + "lblaugh")){
        message.channel.send({files : ["./Images/Long Beach Laugh.gif"]})
   
    } else if(msg.startsWith(prefix + "yesyes")){
        message.channel.send({files : ["./Images/M Bison Yes! Yes!.gif"]})
   
    } else if(msg.startsWith(prefix + "spedcomp")){
        message.channel.send({files : ["./Images/Nice Competetion.gif"]})
   
    } else if(msg.startsWith(prefix + "tea")){
        message.channel.send({files : ["./Images/The Tea.gif"]})
   
    } else if(msg.startsWith(prefix + "window")){
        message.channel.send({files : ["./Images/Throw You Out The Window.gif"]})
   
    } else if(msg.startsWith(prefix + "whathesay")){
        message.channel.send({files : ["./Images/What Did He Just Say.gif"]})
   
    } else if(msg.startsWith(prefix + "neverwin")){
        message.channel.send({files : ["./Images/You Never Win.gif"]})
   
    } else if(msg.startsWith(prefix + "hurtmyear")){
        message.channel.send({files : ["./Images/You're Hurting My Ear.gif"]})
   
    } else if(msg.startsWith(prefix + "highestfive")){
        message.channel.send({files : ["./Images/Highest of Fives.gif"]})
   
    } else if(msg.startsWith(prefix + "bigshaqno")){
        message.channel.send({files : ["./Images/Big Shaq No.gif"]})
   
    } else if(msg.startsWith(prefix + "bigshaqok")){
        message.channel.send({files : ["./Images/Big Shaq Ok.gif"]})
   
    } else if(msg.startsWith(prefix + "garretsmh")){
        message.channel.send({files : ["./Images/Garret Shake Head.gif"]})
   
    } else if(msg.startsWith(prefix + "amazing...")){
        message.channel.send({files : ["./Images/Squidward Amazing.gif"]})
   
    } else if(msg.startsWith(prefix + "sweating")){
        message.channel.send({files : ["./Images/Sweating.gif"]})
   
    } else if(msg.startsWith(prefix + "t1cringe")){
        message.channel.send({files : ["./Images/Tyler1 Unimpressed.gif"]})
   
    } else if(msg.startsWith(prefix + "devilno")){
        message.channel.send({files : ["./Images/Yeah...no.gif"]})
        
        
    //meme-a-day
    } else if (message.channel.id == 688827517913530565){
        meme++
        if(meme==1){
        setTimeout(function(){
            message.channel.send("Seeya next time!")
            meme=0;
            dailyMeme++
        }, 1500)
        
    } 
    //OTHER
     } else if (msg.startsWith(prefix +"rnd")) {
        const args = msg.slice(prefix.length).split(' ');
        var num = parseInt(args[1],10);
        var willIWork = Math.floor(Math.random() * Math.floor(2));
        if (willIWork == 0){
            message.channel.send("These controls seem to be damaged! Have no fear, I’m sure I can do it! Arrgh...this isn't working!")
        } else {
            message.channel.send("Your random number is... " + Math.floor(Math.random() * Math.floor(num)))
        }
        
        

    } else if (msg.startsWith(prefix +"ht")) {
        const args = msg.slice(prefix.length).split(' ');
        var num = parseInt(args[1],10);
        var willIWork = Math.floor(Math.random() * Math.floor(2));
        var counter = 0;
        if (willIWork == 0){
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
            */
        } else {
            for (var i = 1; i <= num; i++){
                var rand = Math.floor(Math.random() * Math.floor(2));
                if (rand == 0){
                    counter++;
                } else {
                    counter--;
                }
            }
            message.channel.send("On " + num + " rolls, the winner is... ")
            if (counter > 0){
                message.channel.send({files : ["./Images/Psycho Head.jpg"]})
            } else if(counter < 0){
                message.channel.send({files : ["./Images/Skag Tail.jpg"]})
            } else {
                message.channel.send("No one... what's this? I'm detecting a motor unit malfunction... I can't move! I'm paralyzed with fear!")
                message.channel.send({files : ["./Images/CL4P-TP Neutral.jpg"]})

            }
        }
    } 
 
})

client.login(token);


    