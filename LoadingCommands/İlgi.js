let ilgiSize = new Set();
module.exports.operate = async ({client, msg, args, member, auth, author}, ms = require("ms"), Database = require("../Models/Restriction.js"), Schema = require("../Models/Member.js")) => {
    let VeriNumber = 0;   
    let Sayi;
    let Veri = await Schema.findOne({SunucuID: msg.guild.id, userID: member.id})
  const isim = args.slice(1).filter(arg => isNaN(arg)).map(arg => arg.charAt(0).toUpperCase() + arg.slice(arg.charAt(0).length).toLowerCase()).join(" ");
  const yas = args.slice(1).filter(arg => !isNaN(arg))[0];
  const tag = member.user.username.includes(auth.Tags.RealTag) ? auth.Tags.RealTag : (auth.Tags.FakeTag === "" ? auth.Tags.RealTag : auth.Tags.FakeTag);
  if (!ilgiSize[author.id])
        ilgiSize[author.id] = { kullanim: 0};
    if (ilgiSize[author.id].kullanim >= 5) return client.message(client.embed(`Bir gün içinde maximum 5 kişiye ilgi verebilirsin.`, msg), msg.channel.id, 6500);
  if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
    msg.react(client.react("duztik"));
    member.roles.add("832050058743775260")
    client.message(`:cookie: ${author} tarafından ${member} adlı **ibibiğine** ilgi verildi.`, msg.channel.id, 7500);
    Database.countDocuments().then(async x => {
  VeriNumber = ( x + 1 );
            if (!Veri) { new Schema({SunucuID: msg.guild.id, userID: member.id, History: [{ Name: `${tag} ${isim}`, Roles: auth.Perms.Cookie[0], Author: author.id }]}).save();
    } else {
      Veri.History.push({ Name: `${tag} ${isim}`, Roles: auth.Perms.Cookie[0], Author: author.id});
      Veri.save();
    };
  Schema.findOne({SunucuID: msg.guild.id, userID: member.id}, async (err, res) => {
    if (!res) {
      Sayi = 4;
      new Schema({SunucuID: msg.guild.id , userID: member.id, ilgiPuan: 4}).save();
    } else {
      res.ilgiPuan = Number(res.ilgiPuan + 4);
      res.save();
      Sayi = res.ilgiPuan;
      }
      ilgiSize[author.id].kullanim++;
    setTimeout(() => {
        if (ilgiSize[author.id].kullanim >= 4) {
            ilgiSize[author.id].kullanim = 0;
        }
    }, 86400000);
    })
    })
    Schema.findOne({SunucuID: msg.guild.id, userID: author.id}, async (err,res) => {
    if (!res) { new Schema({SunucuID: msg.guild.id, userID: author.id, ilgiBilgi: { Man: 1, Members: [member.id]}}).save()
  } else {
    res.ilgiBilgi.Man++
    res.ilgiBilgi.Members.push(member.id);
    res.save();
  }
  });
}

  module.exports.help = {
    name: "ilgi",
    alias: ["ilgiver", "ilgi-ver"]
  };