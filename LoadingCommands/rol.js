module.exports.operate = async ({client, msg, args, author, auth}, Database = require("../Models/Member.js")) => {
 if ((!author.permissions.has("ADMINISTRATOR"))) return;
 let rol = msg.mentiıns.roles.first() || msg.guild.roles.cache.get[args[0]];
 if (!rol) return msg.channel.send({embed: {description: `Bir Rol Belirtmelisin.`}})
 let listed = Array.from(rol.members.array)
  client.mesage("")
}

module.exports.help = {
  name: "rol",
  alias: ["roluyesırala", "rolüyesırala"]
}