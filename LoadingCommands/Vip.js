module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
if ((!author.permissions.has("ADMINISTRATOR"))) return;
  if (!member) return client.message(client.uyeEmbed(msg), msg.channel.id, 5500);
      member.roles.cache.has(auth.Perms.Vip) ? member.roles.remove(auth.Perms.Vip) : member.roles.add(auth.Perms.Vip);
    msg.react(client.react("duztik"));
 msg.channel.send({embed: {description:`${member} adlı üyede <@&${auth.Perms.Vip}> permi için gerekli işlemler yapılmıştır.`}})
};

module.exports.help = {
  name: "vip",
  alias: ["elite"]
}; 