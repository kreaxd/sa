module.exports.operate = async ({client, msg, args}, fetch = require("node-fetch")) => {
let member = (msg.mentions.users.first()) || await (await fetch(`https://discord.com/api/users/${args[0]}`, {method:'GET', headers: {'Authorization': 'Bot ' + client.token}})).json();
if ((!member) || (Object.keys(member).length == 1)) return client.message(client.noMember(msg), msg.channel.id, 6500);
let avatar = https://cdn.discordapp.com/avatars/644092051838861322/a_0741bd3e21caa3795efb2fdae6c7cc52.gif?size=4096&width=521&height=521
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