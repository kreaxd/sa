module.exports.operate = async ({client, msg, args, member ,author, auth}, {MessageEmbed} = require("discord.js"), moment = require("moment")) => {
let embed = new MessageEmbed()
      embed.setColor("RANDOM")
      embed.setAuthor(msg.author.tag, msg.author.avatarURL({dynamic: true}))
        moment.locale("tr");
      await this.client.users.fetch(args[0]).then(res => {
          if(!res){
              embed.setDescription("Geçerli bir kullanıcı ID si giriniz.")
              return msg.channel.send(embed)
          }else{
              msg.guild.fetchBans(true).then(async(bans) => {
                  let ban = await bans.find(a => a.user.id === res.id)
                  if(!ban){
                      embed.setDescription(`\`${res.tag}\` bu sunucuda yasaklı değil!`)
                      return msg.channel.send(embed)
                  }else{
                      let text = `:no_entry_sign:  ${res.tag} (\`${res.id}\`) adlı kullanıcı sunucumuzdan şu sebepten dolayı yasaklanmış:\n\n"${ban.reason || "Sebep Belirtilmemiş."}"`
                      msg.guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD', limit: 100}).then(audit => {
                          let user = audit.entries.find(a => a.target.id === res.id)
                          if(user){
                              embed.setDescription(text + `\n─────────────────────────────\nKullanıcı, ${user.executor.tag} (\`${user.executor.id}\`) tarafından ${moment(user.createdAt).format("lll")} tarihinde yasaklanmış.`)
                              return msg.channel.send(embed)
                          }else{
                              embed.setDescription(text + "\n\nBu yasaklama, son 100 yasaklama içinde olmadığından dolayı ban bilgisini yazamıyorum.")
                              return msg.channel.send(embed)
                          }
                      })
                  }
              })
          }
      }).catch(err => {
          embed.setDescription("Geçerli bir kullanıcı ID si giriniz.")
              return msg.channel.send(embed)
      })
    }

  module.exports.help = {
    name: "banbilgi",
    alias: []
  };