const Discord = require('discord.js')
exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return;
    if(!args[0]) return msg.reply('you need to specify a time for me to set slowmode to!')
     if(isNaN(args[0])) return msg.reply('you need to specify a valid number for me to set slowmode');
    var time = args[0]
    if(args[0] < 0) return msg.rpely('you need to specify a postive slowmode to!');
    if(args[0] > 21600) return msg.reply('you need to specify a time that is less than 6 hours (21,600)');
    msg.channel.setRateLimitPerUser(time)
 
 
 
    var embed = new Discord.MessageEmbed()
    .setColor('0xbf00ff')
    .setTitle(`i have succesfully set slowmode to \`${time}\` seconds!`);
    msg.channel.send(embed)
 
}