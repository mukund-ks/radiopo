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
            await interaction.reply('Exited from voice channel.');
        } catch (error) {
            await interaction.reply('I\'m currently not in a voice channel.');
        }
    },
};