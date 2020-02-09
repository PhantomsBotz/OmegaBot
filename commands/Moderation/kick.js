const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'
module.exports = {
  name: 'kick',
  description: 'Kicks a member from your server. Requires KICK_MEMBERS permissions.',
  category: 'Moderation',
  aliases: ['kick'],
  
  run:async (bot, message, args) => {
  if (!message.member.hasPermission(["KICK_MEMBERS"])) return;
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("You need to mention someone to kick.")
    let reason = args.slice(1).join(' ');
    if (!reason) {
        if (member.displayName) {
            member.kick().then(message.channel.send(`Okay, just kicked ${member.displayName}.`))
        } else {
            member.kick().then(message.channel.send(`Okay, just kicked ${member.user.username}.`))
        }
    } else {
        if (member.displayName) {
            member.kick(reason).then(message.channel.send(`Okay, just kicked ${member.displayName}.`))
        } else {
            member.kick(reason).then(message.channel.send(`Okay, just kicked ${member.user.username}.`))
        }
    }
}

    }
}
