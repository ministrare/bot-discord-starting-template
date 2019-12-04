// Minimal required
const discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json');
const client = new discord.Client();

client.once('ready', async () => {
    console.log('Starting "Evil Morty" - Discord Bot!');
    console.log('Press enter to disconnect "Evil Morty" - Discord Bot: ');
    await console.read();
    process.exit();
});

client.on('message', message => {
    if(message.content.startsWith(`${prefix}kick`)){
        if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
            let member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " has been kicked!" );
            })
        }else{
            message.channel.send("You dont have the permissions to kick someone! You fool..!");
        }
    }
});

client.login(token);