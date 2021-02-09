module.exports.operate = async ({client, msg, args}, fetch = require("node-fetch")) => {
let member = (msg.mentions.users.first()) || (await client.users.fetch(args[0]));   
let avatar = member.avatarURL({ dynamic: true, size: 2048 });
    msg.channel.send({
      embed: {
        author: { name: member.tag, icon_url: avatar },
        description: `[Resim Adresi](${avatar})`,
        footer: {
          text: `${msg.member.displayName} tarafından istendi.`,
          icon_url: msg.author.avatarURL({ dynamic: true })
        },
        image: { url: avatar },
        timestamp: new Date(),
        color: client.renk[Math.floor(Math.random() * client.renk.length)]
      }
    });
  };
  
  module.exports.help = {
    name: "avatar",
    alias: ["gif", "pp"]
  };