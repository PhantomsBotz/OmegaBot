const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const prefix = '^';

module.exports = {
  name: 'premium',
  description: 'Allows the developers to change a users premium status.',
  category: 'Staff',
  run: async (bot, message, args, con) => {
   let user = message.mentions.users.first().id
   let em = new Discord.RichEmbed()
   .setTitle("Premium Management")
   .addField("User has been given premium status.")
   .setColor("GOLD")
   
   con.query(`SHOW * FROM users WHERE userid = '${user}'`, (err, rows) => {
     let sql;
     let premium = rows[0].premium
      sql = `UPDATE users SET premium = '1' WHERE userid = '${message.author.id}'`
   }).then(message.channel.send({embed: em}))
  }
}
