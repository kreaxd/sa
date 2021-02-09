module.exports.operate = async ({client, msg, args,auth, author}) => {
    if (!author.permissions.has("ADMINISTRATOR")) return;
    let rolsuz = msg.guild.members.cache.filter(m => (m.roles.cache.size) == 1)
    if(args[0] == "ver") {
        rolsuz.forEach(r => {
        r.roles.add(auth.Perms.Unregister).catch(() => { });
        })
    msg.channel.send({embed: {description: "Sunucuda rolü olmayan "+ rolsuz.size +" kişiye kayıtsız rolü verdim."}})
} else if(!args[0]) {
    msg.channel.send({embed: {description: "Sunucuda rolü olmayan "+ rolsuz.size +" kişi bulunuyor. Bu kişilere kayıtsız rolü vermek için __[.rolsüz ver]__ komudunu uygulayın."}})
}
}
    
  module.exports.help = {
    name: "rolsuz",
    alias: ["rolsuz", "rolsuzler"]
  };


 