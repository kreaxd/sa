const Ukrayna = require("./src/Client.js");
const client = new Ukrayna({
  disableMentions: "everyone",
  ignoreDirect: true,
  ignoreRoles: true,
  fetchAllMembers: true,
  _tokenType: "Bot",
}).start();
