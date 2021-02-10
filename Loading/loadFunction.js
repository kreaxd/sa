module.exports = (client, auth, moment) => {

    client.renk = new Array("#1f0524", "#0b0067", "#4a0038", "#07052a", "#FFDF00", "#00FFFF", "#0091CC", "#0047AB", "#384B77", "#ffffff", "#000000", "#04031a", "#f9ffba");

    client.message = (content, Channel, timeout) => {
        const channel = client.channels.cache.get(Channel);
          if (!timeout) {
            if (channel) channel.send(content).catch(() => { });
          } else {
            if (channel) channel.send(content).then((msg) => msg.delete({ timeout: timeout })).catch(() => { });
          }
     };
  
    client.Kayıt = async (msg, args, member, author, rolID, rol2ID, auth) => {
    if (member.roles.cache.some(r => auth.Perms.Unregister.includes(r.id))) {
      await member.roles.remove(auth.Perms.Unregister).catch(() => { });
      await member.roles.add(rolID).catch(() => { });
      await client.message(client.embed(`${member} kullanıcısı başarıyla <@&${rolID[0]}> alarak kaydedildi! İyi Eğlenceler`, msg), msg.channel.id, 3500);
      if (client.channels.cache.get(auth.GuildData.Chats.GenelChat)) client.message(client.embed(`Aramıza yeni biri katıldı! ${member} Hadi ona hoşgeldin diyelim.`), auth.GuildData.Chats.GenelChat, 7500);
    } else {
      await member.roles.remove(rol2ID).catch(() => { });
      await member.roles.add(rolID).catch(() => { });
      client.message(client.embed(`${member} kullanıcısına başarıyla <@&${rolID[0]}> rolü verildi.`, msg), msg.channel.id, 3000);
    };
  };
  
    client.embed = (message, msj) => {
        return {
          embed: {
          author: { name: msj.guild.member(msj.author).user.username, icon_url: msj.author.displayAvatarURL({dynamic: true}) },
          description: message,
          color: client.renk[Math.floor(Math.random() * client.renk.length)],
        }
      };
    };

    client.noMember = (message) => {
        return {
          embed: {
            author: { name: message.guild.member(message.author).user.username, icon_url: message.author.displayAvatarURL({dynamic: true}) },
            description: `Argümanları düzgün yerleştiriniz, etiketlediğiniz veya ID'sini belirttiğiniz kişinin düzgün olmasına dikkat ediniz.`,
            color: client.renk[Math.floor(Math.random() * client.renk.length)],
        }
      };
    };

    client.react = function(x) {
        return client.emojis.cache.get(auth.Reacts[x]);
    };

    client.format = sure => {
        return moment.duration(sure).format("D [gün,] H [saat,] m [dakika,] s [saniye.]");
    };
     
    client.toDate = date => {
        return moment(date).format("DD/MM/YYYY HH:mm:ss");
    };
     
    client.NumberAdd = ({Database, Message, Type}) => {
        Database.findOne({SunucuID: Message.guild.id, userID: Message.author.id}, async (err, res) => {
          if (!res) {
            if (Type === "BanAdd") {
              new Database({SunucuID: Message.guild.id , userID: Message.author.id, RestNumber: { BanNumber: 1 }}).save();
            } else if (Type === "JailAdd") {
              new Database({SunucuID: Message.guild.id, userID: Message.author.id, RestNumber: { JailNumber: 1 }}).save();
            } else if (Type === "MuteAdd") {
              new Database({SunucuID: Message.guild.id, userID: Message.author.id, RestNumber: { MuteNumber: 1 }}).save();
            } else if (Type === "VMuteAdd") {
              new Database({SunucuID: Message.guild.id, userID: Message.author.id, RestNumber: { VMuteNumber: 1 }}).save();
            };
          } else {
           if (Type === "BanAdd") {
              res.RestNumber.BanNumber = Number(res.RestNumber.BanNumber + 1);
              res.save();
            } else if (Type === "JailAdd") {
              res.RestNumber.JailNumber = Number(res.RestNumber.JailNumber + 1);
              res.save();

            } else if (Type === "MuteAdd") {
              res.RestNumber.MuteNumber = Number(res.RestNumber.MuteNumber + 1);
              res.save();
            } else if (Type === "VMuteAdd") {
              res.RestNumber.VMuteNumber = Number(res.RestNumber.VMuteNumber + 1);
              res.save();
            };
          };
        });
      };
      client.chunkArray = (arr, chunkSize) => {
        const chunks = [];
        let currentChunk = [];
        for (let i = 0; i < arr.length; i++) {
          currentChunk.push(arr[i]);
          if ((i !== 0 && i % chunkSize === 0) || i === arr.length - 1) {
            chunks.push(currentChunk);
            currentChunk = [];
          };
        };
        return chunks;
      };

      client.clean = text => {
        if (typeof text !== "string")
        text = require("util").inspect(text, { depth: 0 });
        text = text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
      };
  
  client.getDate = (date, type) => {
let sure;
date = Number(date);
if (type === "saniye") { sure = (date * 1000) }
else if (type === "dakika") { sure = (60 * 1000) * date }
else if (type === "saat") { sure = ((60 * 1000) * 60) * date }
else if (type === "gün") { sure = (((60 * 1000) * 60) * 24) * date }
else if (type === "hafta") { sure = ((((60 * 1000) * 60) * 24) * 7) * date }
else if (type === "ay") { sure = ((((60 * 1000) * 60) * 24) * 30) * date }
else if (type === "yıl") { sure = ((((((60 * 1000) * 60) * 24) * 30) * 12) + 5) * date };
return sure;
};


      Array.prototype.chunk = function(chunk_size) {
        let myArray = Array.from(this);
        let tempArray = [];
        for (let index = 0; index < myArray.length; index += chunk_size) {
          let chunk = myArray.slice(index, index + chunk_size);
          tempArray.push(chunk);
        };
        return tempArray;
      };
};

