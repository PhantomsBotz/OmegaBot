const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const prefix = '^';

module.exports = {
  name: 'killme',
  description: 'secreats',
  category: 'Staff',
  run: async (bot, message, args) => {
  
  if(!message.author.id === "513103852409716736") return;
        let em1 = new discord.RichEmbed()
    .setTitle("I'm honestly sorry.")
    .setDescription("Please don't hate me for this.")
    .setColor("GOLD")

    let em2 = new discord.RichEmbed()
    .setTitle("I honestly like you for whatever reason")
    .setDescription("This started a few days ago")
    .addField("Rember", "Not to kill me", true)
    .setColor("GOLD")

    let em3 = new discord.RichEmbed()
    .setTitle("And yes. I was planning this for abit.")
    .setDescription("Also thank Alex, Tox, and Anthony for helping me plan this.")
    .setColor("GOLD")


    message.channel.send("I'm sorry......")
    message.channel.send("❤️").then(message.channel.send("❤️"))
    message.channel.send({embed: em1})
    message.channel.send({embed: em2})
    message.channel.send({embed: em3})
    message.channel.send("❤️").then(message.channel.send("❤️"))
    message.channel.send("Once again I'm sorry")
    message.channel.send("And yes I'm extra.")


    message.guild.members.get("513103852409716736").setNickname("Dumb Gay Bitch That Likes Newo")
  }
}
