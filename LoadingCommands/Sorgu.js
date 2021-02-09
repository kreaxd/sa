module.exports.operate = async ({client, msg, args, auth, author}, Database = require("../Models/Restriction.js")) => { 
  if (!author.hasPermission("ADMINISTRATOR")) return;
  let member = args[0];
  if ((!member) || (isNaN(member))) return client.message(client.embed(`Geçerli bir ceza sayısı giriniz.`, msg), msg.channel.id, 6500);
  let xd = await Database.findOne({CezaID: member})
  if (!xd) return client.message(client.embed(`Bu `, msg), msg.channel.id, 6500);
};

module.exports.help = {
  name: "snipe",
  alias: []
}; 