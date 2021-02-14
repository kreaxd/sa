module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
if ((!author.roles.cache.some(r => auth.YetkiVer.ability.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
 if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
      member.roles.cache.has(auth.YetkiVer.vokal) ? member.roles.remove(auth.YetkiVer.vokal) : member.roles.add(auth.YetkiVer.vokal);
    msg.react(client.react("duztik"));
 msg.channel.send({embed: {description:`${member} adlı üyede <@&${auth.YetkiVer.vokal}> permi için gerekli işlemler yapılmıştır.`}})
  return client.message(client.embed(`${author} adlı yetkili ${member} (\`${member.id}\`) adlı kullanıcıya <@&${auth.YetkiVer.vokal}> permi için gerekli işlemler yapılmıştır.`, msg), auth.YetkiVer.abilitylog)
};

module.exports.help = {
  name: "vokal",
  alias: ['vocal']
}; 