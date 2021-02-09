module.exports.operate = async ({client, msg, args, author, cfg}, Database = require("../Models/Restriction.js"), ms = require("ms")) => { 
  if (!author.hasPermission("")) return;
let member = (msg.mentions.users.first()) || await (await fetch(`https://discord.com/api/users/${args[0]}`, {method:'GET', headers: {'Authorization': 'Bot ' + client.token}})).json();
  Database.find({userID: member.id}, async (err, res) => {
    if (res.length <= 0) return client.message(client.embed(`Kullanıcının ceza listesinde herhangi bir ceza bulunmuyor!`, msg), msg.channel.id, 5500);
    let listed = res.reverse();
    let currentPage = 1;
    const pageLimit = 5;
    let History = listed.map((x, index) => `\`${index + 1}.\` **[${x.Type}]** <@${x.Author}> (\`${x.Author}\`) tarafından **${x.Reason}** sebebiyle \`${client.toDate(x.DateNow)}\` tarihinde cezalandırıldı.(\`#${x.CezaID}\`)`);
    const pages = History.chunk(pageLimit);
    if (msg.content.includes("auto")) {
      let Sure = ms((msg.content.slice(msg.content.indexOf("auto") + 5)));
      if (!Sure || !ms(Sure)) return client.message(client.embed(`**Geçerli bir zaman dilimi girmelisin.**`, msg), msg.channel.id, 5000);
      msg.channel.send({embed:{title: `**Sayfa: ${currentPage}/${pages.length}**`,description:`${History.slice(currentPage === 1 ? 0 : Number((currentPage * pageLimit) - pageLimit), Number(currentPage * pageLimit)).join("\n")}`,thumbnail: {url: msg.author.avatarURL({dynamic:true})}, author: {name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true})}, color:client.favoriRenkler[Math.floor(Math.random()*client.favoriRenkler.length)]}}).then(xd => {
        setInterval(() => {
          if (currentPage >= pages.length) return clearInterval(this);
          currentPage = currentPage + 1;
          xd.edit({embed:{title: `**Sayfa: ${currentPage}/${pages.length}**`,description:`${History.slice(currentPage === 1 ? 0 : Number((currentPage * pageLimit) - pageLimit), Number(currentPage * pageLimit)).join("\n")}`,thumbnail: {url: msg.author.avatarURL({dynamic:true})}, author: {name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true})}, color:client.favoriRenkler[Math.floor(Math.random()*client.favoriRenkler.length)]}});
        }, Sure);
      });
    } else {
      msg.channel.send({embed:{title: `**Sayfa: ${currentPage}/${pages.length}**`,description:`${History.slice(currentPage === 1 ? 0 : Number((currentPage * pageLimit) - pageLimit), Number(currentPage * pageLimit)).join("\n")}`,thumbnail: {url: msg.author.avatarURL({dynamic:true})}, author: {name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true})}, color:client.favoriRenkler[Math.floor(Math.random()*client.favoriRenkler.length)]}}).then(async xd => {
        if (listed.length > pageLimit) {
          await xd.react("◀");
          await xd.react("❌");
          await xd.react("▶");
          let collector = xd.createReactionCollector((react, user) => ["◀","▶", "❌"].some(e => e == react.emoji.name) && user.id == author.id, { time: 200000 });
          collector.on("collect", async reaction => {
            if (reaction.emoji.name === "◀") {
              if (currentPage === 1) return;
              await reaction.users.remove(author.id).catch(err => { });
              currentPage--;
              xd.edit({embed:{title: `**Sayfa: ${currentPage}/${pages.length}**`,description:`${History.slice(currentPage === 1 ? 0 : Number((currentPage * pageLimit) - pageLimit), Number(currentPage * pageLimit)).join("\n")}`,thumbnail: {url: msg.author.avatarURL({dynamic:true})}, author: {name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true})}, color:client.favoriRenkler[Math.floor(Math.random()*client.favoriRenkler.length)]}});
            } else if (reaction.emoji.name === "▶") {
              if (currentPage === pages.length) return;
              await reaction.users.remove(author.id).catch(err => { });
              currentPage++;
              xd.edit({embed:{title: `**Sayfa: ${currentPage}/${pages.length}**`,description:`${History.slice(currentPage === 1 ? 0 : Number((currentPage * pageLimit) - pageLimit), Number(currentPage * pageLimit)).join("\n")}`,thumbnail: {url: msg.author.avatarURL({dynamic:true})}, author: {name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true})}, color:client.favoriRenkler[Math.floor(Math.random()*client.favoriRenkler.length)]}});
            } else if (reaction.emoji.name === "❌") {
              xd.delete();
              collector.stop();
            };
          });
        };
      });
    };
  });
};
module.exports.help = {
  name: "sicil",
  alias: ["cezalar","cezasay","gbt"]
};