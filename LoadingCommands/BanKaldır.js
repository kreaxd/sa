module.exports.operate = async ({client, msg, args,auth, author}, fetch = require('node-fetch'), { GuildMember } = require("discord.js"), Database = require("../Models/Restriction.js"), Schema = require("../Models/Member.js")) => {
if ((!author.roles.cache.some(r => auth.Perms.BanAuth.includes(r.id))) & (!author.permissions.has("ADMINISTRATOR"))) return;
if (!args[0]) return client.message(client.noMember(msg), msg.channel.id, 6500);
msg.guild.fetchBan(args[0]).then(({ user, reason }) => {
msg.guild.members.unban(user.id, `${author.tag} tarafından banı açıldı.`);
msg.channel.send(user.tag + " adlı kullanıcının yasağı kaldırıldı.")
client.message(`${user.tag} adlı kullanıcının banı başarılı bir şekilde kaldırıldı.`, msg.channel.id);
msg.react(client.react("duztik")).catch(() => { });
}).catch(err => { msg.channel.send("**Hata**: " + err.message);                 
});
};
    
  module.exports.help = {
    name: "unban",
    alias: []
  };
 

    

