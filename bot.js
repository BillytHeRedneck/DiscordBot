const Discord = require('discord.js');
const{ prefix, token } = require ('./config.json');
const client = new Discord.Client();
//const canvas = canvas.createCanvas(700, 250);
//const canvas = Canvas.createCanvas(700, 250);

client.login(token);
const canvas = canvas.createCanvas(700, 250);
client.once('ready', () => { 
    console.log('Bot is logged in!')
})

client.on('message', message => {
    //console.log(message.content);

    if(message.content.startsWith("!Eric")){
        message.channel.send({files : ["./Images/Eric Andre Unimpressed.gif"]})
    } 
})

//client.login(token);