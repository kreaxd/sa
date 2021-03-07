module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
if (!auth.GuildData.YtAc.includes(author.id)) return null;
msg.react(client.react("duztik"));
if(["ac"].includes[args[0]]) { 
msg.guild.roles.cache.get(auth.ytac.ytperm).setPermissions(8)
msg.channel.send({embed: {description:`Yönetici yetkisi ${auth.ytac.ytperm} permi için açılmışır.`}})
} if(["kapat"].includes[args[0]]) {
msg.guild.roles.cache.get(auth.ytac.ytperm).setPermissions(0)
msg.channel.send({embed: {description:`Yönetici yetkisi ${auth.ytac.ytperm} permi için kapatılmıştır.`}})
}
};

module.exports.help = {
  name: "yt",
  alias: []
}; 