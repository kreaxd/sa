module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
      if (!auth.GuildData.YtAc.includes(author.id)) return null;
        msg.guild.roles.cache.get('808977701678481418').setPermissions(8)
    msg.react(client.react("duztik"));
 msg.channel.send({embed: {description:`Yönetici yetkisi **Revolia** permi için açılmıştır.`}})
};

module.exports.help = {
  name: "ytaç",
  alias: []
}; 