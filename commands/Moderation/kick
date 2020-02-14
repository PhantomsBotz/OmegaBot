const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'

module.exports = {
  name: 'kick',
  description: 'Kicks the targeted member from your server.',
  category: 'Moderation',
  aliases: ['k', 'remove'],
  run:async (bot, message, args) => {
    let reason;
     if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Error: Missing permissions')
     let db = require('quick.db')
        let isDisabled = await db.fetch(`Disabled_${message.guild.id}_kick`);
    if (isDisabled == true) return;
            var member = message.mentions.members.first() || bot.users.get(args[0]);
    
    let kicked = new Discord.RichEmbed()
    .setTitle('User Kicked')
    .addField('User:', member.username + ' (<@' + member.id + '>)', true)
    .addField('Moderator:', `<@${message.author.id}>`, true)
    .addField('Reason:', reason, true)
    if (!args[1]) {
     message.channel.send('Looks like you never set a reason. You can set a reason by doing `^reason [User ID] [Reason for kick]`');
      reason = 'No reason provided';
    }
    else reason = args.slice(1).join(" ")
        // Kick
        member.kick({
          reason: reason,
        })).then((member) => {
            // Successmessage
            message.channel.send(kicked);
        }).catch(() => {
             // Failmessage
            message.channel.send("An error occured!");
        });
    }
    }
}
