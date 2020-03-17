
const Discord = require('discord.js');
const{ prefix, token } = require ('./config.json');
const client = new Discord.Client();

client.once('ready', () => { 
    console.log('Bot is logged in!')
})

client.on('message', message=> {
    
    msg = message.content.toLowerCase()

    //!Help CODE
    if(msg.startsWith(prefix + "Help")) {
        message.channel.send("Refer to gif-commands for my commands")
        

    //WHERE GIF CODE GOES
    } else if(msg.startsWith(prefix + "eric")){
        message.channel.send({files : ["./Images/Eric Andre Unimpressed.gif"]})
    
    } else if(msg.startsWith(prefix + "Eric")){
        message.channel.send({files : ["./Images/Eric Andre Unimpressed.gif"]})
    
    } else if(msg.startsWith(prefix + "Yesss")){
        message.channel.send({files : ["./Images/Yesss.gif"]})
    
    } else if(msg.startsWith(prefix + "EnjoyThat")){
        message.channel.send({files : ["./Images/EnjoyThat.gif"]})
    
    } else if(msg.startsWith(prefix + "NOOICE")){
        message.channel.send({files : ["./Images/NOOICE.gif"]})
    
    } else if(msg.startsWith(prefix + "ORA")){
        message.channel.send({files : ["./Images/CatchHands.gif"]})
   
    } else if(msg.startsWith(prefix + "Wrong")){
        message.channel.send({files : ["./Images/Wrong.gif"]})
   
    } else if(msg.startsWith(prefix + "Fistbump")){
        message.channel.send({files : ["./Images/Fa-la-la-la-la.gif"]})
   
    } else if(msg.startsWith(prefix + "IDK")){
        message.channel.send({files : ["./Images/IDK.gif"]})
   
    } else if(msg.startsWith(prefix + "LBLaugh")){
        message.channel.send({files : ["./Images/Long Beach Laugh.gif"]})
   
    } else if(msg.startsWith(prefix + "YESYES")){
        message.channel.send({files : ["./Images/M Bison Yes! Yes!.gif"]})
   
    } else if(msg.startsWith(prefix + "SpedComp")){
        message.channel.send({files : ["./Images/Nice Competetion.gif"]})
   
    } else if(msg.startsWith(prefix + "Tea")){
        message.channel.send({files : ["./Images/The Tea.gif"]})
   
    } else if(msg.startsWith(prefix + "Window")){
        message.channel.send({files : ["./Images/Throw You Out The Window.gif"]})
   
    } else if(msg.startsWith(prefix + "WhatHeSay")){
        message.channel.send({files : ["./Images/What Did He Just Say.gif"]})
   
    } else if(msg.startsWith(prefix + "NeverWin")){
        message.channel.send({files : ["./Images/You Never Win.gif"]})
   
    } else if(msg.startsWith(prefix + "HurtMyEar")){
        message.channel.send({files : ["./Images/You're Hurting My Ear.gif"]})
   
    } else if(msg.startsWith(prefix + "HighestFive")){
        message.channel.send({files : ["./Images/Highest of Fives.gif"]})
   
    } else if(msg.startsWith(prefix + "BigShaqNo")){
        message.channel.send({files : ["./Images/Big Shaq No.gif"]})
   
    } else if(msg.startsWith(prefix + "BigShaqOk")){
        message.channel.send({files : ["./Images/Big Shaq Ok.gif"]})
   
    } else if(msg.startsWith(prefix + "GarretSMH")){
        message.channel.send({files : ["./Images/Garret Shake Head.gif"]})
   
    } else if(msg.startsWith(prefix + "Amazing...")){
        message.channel.send({files : ["./Images/Squidward Amazing.gif"]})
   
    } else if(msg.startsWith(prefix + "Sweating")){
        message.channel.send({files : ["./Images/Sweating.gif"]})
   
    } else if(msg.startsWith(prefix + "T1Cringe")){
        message.channel.send({files : ["./Images/Tyler1 Unimpressed.gif"]})
   
    } else if(msg.startsWith(prefix + "DevilNo")){
        message.channel.send({files : ["./Images/Yeah...no.gif"]})
   
    }
 
})

client.login(token);