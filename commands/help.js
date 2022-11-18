const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('help').setDescription('Learn about Radiopo.'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Help')
            .setDescription('Radiopo is a bot to play your favourite Radio Stations from the comfort of your Discord Server.')
            .setAuthor({ name: 'Radiopo', iconURL: 'https://i.postimg.cc/CxqQBm64/radiopo-logo-2.png', url: 'https://radiopo.xyz' })
            .addFields(
                { name: '`/play search`', value: 'Search and play a station of your choice. [**Station Names**](https://www.radio-browser.info/countries)' },
                { name: '`/play top_five`', value: 'Play one of the top voted stations.' },
                { name: '`/exit`', value: 'Disconnects the bot from active voice channel.' },
                { name: '`/ping`', value: 'Pings the Radio Browser API for statistics.' },
                { name: '\u200B', value: '[**Visit the website**](https://radiopo.xyz)', inline: true },
                { name: '\u200B', value: '[**Report Issues**](https://github.com/mukund-ks/radiopo/issues)', inline: true },
            )
            .setImage('https://i.postimg.cc/pL5Hm2Dh/radiopo-logo.png')
            .setFooter({ text: 'This bot was made by: github.com/mukund-ks', iconURL: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' });

        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};