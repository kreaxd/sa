module.exports.operate = async ({client, args, msg, author, auth}, Discord = require("discord.js")) => {
    if ((!author.roles.cache.some(r => auth.Perms.MuteAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
  const kisi = args.join(" ").split(" ")[0]
  const yetki = args.join(" ").split(" ")[0];
  if(!kisi) return msg.channel.send({embed: {description:"Lütfen bir kullanıcı gir."}});
  if(!yetki) return ({embed: {description: `Lütfen bir rol girin.` }});
  const kullanici = msg.mentions.members.first() || msg.guild.members.cache.find(r=>r.user.username===kisi) || msg.guild.members.cache.get(kisi)
  const rol = msg.mentions.roles.first() || msg.guild.roles.cache.find(r=>r.name===yetki) || msg.guild.roles.cache.get(yetki)
  if(!kullanici) return msg.channel.send({embed: {description:`\`${kisi}\` isimli/ID'li bir kullanıcı bulunamadı.`}})
  if(!rol) return msg.channel.send({embed: {description:`\`${yetki}\` isimli/ID'li bir rol bulunamadı.`}})
  if (["ver"]) {
      msg.channel.send({
          embeds: [{
              author: { name: msg.author.tag },
              title: `[Verilen Yetki]`,
              fields: [
                { name: "`Yetkili:`", value: `${author}`, inline: true },
                { name: "`Kullanıcı:`", value: `${kullanici}`, inline: true },
                { name: "`Verilen Yetki:`", value:`${rol}`, inline: true },
                { name: "`Verilen Zaman:`", value:`**${client.toDate(new Date(Date.now()))}**`, inline: true },
          ],
        }]
        }, auth.Logs.RolVerLog).catch(() => { });
  } else if (["al"]) {
    msg.channel.send({
      embeds: [{
          author: { name: msg.author.tag },
          title: `[Alınan Yetki]`,
          fields: [
            { name: "`Yetkili:`", value: `${author}`, inline: true },
            { name: "`Kullanıcı:`", value: `${kullanici}`, inline: true },
            { name: "`Alınma Yetki:`", value:`${rol}`, inline: true },
            { name: "`Alınma Zamanı:`", value:`**${client.toDate(new Date(Date.now()))}**`, inline: true },
      ],
    }]
    }, auth.Logs.RolVerLog).catch(() => { });
  } else { };
  if(msg.guild.members.cache.get(kullanici.id).roles.cache.has(rol.id)) {
    msg.guild.members.cache.get(kullanici.id).roles.remove(rol.id)
    return msg.channel.send({embed: {author: { name: msg.author.tag }, title: `[Yetkili : ${author}]`, description:` Rolü Alınan Üye: \`${kullanici.user.tag}\`  \`${rol.name}\` isimli rol alınmıştır.`}})    
    } else {
    msg.guild.members.cache.get(kullanici.id).roles.add(rol.id)
    return msg.channel.send({embed: {author: { name: msg.author.tag }, title: `[Yetkili : ${author}]`, description:` Rol Verilen Üye: \`${kullanici.user.tag}\`  \`${rol.name}\` isimli rol verilmiştir.`}})    
  };
};
module.exports.help = {
  name: "rol",
  alias: []
};