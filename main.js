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
    let botVoiceChannel = client.channels.cache.get("808977740874645505");
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});

const MainBot = new Client();
const { CronJob } = require('cron');

new CronJob('00 00 00 1 * 0', function() {
    
    const Time = 1000 * 60 * 60 * 24 * 7 * 4;
    const Guild = MainBot.guilds.cache.first();
    
    Guild.members.cache.filter((member) => (member.joinedTimestamp - Date.now()) >= Time).forEach((member) => member.roles.add('1_AY'));
    Guild.members.cache.filter((member) => (member.joinedTimestamp - Date.now()) >= Time * 3).forEach((member) => member.roles.add('3_AY'));
    Guild.members.cache.filter((member) => (member.joinedTimestamp - Date.now()) >= Time * 6).forEach((member) => member.roles.add('6_AY'));

}, null, true, 'Europa/Istanbul');