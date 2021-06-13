const Discord = require('discord.js')
const ms = require('ms');

exports.run = async(client, msg, args) => {
    var embed = new Discord.MessageEmbed()
    .setColor('0xbf00ff')
    .setTitle(`My ping`)
    .setDescription(`My ping: ${client.ws.ping}ms`);

    msg.channel.send(embed)
}