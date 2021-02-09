const client = process.client;
const auth = require("../authorization.json");
const Discord = require("discord.js");
class MessageDelete {
  constructor(msg, sunucu) {
    this.msg = msg;
    this.sunucu = sunucu;
  }

  snipe() {
    if (this.msg.author.bot) return;
    client.snipe[this.msg.channel.id] = { atan: this.msg.author.id, tarih: client.toDate(new Date()), content: this.msg.content };
  }
}

function messageDelete(msg) {
  let Hook = new Discord.WebhookClient(cfg.webHooks.messageLog.id, cfg.webHooks.messageLog.token);
  new MessageDelete(msg, cfg.sunucu).logla(Hook);
  new MessageDelete(msg, cfg.sunucu).snipe();
};

module.exports.event = {
  name: "messageDelete",
  eventOn: message => messageDelete(message)
};