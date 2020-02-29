const Discord = require('discord.js');
module.exports = async (bot, message) => { 
  	if (message.author.bot) return;
const logchannel = message.guild.channels.find(channel => channel.name === "omega-logs");
const user = message.author
if(!logchannel) return
let deleteEmbed = new Discord.RichEmbed()
  .setTitle("A message was deleted!")
  .addField("User", user.tag)
.addField("Content", "```" + message.content + "```")
.addField("Channel", message.channel.name)
.setFooter(`MessageID: ${message.id} | AuthorID: ${user.id}`, bot.user.avatarURL)
.setColor("#FF0000")
.setThumbnail(user.avatarURL)
logchannel.send(deleteEmbed)
}
