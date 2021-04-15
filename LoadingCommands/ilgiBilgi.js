module.exports.operate = async ({client, msg, args, author, auth}, Discord = require("discord.js"), Database = require("../Models/Member.js")) => {
if ((!author.roles.cache.some(r => auth.Perms.RegisterAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
  let member = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || author;
  let embed2 = new Discord.MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic:true})).setThumbnail(msg.guild.iconURL({dynamic:true}));
    Database.findOne({SunucuID: msg.guild.id, userID: member.id}, async (err,res) => { 
     if (!res) {
      client.message(client.embed(`${client.react("iptal")} | Kullanıcının herhangi bir yetkili bilgisi bulunamamaktadır.`, msg), msg.channel.id, 6500);
     } else {
       res.ilgiBilgi.Members = res.ilgiBilgi.Members.reverse();
       res.ilgiBilgi.TagMembers = res.ilgiBilgi.TagMembers.reverse();
      client.message(embed2.setDescription(`
**• Kayıt Bilgileri**
\`>\` Kayıt: ${res.ilgiBilgi.Man + res.ilgiBilgi.Woman || 0} (\`${res.ilgiBilgi.Man} erkek, ${res.ilgiBilgi.Woman} kız.\`) 
\`>\` Tag aldırma sayısı: ${res.ilgiBilgi.Tags} 
\`>\` Son 10 tag aldırdığı kullanıcılar:\n${res.ilgiBilgi.TagMembers.map(x => `<@${x}>`).slice(0, 10).join(",") || "Kullanıcı yok."}
\`>\` Son 10 kayıt ettiği kullanıcılar:\n${res.ilgiBilgi.Members.map(x => `<@${x}>`).slice(0, 10).join(",") || "Kullanıcı yok."}\n `), msg.channel.id)

     }
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
  });
  msg.react(client.react("duztik")).catch(() => { });
};
  
  module.exports.help = {
    name: "ilgibilgi",
    alias: []
  };
