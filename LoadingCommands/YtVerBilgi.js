module.exports.operate = async ({client, msg, args, member ,author, auth}, {MessageEmbed} = require("discord.js")) => {
    if ((!author.roles.cache.some(r => auth.YetkiliAlım.Yetkiler.includes(r.id))) && (!author.hasPermission("MANAGE_ROLES"))) return;
msg.channel.send({embed: { 
color: client.renk[Math.floor(Math.random() * client.renk.length)],
author: { name: msg.member.user.tag, icon_url:  msg.member.user.displayAvatarURL({dynamic:true}) }, 
description: `**Rol Yardım Menüsü**
Öncelikle bir rol vermek istiyorsanız <@&${auth.YetkiliAlım.Yetkiler[0]}> rolüne sahip olmanız gerekiyor. Bu komut sayesinde aşağıdaki rolleri kullanıcılara verebilirsiniz.
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

<@&${auth.YetkiliAlım.BaslangicYetki}>: \`.rise [@Kullanıcı]\` (<@&${auth.YetkiliAlım.AltYetki}>)
<@&${auth.YetkiliAlım.BaslangicYetki2}>: \`.moon [@Kullanıcı]\` (<@&${auth.YetkiliAlım.AltYetki}>)
<@&${auth.YetkiliAlım.BaslangicYetki3}>: \`.shade [@Kullanıcı]\` (<@&${auth.YetkiliAlım.AltYetki}>)
<@&${auth.YetkiliAlım.BaslangicYetki4}>: \`.dreid [@Kullanıcı]\` (<@&${auth.YetkiliAlım.AltYetki}>)
<@&${auth.YetkiliAlım.BaslangicYetki5}>: \`.shadow [@Kullanıcı]\` (<@&${auth.YetkiliAlım.AltYetki}> or (<@&${auth.YetkiliAlım.BotCommands}>))
`,}});
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
};
  
module.exports.help = {
  name: "ytverbilgi",
  alias: []
};
