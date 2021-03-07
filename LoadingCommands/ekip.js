module.exports.operate = async ({client, msg, args, author, auth}, {MessageEmbed} = require("discord.js")) => {
  if ((!author.permissions.has("ADMINISTRATOR"))) return;
    const ekip1 = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip1.Ekip.includes(x.id)))).size || 0;
    const ekip1tag = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip1.includes(x.id))) && (u.user.username.includes(auth.Tags.RealTag))).size || 0;
    const ekip1onlineses = msg.guild.members.cache.filter(u => (u.roles.cache.some(x => auth.Ekip.Ekip1.includes(x.id))) && (u.presence.status !== "offline")).size;
    const ekip1ses = msg.guild.members.cache.filter(c => (c.roles.cache.some(x => auth.Ekip.Ekip1.includes(x.id))) && (c.voice.channel)).size || 0;
  if (!args[1]) {
        msg.channel.send({embed: {title: `Ekip Bilgilendirme;`,description: `Ekip Komutları:\n\n\`.ekip 1\`: <@&${auth.Ekip.Ekip1}>\n\`.ekip 2\`: <@&${auth.Ekip.Ekip2}>\n \`.ekip 3\`: <@&${auth.Ekip.Ekip3}>\n \`.ekip 4\`: <@&${auth.Ekip.Ekip4}>\n \`.ekip 5\`: <@&${auth.Ekip.Ekip5}>`}})
    } else if (["ses"].includes(args[1])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setTitle(`${auth.Ekip.Ekip1} Bilgileri`).setDescription(`
\`>\` Ekipte toplam **${ekip1}** üye var.
\`>\` Ekipte toplam **${ekip1tag}** taglı üye var.
\`>\` Seste toplam **${ekip1ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip1onlineses}** kullanıcı var.
`))
    };

  
}

module.exports.help = {
  name: "ekip",
  alias: []
};
