const auth = require('../authorization.json');
const client = process.client;
class Talent {
  constructor(msg) {
    this.msg = msg;
  }

  async TalentPerms() {
    client.komutlar = ["vip", "elite", "streamer", "streamercezalı", "scezalı", "şair", "vokal", "vocal", "ressam", "tasarımcı", "tasarım", "yazılım", "muzisyen", "müzisyen", "müzik"];
    if (!Array.isArray(auth.GuildData.Prefixes)) auth.GuildData.Prefixes = [auth.GuildData.Prefixes];
    if (!auth.GuildData.Prefixes.some(x => this.msg.content.startsWith(x.toLowerCase()))) return;
    if (this.msg.author.bot || this.msg.guild.id !== auth.GuildData.GuildID || this.msg.channel.type === "dm") return;
    let args = this.msg.content.substring(auth.GuildData.Prefixes.some(x => x.length)).split(" ");
    let command = args[0];
    args = args.slice(1);
    let author = this.msg.guild.member(this.msg.author);
    let member = this.msg.guild.member(this.msg.mentions.users.first()) || this.msg.guild.members.cache.get(args[0]);
    let komut = client.komutlar.find(k => k === command);
    if ((komut) && (komut === "vip" || komut === "elite")) {
      client.Talent(this.msg, member, author, auth.Perms.Vip);
    } else if ((komut) && (komut === "streamer")) {
      client.Talent(this.msg, member, author, auth.Perms.Streamer);
    } else if ((komut) && (komut === "şair")) {
      client.Talent(this.msg, member, author, auth.Perms.Şair);
    } else if ((komut) && (komut === "vokal" || komut === "vocal")) {
      client.Talent(this.msg, member, author, auth.Perms.Vokal);  
    } else if ((komut) && (komut === "ressam")) {
     client.Talent(this.msg, member, author, auth.Perms.Ressam);
    } else if ((komut) && (komut === "yazılım" || komut === "tasarımcı" || komut === "tasarım")) {
     client.Talent(this.msg, member, author, auth.Perms.YazTas);
    } else if ((komut) && (komut === "muzisyen" || komut === "müzisyen" || komut === "müzik")) {
     client.Talent(this.msg, member, author, auth.Perms.Muzisyen);
    } else if ((komut) && (komut === "streamercezalı" || komut === "scezalı")) {
     client.Talent(this.msg, member, author, auth.Perms.StreamerCezalı);
    } 
  }
}


module.exports.event = {
  name: "message",
  eventOn: message => new Talent(message).TalentPerms()
};