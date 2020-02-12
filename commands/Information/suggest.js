const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'
module.exports = {
    name: 'suggest',
    description: 'Allows you to suggest commands and other features to our developer team.',
    category: 'Information',

    run: async (bot, message, args) => {
      let Channel = "676953329536073759"
      let suggest = args.join(" ");
      let em = new Discord.RichEmbed()
      .setTitle("Suggestion")
      .setDescription(`This was sent by ${message.author.username}`)
      .addField("User ID: ", message.author.id)
      .addField("Suggestion: ", suggest)
      .setColor("#5595A6")
      
      bot.channels.get(Channel).send({embed: em})
    }
}
