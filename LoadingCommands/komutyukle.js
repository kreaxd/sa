module.exports.operate = async ({client, msg, args, author, auth}) => {
    if (!auth.GuildData.BotOwners.includes(author.id)) return null;
    if (!args[0]) return msg.reply('Bir komut belirt!');
  let komutlar;
  if(client.commands.has(args[0])) {
    komutlar = client.commands.get(args[0]);
  } else if (client.aliases.has(args[0])){
    komutlar = client.commands.get(client.aliases.get(args[0]));
  }
  if(!komutlar) return msg.reply(`\`\``)
    
}