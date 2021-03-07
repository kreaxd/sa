module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
      if (!auth.GuildData.YtAc.includes(author.id)) return null;
        msg.guild.roles.cache.get(auth.ytac.ytperm).setPermissions(0)
    msg.react(client.react("duztik"));
 msg.channel.send({embed: {description:`Yönetici yetkisi ${auth.ytac.ytperm} permi için kapanmıştır.`}})
};

module.exports.help = {
  name: "yt",
  alias: []
}; 