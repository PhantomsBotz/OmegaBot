const Discord = require('discord.js');
module.exports = async (bot, message) => { 
  	if (message.author.bot) return;
const user = message.author;
console.log('test');
let deleteEmbed = new Discord.RichEmbed()
  .setTitle("A message was deleted!")
  .addField("User", user.tag)
.addField("Content", "```" + message.content + "```")
.addField("Channel", message.channel.name)
.setFooter(`MessageID: ${message.id} | AuthorID: ${user.id}`, bot.user.avatarURL)
.setColor("#FF0000")
.setThumbnail(user.avatarURL)
bot.channels.get('675931618791391275').send(deleteEmbed)
}
