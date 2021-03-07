module.exports.operate = ({client, msg, args, author, uye, cfg}) => {
  if (!author.permissions.has("ADMINISTRATOR")) return client.message(client.yetersizEmbed(msg), msg.channel.id, 5000);;
  if (!args[0]) return msg.channel.send({embed: {description:"**Bir kanal idsi girmelisin.**"}}).then(msj => msj.delete({ timeout: 5000 }));
  if (!args[1]) {
    let kanal = author.voice.channelID;
    let kanal2 = args[0];
    var uyeler = msg.guild.members.cache.filter(u => msg.guild.member(u).voice.channelID === kanal2);
    if (uyeler.size < 1) return msg.channel.send({embed: {description:"**Toplu taşıma yapmak istediğin kanalda üye bulunmamakta.**"}}).then(msj => msj.delete({ timeout: 5000 }));
    if (kanal === kanal2) return msg.channel.send({embed: {description:"**Aynı kanala üye taşıyamazsın.**"}}).then(msj => msj.delete({ timeout: 5000 }));
    uyeler.map(u => u.voice.setChannel(kanal));
    msg.channel.send(client.duzembed(`** \`${uyeler.size}\` adet üye \`${msg.guild.channels.cache.get(kanal).name}\` kanalından \`${msg.guild.channels.cache.get(kanal2).name}\` kanalına taşınıyor.**`, msg)).then(msj => msj.delete({ timeout: 5000 }));
  } else {
    let kanal = args[1];
    let kanal2 = args[0];
    var uyeler = msg.guild.members.cache.filter(u => msg.guild.member(u).voice.channelID === kanal2);
    if (uyeler.size < 1) return msg.channel.send("**Toplu taşıma yapmak istediğin kanalda üye bulunmamakta.**").then(msj => msj.delete({ timeout: 5000 }));
    if (kanal === kanal2) return msg.channel.send("**Aynı kanala üye taşıyamazsın.**").then(msj => msj.delete({ timeout: 5000 }));
    uyeler.map(u => u.voice.setChannel(kanal));
    msg.channel.send({embed: {description:`\`${uyeler.size}\` adet üye \`${msg.guild.channels.cache.get(kanal).name}\` adlı kanaldan \`${msg.guild.channels.cache.get(kanal2).name}\` adlı kanala taşınmaktadır. Bu `}})
  };
};

module.exports.help = {
  name: "topluçek",
  alias: []
};