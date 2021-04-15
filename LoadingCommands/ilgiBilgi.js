module.exports.operate = async ({client, msg, args, author, auth}, Discord = require("discord.js"), Database = require("../Models/Member.js")) => {
if ((!author.roles.cache.some(r => auth.Perms.RegisterAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
  let member = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || author;
      let ilgiPuan = await Database.findOne({SunucuID: msg.guild.id, userID: member.id})
  let embed2 = new Discord.MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic:true})).setThumbnail(msg.guild.iconURL({dynamic:true}));
    Database.findOne({SunucuID: msg.guild.id, userID: member.id}, async (err,res) => { 
     if (!res) {
      client.message(client.embed(`${client.react("iptal")} | Kullanıcının herhangi bir yetkili bilgisi bulunamamaktadır.`, msg), msg.channel.id, 6500);
     } else {
       res.ilgiBilgi.Members = res.ilgiBilgi.Members.reverse();
       res.ilgiBilgi.TagMembers = res.ilgiBilgi.TagMembers.reverse();
      client.message(embed2.setDescription(`
${auth.Reacts.star2} **İlgi Bilgileri**
─────────────────
\`>\` İlgi verdiği kullanıcı sayısı: **${res.ilgiBilgi.Man + res.ilgiBilgi.Woman || 0}**
\`>\` İlgi puanı: ${ilgiPuan.ilgiPuan}
\`>\` Son 10 ilgi verdiği kullanıcı:\n${res.ilgiBilgi.Members.map(x => `<@${x}>`).slice(0, 10).join(",") || "**Bu kullanıcı kimseye ilgi vermemiş.**"}

${auth.Reacts.star2} **İlgi Sistemi Hakkında**
─────────────────
İlgi sistemine hoş geldin <@${member.id}>. Burada ilgi verdiğin ku
`), msg.channel.id)
}
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
  });
  msg.react(client.react("duztik")).catch(() => { });
};
  
  module.exports.help = {
    name: "ilgibilgi",
    alias: []
  };
