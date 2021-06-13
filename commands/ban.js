const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You can\'t use that!');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('You didn\'t mention anyone!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(member){
        if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot ban this person!');
    }

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('You need to give a reason!');

    var channel = msg.guild.channels.cache.find(c => c.name === 'logs');

    var log = new Discord.MessageEmbed()
    .setTitle('User Banned')
    .addField('User:', user, true)
    .addField('By:', msg.author, true)
    .addField('Reason:', reason)
    .setColor ('#7900ff')
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('You were banned!')
    .setDescription(reason)
    .setColor ('#7900ff');

    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    msg.guild.members.ban(user);

    msg.channel.send(`**${user}** has been banned by **${msg.author}**!`);
}