const { Client } = require("discord.js");
const fs = require("fs");
const auth = require("./authorization.json");
const mongoose = require("mongoose");
const moment = require("moment");
require("moment-duration-format");
moment.locale("tr");

class Ukrayna extends Client {
  constructor() {
    super();
    this.commands = new Map();
    this.aliases = new Map();
    process.this = this;
  }

  isClass(input) {
    return (
      typeof input === "function" &&
      typeof input.prototype === "object" &&
      input.toString().substring(0, 5) === "class"
    );
  }

  commandHandler() {
    fs.readdir("./src/Files/Commands/", (err, files) => {
      console.log("Komutlar Yükleniyor.");
      if (err) return console.log(err);
      files
        .filter((f) => f.endsWith(".js"))
        .forEach((file) => {
          let prop = require(`../src/Files/Commands/${file}`);
          this.commands.set(prop.help.name, prop);
          prop.help.alias.forEach((alias) => {
            this.aliases.set(alias, prop.help.name);
          });
        });
      console.log(`Toplam ( ${files.length} ) Komut HRRRR`);
      console.log("--------------------------");
    });
  }

  eventHandler() {
    fs.readdir("./src/Files/Events/", (err, files, events = []) => {
      if (err) return console.log(err);
      console.log("--------------------------");
      console.log("Eventler yükleniyor.");
      files
        .filter((f) => f.endsWith(".js"))
        .forEach((file) => {
          let prop = require(`../src/Files/Events/${file}`);
          this.on(prop.event.name, prop.event.eventOn);
          events.push(prop.event.name);
        });
      console.log(
        "[" + events.join(", ") + "] " + " isimli event(ler) yüklendi."
      );
      console.log("--------------------------");
    });
  }

  start() {
    this.login(auth.Import.Token);
    this.commandHandler();
    this.eventHandler();
    mongoose
      .connect(auth.Import.MongooseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(
        console.log(
          "Mongoose bağlandı!\n" + mongoose.connections[0]._connectionString
        )
      )
      .catch((err) => console.log(err.message));
  }
}

module.exports = Ukrayna;
