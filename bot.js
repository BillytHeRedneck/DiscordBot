
const Discord = require('discord.js');
const{ prefix, token } = require ('./config.json');
const client = new Discord.Client();

client.once('ready', () => { 
    console.log('Bot is logged in!')
})

client.on('message', message => {
    
    message = message.Text.toLower()

    //!Help CODE
    if(message.content.startsWith(prefix + "Help")) {
        message.channel.send("Refer to gif-commands for my commands")
        

    //WHERE GIF CODE GOES
    } else if(message.content.startsWith(prefix + "Eric")){
        message.channel.send({files : ["./Images/Eric Andre Unimpressed.gif"]})
    
    } else if(message.content.startsWith(prefix + "Yesss")){
        message.channel.send({files : ["./Images/Yesss.gif"]})
    
    } else if(message.content.startsWith(prefix + "EnjoyThat")){
        message.channel.send({files : ["./Images/EnjoyThat.gif"]})
    
    } else if(message.content.startsWith(prefix + "NOOICE")){
        message.channel.send({files : ["./Images/NOOICE.gif"]})
    
    } else if(message.content.startsWith(prefix + "ORA")){
        message.channel.send({files : ["./Images/CatchHands.gif"]})
   
    } else if(message.content.startsWith(prefix + "Wrong")){
        message.channel.send({files : ["./Images/Wrong.gif"]})
   
    } else if(message.content.startsWith(prefix + "Fistbump")){
        message.channel.send({files : ["./Images/Fa-la-la-la-la.gif"]})
   
    } else if(message.content.startsWith(prefix + "IDK")){
        message.channel.send({files : ["./Images/IDK.gif"]})
   
    } else if(message.content.startsWith(prefix + "LBLaugh")){
        message.channel.send({files : ["./Images/Long Beach Laugh.gif"]})
   
    } else if(message.content.startsWith(prefix + "YESYES")){
        message.channel.send({files : ["./Images/M Bison Yes! Yes!.gif"]})
   
    } else if(message.content.startsWith(prefix + "SpedComp")){
        message.channel.send({files : ["./Images/Nice Competetion.gif"]})
   
    } else if(message.content.startsWith(prefix + "Tea")){
        message.channel.send({files : ["./Images/The Tea.gif"]})
   
    } else if(message.content.startsWith(prefix + "Window")){
        message.channel.send({files : ["./Images/Throw You Out The Window.gif"]})
   
    } else if(message.content.startsWith(prefix + "WhatHeSay")){
        message.channel.send({files : ["./Images/What Did He Just Say.gif"]})
   
    } else if(message.content.startsWith(prefix + "NeverWin")){
        message.channel.send({files : ["./Images/You Never Win.gif"]})
   
    } else if(message.content.startsWith(prefix + "HurtMyEar")){
        message.channel.send({files : ["./Images/You're Hurting My Ear.gif"]})
   
    } else if(message.content.startsWith(prefix + "HighestFive")){
        message.channel.send({files : ["./Images/Highest of Fives.gif"]})
   
    } else if(message.content.startsWith(prefix + "BigShaqNo")){
        message.channel.send({files : ["./Images/Big Shaq No.gif"]})
   
    } else if(message.content.startsWith(prefix + "BigShaqOk")){
        message.channel.send({files : ["./Images/Big Shaq Ok.gif"]})
   
    } else if(message.content.startsWith(prefix + "GarretSMH")){
        message.channel.send({files : ["./Images/Garret Shake Head.gif"]})
   
    } else if(message.content.startsWith(prefix + "Amazing...")){
        message.channel.send({files : ["./Images/Squidward Amazing.gif"]})
   
    } else if(message.content.startsWith(prefix + "Sweating")){
        message.channel.send({files : ["./Images/Sweating.gif"]})
   
    } else if(message.content.startsWith(prefix + "T1Cringe")){
        message.channel.send({files : ["./Images/Tyler1 Unimpressed.gif"]})
   
    } else if(message.content.startsWith(prefix + "DevilNo")){
        message.channel.send({files : ["./Images/Yeah...no.gif"]})
   
    }
 
})

client.login(token);