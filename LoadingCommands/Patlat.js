module.exports.operate = async ({client, msg, args, author, auth}) => {
    if (!auth.GuildData.BotOwners.includes(author.id)) return null;
      msg.channel.send("sunucu patlıyoooooooooooooooooooooooo");
};

module.exports.help = {
    name: "patlat",
    alias: []
  };

  
