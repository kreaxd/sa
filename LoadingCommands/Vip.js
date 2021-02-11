module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
if ((!author.roles.cache.some(r => auth.Perms.TransportAuth.includes(r.id))) || (!author.permissions.has("ADMINISTRATOR"))) return;
  if (!member) return client.message(client.uyeEmbed(msg), msg.channel.id, 5500);
      member.roles.cache.has(cfg.yetki.vip) ? member.roles.remove(cfg.yetki.vip) : uye.roles.add(cfg.yetki.vip);
const Channel = msg.guild.channels.cache.get(args[1]);
if (!Channel) return client.message(client.embed('Kullanıcıyı taşımak istediğin herhangi bir kanal belirtmelisin.', msg), msg.channel.id, 6500);
if(Channel.type != 'voice') return client.message(client.embed(`${client.react("iptal")} | Kullanıcıyı taşımak istediğin kanal bir ses kanalı olmak zorunda.`, msg), msg.channel.id, 6500);
member.voice.setChannel(Channel).catch(()=> { });
msg.react(client.react("duztik")).catch(() => { });
};

module.exports.help = {
  name: "taşı",
  alias: ["gönder", "yolla"]
}; 