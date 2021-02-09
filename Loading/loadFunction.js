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

