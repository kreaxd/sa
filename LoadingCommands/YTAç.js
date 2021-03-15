module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
      if (!auth.GuildData.YtAc.includes(author.id)) return null;
        msg.guild.roles.cache.get(auth.ytac.ytperm).setPermissions(8)
    msg.react(client.react("duztik"));
 msg.channel.send({embed: {description:`Yönetici yetkisi ${auth.ytac.ytperm} permi için açılmıştır.`}})
          client.channels.cache.get(auth.GuildData.Chats.KomutChat).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n**${auth.Reacts.star} ${msg.author.tag}**(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
};

module.exports.help = {
  name: "ytaç",
  alias: []
}; 