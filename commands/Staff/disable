const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const prefix = '^';
const embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${message.guild.me.displayName}`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL);
module.exports = {
  name: 'disable',
  description: 'Disables a command or entire selection of commands',
  category: 'Staff',
  run: async (bot, message, args) => {
     let command = bot.commands.get(args[0].toLowerCase())
    let isDisabled = await db.fetch(`Disabled_${message.guild.id}_${args[0]}`);
    if (isDisabled == true) return message.channel.send('That command is already disabled!');
    if (!command) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${prefix}help\` for the list of the commands.`))
  }
}
