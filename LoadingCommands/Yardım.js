module.exports.operate = async ({client, msg, args, member ,author, auth}, {MessageEmbed} = require("discord.js")) => { 
  run: async (client, message, args, embed, prefix) => {
    message.channel.send(client.commands.filter((x) => x.conf.help).sort((a, b) => b.conf.help - a.conf.help).map((x) => `\`${prefix}${x.conf.help}\``).join("\n"));
  }
};
  
module.exports.help = {
  name: "yardım",
alias: []
};
