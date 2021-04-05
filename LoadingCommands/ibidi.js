module.exports.operate = async ({client, msg, args, author, auth}, Discord = require("discord.js"), moment = require("moment")) => {
    if (!author.permissions.has("ADMINISTRATOR")) return;
 const filter = (reaction, user) => {
        return ["✅"].includes(reaction.emoji.name) && user.id === msg.author.id; 
    };
          let role = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[0]);
    if (!args[0]) return msg.channel.send("**Bir rol girin.**")
        if (!role) return msg.channel.send("**Geçerli bir rol gir.**");
        let membersWithRole = msg.guild.members.cache.filter(member => {
            return member.roles.cache.find(r => r.name === role.name);
        }).map(member => {
            return member.user;
        })

        const status = {
            false: "Hayır",
            true: "Evet"
        }
    let sesteolmayan = msg.guild.members.cache.filter(s => s.roles.cache.has(role.id)).filter(s => s.presence.status !== "offline").filter(s => !s.voice.channel).map(s => s).join(' ')
    let sesteolan = msg.guild.members.cache.filter(s => s.roles.cache.has(role.id)).filter(s => s.voice.channel).map(s => s).join(', ')

        msg.channel.send(`
		Seste olan/olmayanları öğrenmek için tepkiye tıklayın
Rol ismi: ${role.name}
ID: ${role.id}
Rol rengi: ${role.hexColor}
**---------------------------------------------------**
Rolde ${role.members.size} kişi var.
Bulunduğu pozisyon: ${role.position}
Bahsedilebilir mi?: ${status[role.mentionable]}
Roldeki üyeler: 
${membersWithRole.join(",")}
       
`).then(x => {
x.react("✅");  
x.awaitReactions(filter, {max: 1, time: 10000, error: ['time']}).then(z => {
            let donut = z.first();
            if (donut) {
				
			  x.edit(`Seste olanlar:\n ${sesteolan}\n Seste olmayan(Çevrimdışıyı saymıyorum): \n ${sesteolmayan}`);
            };
        });
	    });		
        
    

}

  module.exports.help = {
    name: "ibidii",
    alias: ["ibidiii"]
  };
