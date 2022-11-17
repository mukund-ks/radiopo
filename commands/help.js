const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('help').setDescription('Learn about Radiopo.'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Help')
            .setDescription('Radiopo is a bot to play your favourite Radio Stations from the comfort of your Discord Server.')
            .setAuthor({ name: 'Radiopo', url: 'https://radiopo.xyz' })
            .addFields(
                { name: '/play search', value: 'Search and play a station of your choice.' },
                { name: '/play top_five', value: 'Play one of the top voted stations.' },
                { name: 'Visit the website for more info.', value: 'https://radiopo.xyz' },
            )
            .setImage('https://i.postimg.cc/pL5Hm2Dh/radiopo-logo.png')
            .setFooter({ text: 'This bot was made by: github.com/mukund-ks', iconURL: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' });
            
        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};