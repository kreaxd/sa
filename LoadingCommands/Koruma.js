module.exports.operate = async ({client, msg, args, author, auth}) => {
let arr = ["282238108739567647","94238588211822592","352558230326607873","739305512658665503"]
    if(!arr.includes(msg.author.id)) return msg.channel.send("<:ibi_carpi:828716070612893747> Sadece bot sahipleri kurucular kullanabilir!").then(msg.react('828716070612893747')).then(x => x.delete({timeout: 5000}))
if(args[0] == "kapat") {
        let enust2 = msg.guild.roles.cache.get("826924665972588565")
        let enust1 = msg.guild.roles.cache.get("826924665946636377")
        let cifttag = msg.guild.roles.cache.get("826924665946636372")
        let tektag = msg.guild.roles.cache.get("826924665946636371")

        enust2.setPermissions(503316439)
        enust1.setPermissions(503185351)
        cifttag.setPermissions(33415105)
				tektag.setPermissions(33415105)




        msg.channel.send(`<:ibi_tik:828716042083500052> Sunucumuzun yönetici rolleri tekrardan aktif hale getirilmiştir.`)
} else if(args[0] == "aç") {
          let enust2 = msg.guild.roles.cache.get("826924665972588565")
        let enust1 = msg.guild.roles.cache.get("826924665946636377")
        let cifttag = msg.guild.roles.cache.get("826924665946636372")
        let tektag = msg.guild.roles.cache.get("826924665946636371")

        enust2.setPermissions(0)
        enust1.setPermissions(0)
        cifttag.setPermissions(0)
				tektag.setPermissions(0)
}
msg.channel.send(`<:ibi_carpi:828716070612893747> Sunucumuzun yönetici rolleri **kapatılmıştır**, sunucu güvenli moda alınmıştır!`)

} 

module.exports.help = {
    name: "koruma",
    alias: []
  };

  
