module.exports.operate = async ({client, msg, args,auth, author}, fetch = require('node-fetch'), Schema = require("../Models/Member.js")) => {
  let member = (msg.mentions.users.first()) || await (await fetch(`https://discord.com/api/users/${args[0]}`, {method:'GET', headers: {'Authorization': 'Bot ' + client.token}})).json();
  if ((!member) || (Object.keys(member).length == 1)) return client.message(client.noMember(msg), msg.channel.id, 6500);
  Schema.findOne({SunucuID: msg.guild.id, userID: member.id})
  };
    
  module.exports.help = {
    name: "ban",
    alias: ["bb", "maze", "kimsebas", "kimsebaş"]
  };
 

 