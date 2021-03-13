module.exports.operate = async ({client, msg, args, author, auth}, Discord = require("discord.js"), Database = require("../Models/Member.js")) => {
    let list = client.commands
      .filter((x) => x.conf.help)
      .sort((a, b) => b.conf.help - a.conf.help)
      .map((x) => `\`${auth.GuildData.Prefixes}${x.conf.help}\``)
      .join("\n");

    client.message(client.embed.setAuthor("ibidicofteey").setDescription(list));
};

module.exports.help = {
  name: "yardım",
  alias: []
}; 