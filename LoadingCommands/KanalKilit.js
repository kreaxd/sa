module.exports.operate = async ({msg, author, client}) => {
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
  };
  
  module.exports.help = {
    name: "kanalkilit",
    alias: ["kk", "kilit", "kilitle", "lock"]
  };