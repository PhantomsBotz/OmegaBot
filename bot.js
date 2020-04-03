const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const ubl = require(`./ubl.json`).userblacklists
var prefix = "^"
let ascii = require('ascii-table')
let table = new ascii("Commands");
table.setHeading("Command", "Load status");
bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()
// event handler
    const load = dirs => {    
        const events = fs.readdirSync(`./events/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of events) {
            const evt = require(`./events/${dirs}/${file}`);
            let eName = file.split('.')[0];
            bot.on(eName, evt.bind(null, bot));
          };
        };
        ["logs"].forEach(x => load(x));
// command handler
  fs.readdirSync("./commands/").forEach(dir => {
    
    const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
    for (let file of commands) {
      let pull = require(`./commands/${dir}/${file}`);
    
      if (pull.name) {
        bot.commands.set(pull.name, pull);
        table.addRow(file, '✅');
      } else {
        table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
        continue;
      }
    
      if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
    }
  });
    
  console.log(table.toString());

bot.on("ready", () => {
  console.log("Ready");
  bot.user.setActivity("^help");
    
    
});

//SQL -- DO NOT EDIT UNLESS YOU KNOW WHAT YOUR DOING

bot.on("ready", () => {
   let server = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'server';").get();
  if (!server['count(*)']) {
    sql.prepare("CREATE TABLE server (guildid TEXT, ownerid TEXT, partner TEXT, premium TEXT);").run();
    sql.prepare("CREATE UNIQUE INDEX idx_server_guildid ON server (guildid);").run();
    sql.pragma("journal_mode = wal");    
      sql.pragma("synchronous = 1");
  }
      let user = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'user';").get();
  if (!user['count(*)']) {
    sql.prepare("CREATE TABLE user (userid TEXT, premium INTEGER, partner INTEGER);").run();
    sql.prepare("CREATE UNIQUE INDEX idx_user_userid ON user (userid);").run();
    sql.pragma("journal_mode = wal");    
      sql.pragma("synchronous = 1");
  }
    bot.getUserStatus = sql.prepare("SELECT * FROM user WHERE userid = ?");
    bot.getGuildStatus = sql.prepare("SELECT * FROM server WHERE guildid = ?")
})
bot.on("guildCreate", (guild) => {
    sql.prepare(`INSERT INTO guild (guildid, ownerid, partner, premium) VALUES (${guild.id}, ${guild.owner.id}, 0, 0);`);
})

bot.on("message", (message) => {
   let usercheck = sql.prepare(`SELECT * FROM user WHERE userid = ?`).get(message.author.id)
    if(!usercheck) {
       sql.prepare(`INSERT INTO user (userid, premium, partner) VALUES ('${message.author.id}', '0', '0')`);
    } else return;
})
//Temp BaseWelcomer
bot.on("guildMemberAdd", (member) => {
    let guild = member.guild;
    let mainChannel = "676182247958904882"
    let channel = guild.channels.get(mainChannel)
    let memberRole = guild.roles.find(r => r.name == "Member")
    
  if (guild.id = "612404705376600072") {
      channel.send(`Welcome, ${member} to the Omega Support Server.`)
      member.addRole(memberRole)
  } else return console.log("Not Support Server.");
  
})




bot.on('message', message => {
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray[0].slice(prefix.length))
  if (message.author.bot) return;
  if(ubl.includes(message.author.id)) return;
  if (message.channel.type == "dm") return;
  if (message.author.id === "242734840829575169") return;
  if (!message.content.startsWith(prefix)) return;
  if (cmd) {
    cmd.run(bot, message, args, Discord, sql)
    console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`);
  }
})

bot.login(process.env.TOKEN)
