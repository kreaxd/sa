module.exports.operate = async ({client, args, msg, author, auth}, Discord = require("discord.js")) => {
    if ((!author.roles.cache.some(r => auth.Perms.MuteAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
    const kisi = args.join(" ").split(" ")[0]
    const yetki = args.join(" ").split(" ")[0];
    if(!kisi) return msg.channel.send({embed: {description:"Lütfen bir kullanıcı gir."}});
    if(!yetki) return ({embed: {description: `Lütfen bir rol girin.` }});
    const kullanici = msg.mentions.members.first() || msg.guild.members.cache.find(r=>r.user.username===kisi) || msg.guild.members.cache.get(kisi)
    const rol = msg.mentions.roles.first() || msg.guild.roles.cache.find(r=>r.name===yetki) || msg.guild.roles.cache.get(yetki)
    if(yetki === "ADMINISTRATOR" && "MANAGE_ROLES" && "CHANGE_NICKNAME" && "KICK_MEMBERS" && "BAN_MEMBERS" && "MANAGE_GUILD" && "MANAGE_CHANNEL" && "MANAGE_EMOJIS" && "CHANGE_NICKNAME" && "MANAGE_WEBHOOKS" && "MENTIONS_EVERYONE") return msg.channel.send({embed: {description: `YT veya Yönet Rolleri veremezsin :)`}})
    if(!kullanici) return msg.channel.send({embed: {description:`\`${kisi}\` isimli/ID'li bir kullanıcı bulunamadı.`}})
    if(!rol) return msg.channel.send({embed: {description:`\`${yetki}\` isimli/ID'li bir rol bulunamadı.`}})
    if(msg.guild.members.cache.get(kullanici.id).roles.cache.has(rol.id)) {
        client.message({
            embeds: [{
                author: { name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true}) },
                title: `[Yetki Alınması]`,
                fields: [
                  { name: "`Yetkili:`", value: `${author}`, inline: true },
                  { name: "`Kullanıcı:`", value: `${kullanici}`, inline: true },
                  { name: "`Alınan Yetki:`", value:`${rol}`, inline: true },
                  { name: "`Alınan Zaman:`", value:`**${client.toDate(new Date(Date.now()))}**`, inline: true },
            ],
    color: client.renk[Math.floor(Math.random() * client.renk.length)],
            footer: { text: msg.member.user.tag + " tarafından.", icon_url: msg.author.avatarURL({dynamic:true}) }
          }]
          },auth.Logs.RolVerLog)
    } else {
       client.message({
            embeds: [{
                author: { name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true}) },
                title: `[Verilen Yetki]`,
                fields: [
                  { name: "`Yetkili:`", value: `${author}`, inline: true },
                  { name: "`Kullanıcı:`", value: `${kullanici}`, inline: true },
                  { name: "`Verilen Yetki:`", value:`${rol}`, inline: true },
                  { name: "`Verilen Zaman:`", value:`**${client.toDate(new Date(Date.now()))}**`, inline: true },
            ],
    color: client.renk[Math.floor(Math.random() * client.renk.length)],
            footer: { text: msg.member.user.tag + " tarafından.", icon_url: msg.author.avatarURL({dynamic:true}) }
          }]
          }, auth.Logs.RolVerLog)
    }
    if(msg.guild.members.cache.get(kullanici.id).roles.cache.has(rol.id)) {
    msg.guild.members.cache.get(kullanici.id).roles.remove(rol.id)
    return msg.channel.send({embed: {description: `\`${kullanici.user.tag}\` isimli kullanıcıdan \`${rol.name}\` isimli rol alınmıştır. Yetkili: \`${msg.author.tag}\``}})
    } else {
    msg.guild.members.cache.get(kullanici.id).roles.add(rol.id)
    return msg.channel.send({embed: {description:` \`${kullanici.user.tag}\` isimli kullanıcıya \`${rol.name}\` isimli rol verilmiştir. Yetkili: \`${msg.author.tag}\``}})
    };
};
module.exports.help = {
    name: "rolver",
    alias: ["rolv","rv","rolv"]
  };