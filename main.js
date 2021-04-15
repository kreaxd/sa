const { Client } = require("discord.js");
const fs = require("fs");
const auth = require("./authorization.json");
const mongoose = require("mongoose");
const moment = require("moment");
require("moment-duration-format");
moment.locale("tr");
const client = new Client({ disableMentions: "everyone", ignoreDirect: true, ignoreRoles: true, fetchAllMembers: true, _tokenType: "Bot" });
client.commands = new Map();
client.aliases = new Map();
client.locked = new Set();
client.snipe = new Set();
client.AFKLAR = new Set();
client.AFKLAR2 = new Set();
client.reklamcilar = new Set();
process.client = client;
require("./Loading/loadFunction.js")(client, auth, moment);
require("./Loading/loadEvents.js")(fs, client);
require("./Loading/loadCommands.js")(fs, client);
require("./Loading/loadMongoose.js")(mongoose, auth);
require("./Loading/loadToken.js")(client, auth);

client.on("message", async msg => {
    let botVoiceChannel = client.channels.cache.get("826924668840574999");
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});

const sesLog = '820305475056304159';
const mesajlog = '820305528059330560';
const guildLog = '820305555036831746';
const rolLog = '820305579079499824';
const userLog = '820305608925249556';
const yayinLog = '820305694749360129';
const userAvatarLog = '820305720481415198';
const kullaniciLog = '820305773329383424';

//Kullanıcı Log

client.on("guildMemberAdd", (member, message) => {
  client.channels.cache.get(kullaniciLog).send(new MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`${member} üyesi sunucuya katıldı.`).setColor('#65cafe'))
});

client.on("guildMemberRemove", (member, message) => {
  client.channels.cache.get(kullaniciLog).send(new MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`${member} üyesi sunucudan ayrıldı.`).setColor('#red'))
});

//Mesaj Log

client.on("messageContentEdited", (message, oldContent, newContent) => {
  if(message.author.bot || message.channel.type === "dm") return;
  if(message.guild.id !== rGuild) return;
    client.channels.cache.get(mesajlog).send(new MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL()).setDescription(`${message.author} üyesi ${message.channel} kanalındaki mesajı düzenledi.\n\n**__Eski Mesaj:__** \`${oldContent}\`\n\n**__Yeni Mesaj:__** \`${newContent}\`\n\n\`\`\`Kanal: #${message.channel.name} (${message.channel.id})\nKullanıcı: ${message.member.user.tag} (${message.member.id})\nMesaj ID: ${message.id}\nMesajın düzenlenme tarihi: ${client.toDate(new Date())}\`\`\``).setColor('#a3ff8b'))
  });
  
client.on('messageDelete', message  => {
    if(message.author.bot || message.channel.type === "dm") return;
    if(message.guild.id !== rGuild) return;
    client.channels.cache.get(mesajlog).send(new MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL()).setDescription(`${message.author} üyesi ${message.channel} kanalındaki bir mesajını silindi.\n\n**__Silinen Mesaj:__** \`${message.content}\`\n\n\`\`\`Kanal: #${message.channel.name} (${message.channel.id})\nKullanıcı: ${message.member.user.tag} (${message.member.id})\nMesaj ID: ${message.id}\nMesajın silinme tarihi: ${client.toDate(new Date())}\`\`\``).setColor('#8b0000'))
  })
  
//Ses Log

client.on("voiceChannelJoin", (member, channel) => {
    client.channels.cache.get(sesLog).send(new MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> - (\`${member.id}\`) kişisi \`${channel.name}\` kanalına giriş yaptı.`).setColor('RANDOM'))
  })
  
  client.on("voiceChannelLeave", (member, channel) => {
    client.channels.cache.get(sesLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> - (\`${member.id}\`) kişisi \`${channel.name}\` kanalından çıkış yaptı.`).setColor('RANDOM'))
  })
  
  client.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {
    client.channels.cache.get(sesLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> - (\`${member.id}\`) kişisi \`${oldChannel.name}\` kanalından\n\`${newChannel.name}\` kanalına geçiş yaptı.`).setColor('RANDOM'))
  })

//Rol Log

client.on("guildMemberRoleAdd", (member, role, message) =>{
    client.channels.cache.get(rolLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> - (\`${member.id}\`) adlı üyeye bir rol verildi. \n **Verilen rol:** <@&${role.id}>`).setColor('RANDOM'))
  })
  
client.on("guildMemberRoleRemove", (member, role) =>{
    client.channels.cache.get(rolLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> - (\`${member.id}\`) adlı üyeden bir rol alındı. \n **Alınan rol:** <@&${role.id}>`).setColor('RANDOM'))
  })
  
//Guild Log

client.on("guildMemberBoost", (member) => {
  client.channels.cache.get(guildLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> kişisi boost bastı.`).setColor('RANDOM'))
});

client.on("guildMemberUnboost", (member) => {
  client.channels.cache.get(guildLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> kişisi boostunu çekti.`).setColor('RANDOM'))
});

client.on("voiceStreamingStart", (member, voiceChannel) => {
  client.channels.cache.get(yayinLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> - (\`${member.id}\`) adlı üye \`${voiceChannel.name}\` adlı kanalda yayın başlattı.`).setColor('RANDOM'))
});

client.on("voiceStreamingStop", (member, voiceChannel) => {
  client.channels.cache.get(yayinLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> - (\`${member.id}\`) adlı üye \`${voiceChannel.name}\` adlı kanalda yayını kapattı.`).setColor('RANDOM'))
});

//User Log

client.on("voiceChannelMute", (member) => {
  client.channels.cache.get(userLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> - (\`${member.id}\`) mikrofonunu kapattı.`).setColor('RANDOM'))
});

client.on("voiceChannelUnmute", (member) => {
  client.channels.cache.get(userLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> - (\`${member.id}\`) mikrofonunu açtı.`).setColor('RANDOM'))
});

client.on("voiceChannelDeaf", (member) => {
  client.channels.cache.get(userLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> - (\`${member.id}\`) kulaklığını açtı.`).setColor('RANDOM'))
});

client.on("voiceChannelUndeaf", (member, deafType) => {
  client.channels.cache.get(userLog).send(new Discord.MessageEmbed().setAuthor(member.user.tag, member.user.displayAvatarURL()).setDescription(`<@${member.id}> - (\`${member.id}\`) kulaklığını kapattı.`).setColor('RANDOM'))
});

client.on("userAvatarUpdate", (member, oldAvatarURL, newAvatarURL) => {
  client.channels.cache.get(userAvatarLog).send(new Discord.MessageEmbed().setDescription(`<@${member.id}> - (\`${member.id}\`) profil fotoğrafını güncelledi.\n\n Eski Avatar: ${oldAvatarURL} \n Yeni Avatar: ${newAvatarURL}`).setColor('RANDOM'))
});