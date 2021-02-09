module.exports.operate = async ({client, msg, args, author, auth}, Database = require("../Models/Member.js")) => {
  if (!author.permissions.has("MANAGE_ROLES")) return;
  Database.find({SunucuID: msg.guild.id}, async (err, res) => {
    let listed = res.filter(x => ((x.Authorized.Woman + x.Authorized.Man) !== 0) && (msg.guild.members.cache.get(x.userID)) && ((msg.guild.members.cache.get(x.userID).permissions.has("ADMINISTRATOR")) || (msg.guild.members.cache.get(x.userID).roles.cache.some(x => auth.Perms.YTRoles.includes(x.id))))).sort((x, y) => (y.Authorized.Man + y.Authorized.Woman) - (y.teyitci.erkek + y.teyitci.kız));
    if (!listed.length) return client.message(client.embed(`**Sunucuda her hangi bir kayıt bulunamamaktadır.**`, msg), msg.channel.id, 5000);
    let currentPage = 1;
    let pageLimit = 20;
    let pages = listed.chunk(pageLimit);
    msg.channel.send({embed:{title: `**Sayfa: ${currentPage}/${pages.length}**`,description: `Sunucumuzun en fazla kayıt yapanları aşağıda listelenmiştir!\n${pages[currentPage - 1].map((kisi, index) => `\`${index + 1}.\` ${msg.guild.members.cache.get(kisi.userID).toString()} **Toplam: ${Number(kisi.teyitci.erkek) + Number(kisi.teyitci.kız)}** kayıta sahip`).join("\n")}`, thumbnail: {url: msg.author.avatarURL({dynamic:true})}, author: {name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true})}, color:client.favoriRenkler[Math.floor(Math.random()*client.favoriRenkler.length)]}}).then(async x => {
      await x.react("◀");
      await x.react("❌");
      await x.react("▶");
      const back = x.createReactionCollector((reaction, user) => reaction.emoji.name == "◀" && user.id == author.id, { time: 20000 });
      const ex = x.createReactionCollector((reaction, user) => reaction.emoji.name == "❌" && user.id == author.id, { time: 20000 });
      const go = x.createReactionCollector((reaction, user) => reaction.emoji.name == "▶" && user.id == author.id, { time: 20000 });
      let collector = x.createReactionCollector((react, user) => ["◀","▶", "🔴"].some(e => e == react.emoji.name) && user.id == author.id, { time: 200000 });
      back.on("collect", async reaction => {
        await reaction.users.remove(author.id).catch(err => { });
        if (currentPage === 1) return;
        currentPage--;
        if (x) x.edit({embed:{title: `**Sayfa: ${currentPage}/${pages.length}**`,description: `Sunucumuzun en fazla kayıt yapanları aşağıda listelenmiştir!\n${pages[currentPage - 1].map((kisi, index) => `\`${index + 1}.\` ${msg.guild.members.cache.get(kisi.userID).toString()} **Toplam: ${Number(kisi.teyitci.erkek) + Number(kisi.teyitci.kız)}** kayıta sahip`).join("\n")}`, thumbnail: {url: msg.author.avatarURL({dynamic:true})}, author: {name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true})}, color:client.favoriRenkler[Math.floor(Math.random()*client.favoriRenkler.length)]}});
      });
      go.on("collect", async reaction => {
        await reaction.users.remove(author.id).catch(err => { });
        if (currentPage == pages.length) return;
        currentPage++;
        if (x) x.edit({embed:{title: `**Sayfa: ${currentPage}/${pages.length}**`,description: `Sunucumuzun en fazla kayıt yapanları aşağıda listelenmiştir!\n${pages[currentPage - 1].map((kisi, index) => `\`${index + 1}.\` ${msg.guild.members.cache.get(kisi.userID).toString()} **Toplam: ${Number(kisi.teyitci.erkek) + Number(kisi.teyitci.kız)}** kayıta sahip`).join("\n")}`, thumbnail: {url: msg.author.avatarURL({dynamic:true})}, author: {name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true})}, color:client.favoriRenkler[Math.floor(Math.random()*client.favoriRenkler.length)]}});
      });
      ex.on("collect", async reaction => {
        await ex.stop();
        await go.stop();
        await back.stop();
        x.delete();
      });
    });
  });
};

module.exports.help = {
  name: "tt",
  alias: ["topteyit","top-teyit", "t-t"]
};