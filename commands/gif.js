
module.exports = class gif {
    constructor(){
        this.name = 'gif'
        this.alias = ['g']
        this.usage = '!gif'
    }
    //run(client,message,ight){
    run(message,ight) { 
        switch (ight[1]){
            case 'eric':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Eric Andre Unimpressed.gif"] })
                break
            case 'yesss':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Yesss.gif"] })
                break
            case 'enjoythat':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/EnjoyThat.gif"] })
                break
            case 'nooice':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/NOOICE.gif"] })
                break
            case 'ora':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/CatchHands.gif"] })
                break
            case 'wrong':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Wrong.gif"] })
                break
            case 'fistbump':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Fa-la-la-la-la.gif"] })
                break
            case 'idk':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/IDK.gif"] })
                break
            case 'lblaugh':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Long Beach Laugh.gif"] })
                break
            case 'yesyes':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/M Bison Yes! Yes!.gif"] })
                break
            case 'spedcomp':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Nice Competetion.gif"] })
                break
            case 'tea':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/The Tea.gif"] })
                break
            case 'window':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Throw You Out The Window.gif"] })
                break
            case 'whathesay':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/What Did He Just Say.gif"] })
                break
            case 'neverwin':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/You Never Win.gif"] })
                break
            case 'hurtmyear':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/You're Hurting My Ear.gif"] })
                break
            case 'highestfive':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Highest of Fives.gif"] })
                break
            case 'bigshaqno':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Big Shaq No.gif"] })
                break
            case 'bigshaqok':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Big Shaq Ok.gif"] })
                break
            case 'garretsmh':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Garret Shake Head.gif"] })
                break
            case 'amazing':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Squidward Amazing.gif"] })
                break
            case 'sweating':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Sweating.gif"] })
                break
            case 't1cringe':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Tyler1 Unimpressed.gif"] })
                break
            case 'devilno':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/Yeah...no.gif"] })
                break
            case 'heheboy':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/HeheBoy.gif"] })
                break
            case 'crunk':
                this.deleteTheMessage(message)
                message.channel.send({ files: ["./Images/CrunkAintDead.gif"] })
                break
            default:
                message.channel.send("I don't know that one. You either spelled it wrong" +
                " or the coding monkey didn't put it in. You should tell him to put it in. PUT IT IN UMAR!")

        }

    }
    deleteTheMessage(message){
        let messageAuthor = message.member
        message.delete(message);
        message.channel.send(messageAuthor + "responds with: ")
    }
}
/*
module.exports = {
	name: 'gif',
	description: 'Embed a gif!',
	execute(message) {
		switch (ight[1]){
            case 'eric':
                message.channel.send({ files: ["./Images/Eric Andre Unimpressed.gif"] })
                break
            case 'yesss':
                message.channel.send({ files: ["./Images/Yesss.gif"] })
                break
            case 'enjoythat':
                message.channel.send({ files: ["./Images/EnjoyThat.gif"] })
                break
            case 'nooice':
                message.channel.send({ files: ["./Images/NOOICE.gif"] })
                break
            case 'ora':
                message.channel.send({ files: ["./Images/CatchHands.gif"] })
                break
            case 'wrong':
                message.channel.send({ files: ["./Images/Wrong.gif"] })
                break
            case 'fistbump':
                message.channel.send({ files: ["./Images/Fa-la-la-la-la.gif"] })
                break
            case 'idk':
                message.channel.send({ files: ["./Images/IDK.gif"] })
                break
            case 'lblaugh':
                message.channel.send({ files: ["./Images/Long Beach Laugh.gif"] })
                break
            case 'yesyes':
                message.channel.send({ files: ["./Images/M Bison Yes! Yes!.gif"] })
                break
            case 'spedcomp':
                message.channel.send({ files: ["./Images/Nice Competetion.gif"] })
                break
            case 'tea':
                message.channel.send({ files: ["./Images/The Tea.gif"] })
                break
            case 'window':
                message.channel.send({ files: ["./Images/Throw You Out The Window.gif"] })
                break
            case 'whathesay':
                message.channel.send({ files: ["./Images/What Did He Just Say.gif"] })
                break
            case 'neverwin':
                message.channel.send({ files: ["./Images/You Never Win.gif"] })
                break
            case 'hurtmyear':
                message.channel.send({ files: ["./Images/You're Hurting My Ear.gif"] })
                break
            case 'highestfive':
                message.channel.send({ files: ["./Images/Highest of Fives.gif"] })
                break
            case 'bigshaqno':
                message.channel.send({ files: ["./Images/Big Shaq No.gif"] })
                break
            case 'bigshaqok':
                message.channel.send({ files: ["./Images/Big Shaq Ok.gif"] })
                break
            case 'garretsmh':
                message.channel.send({ files: ["./Images/Garret Shake Head.gif"] })
                break
            case 'amazing':
                message.channel.send({ files: ["./Images/Squidward Amazing.gif"] })
                break
            case 'sweating':
                message.channel.send({ files: ["./Images/Sweating.gif"] })
                break
            case 't1cringe':
                message.channel.send({ files: ["./Images/Tyler1 Unimpressed.gif"] })
                break
            case 'devilno':
                message.channel.send({ files: ["./Images/Yeah...no.gif"] })
                break
            case 'heheboy':
                message.channel.send({ files: ["./Images/HeheBoy.gif"] })
                break
            default:
                message.channel.send("I don't know that one. You either spelled it wrong" +
                " or the coding monkey didn't put it in. You should tell him to put it in. PUT IT IN UMAR!")

        }
	},
};
*/