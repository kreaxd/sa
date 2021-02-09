module.exports.operate = ({client, msg, args, member, author}) => {
    if (!author.permissions.has("ADMINISTRATOR")) return;
    if (!member) return client.message(client.noMember(msg), msg.channel.id, 5000);
    if (!member.voice.channel) {
      client.message(client.embed(`${member} adlı kullanıcı herhangi bir ses kanalında bulunmuyor.`, msg), msg.channel.id, 6000);
    } else { 
      client.message(client.embed(`${member} adlı kullanıcının bulunduğu sesli kanal: **${member.voice.channel}**\nKulaklık Durumu: **${member.voice.selfDeaf ? "Kulaklığı Kapalı" : "Kulaklığı Açık"}**\nMikrofon Durumu: **${member.voice.selfMute ? "Mikrofonu Kapalı" : "Mikrofunu Açık"}**`, msg), msg.channel.id, 6500)
    };
  };
  
  module.exports.help = {
    name: "n",
    alias: ["skontrol", "kanalkontrol","seskontrol"]
  };