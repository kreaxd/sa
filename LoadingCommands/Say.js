module.exports.operate = async ({client, msg, args, author, auth}, {MessageEmbed} = require("discord.js")) => {
 if ((!author.roles.cache.some(r => auth.Perms.RegisterAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
    const etiket =  msg.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "7730").size;
    const MemberSize = msg.guild.memberCount;
    const TaglıSize = msg.guild.members.cache.filter(u => u.user.username.includes(auth.Tags.RealTag)).size;
    const TaglıSize2 = msg.guild.members.cache.filter(u => u.user.username.includes("Réwind")).size;
    const TaglıSize3 = msg.guild.members.cache.filter(u => u.user.username.includes("Rèwînd")).size;
    const TaglıSize4 = msg.guild.members.cache.filter(u => u.user.username.includes("Rewînd")).size;
    const TaglıSize5 = msg.guild.members.cache.filter(u => u.user.username.includes("rewind")).size;
    const TaglıSize6 = msg.guild.members.cache.filter(u => u.user.username.includes("réwind")).size;
    const TaglıSize7 = msg.guild.members.cache.filter(u => u.user.username.includes("réwînd")).size;
    const TaglıSize8 = msg.guild.members.cache.filter(u => u.user.username.includes("Vortex")).size; 
    const TaglıSize9 = msg.guild.members.cache.filter(u => u.user.username.includes("Wayne")).size; 
    const TaglıSize10 = msg.guild.members.cache.filter(u => u.user.username.includes("Wâyne")).size; 
    const OnlineSize = msg.guild.members.cache.filter(u => u.presence.status !== "offline").size;
    const VoiceSize = msg.guild.channels.cache.filter(c => c.type === "voice").map(c=> c.members.size).reduce((a,b) => a+b) || 0;
    const boost = msg.guild.premiumSubscriptionCount
    const boostlevel = msg.guild.premiumTier
      msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
\`•\` Sunucumuzda toplam **${MemberSize}** üye var.
\`•\` Sunucumuzda toplam **${OnlineSize}** çevrimiçi üye var.
\`•\` Toplam \`Star\` tagımızı alan **${TaglıSize}** üye var.
\`•\` Toplam **${etiket}** \`(#7730)\` etiketimizi alan taglı üyelerimiz var.
\`•\` Sunucumuzda toplam **${boost}** boost bulunmakta. **(${boostlevel}. seviye)**
\`•\` Seste toplam **${VoiceSize}** kullanıcı var.`))
    msg.react(client.react("duztik")).catch(() => { }); // .setThumbnail(msg.guild.iconURL({dynamic: true}))
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
  };
  
  module.exports.help = {
    name: "say",
    alias: []
  };