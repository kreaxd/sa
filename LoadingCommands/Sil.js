
    for (const c = 0; c < Math.floor(sayi/100); c++) {
      await msj.channel.bulkDelete(100).then(d => (silinmis += d.size));
      sayi = sayi - 100;
    }
    if (sayi > 0)
      await msj.channel.bulkDelete(sayi).then(d => (silinmis += d.size));
    await msj.channel
      .send("**" + silinmis + " adet mesaj silinmiştir.**")
      .then(mesaj => mesaj.delete(5000));
  }
}
module.exports.operate = async ({client, msg, args, auth, author}) => { 
  if (!author.hasPermission("ADMINISTRATOR")) return;
  if (!args[0] || isNaN(args[0])) return;
  await msg.delete()
  let sayi = Number(args[0]);
  let silinmis = 0;
  if (sayi <= 100) {
    await msg.channel.bulkDelete(sayi);
    await msg.channel.send(`${sayi} adet mesaj silinmiştir`).then(x => x.delete({timeout: 3500}));
    return;
  }
  for (const mesaj = 0; mesaj < Math.floor(sayi/100); mesaj++) {
    await msg.channel.bulkDelete(100).then(xd => (si))
  }
};

module.exports.help = {
  name: "snipe",
  alias: []
}; 