const auth = require('../authorization.json');
const client = process.client;
class Talent {
  constructor(msg) {
    this.msg = msg;
  }

  async TalentPerms() {
    client.komutlar = ["vip", "elite"];
    if (!Array.isArray(auth.GuildData.Prefixes)) auth.GuildData.Prefixes = [auth.GuildData.Prefixes];
    if (!auth.GuildData.Prefixes.some(x => this.msg.content.startsWith(x.toLowerCase()))) return;
    if (this.msg.author.bot || this.msg.guild.id !== auth.GuildData.GuildID || this.msg.channel.type === "dm") return;
    let args = auth.GuildData.Prefixes.some(x => this.msg.content.substring(x.oLowerCase().length)).split(" ");
    let command = args[0];
    args = args.splice(1);
    let member = this.msg.guild.member(this.msg.mentions.users.first()) || this.msg.guild.members.cache.get(args[0]);
    let komut = client.komutlar.find(k => k === command);
    if ((komut) && (komut === "vip" || komut === "elite")) {
       
    }
  }
}

module.exports.event = {
  name: "message",
  eventOn: message => new Talent(message).TalentPerms()
};