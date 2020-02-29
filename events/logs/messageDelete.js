const Discord = require('discord.js');
module.exports = async (bot, message) => {
  	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
  const deletionLog = fetchedLogs.entries.first();
  const {executor, target} = deletionLog;
const user = message.author;
let deleteEmbed = new Discord.RichEmbed()
  .setTitle("A message was deleted!")
  .addField("User", user.tag)
.addField("Content", "```" + message.content + "```")
.addField("Channel", message.channel.name)
.addField("Deleted by:", executor.tag)
.setFooter(`MessageID: ${message.id} | AuthorID: ${user.id}`, bot.user.avatarURL)
.setColor("#FF0000")
.setThumbnail(user.avatarURL)
bot.channels.get('675931618791391275').send(deleteEmbed)
}
