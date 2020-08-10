var schedule = require('node-schedule');

const Discord = require('discord.js');
const { prefix, prefix2, token } = require('./config.json');

const Client = require('./client/Client');
const fs = require('fs')
const { CommandHandler } = require('djs-commands');
const weather = require('./commands/weather');
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: ['!']
})
let meme = 0;
let dailyMeme = 0
let dailyWeather = "!-raincheck"
global.lastBoy = null
global.muted = false
const client = new Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

console.log(client.commands);


client.on('ready', () => {
    console.log('Bot is logged in!')
})

//scheduled message for meme-a-day
client.on('ready', () => {

    const channel = client.channels.cache.get('570344442255376387')
    const channel1 = client.channels.cache.get('688827517913530565')
    var dailyMemeReminder = schedule.scheduleJob("0 20 * * 1-5", function () {
        if (dailyMeme == 0) {
            channel1.send("Sure is lonely around here... wish I had a meme.")
            dailyMeme++
        }
    })
    var dailyMemeReminderWeekend = schedule.scheduleJob("0 20 * * 6,0", function () {
        channel1.send("Sure is lonely arou - Wrong day. Carry on.")
    })

    var dailyMemeReset = schedule.scheduleJob("0 4 * * *", function () {
        dailyMeme == 0
    })

    var checking = schedule.scheduleJob("38 0 * * *", function () {
        channel1.send(dailyWeather)

    })

})

client.on('message', async message => {
    /*
    688827517913530565
    570344442255376387
    */
    if (message.channel.id == 570344442255376387 && message.attachments.size > 0) {
        if (message.author.bot) return;
        meme++
        if (meme == 1) {
            setTimeout(function () {
                message.channel.send("Seeya next time!")
                meme = 0;
                dailyMeme++
            }, 1500)
        }
        return
    }
    
        //console.log(!(message.author.bot && message.content == dailyWeather))
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        if (muted) {
            message.channel.send("STOP, I AM REBOOTING")
            return
        }

        /*
        let msg = message.content.toLowerCase()
        let ight = msg.split(" ")
        let command123 = ight[0]
        let cmd = CH.getCommand(command123)
        try {
            cmd.run(message, ight);
        } catch (error) {
            console.error(error);
            message.channel.send("Hmmmm, that's not a command. I'm just gonna pretend I didn't hear it.");
        }
        */
    
});


client.login(token);


