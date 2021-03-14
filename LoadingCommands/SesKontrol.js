module.exports.operate = async ({client, msg, args, member, author, auth}) => {
    if (!author.permissions.has("ADMINISTRATOR")) return;
    if (!member) return client.message(client.noMember(msg), msg.channel.id, 5000);
    if (!member.voice.channel) {
      client.message(client.embed(`${client.react("iptal")} | ${member} adlı kullanıcı herhangi bir ses kanalında bulunmuyor.`, msg), msg.channel.id, 6000);
    } else { 
      client.message(client.embed(`${member} adlı kullanıcının bulunduğu sesli kanal: **${member.voice.channel}**\nKulaklık Durumu: **${member.voice.selfDeaf ? "Kulaklığı Kapalı" : "Kulaklığı Açık"}**\nMikrofon Durumu: **${member.voice.selfMute ? "Mikrofonu Kapalı" : "Mikrofunu Açık"}**`, msg), msg.channel.id, 6500)
    };
        client.channels.cache.get(auth.GuildData.Chats.KomutChat).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n**${auth.Reacts.star} ${msg.author.tag}**(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
  };
  
  module.exports.help = {
    name: "n",
    alias: ["skontrol", "kanalkontrol","seskontrol"]
  };