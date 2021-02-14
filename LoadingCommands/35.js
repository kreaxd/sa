module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
if ((!author.roles.cache.some(r => auth.Perms.otuzbes.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
 if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
      member.roles.cache.has(auth.Perms.otuzbes) ? member.roles.remove(auth.Perms.otuzbes) : member.roles.add(auth.Perms.otuzbes);
    msg.react(client.react("duztik"));
 msg.channel.send({embed: {description:`${member} adlı üyede <@&${auth.Perms.otuzbes}> permi için gerekli işlemler yapılmıştır.`}})
};

module.exports.help = {
  name: "35",
  alias: ["otuzbes"]
}; 