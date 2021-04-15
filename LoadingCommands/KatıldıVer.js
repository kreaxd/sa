module.exports.operate = async ({client, msg, args, member ,author, auth}, {MessageEmbed} = require("discord.js")) => {
  if ((!author.roles.cache.some(r => auth.Perms.Yonetim.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
        if (!msg.member.hasPermission("ADMINISTRATOR")) return
        msg.channel.send(""+client.react("duztik")+" Odadaki yetkililere katıldı permi veriliyor. Bu işlem uzun sürebilir.")
        let toplantıdaOlanlarx = msg.member.voice.channel.members.filter(x => {
            return x.roles.cache.has(auth.Perms.ToplantıKatıldı)
        }).map(x => x.id)
        for (let i = 0; i < toplantıdaOlanlarx.length; i++) {
            setTimeout(() => {
                msg.guild.members.cache.get(toplantıdaOlanlarx[i]).roles.add(auth.Perms.ToplantıKatıldı)
            }, (i + 1) * 1000)
        }
        msg.channel.send("Odadaki tüm yetkililere katıldı permi başarıyla verildi.")

    }

module.exports.help = {
  name: "katıldı-ver",
  alias: ["toplantı-katıldı-ver", "toplantıver", "toplantıkatıldıver"]
};
