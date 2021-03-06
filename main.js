const { Client } = require("discord.js");
const fs = require("fs");
const auth = require("./authorization.json");
const mongoose = require("mongoose");
const moment = require("moment");
require("moment-duration-format");
moment.locale("tr");
const client = new Client({ disableMentions: "everyone", ignoreDirect: true, ignoreRoles: true, fetchAllMembers: true, _tokenType: "Bot" });
client.commands = new Map();
client.aliases = new Map();
client.locked = new Set();
client.snipe = new Set();
client.AFKLAR = new Set();
client.AFKLAR2 = new Set();
client.reklamcilar = new Set();
process.client = client;
require("./Loading/loadFunction.js")(client, auth, moment);
require("./Loading/loadEvents.js")(fs, client);
require("./Loading/loadCommands.js")(fs, client);
require("./Loading/loadMongoose.js")(mongoose, auth);
require("./Loading/loadToken.js")(client, auth);

client.on("message", async msg => {
    let botVoiceChannel = client.channels.cache.get("828849791961661490");
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});