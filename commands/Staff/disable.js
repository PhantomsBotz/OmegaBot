const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const prefix = '^';
module.exports = {
  name: 'disable',
  description: 'Disables a command or entire selection of commands',
  category: 'Staff',
  run: async (bot, message, args) => {
  const dir = bot.commands.filter(c => c.category === category)
  const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
  message.channel.send(capitalise)
   // let isDisabled = await db.fetch(`Disabled_${message.guild.id}_${args[0]`)
   // if (isDisabled == true) return message.channel.send('That command is already disabled!')
   // else if (
  }
}
