///const config = require("./config.json");
const Discord = require("discord.js");
const ms = require("ms");
const client = new Discord.Client();
const Fs = require("fs");
const math = require("math.js");

client.on("ready", () => {
  console.log("I am online and ready to listen to some exotic commands!");

  const statusArray = [
    "Roblox, PLAYING",
    "General chat, WATCHING",
    "To Music in :musical_note: Music #1 [Rythm 1] , LISTENING",
    "With my dog, PLAYING",
    "Exotic Starz videos, Watching",
  ];

  setInterval(() => {
    const random =
      statusArray[Math.floor(Math.random() * statusArray.length)].split(", ");
    const status = random[0];
    const mode = random[1];
    client.user.setActivity(status, { type: mode });
  }, 10000);
});

client.on("message", async (msg) => {
  if (msg.channel.type === "dm") {
    console.log(msg.author);
  }
  if (msg.author.bot) return;
  if (!msg.guild) return;
  if (msg.content.length >= 2000) {
    msg.delete();
    msg.channel.send(
      `${msg.author} , you are not allowed to send long messages in Exotic World!`
    );
  }

  if (msg.channel.id === "824326523192475668") await msg.delete();
  if (msg.author.bot) return;
  if (
    msg.content.toLowerCase() === "!verify" &&
    msg.channel.id === "824326523192475668"
  ) {
    await msg.delete;
    const role = msg.guild.roles.cache.get("811111745254195200");
    if (role) {
      try {
        await msg.member.roles.add(role);
        console.log("Role added!");
      } catch (err) {
        console.log(err);
      }
    }
  }

  function isValidURL(string) {
    var res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
  }
  var testContent = msg.content;
  if (
    isValidURL(testContent) &&
    msg.channel.id !== "811082489015435284811085356044517447811083501814153286"
  ) {
    msg.reply(
      "You cannot send links in this channel if you would like to post a link please you this channel: <#811082489015435284>"
    );
    msg.delete();
    var warnsJSON = JSON.parse(Fs.readFileSync("./warnInfo.json"));

    if (!warnsJSON[msg.author.id]) {
      warnsJSON[msg.author.id] = {
        warns: 0,
      };

      Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));
    }

    warnsJSON[msg.author.id].warns += 1;
    Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));

    setTimeout(function () {
      warnsJSON[msg.author.id].warns -= 1;
      Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));
    }, ms("24h"));

    var warnEm = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setTitle(`You have been warned in ${msg.guild.name}`)
      .setDescription("You have recieved a warning from the moderation system")
      .addField("Reason", "[AutoMod] posting links in the wrong place")
      .addField("Expires", "24h")
      .addField("punishmentID");

    try {
      msg.author.send(warnEm);
    } catch (err) {}

    if (Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
      var mutedEm = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          `${msg.member.user.username} has been muted for violating Exotic Worlds rules`
        );
      msg.channel.send(mutedEm);

      const muteRole = msg.guild.roles.cache.find((r) => r.name === "mute");
      const user = msg.member;
      user.roles.add(muteRole.id);

      var yougotmuted = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`You have been muted in ${msg.guild.name}`)
        .setDescription("You have been muted after 3 infractions")
        .addField("Reason", "Multiple AutoMod Violations")
        .addField("Expires", "6h");

      try {
        msg.author.send(yougotmuted);
      } catch (err) {}

      setTimeout(function () {
        user.roles.remove(muteRole.id);
      }, ms("1m"));
    }
  }

  if (msg.mentions.users.size >= 2) {
    msg.delete;
    return msg.reply("you cannot mass mention users in the server");
  }

  if (msg.content.includes("<@!788377671758905365>")) {
    msg.reply(`${Pepebonk} You are not allowed to ping Exotic Starz!`);
    msg.delete();
    var warnsJSON = JSON.parse(Fs.readFileSync("./warnInfo.json"));

    if (!warnsJSON[msg.author.id]) {
      warnsJSON[msg.author.id] = {
        warns: 0,
      };

      Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));
    }

    warnsJSON[msg.author.id].warns += 1;
    Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));

    setTimeout(function () {
      warnsJSON[msg.author.id].warns -= 1;
      Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));
    }, ms("24h"));

    var warnEm = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setTitle(`You have been warned in ${msg.guild.name}`)
      .setDescription("You have recieved a warning from the moderation system")
      .addField("Reason", "[AutoMod] pinging Exotic Starz")
      .addField("Expires", "24h");

    try {
      msg.author.send(warnEm);
    } catch (err) {}

    if (Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
      var mutedEm = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          `${msg.member.user.username} has been muted for violating Exotic Worlds rules`
        );
      msg.channel.send(mutedEm);

      const muteRole = msg.guild.roles.cache.find((r) => r.name === "mute");
      const user = msg.member;
      user.roles.add(muteRole.id);

      var yougotmuted = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`You have been muted in ${msg.guild.name}`)
        .setDescription("You have been muted after 3 infractions")
        .addField("Reason", "Multiple AutoMod Violations")
        .addField("Expires", "6h");

      try {
        msg.author.send(yougotmuted);
      } catch (err) {}

      setTimeout(function () {
        user.roles.remove(muteRole.id);
      }, ms("1m"));
    }
  }
  var array = [
    "bitch",
    "Bitch",
    "B1itch",
    "b1itch",
    "b!tch",
    "B!tch",
    "dick",
    "Dick",
    "d1ck",
    "Dick",
    "d!ck",
    "D!ck",
    "cock",
    "Cock",
    "C0ck",
    "cunt",
    "Cunt",
    "cnut",
    "Cnut",
    "Fuck",
    "fuck",
    "fuk",
    "Fuk",
    "fag",
    "fagot",
    "Fag",
    "Fagout",
    ,
    "fucker",
    "basterd",
    "Basterd",
    "buthole",
    "Buthole",
    "crap",
    "Crap",
    "asshole",
    "Asshole",
    "nigga",
    "Nigga",
    "nigg",
    "Nigg",
    "sex",
    "Sex",
    "crap",
    "Crap",
    "hoe",
    "Hoe",
    "pervert",
    "Pervert",
    "pedo",
  ];

  if (
    array.some((w) => ` ${msg.content.toLowerCase()} `.includes(` ${w} `)) &&
    msg.channel.id !== "822555268520345640"
  ) {
    var emojiGuild = client.guilds.cache.find(
      (guild) => guild.name === "Exotic World"
    );
    var Pepebonk = emojiGuild.emojis.cache.find(
      (emoji) => emoji.name === "animebonk"
    );

    msg.delete();
    msg.reply(
      `${Pepebonk} Exotic World is a family friendly server continuing will result in a mute!`
    );

    var warnsJSON = JSON.parse(Fs.readFileSync("./warnInfo.json"));

    if (!warnsJSON[msg.author.id]) {
      warnsJSON[msg.author.id] = {
        warns: 0,
      };

      Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));
    }

    warnsJSON[msg.author.id].warns += 1;
    Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));

    setTimeout(function () {
      warnsJSON[msg.author.id].warns -= 1;
      Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));
    }, ms("24h"));

    var warnEm = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setTitle(`You have been warned in ${msg.guild.name}`)
      .setDescription("You have recieved a warning from the moderation system")
      .addField("Reason", "[AutoMod] Using filtered words")
      .addField("Expires", "24h");

    try {
      msg.author.send(warnEm);
    } catch (err) {}

    if (Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
      var mutedEm = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          `${msg.member.user.username} has been muted for continuous infractions`
        );
      msg.channel.send(mutedEm);

      const muteRole = msg.guild.roles.cache.find((r) => r.name === "mute");
      const user = msg.member;
      user.roles.add(muteRole.id);

      var yougotmuted = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`You have been muted in ${msg.guild.name}`)
        .setDescription("You have been muted after 3 infractions")
        .addField("Reason", "Multiple AutoMod Violations")
        .addField("Expires", "6h");

      try {
        msg.author.send(yougotmuted);
      } catch (err) {}

      setTimeout(function () {
        user.roles.remove(muteRole.id);
      }, ms("1m"));
    }
  }

  //var prefix = config.prefix;
  var prefix = "$";
  if (!msg.content.toLowerCase().startsWith(prefix)) return;

  var args = msg.content.split(" ");
  var cmd = args.shift().slice(prefix.length).toLowerCase();
  try {
    var file = require(`./commands/${cmd}.js`);
    file.run(client, msg, args);
  } catch (err) {
    msg.reply("No such command");
    console.warn(err);
  }
});

client.on("guildMemberAdd", async (member) => {
  console.log(member.user.tag);
  let warnsJSON = JSON.parse(Fs.readFileSync("./warnInfo.json"));
  warnsJSON[member.id] = {
    warns: 0,
  };
  Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  if (newMessage.content.includes("<@!788377671758905365>")) {
    msg.delete();
    var warnsJSON = JSON.parse(Fs.readFileSync("./warnInfo.json"));

    if (!warnsJSON[msg.author.id]) {
      warnsJSON[msg.author.id] = {
        warns: 0,
      };

      Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));
    }

    warnsJSON[msg.author.id].warns += 1;
    Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));

    setTimeout(function () {
      warnsJSON[msg.author.id].warns -= 1;
      Fs.writeFileSync("./warnInfo.json", JSON.stringify(warnsJSON));
    }, ms("24h"));

    var warnEm = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setTitle(`You have been warned in ${msg.guild.name}`)
      .setDescription("You have recieved a warning from the moderation system")
      .addField("Reason", "[AutoMod] Using filtered words")
      .addField("Expires", "24h");

    try {
      msg.author.send(warnEm);
    } catch (err) {}

    if (Number.isInteger(warnsJSON[msg.author.id].warns / 3)) {
      var mutedEm = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          `${msg.member.user.username} has been muted for continuous infractions`
        );
      msg.channel.send(mutedEm);

      const muteRole = msg.guild.roles.cache.find((r) => r.name === "mute");
      const user = msg.member;
      user.roles.add(muteRole.id);

      var yougotmuted = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`You have been muted in ${msg.guild.name}`)
        .setDescription("You have been muted after 3 infractions")
        .addField("Reason", "Multiple AutoMod Infractions")
        .addField("Expires", "6h");

      try {
        msg.author.send(yougotmuted);
      } catch (err) {}

      setTimeout(function () {
        user.roles.remove(muteRole.id);
      }, ms("1m"));
    }
  }
});

//client.login(config.token);  UNCOMMENT THIS WHEN GIVING BACK

client.login("ODUzNzAxMzQxNTYyNDA0ODc0.YMZNVA.75mUMNahZ9DUoEIbKfEZdTsxec0");
