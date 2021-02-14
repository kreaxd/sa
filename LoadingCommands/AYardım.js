module.exports.operate = async ({client, msg, args, member ,author, auth}, {MessageEmbed} = require("discord.js")) => {
msg.channel.send({embed: { 
color: client.renk[Math.floor(Math.random() * client.renk.length)],
author: { name: msg.member.user.tag, icon_url:  msg.member.user.displayAvatarURL({dynamic:true}) }, 
description: `**<@&${auth.YetkiVer.ability}> Yardım Menüsü**
Öncelikle bir rol vermek istiyorsanız <@&${auth.YetkiVer.ability}> rolüne sahip olmanız gerekiyor. Bu komut sayesinde aşağıdaki rolleri kullanıcılara verebilirsiniz.
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

<@&${auth.YetkiVer.streamer}>: \`.streamer [@Kullanıcı]\`
<@&${auth.YetkiVer.streamercezali}>: \`.streamercezalı [@Kullanıcı]\`
<@&${auth.YetkiVer.vokal}>: \`.vokal [@Kullanıcı]\`
<@&${auth.YetkiVer.ressam}>: \`.ressam [@Kullanıcı]\`
<@&${auth.YetkiVer.şair}>: \`.şair [@Kullanıcı]\`
<@&${auth.YetkiVer.yazilim}>: \`.yazılım [@Kullanıcı]\`
<@&${auth.YetkiVer.voiceactor}>: \`.voiceaktor [@Kullanıcı]\`
<@&${auth.YetkiVer.golive}>: \`.golive [@Kullanıcı]\`
<@&${auth.YetkiVer.muzisyen}>: \`.müzisyen [@Kullanıcı]\`
`,}})
};
  
module.exports.help = {
  name: "ayardım",
  alias: ["abilityyardım","rolyardım","rolyardim","rol-yardım"]
};
