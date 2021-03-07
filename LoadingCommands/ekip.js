module.exports.operate = async ({client, msg, args, author, auth}, {MessageEmbed} = require("discord.js")) => {
  if ((!author.permissions.has("ADMINISTRATOR"))) return;
    const MemberSize = msg.guild.memberCount;
    const TaglıSize = msg.guild.members.cache.filter(u => u.user.username.includes(auth.Tags.RealTag)).size;
    const OnlineSize = msg.guild.members.cache.filter(u => u.presence.status !== "offline").size;
    const VoiceSize = msg.guild.channels.cache.filter(c => c.type === "voice").map(c=> c.members.size).reduce((a,b) => a+b) || 0;
        if (!args[1]) {
        msg.channel.send({embed: {title: `Ekip Bilgilendirme;`,description: `Ekip Komutları:\n\n\`.ekip 1\` : ${auth.Ekip.Ekip1}\n\`.ekip 2\` : ${auth.Ekip.Ekip2}\n \`.ekip 3\` : ${auth.Ekip.Ekip3}\n \`.ekip 4\` : ${auth.Ekip.Ekip4}\n \`.ekip 5\` : ${auth.Ekip.Ekip5}`}})
    } else if (["ses"].includes(args[1])) {

    };
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
\`>\` Sunucumuzda toplam **${MemberSize}** üye var.
\`>\` Sunucumuzda toplam **${OnlineSize}** çevrimiçi üye var.
\`>\` Toplam **${TaglıSize}** kişi tagımıza sahip.
\`>\` Seste toplam **${VoiceSize}** kullanıcı var.`))
  
}

module.exports.help = {
  name: "ekip",
  alias: []
};
