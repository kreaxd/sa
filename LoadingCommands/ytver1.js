module.exports.operate = async ({client, msg, author, uye, auth}, Discord = require("discord.js")) => {
    if ((!author.roles.cache.some(r => auth.YetkiVer.YetkiliAlım.includes(r.id))) && (!author.hasPermission("MANAGE_ROLES"))) retur
    if (!uye) return client.message(client.uyeEmbed(msg), msg.channel.id, 5500);
    await uye.roles.add(auth.YetkiVer.yetkiver1);
    await uye.roles.add(auth.YetkiVer.yetkiver11);
    msg.react(client.react("duztik"));
    await msg.channel.send(`${uye}** adlı üye başarıyla Deneme Yetkisi rolü verilmiştir.**`)
  };

  module.exports.help = {
    name: "yetkiver",
    alias: ["yetkiver1"]
  };