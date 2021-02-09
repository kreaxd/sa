module.exports.operate = async ({client, msg, args,auth, author}, fetch = require('node-fetch'), { GuildMember } = require("discord.js"), Database = require("../Models/Restriction.js"), Schema = require("../Models/Member.js")) => {
    if ((!author.roles.cache.some(r => auth.Perms.BanAuth.includes(r.id))) & (!author.permissions.has("ADMINISTRATOR"))) return;
  if (!args[0] || isNaN(args[0])) return msg.channel.send("Geçerli bir id girmelisin!");
  let user = args[0];
  if (user) {
    let sebep = args.slice(1).join(" ") || "Sebep girilmedi";
    msg.guild.members.unban(user).catch(async err => {
      msg.channel.send({ embed: {
        description: "Belirtilen id'de bir yasaklanma bulunamadı."
      }})
      await msg.react(client.react("duztik")).catch(() => { });
      await msg.channel.send(`${user} idli kullanıcının yasaklanması başarılı bir şekilde kaldırıldı.`);
    })
  }
  };
    
  module.exports.help = {
    name: "unban",
    alias: []
  };
 

 