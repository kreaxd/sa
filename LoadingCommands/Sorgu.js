module.exports.operate = async ({client, msg, args, auth, author}, Database = require("../Models/Restriction.js")) => { 
    if (!author.hasPermission("ADMINISTRATOR")) return;
  let member = args[0];
  let text;
  if ((!member) || (isNaN(member))) return client.message(client.embed(`Geçerli bir ceza sayısı giriniz.`, msg), msg.channel.id, 6500);
  let xd = await Database.findOne({CezaID: member})
  if (!xd) return client.message(client.embed(`${client.react("iptal")} | Bu sayıya ait herhangi bir ceza bilgisi bulunmamaktadır.`, msg), msg.channel.id, 6500);
  if (["MUTE", "VOICEMUTE"].includes(xd.Type)) {
    text = `• Cezayı Alan: <@${xd.userID}> - (\`${xd.userID}\`) 
• Cezayı Veren: <@${xd.Author}> - (\`${xd.Author}\`)
• Ceza Sebebi: ${xd.Reason}
• Ceza Tarihi: ${client.toDate(xd.DateNoW)}
• Ceza Bitiş Tarihi: ${client.toDate(xd.FinishDate)}
• Ceza Türü: ${xd.Type}`
  } else { 
  text = `• Cezayı Alan: <@${xd.userID}> - (\`${xd.userID}\`) 
• Cezayı Veren: <@${xd.Author}> - (\`${xd.Author}\`)
• Ceza Sebebi: ${xd.Reason}
• Ceza Tarihi: ${client.toDate(xd.DateNoW)}
• Ceza Türü: ${xd.Type}`
  }
  msg.channel.send(client.embed(text, msg))
        client.channels.cache.get(auth.GuildData.Chats.KomutChat).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n**${auth.Reacts.star} ${msg.author.tag}**(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
};

module.exports.help = {
  name: "sorgu",
  alias: ['cezasorgu','cezaid']
}; 

