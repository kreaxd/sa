const client = process.this;

class Ready {
  constructor(guild) {
    this.guild = guild;
  }
  kur() {
     client.user.setActivity("I Love You Mâze");
    console.log("("+client.user.username +") adlı hesapta [" +this.guild.name+"] adlı sunucuda giriş yapıldı.");
  }
}

async function ready() {
  let readyy = new Ready(client.guilds.cache.get("801137625729335316"));
  await readyy.kur();
};

module.exports.event = {
  name: "ready",
  eventOn: () => ready()
};