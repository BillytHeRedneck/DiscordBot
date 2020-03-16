const Discord = require('discord.js');
const client = new Discord.Client();

client.login("Njg4ODQ3ODUwNDY5NDU3OTUy.Xm6TsQ.3kN2pwav_duuU6I-gNz51y6JITQ");

client.once('ready', () => { 
    console.log('Bot is logged in!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

client.on('message', message => {
    //console.log(message.content);

    if(message.content.startsWith("!Eric")){
        message.channel.send({files : ["./Images/Eric Andre Unimpressed.gif"]})
    }  
})

client.login("Njg4ODQ3ODUwNDY5NDU3OTUy.Xm6TsQ.3kN2pwav_duuU6I-gNz51y6JITQ");