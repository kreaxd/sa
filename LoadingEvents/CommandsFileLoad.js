const client = process.client;
const auth = require("../authorization.json");

class Command {
  constructor(msg) {
    this.msg = msg;
  }

  async useCommand() {
    if (!Array.isArray(auth.GuildData.Prefixes)) auth.GuildData.Prefixes = [auth.GuildData.Prefixes];
    //if (["!tag", ".tag"].some(x => this.msg.content.toLowerCase().startsWith(x))) return this.msg.channel.send(auth.Tags.RealTag);
    if (!auth.GuildData.Prefixes.some(x => this.msg.content.startsWith(x.toLowerCase()))) return;
    if (this.msg.author.bot || this.msg.guild.id !== auth.GuildData.GuildID || this.msg.channel.type === "dm") return;
    let args = this.msg.content.slice(auth.GuildData.Prefixes.some(x => x.toLowerCase().length)).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    let author = this.msg.guild.member(this.msg.author);
    let member = this.msg.guild.member(this.msg.mentions.users.first()) || this.msg.guild.members.cache.get(args[0]);
    let cmd;
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    };
    if (cmd) {
      cmd.operate({ client: client, msg: this.msg, args: args, author: author, member: member, auth: auth });
    };
  }
}

module.exports.event = {
  name: "message",
  eventOn: message => new Command(message).useCommand()
};