const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^';
const db = require('quick.db');
module.exports = {
  name: 'eval',
  description: 'Evaluates a Javascript String',
  category: 'Staff',
  aliases: ['exe', 'execute'],
  
  run:async (bot, message, args, con) => {
        const MySQL = require("mysql")
var con = MySQL.createConnection({
    "host": "remotemysql.com",
    "user": "qOnmCFWJtY",
    "database": "qOnmCFWJtY",
    "password": process.env.SQLPASS
})


const IDS = require(`../../config.json`).ownerids 
module.exports.run = (bot, message, args) => {
    if (IDS.includes(message.author.id)) {
    const content = message.content.split(' ').slice(1).join(' ');
  const result = new Promise((resolve, reject) => resolve(eval(content)));

  return result.then(output => {
    if (typeof output !== 'string') output = require('util').inspect(output, { depth: 0 });
    if (output.includes(bot.token)) output = output.replace(bot.token, 'Not for your eyes');
    return message.channel.send(output, { code: 'js' }).then(m => m.delete(5000))
  }).catch(err => {
    console.error(err);
    err = err.toString();

    if (err.includes(bot.token)) err = err.replace(bot.token, 'Not for your eyes');

    return message.channel.send(err, { code: 'js' })
  }); 
    } else {
        message.channel.send("Owner only, you cannot use this command.")
    }
            }

    }
}
