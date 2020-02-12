const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const prefix = '^';
const MySQL = require("mysql")
var con = MySQL.createConnection({
    "host": "remotemysql.com",
    "user": "qOnmCFWJtY",
    "database": "qOnmCFWJtY",
    "password": process.env.SQLPASS
})


module.exports = {
  name: 'premium',
  description: 'Allows the developers to change a users premium status.',
  category: 'Staff',
  run: async (bot, message, args, con) => {
   if(!message.author.id == "513103852409716736" || !message.author.id == "456641711486009355") return;
   let user = message.mentions.users.first().id
   let em = new Discord.RichEmbed()
   .setTitle("Premium Management")
   .addField("User has been given premium status.")
   .setColor("GOLD")
   
   con.query(`SHOW * FROM users WHERE userid = '${user}'`, (err, rows) => {
     let sql;
     let premium = rows[0].premium
      sql = `UPDATE users SET premium = '1' WHERE userid = '${message.author.id}'`
   })
    message.channel.send({embed: em})
  }
}
