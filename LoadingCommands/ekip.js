module.exports.operate = async ({client, msg, args, author, auth}, {MessageEmbed} = require("discord.js")) => {
  if ((!author.permissions.has("ADMINISTRATOR"))) return;
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
  if (!args[0]) {
        msg.channel.send({embed: {footer: `Tüm Ekip Bilgilerine Bakmak İçin .ekip tüm yazabilirsiniz.`,title: `Ekip Bilgilendirme;`,description: `Ekip Komutları:\n\n\`.ekip 1\`: <@&${auth.Ekip.Ekip1}>\n\`.ekip 2\`: <@&${auth.Ekip.Ekip2}>\n \`.ekip 3\`: <@&${auth.Ekip.Ekip3}>\n \`.ekip 4\`: <@&${auth.Ekip.Ekip4}>\n \`.ekip 5\`: <@&${auth.Ekip.Ekip5}>`}})
    } else if (["1"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
**<@&${auth.Ekip.Ekip1}>** Bilgileri;
\`>\` Ekipte toplam **${ekip1}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip1tag}** üye var.
\`>\` Seste toplam **${ekip1ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip1onlineses}** kullanıcı var.
`))
    } else if (["2"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
  **<@&${auth.Ekip.Ekip2}>** Bilgileri;
\`>\` Ekipte toplam **${ekip2}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip2tag}** üye var.
\`>\` Seste toplam **${ekip2ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip2onlineses}** kullanıcı var.
`))
    } else if (["3"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
  **<@&${auth.Ekip.Ekip3}>** Bilgileri;
\`>\` Ekipte toplam **${ekip3}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip3tag}** üye var.
\`>\` Seste toplam **${ekip3ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip3onlineses}** kullanıcı var.
`))
    } else if (["4"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
  **<@&${auth.Ekip.Ekip4}>** Bilgileri;
\`>\` Ekipte toplam **${ekip4}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip4tag}** üye var.
\`>\` Seste toplam **${ekip4ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip4onlineses}** kullanıcı var.
`))
   } else if (["5"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
  **<@&${auth.Ekip.Ekip5}>** Bilgileri;
\`>\` Ekipte toplam **${ekip5}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip5tag}** üye var.
\`>\` Seste toplam **${ekip5ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip5onlineses}** kullanıcı var.
`))
     } else if (["tüm"].includes(args[0])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
**<@&${auth.Ekip.Ekip1}>** Bilgileri;
\`>\` Ekipte toplam **${ekip1}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip1tag}** üye var.
\`>\` Seste toplam **${ekip1ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip1onlineses}** kullanıcı var.

**<@&${auth.Ekip.Ekip2}>** Bilgileri;
\`>\` Ekipte toplam **${ekip2}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip2tag}** üye var.
\`>\` Seste toplam **${ekip2ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip2onlineses}** kullanıcı var.

**<@&${auth.Ekip.Ekip3}>** Bilgileri;
\`>\` Ekipte toplam **${ekip3}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip3tag}** üye var.
\`>\` Seste toplam **${ekip3ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip3onlineses}** kullanıcı var.

**<@&${auth.Ekip.Ekip4}>** Bilgileri;
\`>\` Ekipte toplam **${ekip4}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip4tag}** üye var.
\`>\` Seste toplam **${ekip4ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip4onlineses}** kullanıcı var.

**${auth.Ekip.Ekip5}** Bilgileri;
\`>\` Ekipte toplam **${ekip5}** üye var.
\`>\` Ekipte toplam sunucu tagını almış **${ekip5tag}** üye var.
\`>\` Seste toplam **${ekip5ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip5onlineses}** kullanıcı var.
`))
    };  
}

module.exports.help = {
  name: "ekip",
  alias: []
};
