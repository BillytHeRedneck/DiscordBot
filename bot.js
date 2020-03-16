const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

const client = new Discord.Client();
const prefix = '!';

const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'cat') {
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

		message.channel.send(file);
	} else if (command === 'urban') {
		if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (!list.length) {
			return message.channel.send(`No results found for **${args.join(' ')}**.`);
		}

		const [answer] = list;

		const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField('Definition', trim(answer.definition, 1024))
			.addField('Example', trim(answer.example, 1024))
			.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);

		message.channel.send(embed);
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