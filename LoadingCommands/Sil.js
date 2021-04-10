module.exports.operate = async ({client, msg, args, auth, author}) => { 
  if (!author.roles.cache.some(r => auth.Perms.Sil.includes(r.id)) && !author.hasPermission("ADMINISTRATOR")) return;
  if (!args[0] || isNaN(args[0])) return;
  await msg.delete()
  let sayi = Number(args[0]);
  let silinmis = 0;
  if (sayi <= 100) {
    await msg.channel.bulkDelete(sayi);
    await msg.channel.send(`${sayi} adet mesaj silinmiştir`).then(x => x.delete({timeout: 3500})).catch(() => { });
    return;
  }
  for (let mesaj = 0; mesaj < Math.floor(sayi/100); mesaj++) {
    await msg.channel.bulkDelete(100).then(xd => (silinmis += xd.size));
    sayi = sayi - 100;
  }
  if (sayi > 0)
    await msg.channel.bulkDelete(sayi).then(xd => (silinmis += xd.size));
        await msg.channel.send(`${silinmis} adet mesaj silinmiştir`).then(x => x.delete({timeout: 3500})).catch(() => { });
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
};

module.exports.help = {
  name: "sil",
  alias: ["temizle", "clear"]
}; 