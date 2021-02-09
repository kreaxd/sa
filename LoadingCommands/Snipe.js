module.exports.operate = async ({client, msg, args, cfg, author}) => { 
  if (!author.hasPermission("MANAGE_ROLES")) return;
    msg.react(client.react("duztik"));
  msg.channel.send({embed: {title: `En son silinen mesaj bilgisi:`, description: `Silen Kişi <@${client.snipe[msg.channel.id].atan}>\n Silinen Mesaj: \`${client.snipe[msg.channel.id].content}\`\nSilindiği Zaman: \`${client.snipe[msg.channel.id].tarih} \``, author: {name: msg.guild.name, icon_url: msg.guild.iconURL({dynamic:true})}, color:client.renk[Math.floor(Math.random()*client.renk.length)]}});
};

module.exports.help = {
  name: "snipe",
  alias: []
}; 