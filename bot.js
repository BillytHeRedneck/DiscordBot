const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.login('Njg4ODQ3ODUwNDY5NDU3OTUy.Xm6TsQ.3kN2pwav_duuU6I-gNz51y6JITQ');
/*
const Discord = require('discord.js');
const{ prefix, token } = require ('./config.json');
const client = new Discord.Client();
//const canvas = canvas.createCanvas(700, 250);
//const canvas = Canvas.createCanvas(700, 250);

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;

    // Set a new canvas to the dimensions of 700x250 pixels
    const canvas = Canvas.createCanvas(700, 250);
    // ctx (context) will be used to modify a lot of the canvas

    const ctx = canvas.getContext('2d');

    channel.send(`Welcome to the server, ${member}!`);
});
client.login(token);
//client.login(token);

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
*/