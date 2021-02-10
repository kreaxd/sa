const client = process.client;
const Database = require("../Models/Member.js");
const parsems = require("parse-ms");
const auth = require("../authorization.json");

class AFK {
  constructor(msg) {
    this.msg = msg;
  }
  @⍭ Berkay | 20 AFK modundan başarıyla çıkış yaptın, 6 saat önce AFK olmuştun.
  AFKcikis(author) {
    Database.findOne({SunucuID: this.msg.guild.id, userID: this.msg.author.id}, async (err, res) => {
      if (res) {
        let afkveri = res.AFK || {};
        if (afkveri.mod) {
          res.AFK = {};
          res.save();
          if (author.manageable) author.setNickname(author.displayName.replace("[AFK]", "")).catch(err => this.msg.channel.send(err.message));
          let süre = parsems(Date.now() - afkveri.date);
    if (süre.days !== 0) {
      client.message(`${this.msg.author} AFK modundan başarıyla çıkış yaptın, **${süre.days}** gün **${süre.hours}** saat önce AFK olmuştun.`, this.msg.channel.id, 6000);
      return;
    } else if (süre.hours !== 0) {
      client.message(`${this.msg.author} AFK modundan**${süre.hours}** saat **${süre.minutes}**`, this.msg.channel.id, 6000);
      return;
    } else if (süre.minutes !== 0) {
      client.message({embed: {description:`${uye} kullanıcısı **${süre.minutes}** dakika önce **AFK** moduna girdi.\nAFK Nedeni: \`${reason}\``}, color: client.renk[Math.floor(Math.random() * client.renk.length)], timestamp: new Date()}, this.msg.channel.id, 6000); 
      return;
    } else if (süre.seconds !== 0) {
      client.message({embed: {description:`${uye} kullanıcısı biraz önce **AFK** moduna girdi.\nAFK Nedeni: \`${reason}\``}, color: client.renk[Math.floor(Math.random() * client.renk.length)], timestamp: new Date()}, this.msg.channel.id, 6000);
      return;
            };
        } else { };
      } else { };
    });
  }
  
  isAFK(uye) {
    if ((uye.id !== this.msg.author.id) && (!client.AFKLAR.has(uye.id))) {
      Database.findOne({SunucuID: this.msg.guild.id, userID: uye.id}, async (err, res) => {
        if (res) {
          let afkveri = res.AFK || {};
          if (afkveri.mod) {
            let süre = parsems(Date.now() - afkveri.date);
            let reason = afkveri.reason;
            await client.AFKLAR.add(uye.id);
            setTimeout(() => client.AFKLAR.delete(uye.id), client.getDate(5, "saniye"));
            if (süre.days !== 0) {
              client.message({embed: {description:`${uye} kullanıcısı **${süre.days}** gün **${süre.hours}** saat **${süre.minutes}** dakika önce **AFK** moduna girdi.\nAFK Nedeni: \`${reason}\``}, color: client.renk[Math.floor(Math.random() * client.renk.length)], timestamp: new Date()}, this.msg.channel.id, 6000);
              return;
            } else if (süre.hours !== 0) {
              client.message({embed: {description:`${uye} kullanıcısı **${süre.hours}** saat **${süre.minutes}** dakika önce **AFK** moduna girdi.\nAFK Nedeni: \`${reason}\``}, color: client.renk[Math.floor(Math.random() * client.renk.length)], timestamp: new Date()}, this.msg.channel.id, 6000);
              return;
            } else if (süre.minutes !== 0) {
              client.message({embed: {description:`${uye} kullanıcısı **${süre.minutes}** dakika önce **AFK** moduna girdi.\nAFK Nedeni: \`${reason}\``}, color: client.renk[Math.floor(Math.random() * client.renk.length)], timestamp: new Date()}, this.msg.channel.id, 6000); 
              return;
            } else if (süre.seconds !== 0) {
              client.message({embed: {description:`${uye} kullanıcısı biraz önce **AFK** moduna girdi.\nAFK Nedeni: \`${reason}\``}, color: client.renk[Math.floor(Math.random() * client.renk.length)], timestamp: new Date()}, this.msg.channel.id, 6000);
              return;
            };
          } else { };
        } else { };
      });
    };
  }  
}

function afkControl(message) {
  if (message.author.bot || message.channel.type === "dm" || auth.GuildData.Prefixes.some(x => message.content.startsWith(x)) || message.guild.id !== auth.GuildData.GuildID) return null;
  let uye = message.guild.member(message.mentions.users.first());
  let author = message.guild.member(message.author);
  new AFK(message).AFKcikis(author);
  if (uye) new AFK(message).isAFK(uye);
};

module.exports.event = {
  name: "message",
  eventOn: message => afkControl(message)
};