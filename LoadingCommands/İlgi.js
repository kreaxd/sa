let ilgiSize = new Set();
module.exports.operate = async ({client, msg, args, member, auth, author}, ms = require("ms"), Database = require("../Models/Restriction.js"), Schema = require("../Models/Member.js")) => {
    let VeriNumber = 0;   
    let Sayi;
  if (!ilgiSize[author.id])
        ilgiSize[author.id] = { kullanim: 0};
    if (ilgiSize[author.id].kullanim >= 5) return client.message(client.embed(`Bir gün içinde maximum 5 kişiye ilgi verebilirsin.`, msg), msg.channel.id, 6500);
  if (!member) return client.message(client.noMember(msg), msg.channel.id, 6500);
    msg.react(client.react("duztik"));
    member.roles.add("832050058743775260")
    client.message(`:cookie: ${author} tarafından ${member} adlı **ibibikine** ilgi verildi.`, msg.channel.id, 7500);
    Database.countDocuments().then(async x => {
  VeriNumber = ( x + 1 );
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
}

  module.exports.help = {
    name: "ilgi",
    alias: ["ilgiver"]
  };