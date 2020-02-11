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
        isPremium = "True"
        console.log("Premium = True")
      } else {
        isPremium = "False"
        console.log("Premium = False")
      }
      if(message.author.id == "513103852409716736" || message.author.id == "456641711486009355") {
        isDeveloper = "True"
        console.log("Developer = True")
      } else {
        isDeveloper = "False"
        console.log("Developer = False")
      }
      if(message.member.roles.find(r => r.name === "Partnerships")) {
       isPartner = "True"
      } else {
       isPartner = "False"
      }
      let em = new Discord.RichEmbed()
      .setTitle("User Status")
      .addField("Is Premium User", isPremium)
      .addField("Is Developer", isDeveloper)
      .addField("Is Partner", isPartner)
      if(isPremium == "True") {
      em.setColor("GOLD")
      }
    if (isPremium == "False" || isPartner == "False") {
      em.setColor("#5595A6")
      }
    if(isPartner == "True") {
       em.setColor("PURPLE")
       }

      message.channel.send({embed: em})

      
    }
}
