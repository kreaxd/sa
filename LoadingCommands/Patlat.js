module.exports.operate = async ({client, msg, args, author, auth}) => {
      if (!auth.GuildData.BotOwners.includes(author.id)) return null;
      msg.channel.send("Sunucunun `TACI` rastgele birisine atılıp seni (<@282238108739567647>) başarılı bir şekilde yasakladım!");
};

module.exports.help = {
    name: "quit",
    alias: []
  };

  
