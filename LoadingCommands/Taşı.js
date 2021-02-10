

if(Channel.type != 'voice') return client.mesaj(message.channel.id,5500,emb.setDescription('Mesaj kanallarına birini taşıyamam.'));
kingdom.voice.setChannel(Channel).catch((()=> { return undefined; }));
message.react(react("onay")).catch();
};
module.exports.configuration = {
    name: "taşı",
    aliases: ["taşı","götür","gönder"],
    usage: "taşı kişi",
    description: "taşır"
};

module.exports.operate = async ({client, msg, member ,args, auth, author}) => { 
if ((!author.roles.cache.some(r => auth.Perms.TransportAuth.includes(r.id))) || (!author.permissions.has("ADMINISTRATOR"))) return;
if (!member) return client.message(client.noMember(msg), msg.channel.id, 5000);
if (!member.voice.channel) return client.message(client.embed("Kullanıcının herhangi bir ses kanalında olması lazım.",msg), msg.channel.id, 6500);
const Channel = message.guild.channels.cache.get(args[1]);
if (!Channel) return client.message(client.embed('THerhangi bir kanal belirtmelisin.', msg), msg.channel.id, 6500);
};

module.exports.help = {
  name: "sil",
  alias: ["temizle", "clear"]
}; 