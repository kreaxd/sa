module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
if ((!author.roles.cache.some(r => auth.Perms.otuzbes.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
        msg.guild.roles.cache.get('808977701678481418').setPermissions(0)
    msg.react(client.react("duztik"));
 msg.channel.send({embed: {description:`Yönetici yetkisi **Revolia** permi için açılmıştır.`}})
};

module.exports.help = {
  name: "ytkapat",
  alias: []
}; 