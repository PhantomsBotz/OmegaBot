const fs = require('fs')
const Discord = require('discord.js')
const prefix = ';'
module.exports = {
  name: 'help',
  description: 'Shows this message',
  category: 'Information',
  aliases: ['h', 'cmds', 'commands'],
  
  run:async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)

        if(!args[0]) {
            const categories = fs.readdirSync("./commands/")

            embed.setDescription(`These are the avaliable commands for ${message.guild.me.displayName}\nThe bot prefix is: **${prefix}**`)
            embed.setFooter(`${message.guild.me.displayName} | Total Commands: ${bot.commands.size}`, bot.user.displayAvatarURL);

            categories.forEach(category => {
                const dir = bot.commands.filter(c => c.category === category)
                const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
                try {
                    embed.addField(`❯ ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.name}\``).join(" "))
                } catch(e) {
                    console.log(e)
                }
            })
            return message.channel.send(embed)
        } else {
            let command = bot.commands.get(args[0].toLowerCase())
            if(!command) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${prefix}help\` for the list of the commands.`))

            embed.setDescription(`The bot's prefix is: \`${prefix}\`\n
            **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
            **Description:** ${command.description || "No Description provided."}
            **Usage:** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage Provided"}
            **Accessible by:** ${command.accessableby || "All Members"}
            **Other Uses:** ${command.aliases ? command.aliases.join(", ") : "None."}`)

            return message.channel.send(embed)
        }
    }
}
