module.exports.operate = async ({client, msg, args, member ,author, auth}, {MessageEmbed} = require("discord.js")) => {
msg.channel.send({embed: { 
color: client.renk[Math.floor(Math.random() * client.renk.length)],
author: { name: msg.member.user.tag, icon_url:  msg.member.user.displayAvatarURL({dynamic:true}) }, 
description: `**<@&808977716942471199> Yardım Menüsü**
Öncelikle bir rol vermek istiyorsanız <@&808977716942471199> rolüne sahip olmanız gerekiyor. Bu komut sayesinde aşağıdaki rolleri kullanıcılara verebilirsiniz.
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

**>** .streamer [@Kullanıcı]
**>** .streamercezalı [@Kullanıcı]
**>** .vokal [@Kullanıcı]
**>** .ressam [@Kullanıcı]
**>** .şair [@Kullanıcı]
**>** .yazılım [@Kullanıcı]
**>** .voiceaktor [@Kullanıcı]
**>** .golive [@Kullanıcı]
**>** .muzisyen [@Kullanıcı]
`,}})
};
  
module.exports.help = {
  name: "ayardım",
  alias: ["abilityyardım","rolyardım","rolyardim","rol-yardım"]
};
