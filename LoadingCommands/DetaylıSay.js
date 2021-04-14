module.exports.operate = async ({client, msg, args, author, auth}, {MessageEmbed} = require("discord.js")) => {
const xd = args[0];
const MemberSize = msg.guild.memberCount;
const TaglıSize = msg.guild.members.cache.filter(u => u.user.username.includes(config.Tags.OrjTag)).size || 0;
const OnlineSize = msg.guild.members.cache.filter(u => u.presence.status !== "offline").size;
const VoiceSize = msg.guild.channels.cache.filter(c => c.type === "voice").map(c=> c.members.size).reduce((a,b) => a+b) || 0;
if (!xd || (xd && !["detay", "detaylı"].includes(xd))) {
client.message(client.embed(`${client.react("star")} Seste toplam **${VoiceSize}** kullanıcı bulunmaktadır.\n${client.react("star")} Sunucumuzda toplam **${MemberSize}** kullanıcı bulunmaktadır.\n${client.react("star")} Sunucumuzda taglı **${TaglıSize}** kullanıcı bulunmaktadır.\n${client.react("star")} Sunucumuzda çevrimiçi **${OnlineSize}** kullanıcı bulunmaktadır.`, message,true), message.channel.id);
} else if (["detay", "detaylı"].includes(xd)) {
const FakeVoice = msg.guild.channels.cache.filter(c => c.type === "voice").map(c => c.members && c.members.filter(x => x.user.createdAt <= client.getDate(1, "hafta")).size).reduce((a,b) => a+b) || 0;
const BotVoice = msg.guild.channels.cache.filter(c => c.type === "voice").map(c => c.members && c.members.filter(x => x.user.bot).size).reduce((a,b) => a+b) || 0;
const FakeMembers = msg.guild.members.cache.filter(x => x.user.createdAt <= client.getDate(1, "hafta")).size;
const BotMembers = msg.guild.members.cache.filter(x => x.user.bot).size;
const FakeTag = msg.guild.members.cache.filter(u => u.user.createdAt <= client.getDate(1, "hafta") && u.user.username.includes(config.Tags.OrjTag)).size || 0;
const BotTag = msg.guild.members.cache.filter(u => u.user.bot && u.user.username.includes(config.Tags.OrjTag)).size || 0;
const FakeOnline = msg.guild.members.cache.filter(u => u.user.createdAt <= client.getDate(1, "hafta") && u.presence.status !== "offline").size;
const BotOnline = msg.guild.members.cache.filter(u => u.user.bot && u.presence.status !== "offline").size;
const embed = new MessageEmbed()
 .setAuthor(msg.author.username, message.author.avatarURL({ dynamic: true }))
 .setDescription(`${client.react("star")} Seste (\`${VoiceSize}\` | \`${FakeVoice}\` | \`${BotVoice}\`) kullanıcı bulunmaktadır.\n${client.react("star")} Sunucumuzda (\`${MemberSize}\` | \`${FakeMembers}\` | \`${BotMembers}\`) kullanıcı bulunmaktadır.\n${client.react("star")} Sunucumuzda taglı (\`${TaglıSize}\` | \`${FakeTag}\` | \`${BotTag}\`) kullanıcı bulunmaktadır.\n${client.react("star")} Sunucumuzda çevrimiçi (\`${OnlineSize}\` | \`${FakeOnline}\` | \`${BotOnline}\`) kullanıcı bulunmaktadır.`)
 .setColor(client.Renk[Math.floor((Math.random() * client.Renk.length))])
 .setFooter(`Sayısal istatistikler (Toplam | Fake | Bot) şeklinde sıralanmıştır.`);
client.message(embed, message.channel.id);
};
};

  
  module.exports.help = {
    name: "detaylı-say",
    alias: []
  };