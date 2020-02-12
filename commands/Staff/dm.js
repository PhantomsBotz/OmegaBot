const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'
module.exports = {
    name: 'dm',
    description: 'Allows staff to remotly contact the user.',
    category: 'Staff',

    run: async (bot, message, args) => {
      let targetid = args[0]
      let Message = args.join(" ").pop(0)
      
      let targetMessage = new Discord.RichEmbed()
      .setTitle("Message from my Developer Team")
      .setDescription(`This was sent by ${message.author.username}`)
      .addField("Message: ", Message)
      .setColor("#5595a6")
      
      let response = new Discord.RichEmbed()
      .setTitle("Message Sent.")
      .setColor("#5595a6")
    
    if(message.author.id == "513103852409716736" || message.author.id == "456641711486009355") {
        bot.users.get(targetid).send({embed: targetMessage}).then(message.channel.send({embed: response}))
      }
    }
}
