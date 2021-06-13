const Discord = require("discord.js");
const md5 = require("js-md5");

exports.run = async (client, msg, args) => {
  msg.channel.send(md5(msg.member.user.username + " " + msg.createdTimestamp));
  msg.channel.send(msg.guild.name);
};
