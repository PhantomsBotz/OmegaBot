const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'
const api = require('covid19-api')
const stats = require('covid19-stats')

module.exports = {
  name: 'coronavirus',
  description: 'Shows updates on the pandemic COVID-19, including total cases, deaths, and more.',
  category: 'Helpful',
  aliases: ['covid', 'covid19', 'corona', 'covid-19'],
  usage: '^coronavirus [country] OR ^coronavirus for totals',
  
  run:async (bot, message, args) => {
    let total = await stats.getStats();
    let embed = new Discord.RichEmbed();
  if (!args[0]) {
    embed.setTitle('Totals for coronavirus:');
    embed.setColor('#FF0000')
    embed.addField('Total cases:', total[0].totalCases, true)
    embed.addField('Active cases:', total[0].activeCases, true)
    embed.addField('Active cases:', total[0].activeCases, true)
    embed.addField('Total deaths:', total[0].totalDeaths, true)
    embed.addField('New deaths (Today):', total[0].newDeaths, true)
    embed.addField('Total recovered:', total[0].totalRecovered, true)
    
    embed.setImage('https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/HEAD/assets/img/logo.png')
    message.channel.send(embed)
  }
    else {
      const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
var index = total.findIndex(obj => obj.country==capitalize(args[0]));
      console.log(index)
      if (index == '-1') return message.channel.send('Sorry, but please include a valid country!')
      else {
        embed.setTitle(`Totals for ${capitalize(args[0])}:`);
    embed.setColor('#FF0000')
    embed.addField('Total cases:', total[index].totalCases, true)
    embed.addField('Active cases:', total[index].activeCases, true)
    embed.addField('Active cases:', total[index].activeCases, true)
    embed.addField('Total deaths:', total[index].totalDeaths, true)
    embed.addField('New deaths (Today):', total[index].newDeaths, true)
    embed.addField('Total recovered:', total[index].totalRecovered, true)
    
    embed.setImage('https://raw.githubusercontent.com/ChrisMichaelPerezSantiago/covid19/HEAD/assets/img/logo.png')
    message.channel.send(embed)
      }
      
    }
  }
}
