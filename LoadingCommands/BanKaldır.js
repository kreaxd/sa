module.exports.operate = async ({client, msg, args,auth, author}, fetch = require('node-fetch'), { GuildMember } = require("discord.js"), Database = require("../Models/Restriction.js"), Schema = require("../Models/Member.js")) => {
    if ((!author.roles.cache.some(r => auth.Perms.BanAuth.includes(r.id))) & (!author.permissions.has("ADMINISTRATOR"))) return;
  if (!args[0]) return msj.reply(`Bir ID girmen gerekiyor. \`\`\`.unban 753643972974477344\`\`\``)
let member = await (await fetch(`https://discord.com/api/users/${args[0]}`, {method:'GET', headers: {'Authorization': 'Bot ' + client.token}})).json();
if ((!member) || (Object.keys(member).length == 1)) { client.message(client.noMember(msg), msg.channel.id, 6500);
} else {
  let sebep = args.slice(1).join(" ") || "Sebep girilmedi";
  msg.guild.members.unban(member.id).catch()
}

  
};
    
  module.exports.help = {
    name: "unban",
    alias: []
  };
 

    
    msj.guild
      .fetchBan(args[0])
      .then(({ user, reason }) => {
        msj.guild.unban(user.id, `${msj.author.tag} tarafından banı açıldı.`);
        msj.channel
          .send(user.tag + " adlı kullanıcının yasağı kaldırıldı.")
          .then(sikis => sikis.delete(5000));
        msj.guild.channels
          .get(cfg.chats.banLog)
          .send(
            client.banembed(
              `**${user.tag}** Adlı üyenin banı kaldırıldı. \n\n**Banı kaldıran kişi: <@${msj.author.id}>**\n`
            )
          );
      })
      .catch(qwe => {
        msj.channel.send("**Hata**: " + qwe.message);
      });
      msj.react("✅");

  }
}

module.exports = unBan;
