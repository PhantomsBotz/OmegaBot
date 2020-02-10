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
      
      if(message.member.roles.find(r => r.name === "Premium Member")) {
        isPremium = true
      } else {
        isPremium = false
      }
      if(message.author.id == "513103852409716736" || message.author.id == "456641711486009355") {
        isDeveloper = true
      } else {
        isDeveloper = false
      }
      isPartner = false
      
      let em = new Discord.RichEmbed()
      .setTitle("User Status")
      .addField("Is Premium User", isPremium)
      .addField("Is Developer", isDeveloper)
      .addField("Is Partner", isPartner)
      if(isPremium == true) {
      em.setColor("GOLD")
      } elsif (isPremium == false) {
      em.setColor("#5595A6")
      }
      message.channel.send({embed: em})

      
    }
}
