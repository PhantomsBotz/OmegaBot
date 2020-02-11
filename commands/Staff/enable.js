const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const prefix = '^';

module.exports = {
  name: 'enable',
  description: 'Enable a command or entire selection of commands',
  category: 'Staff',
  run: async (bot, message, args) => {
 if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Error: Missing permissions')
    let success = new Discord.RichEmbed()
    .setTitle('Success!')
    .setDescription(`Successfully enabled the command ${args[0]}.`)
    .setColor('#5595A6');
        const embed = new Discord.RichEmbed()
            .setColor('#5595A6')
            .setAuthor(`${message.guild.me.displayName}`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL);    
    
    
     let command = bot.commands.get(args[0].toLowerCase());
    let isDisabled = await db.fetch(`Disabled_${message.guild.id}_${args[0]}`);
        if (args[0] == 'help' || args[0] == 'disable' || args[0] == 'enable' || args[0] == 'support') return message.channel.send(':x: That command cannot be disabled.');
    if (!command) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${prefix}help\` for the list of the commands.`))
    if (isDisabled == null) isDisabled = false
    if (isDisabled == false) return message.channel.send('That command is already enabled!');
    else {
     db.set(`Disabled_${message.guild.id}_${args[0]}`, false)    
      message.channel.send(success)
    }
  }
}
