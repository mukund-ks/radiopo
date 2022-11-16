const { SlashCommandBuilder } = require('discord.js');
const RadioBrowser = require('radio-browser');

function apiCall(country) {
    const filter = {
        by: 'country',
        searchterm: country,
        order: 'name',
        limit: 5,
    };

    const start = async () => {
        try {
            const data = await RadioBrowser.getStations(filter);
            const streamUrl = data[0].url_resolved;
            return streamUrl;
        } catch (e) {
            console.log(e);
        }
    };

    return start();
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play').setDescription('Play a radio channel of your choice.')
        .addStringOption(option =>
            option.setName('country').setDescription('Filter stations by country.')),
    async execute(interaction) {
        const country = interaction.options.getString('country');
        const print = apiCall(country);
        print.then(function (result) {
            interaction.reply(result);
        });
    },
};