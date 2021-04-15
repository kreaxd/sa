module.exports.operate = async ({client, msg, args, author, auth}, Discord = require("discord.js"), Database = require("../Models/Member.js"), roller = require("../Models/Rollog.js"), moment = require("moment")) => {
        if (!msg.member.roles.cache.has("736891557680119849") && !msg.member.hasPermission("ADMINISTRATOR")) return
        let user = msg.mentions.members.first() || await this.client.üye(args[0], msg.guild)
        if (!user) return msg.channel.send("Rol bilgilerine bakmak istediğin kullanıcıyı düzgünce belirt ve tekrar dene !")

        roller.findOne({ user: user.id }, async (err, res) => {
            if (!res) return msg.channel.send("<@" + user.id + "> kişisinin rol bilgisi veritabanında bulunmadı.")
            let rol = res.roller.sort((a, b) => b.tarih - a.tarih)
            rol.length > 10 ? rol.length = 10 : rol.length = rol.length
            let filterRole = rol.map(x => `${x.state == "Ekleme" ? "yes": "no"} Rol: <@&${x.rol}> Yetkili: <@${x.mod}>\nTarih: ${moment(x.tarih).format("LLL")}`)
            const embed = new Discord.MessageEmbed()
                .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
                .setColor("RANDOM")
                .setDescription(`${user} kişisinin toplamda ${res.roller.length} rol bilgisi bulunmakta son 10 rolün bilgileri aşağıda belirtilmiştir.\n\n${filterRole.join("\n─────────────────\n")}`)
            msg.channel.send(embed)
        })
    }

module.exports.help = {
    name: "rollog",
    alias: ["rollog"]
  };

