const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('help').setDescription('Learn more about Radiopo.'),
    async execute(interaction) {
        const Reply = 'Use the "/play" command to play any channel of your choice.\nVisit the website at: www.radiopo.lol\nThis bot was made by: www.github.com/mukund-ks';
        await interaction.reply({ content: Reply, ephemeral: true });
    },
};