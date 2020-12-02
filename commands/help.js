const Discord = require('discord.js');
const config = require('../config/config.default.json');

module.exports.run = async (client, message, args) => {
    let helpEmbed = new Discord.MessageEmbed()
    .setTitle(`Prefix: \`${config.prefix}\``)
    .addField(`\`${config.prefix}help\``, 'Laat deze hulp embed zien.')
    .addField(`\`${config.prefix}botinfo\``, 'Laat informatie over de bot zien.')
    .addField(`\`${config.prefix}serverinfo\``, 'Laat informatie over de server zien.')
    .setColor("#004b96")
    .setFooter("LowLands", client.user.displayAvatarURL())
    .setTimestamp();

    message.channel.send(helpEmbed);

    return;
}

module.exports.help = {
    name: "help"
}