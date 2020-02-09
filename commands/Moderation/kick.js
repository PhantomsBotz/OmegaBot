const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'
module.exports = {
  name: 'kick',
  description: 'Kicks a member from your server. Requires KICK_MEMBERS permissions.',
  category: 'Moderation',
  aliases: ['kick'],
  
  run:async (bot, message, args) => {
    if (!message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send("You do not have KICK_MEMBERS permissions.")
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("You need to mention someone to ban.")
    let reason = args.slice(1).join(' ');
    
        if (!reason) {
        if (member.displayName) {
            member.ban().then(message.channel.send(`Okay, just banned ${member.displayName}.`))
        } else {
            member.ban().then(message.channel.send(`Okay, just banned ${member.user.username}.`))
        }
    } else {
        if (member.displayName) {
            member.ban(reason).then(message.channel.send(`Okay, just banned ${member.displayName}.`))
        } else {
            member.ban(reason).then(message.channel.send(`Okay, just banned ${member.user.username}.`))
        }
  
    }
}
