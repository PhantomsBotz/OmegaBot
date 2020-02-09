const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'
module.exports = {
  name: 'support',
  description: 'Lets our staff know you need help.',
  category: 'Support',
  aliases: "None",
  
  run:async (bot, message, args) => {
  let requestID = Math.random(Math.floor() * 9999999999999)
  const embed1 = new Discord.RichEmbed()
            .setTitle("Support notification")
            .addDescription(`${message.channel.author} has requested support`)
            .addField("Server", message.guild.name)
            .addField("Userid", message.author.id)
            .setFooter(`Request ID: ${requestID}` )
      bot.channels.get("676188131871162368").send({embed: embed1})
      
const embed2 = new Discord.RichEmbed()
          .setTitle("Request sent")
          .addDescription("Please wait for one of our staff members to Direct Message you.")
          .setFooter(`Request ID: ${requestID}`)
          message.channel.send({embed: embed2})
    }
}
