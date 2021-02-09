
module.exports.operate = async ({client, msg, args, member, auth, author}) => {
    if ((!author.roles.cache.some(r => auth.Perms.RegisterAuth.includes(r.id))) & (!author.permissions.has("ADMINISTRATOR"))) return;
  if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
  const isim = args.slice(1).filter(arg => isNaN(arg)).map(arg => arg.charAt(0).toUpperCase() + arg.slice(arg.charAt(0).length).toLowerCase()).join(" ");
  const yas = args.slice(1).filter(arg => !isNaN(arg))[0];
  const tag = member.user.username.includes(auth.Tags.RealTag) ? auth.Tags.RealTag : (auth.Tags.FakeTag === "" ? auth.Tags.RealTag : auth.Tags.FakeTag;
  uye.setNickname(`${tag} ${isim} ${cfg.register.ayrac} ${yas}`);
  if(!isim || !yaş) return client.mesaj(message.channel.id,5500,randm.setDescription(`${react("iptal")} | Geçerli bir isim ve yaş belirtmelisin!`));
  };
    
  module.exports.help = {
    name: "jail",
    alias: ["cezalı", "cezali"]
  };


 