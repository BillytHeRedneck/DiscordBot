
const Discord = require('discord.js');
const{ prefix, token } = require ('./config.json');
const client = new Discord.Client();

client.once('ready', () => { 
    console.log('Bot is logged in!')
})

client.on('message', message => {
   

    //!Help CODE
    if(message.content.startsWith(prefix + "Help")) {
        message.channel.send("I am here to help you. Start with my prefix '!', and here are my commands: " + '\n')
        message.channel.send("Eric" + '\t')
        message.channel.send("Yesss" + '\t')

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