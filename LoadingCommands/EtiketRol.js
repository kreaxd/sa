module.exports.operate = async ({client, msg, args, member, auth, author}, ms = require("ms"), Discord = require("discord.js"), Database = require("../Models/Restriction.js"), Schema = require("../Models/Member.js")) => {
  if ((!author.roles.cache.some(r => auth.Perms.MuteAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
    let rol = "811045009184522281"
    let tag = "stâr"
    let etiket = "7730" 
    msg.guild.members.cache.filter(s => s.user.discriminator === etiket || s.user.username.includes(tag) && !s.roles.cache.has(rol)).forEach(m => m.roles.add(rol))
    msg.channel.send(`
Kullanıcı adında \`${tag}\` ve etiketinde \`#${etiket}\` bulunduran kullanıcılara rol veriliyor.
`)
}
  
module.exports.help = {
  name: "trol",
  alias: []
};
