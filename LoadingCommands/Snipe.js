module.exports.operate = async ({client, msg, args, auth, author}) => { 
  if (!author.hasPermission("MANAGE_ROLES")) return;
    msg.react(client.react("duztik"));
  msg.channel.send({embed: {title: `En son silinen mesaj bilgisi:`, description: `Silen Kişi: <@${client.snipe[msg.channel.id].atan}>\n Silinen Mesaj: \`${client.snipe[msg.channel.id].content}\`\nSilindiği Zaman: \`${client.snipe[msg.channel.id].tarih} \``, author: {name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true})}, color:client.renk[Math.floor(Math.random()*client.renk.length)]}});
      client.channels.cache.get(auth.GuildData.Chats.KomutChat).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n**${auth.Reacts.star} ${msg.author.tag}**(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
};

module.exports.help = {
  name: "snipe",
  alias: []
}; 