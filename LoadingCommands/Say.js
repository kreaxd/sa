module.exports.operate = async ({client, msg, args, author, auth}, {MessageEmbed} = require("discord.js")) => {
 if ((!author.roles.cache.some(r => auth.Perms.RegisterAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
            var etiket =  msg.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "1485").size;
    const MemberSize = msg.guild.memberCount;
    const TaglıSize = msg.guild.members.cache.filter(u => u.user.username.includes(auth.Tags.RealTag)).size;
    const OnlineSize = msg.guild.members.cache.filter(u => u.presence.status !== "offline").size;
    const VoiceSize = msg.guild.channels.cache.filter(c => c.type === "voice").map(c=> c.members.size).reduce((a,b) => a+b) || 0;
    const boost = msg.guild.premiumSubscriptionCount
    const boostlevel = msg.guild.premiumTier
      msg.channel.send(new MessageEmbed().setColor(client.renk[Math.floor(Math.random() * client.renk.length)]).setDescription(`
\`•\` Sunucumuzda toplam **${MemberSize}** üye var.
\`•\` Sunucumuzda toplam **${OnlineSize}** çevrimiçi üye var.
\`•\` Toplam **${TaglıSize}** kişi tagımıza sahip.
\`•\` Toplam **${etiket}** \`(Rewind#1845)\`[<@&823593190434799677>] kişi etiketimize sahip.
\`•\` Sunucumuzda toplam **${boost}** boost bulunmakta. **(${boostlevel}. seviye)**
\`•\` Seste toplam **${VoiceSize}** kullanıcı var.`))
    msg.react(client.react("duztik")).catch(() => { }); // .setThumbnail(msg.guild.iconURL({dynamic: true}))
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
  };
  
  module.exports.help = {
    name: "say",
    alias: []
  };
