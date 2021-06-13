const Discord = require('discord.js')
exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return;
    if(!args[0]) return msg.reply('You need to specify a number of messages that you want me to purge!');
    if(isNaN(args[0])) return msg.reply('You need to specify a valid number of messages you want me to delete')
 
    if(args[0] > 100) return msg.reply('You need to specify a number less than 100!');
    if(args[0] < 1) return msg.reply('You need to specify a number that is greater than 0!');
 
    msg.delete
    await msg.channel.messages.fetch({limit: args[0]}).then (messages => {
        msg.channel.bulkDelete(messages);
 
 
        var embed = new Discord.MessageEmbed()
        .setColor('0xbf00ff')
        .setTitle(`i have succesfully deleted ${args[0]} messages!`);
        msg.channel.send(embed)
    })
}