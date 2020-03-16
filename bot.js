
const Discord = require('discord.js');
const{ prefix, token } = require ('./config.json');
const client = new Discord.Client();

client.once('ready', () => { 
    console.log('Bot is logged in!')
})

client.on('message', message => {
   

    //!Help CODE
    if(message.content.startsWith(prefix + "Help")) {
        message.channel.send("I am here to help you. Start with my prefix '!', and here are my commands: ")
        message.channel.send("Positive:")
        message.channel.send("BaymaxFist\t->Fa-la-la-la-la")
        message.channel.send("HighestFive\t-> Highest of Fives")
        message.channel.send("Triumphant:")
        message.channel.send("Yesss\t->Key and Peele: Yesss")
        message.channel.send("NOOICE\t->Key and Peele: NOOICE")
        message.channel.send("YES\t->M Bison YES YES")
        message.channel.send("Sarcastic:")
        message.channel.send("Eric\t->Eric Andre Unimpressed")
        message.channel.send("LBLaugh\t->Long Beach Laugh")
        message.channel.send("Grumpy:")
        message.channel.send("Loss:")
        message.channel.send("NeverWin\t->Key and Peele: You never win")
        message.channel.send("NiceComp\t->Mario Competition Fail")
        message.channel.send("Directed Negative:")
        message.channel.send("EnjoyThat\t->Did you enjoy that? I did.")
        message.channel.send("Wrong\t->Daddy Trump Wrong")
        message.channel.send("Window\t->Key and Peele: Throw you out a window")
        message.channel.send("HurtingMyEar\t->Key and Peele: You're hurting my ear")
        message.channel.send("Random")
        message.channel.send("CatchHands\t->ORA ORA ORA")
        message.channel.send("IDK\t->I don't know")
        message.channel.send("Tea\t->Key and Peele: The Tea")
        message.channel.send("WhatHeSay\t->Key and Peele: What did he just say?")


    //WHERE GIF CODE GOES
    } else if(message.content.startsWith(prefix + "Eric")){
        message.channel.send({files : ["./Images/Eric Andre Unimpressed.gif"]})
    
    } else if(message.content.startsWith(prefix + "Yesss")){
        message.channel.send({files : ["./Images/Yesss.gif"]})
    
    } else if(message.content.startsWith(prefix + "EnjoyThat")){
        message.channel.send({files : ["./Images/EnjoyThat.gif"]})
    
    } else if(message.content.startsWith(prefix + "NOOICE")){
        message.channel.send({files : ["./Images/NOOICE.gif"]})
    
    } else if(message.content.startsWith(prefix + "CatchHands")){
        message.channel.send({files : ["./Images/CatchHands.gif"]})
   
    }  
 
})

client.login(token);