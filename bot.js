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
    
    var j = schedule.scheduleJob("0 0 * * *", function(){
        //if(dailyMeme==0) {
        //const channel = 688827517913530565
        channel.send("0, the time is " + moment().tz("America/New_York").format("HH:mm"))
        dailyMeme++
        //}
      })
   var u = schedule.scheduleJob("0 1 * * *", function(){
    //const channel = 688827517913530565
    channel.send("1, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var v = schedule.scheduleJob("0 2 * * *", function(){
    //const channel = 688827517913530565
    channel.send("2, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var x = schedule.scheduleJob("0 3 * * *", function(){
    //const channel = 688827517913530565
    channel.send("3, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var y = schedule.scheduleJob("0 4 * * *", function(){
    //const channel = 688827517913530565
    channel.send("4, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var z = schedule.scheduleJob("0 5 * * *", function(){
    //const channel = 688827517913530565
    channel.send("5, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var a = schedule.scheduleJob("0 6 * * *", function(){
    //const channel = 688827517913530565
    channel.send("6, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var b = schedule.scheduleJob("0 7 * * *", function(){
    //const channel = 688827517913530565
    channel.send("7, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var c = schedule.scheduleJob("0 8 * * *", function(){
    //const channel = 688827517913530565
    channel.send("8, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var d = schedule.scheduleJob("0 9 * * *", function(){
    //const channel = 688827517913530565
    channel.send("9, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var e = schedule.scheduleJob("0 10 * * *", function(){
    //const channel = 688827517913530565
    channel.send("10, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var f = schedule.scheduleJob("0 11 * * *", function(){
    //const channel = 688827517913530565
    channel.send("11, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var g = schedule.scheduleJob("0 12 * * *", function(){
    //const channel = 688827517913530565
    channel.send("12, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var h = schedule.scheduleJob("0 13 * * *", function(){
    //const channel = 688827517913530565
    channel.send("13, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var i = schedule.scheduleJob("0 14 * * *", function(){
    //const channel = 688827517913530565
    channel.send("14, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var k = schedule.scheduleJob("0 15 * * *", function(){
    //const channel = 688827517913530565
    channel.send("15, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var l = schedule.scheduleJob("0 16 * * *", function(){
    //const channel = 688827517913530565
    channel.send("16, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var m = schedule.scheduleJob("0 17 * * *", function(){
    //const channel = 688827517913530565
    channel.send("17, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var n = schedule.scheduleJob("0 18 * * *", function(){
    //const channel = 688827517913530565
    channel.send("18, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var o = schedule.scheduleJob("0 19 * * *", function(){
    //const channel = 688827517913530565
    channel.send("19, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var p = schedule.scheduleJob("0 20 * * *", function(){
    //const channel = 688827517913530565
    channel.send("20, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var q = schedule.scheduleJob("0 21 * * *", function(){
    //const channel = 688827517913530565
    channel.send("21, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var r = schedule.scheduleJob("0 22 * * *", function(){
    //const channel = 688827517913530565
    channel.send("22, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })
  var s = schedule.scheduleJob("0 23 * * *", function(){
    //const channel = 688827517913530565
    channel.send("20, the time is " + moment().tz("America/New_York").format("HH:mm"))
    dailyMeme==0
  })

    /*
    setInterval(function()  {
        if ((moment().tz("America/New_York").format("ddd") != 'Sat') && 
            (moment().tz("America/New_York").format("ddd") != 'Sun') &&
            (moment().tz("America/New_York").format("HH:mm") == '15:35') &&
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


    