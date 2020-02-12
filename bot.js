const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
var prefix = "^"
let ascii = require('ascii-table')
let table = new ascii("Commands");
table.setHeading("Command", "Load status");
bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()
// event handler
module.exports = (bot) => {
    const load = dirs => {    
        const events = fs.readdirSync(`./events/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of events) {
            const evt = require(`./events/${dirs}/${file}`);
            let eName = file.split('.')[0];
            bot.on(eName, evt.bind(null, bot));
          };
        };
        ["logs"].forEach(x => load(x));
};
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
const MySQL = require("mysql")
var con = MySQL.createConnection({
    "host": "remotemysql.con",
    "user": "qOnmCFWJtY",
    "database": "qOnmCFWJtY",
    "password": process.env.SQLPASS
})

con.connect(err => {
    if(err) throw err
    console.log("Connected")
})

bot.on("guildCreate", (guild) => {
    con.query(`SELECT * FROM server WHERE guildid = ${guild.id}`, (err, rows) => {
        if(err) throw err
        
        let sql;
        
        sql = `INSERT INTO server (guildid, ownerid, partner, premium) VALUES ('${guild.id}', '${guild.owner.id}', '0', '0')`
        
        con.query(sql, console.log)
    })
})

//SQL -- DO NOT EDIT UNLESS YOU KNOW WHAT YOUR DOING

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
  if (message.channel.type == "dm") return;
  if (message.author.id === "242734840829575169") return;
  if (!message.content.startsWith(prefix)) return;
  if (cmd) {
    cmd.run(bot, message, args, Discord)
    console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`);
  }
})

bot.login(process.env.TOKEN)
