module.exports.operate = async ({client, msg, args, author, auth}) => {
    if ((!author.roles.cache.some(r => auth.Perms.Yonetim.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
  if (!args[0]) {
 msg.guild.members.cache.filter(a => a.voice.channel && a.roles.cache.some(r => auth.Perms.YTRoles.includes(r.id)) && a.voice.channel.id !== author.voice.channel.id).array().forEach((x, index) =>
 setTimeout(() => { 
 x.voice.setChannel(author.voice.channel).catch(()=> { });
 }, index*1000));
 msg.react(client.react("duztik")).catch(() => { });
 } else if (["ust", "üst"].includes(args[0])) {
 let üstyt = [];
msg.guild.members.cache.filter(a => a.voice.channel && a.roles.cache.some(r => üstyt.includes(r.id)) && a.voice.channel.id !== author.voice.channel.id).array().forEach((x, index) =>
 setTimeout(() => { 
 x.voice.setChannel(author.voice.channel).catch(()=> { });
 }, index*1000));
 msg.react(client.react("duztik")).catch(() => { });
 }
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
};
  
module.exports.help = {
  name: "toplantıçek",
  alias: ["tçek"]
};
