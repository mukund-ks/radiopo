const { getVoiceConnection } = require('@discordjs/voice');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('exit')
        .setDescription('Disconnects from voice channel.'),
    async execute(interaction) {
        try {
            const connection = getVoiceConnection(interaction.guildId);
            connection.disconnect();
            await interaction.reply('**Successfully Disconnected!**');
        } catch (error) {
            await interaction.reply('**Currently not in a voice channel.**');
        }
    },
};