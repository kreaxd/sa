module.exports.operate = async ({client, msg, args, auth}, {MessageEmbed} = require("discord.js")) => {
     if(!msg.member.roles.cache.has("821835566889828432") && !msg.member.roles.cache.has("805875752075001868")) return 
     let emb = new MessageEmbed().setColor(`2F3136`).setAuthor(`${msg.author.tag}`, msg.author.avatarURL({dynamic: true}))
     let member = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]));
     if(!member) return msg.channel.send(emb.setDescription(`Lütfen bir üyeyi etiketle ve tekrar dene!`))
     let rol = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[2])
     if(!rol) return msg.channel.send(`Lütfen bir rol belirt ve tekrar dene!`)
  
     if (!msg.member.hasPermission('ADMINISTRATOR')) {
     if (rol.id === "805875752075001873") return msg.channel.send(`${msg.author}`, emb.setDescription(`Yetki rolünü (<@&805875752075001873>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if (rol.id === "805875752087191626") return msg.channel.send(`${msg.author}`, emb.setDescription(`Yetki rolünü (<@&805875752087191626>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if (rol.id === "805875752012349483") return msg.channel.send(`${msg.author}`, emb.setDescription(`Yetki rolünü (<@&805875752012349483>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if (rol.id === "805875751940653157") return msg.channel.send(`${msg.author}`, emb.setDescription(`Yetki rolünü (<@&805875751940653157>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if (rol.id === "805875751928856605") return msg.channel.send(`${msg.author}`, emb.setDescription(`Yetki rolünü (<@&805875751928856605>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if (rol.id === "808252099912925194") return msg.channel.send(`${msg.author}`, emb.setDescription(`Üye rolünü (<@&808252099912925194>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if (rol.id === "805875751860568069") return msg.channel.send(`${msg.author}`, emb.setDescription(`Üye rolünü (<@&805875751860568069>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if (rol.id === "805875751860568068") return msg.channel.send(`${msg.author}`, emb.setDescription(`Üye rolünü (<@&805875751860568068>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if (rol.id === "808252095357911080") return msg.channel.send(`${msg.author}`, emb.setDescription(`Üye rolünü (<@&808252095357911080>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if (rol.id === "805875751844577366") return msg.channel.send(`${msg.author}`, emb.setDescription(`Bot rolünü (<@&805875751844577366>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if (rol.id === "805875751844577365") return msg.channel.send(`${msg.author}`, emb.setDescription(`Bot rolünü (<@&805875751844577365>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if (rol.id === "811772282954317926") return msg.channel.send(`${msg.author}`, emb.setDescription(`Yetki rolünü (<@&811772282954317926>) veremezsiniz/alamazsınız!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     }
  
     if(member.roles.highest.position <= rol.position) return msg.channel.send(`${msg.author}`, emb.setDescription(`${member} üyesinin en yüksek rolü ${member.roles.highest}, ve bu rolden daha yüksek bir rol veremezsiniz!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
     if(msg.member.roles.highest.position <= rol.position) return msg.channel.send(`${msg.author}`, emb.setDescription(`Sizin en yüksek rolünüz ${msg.member.roles.highest}, ve bu rolü veya daha yüksek bir rolü vermezsiniz!`)).then(msg.react('767841882864222229')).then(x => x.delete({timeout: 5000}))
   if (args[0] == "ver") {
       if(!member.roles.cache.has(rol)) {
await member.roles.add(rol)
msg.channel.send(emb.setDescription(`${client.react("duztik")} ${member} üyesine ${rol} rolü başarıyla verildi!`)).then(msg.react(client.react("duztik"))).then(x => x.delete({timeout: 5000}))
let kanal1 = msg.guild.channels.cache.get(auth.Logs.RolVerLog);
kanal1.send(emb.setDescription(`${client.react("duztik")} ${member} üyesine ${msg.author} tarafından ${rol} rolü başarıyla verildi!`))
       } else {
    msg.channel.send(emb.setDescription(`${client.react("iptal")} ${member} üyesinde ${rol} rolü zaten bulunmakta!`)).then(msg.react(client.react("iptal"))).then(x => x.delete({timeout: 5000}))
       }
   } else if (args[0] == "al") {
if(member.roles.cache.has(rol)) {
    msg.channel.send(emb.setDescription(`${client.react("iptal")} ${member} üyesinde ${rol} rolü yok!`)).then(msg.react(client.react("iptal"))).then(x => x.delete({timeout: 5000}))
} else {
    await member.roles.remove(rol)
    msg.channel.send(emb.setDescription(`${client.react("duztik")} ${member} üyesinden ${rol} rolü başarıyla alındı!`)).then(msg.react(client.react("duztik"))).then(x => x.delete({timeout: 5000}))
    let kanal11 = msg.guild.channels.cache.get(auth.Logs.RolVerLog);
    kanal11.send(emb.setDescription(`${client.react("duztik")} ${member} üyesine ${msg.author} tarafından ${rol} rolü başarıyla alındı!`))
}
   } else if (!args[0]) { 
       msg.channel.send(emb.setDescription(`Lütfen bir argüman belirt. \`!rol {al/ver} {user} {role}\` `))
   }
 }


module.exports.help = {
  name: "rol",
  alias: []
};
