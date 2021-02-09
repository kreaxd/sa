module.exports.operate = async ({client, msg, args}) => {
let member = (msg.mentions.users.first()) || await (await fetch(`https://discord.com/api/users/${args[0]}`, {method:'GET', headers: {'Authorization': 'Bot ' + client.token}})).json() || msg.member
    let avatar = member.avatarURL({ dynamic: true, size: 2048 });
    msg.channel.send({
      embed: {
        author: { name: member.avatar, icon_url: avatar },
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