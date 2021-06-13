const Discord = require('discord.js')
exports.run = async(client, msg, args) => {
    var embed = new Discord.MessageEmbed()
    .setColor('0xbf00ff')
    .setTitle(`Idk what to put here `)
    .setDescription(`Hello`);

    msg.channel.send(embed)
}