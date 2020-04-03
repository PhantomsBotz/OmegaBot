const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'
 let db = require('quick.db')
  
module.exports = {
  name: 'userstatus',
  description: 'Checks your basic status.',
  category: 'Information',
  
  run:async (bot, message, args) => {
   let isDeveloper;
   let isPremium;
   let isPartner;
let status = bot.getUserStatus.get(message.author.id);
 
    let premiumCheck = status.premium;
    let partnerCheck = status.partner;
    if (message.author.id == '456641711486009355' || message.author.id == '513103852409716736'){
     isDeveloper = 'True';
    } else isDeveloper = 'False'
   
   
    if(premiumCheck = 1) {
     isPremium = "True"
    } else isPremium = "False"
    
    
    if(partnerCheck = 1) {
     isPartner = "True"
    } else isPartner = "False"
     
      let em = new Discord.RichEmbed()
      .setTitle("User Status")
      .addField("Is Premium User", isPremium)
      .addField("Is Developer", isDeveloper)
      .addField("Is Partner", isPartner)
       if(isPartner == "True") {
       em.setColor("PURPLE")
       }
      if(isPremium == "True") {
      em.setColor("GOLD")
      }


      message.channel.send({embed: em})

      
    }
}
