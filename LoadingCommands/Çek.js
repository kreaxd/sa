module.exports.operate = async ({client, msg, args, member ,author, auth}, {MessageEmbed} = require("discord.js")) => {
if (!author.voice.channel) return client.message(client.embed("Komutu kullanmak herhangi bir sesli kanala bağlanmalısın!", msg), msg.channel.id, 6500);
if (!member) return client.message(client.embed("Çekmek istediğin bir kullanıcıyı seçmelisin!",msg), msg.channel.id, 6500);
if (!member.voice.channel || author.voice.channelID == member.voice.channelID ) return client.message(client.embed('Kullanıcı ile aynı kanaldasınız ya da kullanıcı bir sesli kanalda değil!',msg),msg.channel.id,6500);
let reason = args.slice(1).join(" ") || 'Sebep belirtilmedi.'
if ((!author.roles.cache.some(r => auth.Perms.TransportAuth.includes(r.id))) & (!author.permissions.has("ADMINISTRATOR"))) {
await member.voice.setChannel(author.voice.channelID);
msg.react(client.react("duztik"))
} else {
client.mesaj(message.channel.id,30000,embed.setDescription(`${message.author} seni **${reason}** sebebiyle yanına çağırıyor gitmek ister misin?`).setFooter('30 saniye içinde herhangi bir tepki vermezseniz komut iptal olur.')).then(async msg => {
await msg.react("✅").catch();
await msg.react("❌").catch();
const onay = (reaction, user) => reaction.emoji.name === '✅' && user.id === kingdom.id;
const red = (reaction, user) => reaction.emoji.name === '❌' && user.id === kingdom.id;
const tik = msg.createReactionCollector(onay, { time: 30000 });
const çarpı = msg.createReactionCollector(red, { max: 1, time: 30000 });
tik.on("collect", r => {
kingdom.voice.setChannel(message.member.voice.channelID).catch((()=> { return undefined; }));
msg.delete().catch((()=> { return undefined; }));
message.react(react("onay")).catch((()=> { return undefined; }));
})
çarpı.on("collect", r => {
msg.delete().catch((()=> { return undefined; }));
message.react(react("iptal")).catch((()=> { return undefined; }));
})
})
};
};
  
module.exports.help = {
  name: "booster",
  alias: ["zengin"]
};
