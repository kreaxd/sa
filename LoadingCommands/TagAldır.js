module.exports.operate = async ({client, msg, args, member ,author, auth}, Database = require("../Models/Member.js"),{MessageEmbed} = require("discord.js")) => {
if ((!author.roles.cache.some(r => auth.Perms.RegisterAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
Database.find({SunucuID: msg.guild.id}, async (err,res) => { 
  if ((res) && (res.Authorized)) {
    msg.channel.send("qwewq")
  }
});
//if (!member.user.username.includes(auth.Tags.RealTag)) return client.message(client.embed("Kullanıcının isminde tagımız bulunmuyor bu yüzden işlem iptal edildi.",msg),msg.channel.id,6500);
member.send({embed: { 
color: client.renk[Math.floor(Math.random() * client.renk.length)],
author: { name: msg.member.user.tag, icon_url:  msg.member.user.displayAvatarURL({dynamic:true}) }, 
description: `<@${member.id}>, <@${author.id}> (\`${author.id}\`) adlı yetkili sana tag aldırdığını söylüyor ve onaylamanı istiyor eğer onaylarsan yetkliliye puan eklenecek onaylıyor musun?`,
footer: { text: "3 dakika içinde herhangi bir tepki vermezseniz komut iptal olur."}}}).then(async x => {
await x.react(client.react("duztik")).catch(() => { });
await x.react(client.react("iptal")).catch(() => { });
const onay = (reaction, user) => reaction.emoji.id === auth.Reacts.duztik && user.id === member.id;
const red = (reaction, user) => reaction.emoji.id === auth.Reacts.iptal && user.id === member.id;
const tik = x.createReactionCollector(onay, { time: 1000 * 60 * 3  });
const çarpı = x.createReactionCollector(red, { max: 1, time: 1000 * 60 * 3 });
const Veri = await Database.findOne({SunucuID: msg.guild.id, userID: author.id});
tik.on("collect", r => {
x.delete().catch(() => { });
if (!Veri) { new Database({SunucuID: msg.guild.id, userID: author.id, Authorized: { Tags: 1, TagMembers: [member.id]}}).save();
} else {
  Veri.Authorized.Tags++
  Veri.Authorized.TagMembers.push(member.id)
  Veri.save()
}
});
çarpı.on("collect", r => {
x.delete().catch(()=> { });
});
setTimeout(() => {
x.delete().catch(() => { });
}, 1000 * 60 * 3)
});
};
  
module.exports.help = {
  name: "tagaldır",
  alias: ["tagaldir"]
};
