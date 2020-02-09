const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
var prefix = "^"

let table = new ascii("Commands");
table.setHeading("Command", "Load status");
bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()
  fs.readdirSync("./commands/").forEach(dir => {
    
    const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
    for (let file of commands) {
      let pull = require(`../commands/${dir}/${file}`);
    
      if (pull.name) {
        client.commands.set(pull.name, pull);
        table.addRow(file, '✅');
      } else {
        table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
        continue;
      }
    
      if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    }
  });
    
  console.log(table.toString());

bot.on("ready", () => {
  console.log("Ready");
  bot.user.setActivity("^help");
});

bot.on('message', message => {
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray[0].slice(prefix.length))
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.startsWith(prefix)) return;
  if (cmd) {
    cmd.run(bot, message, args, Discord)
    console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`);
  }
})

bot.login(process.env.TOKEN)
