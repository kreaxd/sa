module.exports.operate = async ({msg}, moment = require("moment")) => {
    msg.channel.send({
    embed: {
    title:`Sunucu Bilgileri`,
    description:`İstatistikler;`,
    fields: [
    { name: "`Toplam Üye Sayısı:`", value: `**${msg.guild.memberCount}**`, inline: true },
    { name: "`Bir Saatte Giren Üye Sayısı:`", value: `**${msg.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 3600000).size}**`, inline: true },
    { name: "`Bugün Giren Üye Sayısı:`", value: `**${msg.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 86400000).size}**`, inline: true },
    { name: "`Bu hafta Giren Üye Sayısı:`", value: `**${msg.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 604800000).size}**`, inline: true },
    { name: "`Bu Ay Giren Üye Sayısı`", value: `**${msg.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 2629800000).size}**`, inline: true }
    ]}})
}
 module.exports.help = {
    name: "sbilgi",
    alias: ["sunucub","sunucubilgi","sb","sunucu"]
  };    
