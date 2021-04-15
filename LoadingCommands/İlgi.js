module.exports.operate = async ({client, msg, author, member, auth}, Discord = require("discord.js")) => {
  if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
    msg.react(client.react("duztik"));
    client.message(`:cookie: ${author} tarafından ${member} adlı **ibibikine** ilgi verildi.`, msg.channel.id, 7500);
  };

  module.exports.help = {
    name: "ilgi",
    alias: ["ilgiver"]
  };