const snipe = require("../schemas/snipe");
const moment = require("moment");
require("moment-duration-format");
const { MessageEmbed } = require("discord.js");

module.exports.operate = async ({client, msg, args, auth, author}) => { 
  if (!author.hasPermission("MANAGE_ROLES")) return;
    msg.react(client.react("duztik"));
  msg.channel.send({embed: {title: `En son silinen mesaj bilgisi:`, description: `Silen Kişi: <@${client.snipe[msg.channel.id].atan}>\n Silinen Mesaj: \`${client.snipe[msg.channel.id].content}\`\nSilindiği Zaman: \`${client.snipe[msg.channel.id].tarih} \``, author: {name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true})}, color:client.renk[Math.floor(Math.random()*client.renk.length)]}});
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
};
    const data = await snipe.findOne({ guildID: message.guild.id, channelID: message.channel.id });
    if (!data) return message.channel.error(message, "Bu kanalda silinmiş bir mesaj bulunmuyor!");
    const author = await client.fetchUser(data.author);
    embed.setDescription(`${data.messageContent ? `\n\`Mesaj içeriği:\` ${data.messageContent}` : ""}
\`Mesajın yazılma tarihi:\` ${moment.duration(Date.now() - data.createdDate).format("D [gün], H [saat], m [dakika], s [saniye]")} önce
\`Mesajın silinme tarihi:\` ${moment.duration(Date.now() - data.deletedDate).format("D [gün], H [saat], m [dakika], s [saniye]")} önce
    `);
    if (author) embed.setAuthor(author.tag, author.avatarURL({ dynamic: true, size: 2048 }));
    if (data.image) embed.setImage(data.image);
    message.channel.send(embed);
  },
};
module.exports.help = {
  name: "snipee",
  alias: []
}; 