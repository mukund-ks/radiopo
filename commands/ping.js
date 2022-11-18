const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const RadioBrowser = require('radio-browser');

function apiCall() {
    const start = async () => {
        try {
            const data = await RadioBrowser.getServerStats();
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    return start();
}

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Ping Radio Browser API.'),
    async execute(interaction) {
        const print = apiCall();
        print.then(async function (result) {
            try {
                const soft_ver = result.software_version;
                const supp_ver = result.supported_version;
                const status = result.status;
                const stations = result.stations;
                const broken_st = result.stations_broken;
                const tags = result.tags;
                const clicks_lh = result.clicks_last_hour;
                const clicks_ld = result.clicks_last_day;
                const lang = result.languages;
                const cnt = result.countries;
    
                const embed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle('Radio Browser API')
                    .setDescription('Pings the Radio Browser API for Statistics.')
                    .addFields(
                        { name: 'Visit the Radio Browser website:', value: 'https://www.radio-browser.info/' },
                        { name: 'NodeJS module used for this bot:', value: 'https://github.com/nepodev/radio-browser' },
                    )
                    .addFields(
                        { name: 'Supported Version', value: `${supp_ver}` },
                        { name: 'Software version', value: `${soft_ver}` },
                        { name: 'Status', value: `${status}` },
                        { name: 'Stations', value: `${stations}` },
                        { name: 'Broken Stations', value: `${broken_st}` },
                        { name: 'Tags', value: `${tags}` },
                        { name: 'Clicks during the Last Hour', value: `${clicks_lh}` },
                        { name: 'Clicks during the Last Day', value: `${clicks_ld}` },
                        { name: 'Languages', value: `${lang}` },
                        { name: 'Countries', value: `${cnt}` },
                    )
                    .setTimestamp();
    
                await interaction.reply(`API Server: ${RadioBrowser.service_url}`);
                await interaction.followUp({ embeds: [embed] });
            } catch (error) {
                console.log(error);
                await interaction.reply('[Error] An error has occoured. Please try again later.');
            }
        });
    },
};