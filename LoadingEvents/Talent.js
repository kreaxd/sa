const auth = require('../authorization.json');
const client = process.client;
class Talent {
  constructor(msg) {
    this.msg = msg;
  }

  async TalentPerms() {
    client.komutlar = ["vip", "elite", "streamer", "şair", "vokal", "vocal", "ressam"];
    if (!Array.isArray(auth.GuildData.Prefixes)) auth.GuildData.Prefixes = [auth.GuildData.Prefixes];
    if (!auth.GuildData.Prefixes.some(x => this.msg.content.startsWith(x.toLowerCase()))) return;
    if (this.msg.author.bot || this.msg.guild.id !== auth.GuildData.GuildID || this.msg.channel.type === "dm") return;
    let args = this.msg.content.substring(auth.GuildData.Prefixes.some(x => x.length)).split(" ");
    let command = args[0];
    args = args.slice(1);
    let author = this.msg.guild.member(this.msg.author);
    let member = this.msg.guild.member(this.msg.mentions.users.first()) || this.msg.guild.members.cache.get(args[0]);
    let komut = client.komutlar.find(k => k === command);
        client.Talent = async (msg, member, author, rol) => {
      if ((!author.roles.cache.some(r => auth.Perms.TalentAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
      if (!member) return client.message(client.noMember(this.msg), this.msg.channel.id, 6500);
      await member.roles.cache.has(rol) ? member.roles.remove(rol) : member.roles.add(rol).catch(() => { });
      await msg.react(client.react("duztik")).catch(() => { });
      client.message(client.embed(`${member} adlı üyede <@&${rol}> permi için gerekli işlemler yapılmıştır.`, msg), msg.channel.id, 4500);
      return client.message(client.embed(`${author} adlı yetkili ${member} (\`${member.id}\`) adlı kullanıcıya <@&${rol}> permi için gerekli işlemler yapılmıştır.`, msg), auth.GuildData.Chats.AbilityLog)
    }
    if ((komut) && (komut === "vip" || komut === "elite")) {
      clientç.Talent(this.msg, member, a)
    } else if ((komut) && (komut === "streamer")) {
      if ((!author.roles.cache.some(r => auth.Perms.TalentAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
      if (!member) return client.message(client.noMember(this.msg), this.msg.channel.id, 6500);
      await member.roles.cache.has(auth.Talent.Streamer) ? member.roles.remove(auth.Talent.Streamer) : member.roles.add(auth.Talent.Streamer);
      await this.msg.react(client.react("duztik")).catch(() => { });
      client.message(client.embed(`${member} adlı üyede <@&${auth.Talent.Streamer}> permi için gerekli işlemler yapılmıştır.`, this.msg), this.msg.channel.id, 4500);
      return client.message(client.embed(`${author} adlı yetkili ${member} (\`${member.id}\`) adlı kullanıcıya <@&${auth.Talent.Streamer}> permi için gerekli işlemler yapılmıştır.`, this.msg), auth.GuildData.Chats.AbilityLog)
    } else if ((komut) && (komut === "şair")) {
      if ((!author.roles.cache.some(r => auth.Perms.TalentAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
      if (!member) return client.message(client.noMember(this.msg), this.msg.channel.id, 6500);
      await member.roles.cache.has(auth.Talent.Şair) ? member.roles.remove(auth.Talent.Şair) : member.roles.add(auth.Talent.Şair);
      await this.msg.react(client.react("duztik")).catch(() => { });
      client.message(client.embed(`${member} adlı üyede <@&${auth.Talent.Şair}> permi için gerekli işlemler yapılmıştır.`, this.msg), this.msg.channel.id, 4500);
      return client.message(client.embed(`${author} adlı yetkili ${member} (\`${member.id}\`) adlı kullanıcıya <@&${auth.Talent.Şair}> permi için gerekli işlemler yapılmıştır.`, this.msg), auth.GuildData.Chats.AbilityLog)
    } else if ((komut) && (komut === "vokal" || komut === "vocal")) {
      if ((!author.roles.cache.some(r => auth.Perms.TalentAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
      if (!member) return client.message(client.noMember(this.msg), this.msg.channel.id, 6500);
      await member.roles.cache.has(auth.Talent.Vokal) ? member.roles.remove(auth.Talent.Vokal) : member.roles.add(auth.Talent.Vokal);
      await this.msg.react(client.react("duztik")).catch(() => { });
      client.message(client.embed(`${member} adlı üyede <@&${auth.Talent.Vokal}> permi için gerekli işlemler yapılmıştır.`, this.msg), this.msg.channel.id, 4500);
      return client.message(client.embed(`${author} adlı yetkili ${member} (\`${member.id}\`) adlı kullanıcıya <@&${auth.Talent.Vokal}> permi için gerekli işlemler yapılmıştır.`, this.msg), auth.GuildData.Chats.AbilityLog)
    } else if ((komut) && (komut === "ressam")) {
      if ((!author.roles.cache.some(r => auth.Perms.TalentAuth.includes(r.id))) && (!author.permissions.has("ADMINISTRATOR"))) return;
      if (!member) return client.message(client.noMember(this.msg), this.msg.channel.id, 6500);
      await member.roles.cache.has(auth.Talent.Ressam) ? member.roles.remove(auth.Talent.Ressam) : member.roles.add(auth.Talent.Ressam);
      await this.msg.react(client.react("duztik")).catch(() => { });
      client.message(client.embed(`${member} adlı üyede <@&${auth.Talent.Ressam}> permi için gerekli işlemler yapılmıştır.`, this.msg), this.msg.channel.id, 4500);
      return client.message(client.embed(`${author} adlı yetkili ${member} (\`${member.id}\`) adlı kullanıcıya <@&${auth.Talent.Ressam}> permi için gerekli işlemler yapılmıştır.`, this.msg), auth.GuildData.Chats.AbilityLog)
    }
  }
}

module.exports.event = {
  name: "message",
  eventOn: message => new Talent(message).TalentPerms()
};