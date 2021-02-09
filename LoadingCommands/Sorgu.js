module.exports.operate = async ({client, msg, args, auth, author}, Database = require("../Models/Restriction.js")) => { 
  if (!author.hasPermission("ADMINISTRATOR")) return;
  let member = args[0];
  if ((!member) || (isNaN(member))) return client.message(client.embed(`Geçerli bir ceza sayısı giriniz.`, msg), msg.channel.id, 6500);
  let xd = await Database.findOne({CezaID: member})
  if (!xd) return client.message(client.embed(`Bu sayıya ait herhangi bir ceza bilgisi bulunmamaktadır.`, msg), msg.channel.id, 6500);
  msg.channel.send(client.embed(`• Cezayı Alan: <@${xd.userID}> - (\`${xd.userID}\`) 
  • Cezayı Veren: <@${xd.Author}> - (\`${xd.Author}\`)
  • Ceza Sebebi: ${xd.Reason}
  • Ceza Tarihi: ${client.getDate(xd.DateNoW)}
  • Ceza Türü: ${xd.Type}`,msg))
};

module.exports.help = {
  name: "qwe",
  alias: []
}; 

