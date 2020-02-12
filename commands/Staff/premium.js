const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const prefix = '^';



module.exports = {
  name: 'premium',
  description: 'Allows the developers to change a users premium status.',
  category: 'Staff',
  run: async (bot, message, args, con) => {
   const MySQL = require("mysql")
var con = MySQL.createConnection({
    "host": "remotemysql.com",
    "user": "qOnmCFWJtY",
    "database": "qOnmCFWJtY",
    "password": process.env.SQLPASS
})
      
   if(!message.author.id == "513103852409716736" || !message.author.id == "456641711486009355") return;
   let user = message.mentions.users.first().id
   if(!user) return message.channel.send("**You need to mention someone to give premium to. <:OmegaError:676294970377764864>**")
   let em = new Discord.RichEmbed()
   .setTitle("Premium Management")
   .addField("User has been given premium status.", `<@${user}>`)
   .setColor("GOLD")
   
   con.query(`SHOW * FROM user WHERE userid = '${user}'`, (err, rows) => {
     let sql;

      sql = `UPDATE user SET premium = 1 WHERE userid = '${message.author.id}'`
    con.query(sql, console.log)
   })
    message.channel.send({embed: em})
  }
}
