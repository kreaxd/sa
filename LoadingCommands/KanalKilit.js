module.exports.operate = async ({msg, author, client, auth}) => {
    if (!author.permissions.has("ADMINISTRATOR")) return;
    if (!client.locked[msg.channel.id]) client.locked[msg.channel.id] = { lock: false };
    if (client.locked[msg.channel.id].lock === false) {
      client.message(`\`\`\`Kanal başarıyla kilitlendi.\`\`\``, msg.channel.id, 6500);
      msg.channel.updateOverwrite(msg.guild.roles.everyone, {  
        SEND_MESSAGES: false
      });   
      client.locked[msg.channel.id].lock = true;
    } else {
      client.message(`\`\`\`Kanal kilit başarıyla açıldı.\`\`\``, msg.channel.id, 6500);
      msg.channel.updateOverwrite(msg.guild.roles.everyone, {
        SEND_MESSAGES: null
      });
      client.locked[msg.channel.id].lock = false;
    };
    msg.react(client.react("duztik")).catch(() => { })
    client.channels.cache.get(auth.Logs.KomutLog).send(`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n${auth.Reacts.star} ${msg.author.tag}(\`${msg.author.id}\`) kullanıcısı <#${msg.channel.id}> kanalında bir komut kullandı.\n**Komutun içeriği:** \`${msg.content}\``)
  };
  
  module.exports.help = {
    name: "kanalkilit",
    alias: ["kk", "kilit", "kilitle", "lock"]
  };