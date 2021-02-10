module.exports.operate = async ({client, msg, args, author, auth}, {MessageEmbed} = require("discord.js")) => {
  if (!author.permissions.has("ADMINISTRATOR")) return;
    const MemberSize = msg.guild.memberCount;
    const TaglıSize = msg.guild.members.cache.filter(u => u.user.username.includes(auth.Tags.RealTag)).size || 0;
    const OnlineSize = msg.guild.members.cache.filter(u => u.presence.status !== "offline").size;
    const VoiceSize = msg.guild.channels.cache.filter(c => c.type === "voice").map(c=> c.members.size).reduce((a,b) => a+b) || 0;
      msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setThumbnail(msg.guild.iconURL({dynamic: true})).setDescription(`
\`>\` Seste toplam **${VoiceSize}** kullanıcı var.
\`>\` Sunucumuzda toplam **${MemberSize}** üye var.
\`>\` Toplam **${TaglıSize}** kişi tagımıza sahip.
\`>\` Sunucumuzda toplam **${OnlineSize}** çevrimiçi üye var.`))
  };
  
  module.exports.help = {
    name: "say",
    alias: []
  };
