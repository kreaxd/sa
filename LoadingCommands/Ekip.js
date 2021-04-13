module.exports.operate = async ({client, msg, args, author, auth}, {MessageEmbed} = require("discord.js")) => {
    if ((!author.roles.cache.some(r => auth.Perms.Yonetim.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
const ekip1 = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip1.includes(x.id)))).size || 0;
const ekip1tag = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip1.includes(x.id))) && (u.user.username.includes(auth.Tags.RealTag))).size || 0;
const ekip1ses = msg.guild.members.cache.filter(c => (c.roles.cache.some(x => auth.Ekip.Ekip1.includes(x.id))) && (c.voice.channel)).size || 0;
const ekip1onlineses = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip1.includes(x.id))) && (u.presence.status !== "offline")).size;

const ekip2 = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip2.includes(x.id)))).size || 0;
const ekip2tag = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip2.includes(x.id))) && (u.user.username.includes(auth.Tags.RealTag))).size || 0;
const ekip2ses = msg.guild.members.cache.filter(c => (c.roles.cache.some(x => auth.Ekip.Ekip2.includes(x.id))) && (c.voice.channel)).size || 0;
const ekip2onlineses = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip2.includes(x.id))) && (u.presence.status !== "offline")).size;
  
const ekip3 = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip3.includes(x.id)))).size || 0;
const ekip3tag = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip3.includes(x.id))) && (u.user.username.includes(auth.Tags.RealTag))).size || 0;
const ekip3ses = msg.guild.members.cache.filter(c => (c.roles.cache.some(x => auth.Ekip.Ekip3.includes(x.id))) && (c.voice.channel)).size || 0;
const ekip3onlineses = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip3.includes(x.id))) && (u.presence.status !== "offline")).size;
  
const ekip4 = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip4.includes(x.id)))).size || 0;
const ekip4tag = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip4.includes(x.id))) && (u.user.username.includes(auth.Tags.RealTag))).size || 0;
const ekip4ses = msg.guild.members.cache.filter(c => (c.roles.cache.some(x => auth.Ekip.Ekip4.includes(x.id))) && (c.voice.channel)).size || 0;
const ekip4onlineses = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip4.includes(x.id))) && (u.presence.status !== "offline")).size;
  
const ekip5 = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip5.includes(x.id)))).size || 0;
const ekip5tag = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip5.includes(x.id))) && (u.user.username.includes(auth.Tags.RealTag))).size || 0;
const ekip5ses = msg.guild.members.cache.filter(c => (c.roles.cache.some(x => auth.Ekip.Ekip5.includes(x.id))) && (c.voice.channel)).size || 0;
const ekip5onlineses = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip5.includes(x.id))) && (u.presence.status !== "offline")).size;
  
const ekip6 = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip6.includes(x.id)))).size || 0;
const ekip6tag = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip6.includes(x.id))) && (u.user.username.includes(auth.Tags.RealTag))).size || 0;
const ekip6ses = msg.guild.members.cache.filter(c => (c.roles.cache.some(x => auth.Ekip.Ekip6.includes(x.id))) && (c.voice.channel)).size || 0;
const ekip6onlineses = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip6.includes(x.id))) && (u.presence.status !== "offline")).size;
  
const ekip7 = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip7.includes(x.id)))).size || 0;
const ekip7tag = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip7.includes(x.id))) && (u.user.username.includes(auth.Tags.RealTag))).size || 0;
const ekip7ses = msg.guild.members.cache.filter(c => (c.roles.cache.some(x => auth.Ekip.Ekip7.includes(x.id))) && (c.voice.channel)).size || 0;
const ekip7onlineses = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip7.includes(x.id))) && (u.presence.status !== "offline")).size;
  
const ekip8 = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip8.includes(x.id)))).size || 0;
const ekip8tag = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip8.includes(x.id))) && (u.user.username.includes(auth.Tags.RealTag))).size || 0;
const ekip8ses = msg.guild.members.cache.filter(c => (c.roles.cache.some(x => auth.Ekip.Ekip8.includes(x.id))) && (c.voice.channel)).size || 0;
const ekip8onlineses = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip8.includes(x.id))) && (u.presence.status !== "offline")).size;
  
  const ekip9 = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip9.includes(x.id)))).size || 0;
const ekip9tag = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip9.includes(x.id))) && (u.user.username.includes(auth.Tags.RealTag))).size || 0;
const ekip9ses = msg.guild.members.cache.filter(c => (c.roles.cache.some(x => auth.Ekip.Ekip9.includes(x.id))) && (c.voice.channel)).size || 0;
const ekip9onlineses = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip9.includes(x.id))) && (u.presence.status !== "offline")).size;
  if (!args[0]) {
        msg.channel.send({embed: {footer: `Tüm Ekip Bilgilerine Bakmak İçin .ekip tüm yazabilirsiniz.`,title: `Ekip Bilgilendirme;`,description: `Ekip Komutları:
        
        \`.ekip star\`: <@&${auth.Ekip.Ekip1}>
        \`.ekip always\`: <@&${auth.Ekip.Ekip5}>
        \`.ekip vensai\`: <@&${auth.Ekip.Ekip6}>
        \`.ekip 0004\`: <@&${auth.Ekip.Ekip7}>
        \`.ekip Roy\`: <@&${auth.Ekip.Ekip8}>
        \`.ekip Row\`: <@&${auth.Ekip.Ekip9}>
        
**Not:** Tüm ekiplerin istatistiklerini görmek için \`.ekip tüm\` komutunu kullanabilirsiniz.`}})
    } else if (["star"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
**<@&${auth.Ekip.Ekip1}>** Bilgileri;
\`>\` Ekipte toplam **${ekip1}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip1tag}** üye var.
\`>\` Seste toplam **${ekip1ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip1onlineses}** kullanıcı var.
`))
   } else if (["always"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
  **<@&${auth.Ekip.Ekip5}>** Bilgileri;
\`>\` Ekipte toplam **${ekip5}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip5tag}** üye var.
\`>\` Seste toplam **${ekip5ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip5onlineses}** kullanıcı var.
`))
  } else if (["vensai"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
  **<@&${auth.Ekip.Ekip6}>** Bilgileri;
\`>\` Ekipte toplam **${ekip6}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip6tag}** üye var.
\`>\` Seste toplam **${ekip6ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip6onlineses}** kullanıcı var.
`))
  } else if (["0004"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
  **<@&${auth.Ekip.Ekip7}>** Bilgileri;
\`>\` Ekipte toplam **${ekip7}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip7tag}** üye var.
\`>\` Seste toplam **${ekip7ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip7onlineses}** kullanıcı var.
`))
      } else if (["roy"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
  **<@&${auth.Ekip.Ekip8}>** Bilgileri;
\`>\` Ekipte toplam **${ekip8}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip8tag}** üye var.
\`>\` Seste toplam **${ekip8ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip8onlineses}** kullanıcı var.
`))
      } else if (["row"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
  **<@&${auth.Ekip.Ekip9}>** Bilgileri;
\`>\` Ekipte toplam **${ekip9}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip9tag}** üye var.
\`>\` Seste toplam **${ekip9ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip9onlineses}** kullanıcı var.
`))
     } else if (["tüm"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setAuthor(msg.guild.name , msg.guild.iconURL ({dynamic: true})).setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
**<@&${auth.Ekip.Ekip1}>** Bilgileri;
\`>\` Ekipte toplam **${ekip1}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip1tag}** üye var.
\`>\` Seste toplam **${ekip1ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip1onlineses}** kullanıcı var.

**<@&${auth.Ekip.Ekip5}>** Bilgileri;
\`>\` Ekipte toplam **${ekip5}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip5tag}** üye var.
\`>\` Seste toplam **${ekip5ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip5onlineses}** kullanıcı var.

**<@&${auth.Ekip.Ekip6}>** Bilgileri;
\`>\` Ekipte toplam **${ekip6}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip6tag}** üye var.
\`>\` Seste toplam **${ekip6ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip6onlineses}** kullanıcı var.

**<@&${auth.Ekip.Ekip7}>** Bilgileri;
\`>\` Ekipte toplam **${ekip7}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip7tag}** üye var.
\`>\` Seste toplam **${ekip7ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip7onlineses}** kullanıcı var.

**<@&${auth.Ekip.Ekip8}>** Bilgileri;
\`>\` Ekipte toplam **${ekip8}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip8tag}** üye var.
\`>\` Seste toplam **${ekip8ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip8onlineses}** kullanıcı var.

**<@&${auth.Ekip.Ekip9}>** Bilgileri;
\`>\` Ekipte toplam **${ekip9}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip9tag}** üye var.
\`>\` Seste toplam **${ekip9ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip9onlineses}** kullanıcı var.
`))
    };  
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
}

module.exports.help = {
  name: "ekip",
  alias: []
};
