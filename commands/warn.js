const Discord = require('discord.js');
 
exports.run = async(client, msg, args) => {
if(!msg.member.hasPermission('MANAGE_MESSAGES')) return;
    var user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]);
    if(!user) return msg.reply('You need to mention a user for me to warn!');
 
    var member;
    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
 
if(!member) return msg.reply('The user that you mentioned is not on the sever');
 
var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('You need to specify a reason for me to warn this user!');
    if(msg.author.id === user.id) return msg.reply('you cannot warn yourself!');
    var warnEmbed = new Discord.MessageEmbed()
        .setColor('0xbf00ff')
        .setDescription(`${user} has been warned by ${msg.author}`)
        .setFooter('This message will auto-delete in 10 seconds.')
      var sendEm = await msg.channel.send(warnEmbed);
       msg.delete()
       setTimeout(() => {
       sendEm.delete()
        }, 10000);
var embed = new Discord.MessageEmbed()
.setColor('0xbf00ff')
    .setTitle('You were warned by **Exotic Utilities**!')
    .setDescription('Server: **Exotic World**')
    .addField('Reason', reason)
    .setThumbnail('https://media.discordapp.net/attachments/811084064257081345/823669110029287494/Untitled.png');
    try {
    user.send(embed);
    } catch(err) {
    console.warn(err);
        }
        }