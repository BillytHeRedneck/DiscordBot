const Discord = require('discord.js');
const{ prefix, prefix2, token } = require ('./config.json');
const client = new Discord.Client();
const colours = require("../colours.json");
const superagent = require("superagent");


client.once('ready', () => { 
    console.log('Bot is logged in!')
})

client.on('message', message=> {
    
    msg = message.content.toLowerCase()
    if (message.author.bot) return; 
    
        //Help
    else if(msg.startsWith(prefix + "help")) {
        message.channel.send("Greetings Traveller! There are new gif-commands available at the Fyrestone Bounty-board!")
        

    //GIF
    } else if(msg.startsWith(prefix + "eric")){
        message.channel.send({files : ["./Images/Eric Andre Unimpressed.gif"]})
    
    } else if(msg.startsWith(prefix + "yesss")){
        message.channel.send({files : ["./Images/Yesss.gif"]})
    
    } else if(msg.startsWith(prefix + "enjoythat")){
        message.channel.send({files : ["./Images/EnjoyThat.gif"]})
    
    } else if(msg.startsWith(prefix + "nooice")){
        message.channel.send({files : ["./Images/NOOICE.gif"]})
    
    } else if(msg.startsWith(prefix + "ora")){
        message.channel.send({files : ["./Images/CatchHands.gif"]})
   
    } else if(msg.startsWith(prefix + "wrong")){
        message.channel.send({files : ["./Images/Wrong.gif"]})
   
    } else if(msg.startsWith(prefix + "fistbump")){
        message.channel.send({files : ["./Images/Fa-la-la-la-la.gif"]})
   
    } else if(msg.startsWith(prefix + "idk")){
        message.channel.send({files : ["./Images/IDK.gif"]})
   
    } else if(msg.startsWith(prefix + "lblaugh")){
        message.channel.send({files : ["./Images/Long Beach Laugh.gif"]})
   
    } else if(msg.startsWith(prefix + "yesyes")){
        message.channel.send({files : ["./Images/M Bison Yes! Yes!.gif"]})
   
    } else if(msg.startsWith(prefix + "spedcomp")){
        message.channel.send({files : ["./Images/Nice Competetion.gif"]})
   
    } else if(msg.startsWith(prefix + "tea")){
        message.channel.send({files : ["./Images/The Tea.gif"]})
   
    } else if(msg.startsWith(prefix + "window")){
        message.channel.send({files : ["./Images/Throw You Out The Window.gif"]})
   
    } else if(msg.startsWith(prefix + "whathesay")){
        message.channel.send({files : ["./Images/What Did He Just Say.gif"]})
   
    } else if(msg.startsWith(prefix + "neverwin")){
        message.channel.send({files : ["./Images/You Never Win.gif"]})
   
    } else if(msg.startsWith(prefix + "hurtmyear")){
        message.channel.send({files : ["./Images/You're Hurting My Ear.gif"]})
   
    } else if(msg.startsWith(prefix + "highestfive")){
        message.channel.send({files : ["./Images/Highest of Fives.gif"]})
   
    } else if(msg.startsWith(prefix + "bigshaqno")){
        message.channel.send({files : ["./Images/Big Shaq No.gif"]})
   
    } else if(msg.startsWith(prefix + "bigshaqok")){
        message.channel.send({files : ["./Images/Big Shaq Ok.gif"]})
   
    } else if(msg.startsWith(prefix + "garretsmh")){
        message.channel.send({files : ["./Images/Garret Shake Head.gif"]})
   
    } else if(msg.startsWith(prefix + "amazing...")){
        message.channel.send({files : ["./Images/Squidward Amazing.gif"]})
   
    } else if(msg.startsWith(prefix + "sweating")){
        message.channel.send({files : ["./Images/Sweating.gif"]})
   
    } else if(msg.startsWith(prefix + "t1cringe")){
        message.channel.send({files : ["./Images/Tyler1 Unimpressed.gif"]})
   
    } else if(msg.startsWith(prefix + "devilno")){
        message.channel.send({files : ["./Images/Yeah...no.gif"]})
    
    //OTHER
    } else if (msg.startsWith(prefix +"rnd")) {
        const args = msg.slice(prefix.length).split(' ');
        var num = parseInt(args[1],10);
        var willIWork = Math.floor(Math.random() * Math.floor(2));
        if (willIWork == 0){
            message.channel.send("These controls seem to be damaged! Have no fear, I’m sure I can do it! Arrgh...this isn't working!")
        } else {
            message.channel.send("Your random number is... " + Math.floor(Math.random() * Math.floor(num)))
        }
        
        

    } else if (msg.startsWith(prefix +"ht")) {
        const args = msg.slice(prefix.length).split(' ');
        var num = parseInt(args[1],10);
        var willIWork = Math.floor(Math.random() * Math.floor(2));
        var counter = 0;
        if (willIWork == 0){
            message.channel.send("These controls seem to be damaged! Have no fear, I’m sure I can do it! Arrgh...this isn't working! Please give me some time to reboot")
            
                    
         
        } else {
            for (var i = 1; i <= num; i++){
                var rand = Math.floor(Math.random() * Math.floor(2));
                if (rand == 0){
                    counter++;
                } else {
                    counter--;
                }
            }
            message.channel.send("On " + num + " rolls, the winner is... ")
            if (counter > 0){
                message.channel.send({files : ["./Images/Psycho Head.jpg"]})
            } else if(counter < 0){
                message.channel.send({files : ["./Images/Skag Tail.jpg"]})
            } else {
                message.channel.send({files : ["./Images/CL4P-TP Neutral.jpg"]})
                message.channel.send("No one... what's this? I'm detecting a motor unit malfunction... I can't move! I'm paralyzed with fear!")

            }
        }
    } else if (msg.startsWith(prefix+"mute")) {
        let messageArray = message.content.split(" ")
        let args1 = messageArray.slice(1);
        module.exports.run = async (client, message, args1) => {
            // check if the command caller has permission to use the command
            if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");
            
            if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles!")
            
            //define the reason and mutee
            let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
            if(!mutee) return message.channel.send("Please supply a user to be muted!");
            
            let reason = args1.slice(1).join(" ");
            if(!reason) reason = "No reason given"
            
            //define mute role and if the mute role doesnt exist then create one
            let muterole = message.guild.roles.find(r => r.name === "Muted")
            if(!muterole) {
                try{
                    muterole = await message.guild.createRole({
                        name: "Muted",
                        color: "#514f48",
                        permissions: []
                    })
                    message.guild.channels.forEach(async (channel, id) => {
                        await channel.overwritePermissions(muterole, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false,
                            SEND_TTS_MESSAGES: false,
                            ATTACH_FILES: false,
                            SPEAK: false
                        })
                    })
                } catch(e) {
                    console.log(e.stack);
                }
            }
        
            
            //add role to the mentioned user and also send the user a dm explaing where and why they were muted
            mutee.addRole(muterole.id).then(() => {
                message.delete()
                mutee.send(`Hello, you have been in ${message.guild.name} for: ${reason}`).catch(err => console.log(err))
                message.channel.send(`${mutee.user.username} was successfully muted.`)
            })
            
            //send an embed to the modlogs channel
            let embed = new Discord.RichEmbed()
            .setColor(colours.redlight)
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
            .addField("Moderation:", "mute")
            .addField("Mutee:", mutee.user.username)
            .addField("Moderator:", message.author.username)
            .addField("Reason:", reason)
            .addField("Date:", message.createdAt.toLocaleString())
            
            let sChannel = message.guild.channels.find(c => c.name === "tut-modlogs")
            sChannel.send(embed)
            }
            
            module.exports.config = {
                name: "mute",
                description: "Mutes a member in the discord!",
                usage: "!mute <user> <reason>",
                accessableby: "Members",
                aliases: ["m", "nospeak"]
            }
    }
 
})

client.login(token);


    