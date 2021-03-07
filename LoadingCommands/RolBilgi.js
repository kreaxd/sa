module.exports.operate = async ({client, msg, args, author, auth}, Discord = require("discord.js"), moment = require("moment")) => {
    if (msg.channel.id !== "816627215017836565") return msg.channel.send("sadece bu kanalda çalışan bir komut <#816627215017836565>");
    if (!author.permissions.has("ADMINISTRATOR")) return;
    let rol = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[0]);
    if (!rol) return msg.channel.send({ embed: { author: { name: msg.guild.name, icon_url: msg.guild.iconURL({ dynamic: true }) }, description: `**Bir rol belirtmelisin.** \`@Rol yada ID\``, color: client.renk[Math.floor(Math.random() * client.renk.length)] } });
      if (!args[1]) {
      let listed = Array.from(rol.members.array().map((val, ind) => `\`${ind + 1}.\` ${val} - (\`${val.id}\`)`).values());
      if (rol.members.size < 1) return msg.channel.send(`**${rol} Rolünün ses bilgileri;**\n・Rolün rengi:\`${rol.hexColor}\`\n・Rol ID: ${rol.id}\n・Roldeki kişi sayısı: \`${rol.members.size}\`\n・Rolün oluşturulma tarihi: ${moment(rol.createdAt).format('D MMMM YYYY')}\n・・・・・・・・・・・・・・・・・・・\n**Roldeki kişiler:**\n\`Bu rolde hiç bir kullanıı bulunmuyor!\``)
      client.chunkArray(listed, 20).forEach(r => {
      msg.channel.send(`**${rol} Rolünün bilgileri;**\n・Rolün rengi:\`${rol.hexColor}\`\n・Rol ID: ${rol.id}\n・Roldeki kişi sayısı: \`${rol.members.size}\`\n・Rolün oluşturulma tarihi: ${moment(rol.createdAt).format('D MMMM YYYY')}\n・・・・・・・・・・・・・・・・・・・\n**Roldeki kişiler:**\n${r.join("\n")}`)
        })
    } else if (["ses"].includes(args[1])) {
      let listed = Array.from(rol.members.array().map((val, ind) => `\`${ind + 1}.\` ${val} - \`${val.voice.channel ? `✅` : `❌`}\``).values());
      if (rol.members.size < 1) return msg.channel.send(`**${rol} Rolünün ses bilgileri;**\n・Rolün rengi:\`${rol.hexColor}\`\n・Rol ID: ${rol.id}\n・Roldeki kişi sayısı: \`${rol.members.size}\`\n・Rolün oluşturulma tarihi: ${moment(rol.createdAt).format('D MMMM YYYY')}\n・・・・・・・・・・・・・・・・・・・\n**Roldeki kişiler:**\n\`Bu rolde hiç bir kullanıı bulunmuyor!\``)
      client.chunkArray(listed, 20).forEach(r => {
      msg.channel.send(`**${rol} Rolünün ses bilgileri;**\n・Rolün rengi:\`${rol.hexColor}\`\n・Rol ID: ${rol.id}\n・Roldeki kişi sayısı: \`${rol.members.size}\`\n・Rolün oluşturulma tarihi: ${moment(rol.createdAt).format('D MMMM YYYY')}\n・・・・・・・・・・・・・・・・・・・\n**Roldeki kişiler:**\n${r.join("\n")}`)
        });
    };
  };
  
  module.exports.help = {
    name: "rol",
    alias: ["ibidibye"]
  };
