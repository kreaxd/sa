module.exports.operate = async ({client, msg, args,auth, author}, fetch = require('node-fetch'), Schema = require("../Models/Member.js")) => {
client.message(`${auth.Tags.RealTag}`, msg.channel.id, 6500);
        client.channels.cache.get(auth.GuildData.Chats.KomutChat).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n**${auth.Reacts.star} ${msg.author.tag}**(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
  };
    
  module.exports.help = {
    name: "tag",
    alias: []
  };
 

 