module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
if ((!author.permissions.has("ADMINISTRATOR"))) return;
 if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
      member.roles.cache.has(auth.Perms.ibidi) ? member.roles.remove(auth.Perms.ibidi) : member.roles.add(auth.Perms.ibidi);
    msg.react(client.react("duztik"));
 msg.channel.send({embed: {description:`${member} adlı üyede <@&${auth.Perms.ibidi}> permi için gerekli işlemler yapılmıştır.`}})
};

module.exports.help = {
  name: "ibidi",
  alias: ["ibiş"]
}; 