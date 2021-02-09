
module.exports.operate = async ({client, msg, args, member, auth, author}, Schema = require("../Models/Member.js")) => {
  if ((!author.roles.cache.some(r => auth.Perms.RegisterAuth.includes(r.id))) & (!author.permissions.has("ADMINISTRATOR"))) return;
  if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
  
};
    
module.exports.help = {
  name: "ban",
  alias: ["bb", "maze", "kimsebas", "kimsebaş"]
};
 

 
  const isim = args.slice(1).filter(arg => isNaN(arg)).map(arg => arg.charAt(0).toUpperCase() + arg.slice(arg.charAt(0).length).toLowerCase()).join(" ");
  const yas = args.slice(1).filter(arg => !isNaN(arg))[0];
  const tag = member.user.username.includes(auth.Tags.RealTag) ? auth.Tags.RealTag : (auth.Tags.FakeTag === "" ? auth.Tags.RealTag : auth.Tags.FakeTag);
  if ((!isim) && (!yas)) return client.message(client.embed(`${client.react("iptal")} | Geçerli bir isim ya da yaş girmelisin.` ,msg), msg.channel.id, 6500);
  if ((isim) && (!yas)) {
    member.setNickname(`${tag} ${isim}`)
  } else if ((isim) || (yas)) {
    member.setNickname(`${tag} ${isim} | ${yas}`);
  };
  msg.react(client.react("duztik")).catch(() => { })
  };

 
   client.kayıtfunc(msg, args, uye, author, msg.guild, cfg.register.erkek, cfg, cfg.register.kız);

    client.Kayıt = async (msg, args, member, author, rolID, rol2ID, auth) => {
      
      
module.exports.operate = async ({client, msg, args, auth, author, member}, Schema = require("../Models/Member.js")) => {
  if ((!author.roles.cache.some(r => auth.Perms.RegisterAuth.includes(r.id))) & (!author.permissions.has("ADMINISTRATOR"))) return;
  if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
  let xd = (auth.Perms.Erkek,auth.Perms.Kız)
  if (xd.some(x => member.roles.cache.get(x.id))) return client.message(client.embed(`Bu kullanıcı zaten <@&${auth.Perms.Erkek[0]}> ya da <@&${auth.Perms.Kız[0]}> rolüne sahip eğer bir sorun var ise üst yönetime ulaşabilirsin.`, msg), msg.channel.id, 6500);
  const isim = args.slice(1).filter(arg => isNaN(arg)).map(arg => arg.charAt(0).toUpperCase() + arg.slice(arg.charAt(0).length).toLowerCase()).join(" ");
  const yas = args.slice(1).filter(arg => !isNaN(arg))[0];
  const tag = member.user.username.includes(auth.Tags.FakeTag) ? auth.Tags.RealTag : (auth.Tags.FakeTag === "" ? auth.Tags.RealTag : auth.Tags.FakeTag);
  let a = await Schema.findOne({SunucuID: msg.guild.id, userID: member.id})
  if ((isim) && (!yas)) {
    
  }
  
  
  
  
  
  
  if ((!isim) || (!yas)) {
      await member.roles.remove(auth.Perms.Unregister).catch(() => { });
      await member.roles.add(auth.Perms.Erkek).catch(() => { });
      await member.setNickname(`${tag} ${member.displayName}`).catch(() => { });
      if (!a) { new Schema({SunucuID: msg.guild.id, userID: member.id, History: [{ Name: `${tag} ${member.displayName}`, Roles: auth.Perms.Erkek[0], Author: author.id }]}).save();
    } else {
      a.History.push({ Name: `${tag} ${isim} | ${yas}`, Roles: auth.Perms.Erkek[0], Author: author.id});
      a.save();
    };
    } else {
      await member.roles.remove(auth.Perms.Unregister).catch(() => { });
      await member.roles.add(auth.Perms.Erkek).catch(() => { });
      await member.setNickname(`${tag} ${isim} | ${yas}`).catch(() => { });
      if (!a) { new Schema({SunucuID: msg.guild.id, userID: member.id, History: [{ Name: `${tag} ${isim} | ${yas}`, Roles: auth.Perms.Erkek[0], Author: author.id }]}).save();
      } else {
        a.History.push({ Name: `${tag} ${isim} | ${yas}`, Roles: auth.Perms.Erkek[0], Author: author.id});
        a.save();
      };
    }
    Schema.findOne({SunucuID: msg.guild.id, userID: author.id}, async (err,res) => {
      if (!res) { new Schema({SunucuID: msg.guild.id, userID: author.id, Authorized: { Man: 1, Members: [member.id]}}).save()
    } else {
      res.Authorized.Man++
      res.Authorized.Members.push(member.id);
      res.save();
    }
    });

};
    
  module.exports.help = {
    name: "e",
    alias: ["erkek", "erk", "erkk", "adam"]
  };
 