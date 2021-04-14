module.exports.operate = async ({client, msg, args, member, auth, author}, ms = require("ms"), Discord = require("discord.js"), Database = require("../Models/Restriction.js"), Schema = require("../Models/Member.js")) => {
    if ((!author.roles.cache.some(r => auth.Perms.MuteAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
    let channel = msg.guild.channels.cache.get(args[0]) || msg.member.voice.channel;
    if (!channel) return msg.channel.error(msg, "Bir kanal idsi girmen gerekiyor.");
    channel.members.filter((x) => !x.hasPermissions("ADMINISTRATOR"))
    .forEach((x, index) => {
        client.wait(index * 1000);
        x.voice.setMute(true);
    });
    msg.channel.send(`\`${channel.name}\` kanalındaki tüm üyeler susturuldu!`);
}

module.exports.help = {
 name: "toplu-sustur",
 alias: ["toplumute"]
};