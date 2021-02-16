const auth = require('../authorization.json');
const client = process.client;
class Talent {
  constructor(msg) {
    this.msg = msg;
  }

  async TalentPerms() {
    client.komutlar = ["vip", "elite", "streamer", "şair"];
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
      if ((!author.roles.cache.some(r => auth.Perms.TalentAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
      if (!member) return client.message(client.noMember(this.msg), this.msg.channel.id, 6500);
      await member.roles.cache.has(auth.Perms.Vip) ? member.roles.remove(auth.Perms.Vip) : member.roles.add(auth.Perms.Vip);
      await this.msg.react(client.react("duztik")).catch(() => { });
      client.message(client.embed(`${member} adlı üyede <@&${auth.Perms.Vip}> permi için gerekli işlemler yapılmıştır.`, this.msg), this.msg.channel.id, 4500);
      return client.message(client.embed(`${author} adlı yetkili ${member} (\`${member.id}\`) adlı kullanıcıya <@&${auth.Perms.Vip}> permi için gerekli işlemler yapılmıştır.`, this.msg), auth.GuildData.Chats.AbilityLog)
    } else if ((komut) && (komut === "streamer")) {
      if ((!author.roles.cache.some(r => auth.Perms.TalentAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
      if (!member) return client.message(client.noMember(this.msg), this.msg.channel.id, 6500);
      await member.roles.cache.has(auth.Talent.Streamer) ? member.roles.remove(auth.Talent.Streamer) : member.roles.add(auth.Talent.Streamer);
      await this.msg.react(client.react("duztik")).catch(() => { });
      client.message(client.embed(`${member} adlı üyede <@&${auth.Talent.Streamer}> permi için gerekli işlemler yapılmıştır.`, this.msg), this.msg.channel.id, 4500);
      return client.message(client.embed(`${author} adlı yetkili ${member} (\`${member.id}\`) adlı kullanıcıya <@&${auth.Talent.Streamer}> permi için gerekli işlemler yapılmıştır.`, this.msg), auth.GuildData.Chats.AbilityLog)
    } else if ((komut) && (komut === "şair")) {
      
    }
  }
}

module.exports.event = {
  name: "message",
  eventOn: message => new Talent(message).TalentPerms()
};