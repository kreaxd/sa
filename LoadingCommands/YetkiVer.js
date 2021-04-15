module.exports.operate = async ({client, msg, args, author, auth}, {MessageEmbed} = require("discord.js")) => {
    if ((!author.roles.cache.some(r => auth.YetkiliAlım.Yetkiler.includes(r.id))) && (!author.hasPermission("MANAGE_ROLES"))) return;
        if (args.length < 1) return this.client.yolla("Bir kullanıcı etiketleyin veya kullanıcı ID giriniz.", msg.author, msg.channel)
        let user = msg.mentions.members.first() || await this.client.üye(args[0], msg.guild)
        if (!user) return this.client.yolla("Belirttiğiniz kullanıcı geçerli değil.", msg.author, msg.channel)
     //   if(!user.user.username.includes("tag")) return this.client.yolla("Belirttiğiniz kullanıcı sunucu tagına sahip olmadığı için yetki verme işlemi uyguluyamazsın.", msg.author, msg.channel)
        let map = new Map([
            ["-rookies", ["826924665867993132"]],
            ["-eternal", ["826924665867993132"]],
            ["-moon", ["826924665867993132"]],
            ["-throne", ["826924665867993132"]]
        ])
        let metin = ""
        let arr = []
        for (let [k, v] of map) {
            if (args[0] == k) return
            v.map(x => {
                arr.push(x)
            })
        }
        for (let [k, v] of map) {
            metin = metin + `\`${k}\` - ${v.filter(x => x !== "826924665867993132").map(x => `<@&${x}>`)}\n`
        }
        let values = args[1]
        const embed = new MessageEmbed()
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setDescription(`Belirttiğiniz rol geçerli değil lütfen aşağıdaki verilere göre komutu uygulayınız.\n\n${metin}\n\n\`Örnek kullanım:\nd!yetkiver 310779453464772608 -moon\nd!yetkiver -rookies\`\n`)
        if (!values) return msg.channel.send(embed)
        if (!map.has(values.toLowerCase())) return msg.channel.send(embed)
        const roller = map.get(values)
        await user.roles.add(roller)
        let arrx = arr.filter(function (item, pos) {
            return arr.indexOf(item) == pos;
        })
        arrx.map(async (x) => {
            if (user.roles.cache.has(x)) {
                if (roller.includes(x)) return
                await user.roles.remove(x)
            }
        })
        embed.setDescription(`${user} kullanıcısına <@&${roller[0]}> yetkisi verildi.`)
        msg.channel.send(embed)
    }

module.exports.help = {
  name: "yetkiver",
  alias: []
};
