const Discord = require("discord.js");
const ms = require('ms');
 
exports.run = async(client, msg, args) => {
    var target = msg.mentions.users.first() || msg.guild.cache.get(args[0]);
    if(!target) return msg.reply('You need to mention a user for me to unmute!')
    var targetID = msg.guild.members.cache.get(target.id)
 
    var main = msg.guild.roles.cache.find(role => role.name === 'Verified');
    var muteRole = msg.guild.roles.cache.find(role => role.name === 'mute');
 
    targetID.roles.remove(muteRole)
    targetID.roles.add(main)
 
    msg.channel.send(`<@${targetID.user.id}> has been unmuted`)
}