const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'
module.exports = {
  name: 'kick',
  description: 'Kicks the targeted member from your server.',
  category: 'Moderation',
  aliases: ['k', 'remove'],
  
  run:async (bot, message, args) => {
      let db = require('quick.db')
        let isDisabled = await db.fetch(`Disabled_${message.guild.id}_kick`);
    if (isDisabled == true) return;
    }
}
