module.exports.operate = async ({client, msg, args, member, author, auth}) => {
      let kanal = member.voice.channel
    if (!member) return client.message(client.noMember(msg), msg.channel.id, 5000);
  let sestekiler = msg.guild.channels.cache.get(kanal.id).members.map(x => x.user).join(", ")
  if (!sestekiler) {
          client.message(client.embed(`${client.react("iptal")} | ${member} adlı kullanıcı herhangi bir ses kanalında bulunmuyor.`, msg), msg.channel.id, 6000);

  }
    if (!member.voice.channel) {
      client.message(client.embed(`${client.react("iptal")} | ${member} adlı kullanıcı herhangi bir ses kanalında bulunmuyor.`, msg), msg.channel.id, 6000);
    } else { 
      kanal.createInvite().then(invite =>
      client.message(client.embed(`${member} adlı kullanıcının bulunduğu sesli kanal: **${member.voice.channel}**\nKulaklık Durumu: **${member.voice.selfDeaf ? "Kulaklığı Kapalı" : "Kulaklığı Açık"}**\nMikrofon Durumu: **${member.voice.selfMute ? "Mikrofonu Kapalı" : "Mikrofunu Açık"}**\n\`•\` Odadaki kişiler; ${sestekiler}\nKanala gitmek için [▶️](https://discord.gg/${invite.code}) yeterli.`, msg), msg.channel.id, 10000))
    };
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
  };
  
  module.exports.help = {
    name: "n",
    alias: ["skontrol", "kanalkontrol","seskontrol"]
  };