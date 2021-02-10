module.exports.operate = async ({client, msg, args, author, auth}, Discord = require("discord.js"), Database = require("../Models/Member.js")) => {
if ((!author.roles.cache.some(r => auth.Perms.RegisterAuth.includes(r.id))) & (!author.permissions.has("ADMINISTRATOR"))) return;
  let member = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || author;
  let embed2 = new Discord.MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic:true})).setThumbnail(msg.guild.iconURL({dynamic:true}));
    Database.findOne({SunucuID: msg.guild.id, userID: member.id}, async (err,res) => { 
     if (!res) {
      client.message(client.embed(`Kullanıcının herhangi bir yetkili bilgisi bulunamamaktadır.`, msg), msg.channel.id, 6500);
     } else {
      client.message(embed2.setDescription(`
**• Kayıt Bilgileri**\n
\`>\` Kız: ${res.Authorized.Woman || 0}
\`>\` Erkek: ${res.Authorized.Man || 0}
\`), msg.channel.id)
     }
  });
};
  
  module.exports.help = {
    name: "xd",
    alias: [""]
  };

const mongoose = require("mongoose");

const member = mongoose.Schema({
  SunucuID: String,
  userID: String,
  AFK: Object,
  History: Array,
  Authorized: { Man: { type: Number, default: 0 }, Woman: { type: Number, default: 0 }, Members: Array },
  RestNumber: { BanNumber: { type: Number, default: 0 }, JailNumber: { type: Number, default: 0 }, VMuteNumber: { type: Number, default: 0 }, MuteNumber: { type: Number, default: 0 } },
  CezaPuan: { type: Number, default: 0},
  Uyarılar: Array,
  Nots: Array
});

module.exports = mongoose.model("members", member);