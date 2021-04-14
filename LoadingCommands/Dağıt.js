module.exports.operate = async ({client, msg, args, member ,author, auth}, {MessageEmbed} = require("discord.js")) => { 
    if ((!author.roles.cache.some(r => auth.Perms.Yonetim.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
    let embed = new MessageEmbed().setColor('RANDOM').setAuthor(msg.author.username, msg.author.avatarURL({ dynamic: true }))
    let pubID = "826924670762090505"

    let pubatılcaklar = msg.guild.members.cache.filter(s => s.voice.channel && s.voice.channel.id === msg.member.voice.channel.id).filter(x => x.voice.selfDeaf === false)
    let sleep = msg.guild.members.cache.filter(s => s.voice.channel && s.voice.channel.id === msg.member.voice.channel.id).filter(x => x.voice.selfDeaf === true)

    let kanallar = msg.guild.channels.cache.filter(s => s.parentID === pubID)
    let sleepID = "826924671621791749"
    sleep.array().forEach(async(member, index) => {
        setTimeout(() => {
            member.voice.setChannel(sleepID)
        }, index * 2000)
    })
    pubatılcaklar.array().forEach(async(member, index) => {
        setTimeout(() => {
            member.voice.setChannel(kanallar.random())
        }, index * 2000)
    })
    embed.setDescription(`${sleep.size} Adet kullanıcı **sleep odalara** taşındı. 
    ${pubatılcaklar.size} Adet kullanıcı **public odalara** dağıtıldı.`)
    msg.channel.send(embed)
}

module.exports.help = {
  name: "dağıt",
  alias: []
};
  