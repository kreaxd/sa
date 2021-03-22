module.exports.operate = async ({client, msg, author, member, auth}, Discord = require("discord.js")) => {
    if ((!author.roles.cache.some(r => auth.YetkiVer.YetkiliAlım.includes(r.id))) && (!author.hasPermission("MANAGE_ROLES"))) return;
  if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
    await member.roles.add(auth.YetkiVer.yetkiver1);
    await member.roles.add(auth.YetkiVer.yetkiver11);
    msg.react(client.react("duztik"));
    await msg.channel.send(`${member}** adlı üye başarıyla Deneme Yetkisi rolü verilmiştir.**`);
     client.message({embed: { 
      author: { name: msg.member.user.tag, icon_url:  msg.member.user.displayAvatarURL({dynamic:true}) }, 
      description: `${author} yetkili tarafından ${member} adlı üyeye başarıyla **Deneme Yetkisi** rolü verilmiştir.`,
      color: client.renk[Math.floor(Math.random() * client.renk.length)]}}, auth.Logs.yetkiliLog); 
      await msg.channel.send(`${member} adlı kullanıcı aramıza katılmıştır. `, auth.Logs.yetkilichat);
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
  };

  module.exports.help = {
    name: "yetkiver",
    alias: ["yetkiver1"]
  };