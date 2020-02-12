const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'
 let db = require('quick.db')
  
module.exports = {
  name: 'userstatus',
  description: 'Checks your basic status.',
  category: 'Information',
  
  run:async (bot, message, args) => {
      const MySQL = require("mysql")
var con = MySQL.createConnection({
    "host": "remotemysql.com",
    "user": "qOnmCFWJtY",
    "database": "qOnmCFWJtY",
    "password": process.env.SQLPASS
})
   
    let isDisabled = await db.fetch(`Disabled_${message.guild.id}_userstatus`);
    if (isDisabled == true) return;
      let isDeveloper;
      let isPremium;
      let isPartner = "Not Implimented"
   
   con.query(`SELECT * FROM user WHERE userid = ${message.author.id}`, (err, rows) => {
    if(err) throw err
    
    let premiumCheck = rows[0].premium
    let partnerCheck; // Not Implimented Yet.
    
    if(premiumCheck = "1") {
    isPremium = "True"
    }
    
   })
     
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
    if (isPremium == "False") {
      em.setColor("#5595A6")
      }


      message.channel.send({embed: em})

      
    }
}
