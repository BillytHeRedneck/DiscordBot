const Discord = require('discord.js');
const client = new Discord.Client();

client.login("Njg4ODQ3ODUwNDY5NDU3OTUy.Xm6TsQ.3kN2pwav_duuU6I-gNz51y6JITQ");

client.once('ready', () => { 
    console.log('Bot is logged in!')
})

client.on('message', message => {
    //console.log(message.content);

    if(message.content.startsWith("!Eric")){
        message.channel.send({files: ["/Users/billytheredneck/Documents/Other/Discord Gif/Eric Andre Unimpressed.gif"]})
    }  else if(message.content.startsWith("!Yesss")) {
        message.channel.send({files: ["/Users/billytheredneck/Documents/Other/Discord Gif/Yesss.gif"]})
    }
})

client.login(token);