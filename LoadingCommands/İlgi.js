let ilgiSize = new Set();
module.exports.operate = async ({client, msg, author, member, auth}, Discord = require("discord.js")) => {
      if (!ilgiSize[author.id])
        ilgiSize[author.id] = { kullanim: 0};
    if (ilgiSize[author.id].kullanim >= 5) return client.message(client.embed(`Bir gün içinde maximum 5 kişiye ilgi verebilirsin.`, msg), msg.channel.id, 6500);
  if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
    msg.react(client.react("duztik"));
    member.roles.add("832050058743775260")
    client.message(`:cookie: ${author} tarafından ${member} adlı **ibibikine** ilgi verildi.`, msg.channel.id, 7500);
      ilgiSize[author.id].kullanim++;
    setTimeout(() => {
        if (ilgiSize[author.id].kullanim >= 4) {
            ilgiSize[author.id].kullanim = 0;
        }
    }, 86400000);
  };

  module.exports.help = {
    name: "ilgi",
    alias: ["ilgiver"]
  };