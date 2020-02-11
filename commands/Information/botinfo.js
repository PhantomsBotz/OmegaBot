const fs = require('fs')
const Discord = require('discord.js')
const prefix = '^'
module.exports = {
    name: 'botinfo',
    description: 'Shows the bot\'s info.',
    category: 'Information',

    run: async (bot, message, args) => {
        let db = require('quick.db')
        let isDisabled = await db.fetch(`Disabled_${message.guild.id}_botinfo`);
        let ping = Math.floor(bot.ping)
        let status = bot.user.status
        let em = new Discord.RichEmbed()
            .setTitle("Bot Information")
            .addField("Ping", ping)
            .addField("Prefix", "^")
            .addField("Status", status)
            .addField("Nickname", bot.user.displayName)
        if (status = "online") {
            em.setColor("GREEN")
        } else if (status = "idle") {
            em.setColor("GOLD")
        } else if (status = "dnd") {
            em.setColor("RED")
        }
        message.channel.send({
            embed: em
        })
    }
}
