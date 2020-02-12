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
      
      let response = new Discord.RichEmbed()
      .setTitle("Thank you for the suggestion!")
      .setDescription("This has been sent to my developer team.")
      .setColor("#5595A6")
      .setFooter(`This was requested by ${message.author.username}`)
      
      bot.channels.get(Channel).send({embed: em}).then(message.channel.send({embed: response}))
    }
}
