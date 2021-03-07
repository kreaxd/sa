module.exports.operate = async ({client, msg, args, author, auth}, {MessageEmbed} = require("discord.js")) => {
  if ((!author.permissions.has("ADMINISTRATOR"))) return;
    const ekip1 = msg.guild.members.cache.filter(x => x.roles.cache.has(auth.Ekip.Ekip1)).size;
    const ekip2 = msg.guild.members.cache.filter(x => x.roles.cache.has(auth.Ekip.Ekip2)).size;
    const ekip3 = msg.guild.members.cache.filter(x => x.roles.cache.has(auth.Ekip.Ekip3)).size;
    const ekip4 = msg.guild.members.cache.filter(x => x.roles.cache.has(auth.Ekip.Ekip4)).size;
    const ekip5 = msg.guild.members.cache.filter(x => x.roles.cache.has(auth.Ekip.Ekip5)).size;
  
    const ekip1ses = msg.guild.channels.cache.filter(c => c.type === "voice").map(k => {ekip1ses += k.members.size}).includes(auth.Ekip.Ekip1).size;
    const ekip2ses = msg.guild.channels.cache.filter(c => c.type === "voice").map(k => {ekip2ses += k.members.size}).includes(auth.Ekip.Ekip1).size;
    const ekip3ses = msg.guild.channels.cache.filter(c => c.type === "voice").map(k => {ekip3ses += k.members.size}).includes(auth.Ekip.Ekip1).size;
    const ekip4ses = msg.guild.channels.cache.filter(c => c.type === "voice").map(k => {ekip4ses += k.members.size}).includes(auth.Ekip.Ekip1).size;
    const ekip5ses = msg.guild.channels.cache.filter(c => c.type === "voice").map(k => {ekip5ses += k.members.size}).includes(auth.Ekip.Ekip1).size;
  
    let ekip1onlineses = msg.guild.members.cache.filter(u => { return (u.roles.cache.some(r => auth.Ekip.Ekip1.includes(r.id)) && !u.voice.channel && u.presence.status !== "offline")});
    let ekip2onlineses = msg.guild.members.cache.filter(u => { return (u.roles.cache.some(r => auth.Ekip.Ekip2.includes(r.id)) && !u.voice.channel && u.presence.status !== "offline")});
    let ekip3onlineses = msg.guild.members.cache.filter(u => { return (u.roles.cache.some(r => auth.Ekip.Ekip3.includes(r.id)) && !u.voice.channel && u.presence.status !== "offline")});
    let ekip4onlineses = msg.guild.members.cache.filter(u => { return (u.roles.cache.some(r => auth.Ekip.Ekip4.includes(r.id)) && !u.voice.channel && u.presence.status !== "offline")});
    let ekip5onlineses = msg.guild.members.cache.filter(u => { return (u.roles.cache.some(r => auth.Ekip.Ekip5.includes(r.id)) && !u.voice.channel && u.presence.status !== "offline")});
  
    const ekip1online = msg.guild.members.cache.filter(u => u.presence.status !== "offline").includes(auth.Ekip.Ekip1).size;
    const ekip2online = msg.guild.members.cache.filter(u => u.presence.status !== "offline").includes(auth.Ekip.Ekip2).size;
    const ekip3online = msg.guild.members.cache.filter(u => u.presence.status !== "offline").includes(auth.Ekip.Ekip3).size;
    const ekip4online = msg.guild.members.cache.filter(u => u.presence.status !== "offline").includes(auth.Ekip.Ekip4).size;
    const ekip5online = msg.guild.members.cache.filter(u => u.presence.status !== "offline").includes(auth.Ekip.Ekip5).size;
    const VoiceSize = msg.guild.channels.cache.filter(c => c.type === "voice").map(c=> c.members.size).reduce((a,b) => a+b) || 0;
        if (!args[1]) {
        msg.channel.send({embed: {title: `Ekip Bilgilendirme;`,description: `Ekip Komutları:\n\n\`.ekip 1\` : ${auth.Ekip.Ekip1}\n\`.ekip 2\` : ${auth.Ekip.Ekip2}\n \`.ekip 3\` : ${auth.Ekip.Ekip3}\n \`.ekip 4\` : ${auth.Ekip.Ekip4}\n \`.ekip 5\` : ${auth.Ekip.Ekip5}`}})
    } else if (["ekip1"].includes(args[1])) {
  msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setTitle(`${auth.Ekip.Ekip1} Bilgileri`).setDescription(`
\`>\` Ekipte toplam **${ekip1}** üye var.
\`>\` Ekipte toplam **${ekip1online}** çevrimiçi üye var.
\`>\` Seste toplam **${ekip1ses}** kullanıcı var.
\`>\` Aktif olup seste olmayan **${ekip1onlineses}** kullanıcı var.
`))
    };

  
}

module.exports.help = {
  name: "ekip",
  alias: []
};
