module.exports.operate = async ({client, msg, args, member ,author, auth}, {MessageEmbed} = require("discord.js")) => { 
        if(!msg.member.hasPermission("ADMINISTRATOR")) return
        const embed = new MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL({dynamic: true}))
        .setColor("RANDOM")
        .setDescription(`${this.client.commands.map(x => `- \`\`${x.help.name}\`\``).join("\n")}`)
        msg.channel.send(embed)
    }

module.exports.help = {
  name: "yardım",
alias: []
};
