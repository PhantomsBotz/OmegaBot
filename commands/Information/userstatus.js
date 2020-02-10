const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'
module.exports = {
  name: 'userstatus',
  description: 'Checks your basic status.',
  category: 'Information',
  
  run:async (bot, message, args) => {
      let isDeveloper;
      let isPremium;
      let isPartner;
      
      if(message.member.roles.find(r => r.name === "Premium User")) {
        isPremium = true
        console.log("Premium = True")
      } else {
        isPremium = false
        console.log("Premium = False")
      }
      if(message.author.id == "513103852409716736" || message.author.id == "456641711486009355") {
        isDeveloper = true
        console.log("Developer = True")
      } else {
        isDeveloper = false
        console.log("Developer = False")
      }
      isPartner = false
      
      let em = new Discord.RichEmbed()
      .setTitle("User Status")
      .addField("Is Premium User", isPremium)
      .addField("Is Developer", isDeveloper)
      .addField("Is Partner", isPartner)
      if(isPremium == true) {
      em.setColor("GOLD")
      }
    if (isPremium == false) {
      em.setColor("#5595A6")
      }
      message.channel.send({embed: em})

      
    }
}
