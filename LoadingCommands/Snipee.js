const Discord = require("discord.js");

module.exports.operate = async ({client, msg, args, auth, author, member}) => { 

if(!member) return msg.channel.send({embed: {description: `Bir kullanıcı belirtmelisin!`}}).then(x => x.delete({ timeout: 5000 }));
    let kanal = member.voice.channel
    if(!kanal) return msg.channel.send(`Belirttiğin kişi ses kanalında bulunmuyor.`).then(x => x.delete({ timeout: 5000 }));
let microphone = member.voice.selfMute ? "kapalı" : "açık";
let headphones = member.voice.selfDeaf ? "kapalı" : "açık";
let sestekiler = msg.guild.channels.cache.get(kanal.id).members.map(x => x.user).join(", ")

kanal.createInvite().then(invite =>
msg.channel.send(`${member} kullanıcısı \`${kanal.name}\` kanalında.
**Mikrofon durumu:** \`${microphone}\`. | **Kulaklık durumu:** \`${headphones}\`.

Kanala gitmek için (tıklaman)[https://discord.gg/${invite.code}] yeterli.

\`•\` Odadaki kişiler; ${sestekiler}`))
}
 
module.exports.help = {
  name: "snipee",
  alias: []
}; 