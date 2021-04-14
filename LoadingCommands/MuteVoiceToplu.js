module.exports.operate = async ({client, msg, args, member, auth, author}, ms = require("ms"), Discord = require("discord.js"), Database = require("../Models/Restriction.js"), Schema = require("../Models/Member.js")) => {
    if (!msg.member.hasPermission("MOVE_MEMBERS")) return;
    let channel = msg.guild.channels.cache.get(args[0]) || msg.member.voice.channel;
    if (!channel) return msg.channel.error(msg, "Bir kanal ID girmeli ya da bir sesli kanalda bulunmalısın!");
    channel.members.filter((x) => !x.hasPermission("ADMINISTRATOR"))
      .forEach((x, index) => {
        x.voice.setMute(true);
      }, X * 750);
    msg.channel.send(`\`${channel.name}\` kanalındaki tüm üyeler susturuldu!`);
  }
module.exports.help = {
 name: "toplu-sustur",
 alias: ["toplumute"]
};