module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
      if (!auth.GuildData.YtAc.includes(author.id)) return null;
        msg.guild.roles.cache.get(auth.ytac.ytperm).setPermissions(8)
    msg.react(client.react("duztik"));
 msg.channel.send({embed: {description:`Yönetici yetkisi ${auth.ytac.ytperm} permi için açılmıştır.`}})
};

module.exports.help = {
  name: "ytaç",
  alias: []
}; 