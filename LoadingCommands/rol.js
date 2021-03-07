module.exports.operate = async ({client, msg, args, author, auth}) => {
    if (msg.channel.id !== "816627215017836565") return msg.channel.send("sadece bu kanalda çalışan bir komut <#816627215017836565>");
    if (!author.permissions.has("ADMINISTRATOR")) return;
    let rol = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[0]);
    if (!rol) return msg.channel.send({ embed: { author: { name: msg.guild.name, icon_url: msg.guild.iconURL({ dynamic: true }) }, description: `**Bir rol belirtmelisin.** \`@Rol yada ID\``, color: client.renk[Math.floor(Math.random() * client.renk.length)] } });
      if (!args[1]) {
        let listed = Array.from(rol.members.array().map((val, ind) => `\`${ind + 1}.\` ${val} - (\`${val.id}\`)`).values());
        client.chunkArray(listed, 20).forEach(r => {
          msg.channel.send(`**${rol} Rolünün bilgileri;**\n・Rol Rengi:\`${rol.hexColor}\`\n・Rol ID: ${rol.id}\n・Rol Kişi Sayısı: \`${rol.members.size}\`\n・・・・・・・・・・・・・・・・・・・\n**Roldeki Kişiler:**\n${r.join("\n")}`)
      })
    } else if (["ses"].includes(args[1])) {
        let listed = Array.from(rol.members.array().map((val, ind) => `\`${ind + 1}.\` ${val} - (\`${val.id}\`) - ${val.voice.channel ? `${auth.Reacts.duztik}` : `${auth.Reacts.iptal}\` `).values());
        client.chunkArray(listed, 20).forEach(r => {
            msg.channel.send(`**${rol} Rolünün bilgileri;**\n・Rol Rengi:\`${rol.hexColor}\`\n・Rol ID: ${rol.id}\n・Rol Kişi Sayısı: \`${rol.members.size}\`\n・・・・・・・・・・・・・・・・・・・\n**Roldeki Kişiler:**\n${r.join("\n")}`)
        })
    };
  };
  
  module.exports.help = {
    name: "rol",
    alias: ["ibidibye"]
  };
