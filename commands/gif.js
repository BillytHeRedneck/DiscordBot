module.exports = class gif {
    constructor(){
        this.name = 'gif'
        this.alias = ['g']
        this.usage = '!gif'
    }
    run(client,message,arguments){
        message.channel.send("I will now send a gif somehow")
    }
}