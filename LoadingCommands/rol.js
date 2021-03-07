module.exports.operate = async ({client, msg, args, author, auth}) => {
 if ((!author.permissions.has("ADMINISTRATOR"))) return;
 let rol = msg.mentiıns.roles.first() || msg.guild.roles.cache.get[args[0]];
 if (!rol) return msg.channel.send({embed: {description: `Bir Rol Belirtmelisin.`}})
 let listed = Array.from(rol.members.array().map((val, ind) => `\`${ind + 1}\` ${val} - ${val.id}`).values())
 client.message(`${rol} Rolünün bilgileri;\n- Rol Rengi:\`${rol.hexColor}\`\n- Rol ID: ${rol.id}\n- Rol Kişi Sayısı: \`${rol.members.size}\`\n・・・・・・・・・・・・・・・・・・・\n- Roldeki Kişiler:`)
}

module.exports.help = {
  name: "rol",
  alias: ["roluyesırala", "rolüyesırala"]
}