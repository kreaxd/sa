module.exports.operate = async ({client, msg, args, author, auth}, Database = require("../Models/Member.js")) => {
if ((!author.roles.cache.some(r => auth.Perms.RegisterAuth.includes(r.id))) & (!author.permissions.has("ADMINISTRATOR"))) return;
    
};
  
  module.exports.help = {
    name: "xd",
    alias: [""]
  };

