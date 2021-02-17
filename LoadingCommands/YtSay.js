module.exports.operate = async ({client, msg, args, author, auth}) => {
  if (!author.permissions.has("ADMINISTRATOR")) return;
  let yetkililer = msg.guild.members.cache.filter(u => {
  return (u.roles.cache.some(r => auth.Perms.YTRoles.includes(r.id)) && !u.voice.channel && u.presence.status !== "offline")
  });
  if (!args[0]) {
    let xd = yetkililer.map(u => u.user);
    client.chunkArray(xd, 25).forEach(r => {
      msg.channel.send(`Aktif Olup Seste Olmayan Yetkililer: ${yetkililer.size}\n ${r.join(",")}`);
    });
  } else if (["dm", "dm-at"].includes(args[0])) {
    yetkililer.forEach(member => member.send(`Merhabalar sunucumuzun ses aktifliğini arttırmak için lütfen müsait isen public odalara değil isen alone odalarına geçer misin?`).catch(err => {
    msg.channel.send(`${member} adlı üyeye dmden mesaj atamıyorum. Müsait isen public odalara değil isen alone odalarına geçiş yapabilirsin.`)
    }))
  }

};
  
  module.exports.help = {
    name: "ytsay",
    alias: []
  };
