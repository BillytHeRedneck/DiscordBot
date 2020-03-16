
const Discord = require('discord.js');
const{ prefix, token } = require ('./config.json');
const client = new Discord.Client();

client.once('ready', () => { 
    console.log('Bot is logged in!')
})

client.on('message', message => {
    //console.log(message.content);
    
    if(message.content.startsWith("!Eric")){
        message.channel.send({files : ["./Images/Eric Andre Unimpressed.gif"]})
    } else if(message.content.startsWith("!Yesss")){
        message.channel.send({files : ["./Images/Yesss.gif"]})
    } else if(message.content.startsWith("!EnjoyThat")){
        message.channel.send({files : ["./Images/EnjoyThat.gif"]})
    } else if(message.content.startsWith("!NOOICE")){
        message.channel.send({files : ["./Images/NOOICE.gif"]})
    } else if(message.content.startsWith("!CatchHands")){
        message.channel.send({files : ["./Images/CatchHands.gif"]})
    } 
 
})

client.login(token);