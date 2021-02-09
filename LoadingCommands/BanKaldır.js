module.exports.operate = async ({client, msg, args,auth, author}, Database = require("../Models/Restriction.js")) => {
if ((!author.roles.cache.some(r => auth.Perms.BanAuth.includes(r.id))) & (!author.permissions.has("ADMINISTRATOR"))) return;
if (!args[0]) return client.message(client.noMember(msg), msg.channel.id, 6500);
let reasonn = args.slice(1).join(" ") || "Sebep Girilmedi";
msg.guild.fetchBan(args[0]).then(async ({ user, reason }) => {
msg.guild.members.unban(user.id, `${author.tag} tarafından banı açıldı.`);
msg.channel.send(user.tag + " adlı kullanıcının yasağı kaldırıldı.")
client.message(`${user.tag} adlı kullanıcının banı başarılı bir şekilde kaldırıldı. Sebep: ${reasonn}\nBanı kaldıran kişi: ${author}`, msg.channel.id);
msg.react(client.react("duztik")).catch(() => { });
let Data = await Database.find({Activity: true, userID: user.id, Type: "BAN" });
if ((Data.length <= 0)) return null;
Data.forEach(x => {
x.Activity = false;
x.save();
});
}).catch(err => { msg.channel.send("**Hata**: " + err.message);                 
});
};
 
  module.exports.help = {
    name: "unban",
    alias: []
  };
 

    

