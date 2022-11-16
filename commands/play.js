const { joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior, createAudioResource, StreamType } = require('@discordjs/voice');
const { SlashCommandBuilder, ChannelType, EmbedBuilder } = require('discord.js');
const RadioBrowser = require('radio-browser');

function embed_build(result, n) {
    const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(result[n].name)
        .setURL(result[n].homepage)
        .addFields(
            { name: 'Location', value: result[n].country },
            { name: 'Language', value: result[n].language },
            { name: 'Votes', value: result[n].votes },
        )
        .setTimestamp();

    return embed;
}

function playTopFive() {
    const filter = {
        by: 'topvote',
        limit: 5,
    };

    const start = async () => {
        try {
            const data = await RadioBrowser.getStations(filter);
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    return start();
}

function playByCountry(country) {
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
        .setName('play').setDescription('Play a radio channel.')
        // Sort by Country subcommand
        .addSubcommand(subcommand =>
            subcommand.setName('country').setDescription('Filters stations by country.')
                .addStringOption(option =>
                    option.setName('country').setDescription('Enter country.'))
                .addChannelOption(option =>
                    option.setName('channel').setDescription('Selects channel to join.')
                        .addChannelTypes(ChannelType.GuildVoice)),
        )
        // Play one of top five sub command.
        .addSubcommand(subcommand =>
            subcommand.setName('top_five').setDescription('Filters stations by Top Votes')
                .addIntegerOption(option =>
                    option.setName('position').setDescription('specify one of top five voted channels.'))
                .addChannelOption(option =>
                    option.setName('channel').setDescription('Selects channel to join.')
                        .addChannelTypes(ChannelType.GuildVoice)),
        ),

    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'country') {
            const country = interaction.options.getString('country');
            const voiceChannel = interaction.options.getChannel('channel');
            const print = playByCountry(country);
            const voiceConnection = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: interaction.guildId,
                adapterCreator: interaction.guild.voiceAdapterCreator,
            });
            const player = createAudioPlayer({
                behaviors: {
                    noSubscriber: NoSubscriberBehavior.Play,
                },
            });
            print.then(function (result) {
                interaction.reply(result);
                const resource = createAudioResource(result);
                player.play(resource, { inputtype: StreamType.WebmOpus });
                voiceConnection.subscribe(player);
            });
        }
        else if (interaction.options.getSubcommand() === 'top_five') {
            let n = interaction.options.getInteger('positon'); n--;
            const voiceChannel = interaction.options.getChannel('channel');
            const print = playTopFive();
            const voiceConnection = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: interaction.guildId,
                adapterCreator: interaction.guild.voiceAdapterCreator,
            });
            const player = createAudioPlayer({
                behaviors: {
                    noSubscriber: NoSubscriberBehavior.Play,
                },
            });
            print.then(async function (result) {
                const Title = result[2].name;
                const Image = result[2].favicon;
                const URL = result[2].homepage;
                const Location = result[2].country;
                const Language = result[2].language;
                const Votes = result[2].votes;

                const embed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setImage(`${Image}`)
                    .setThumbnail(`${Image}`)
                    .setTitle(`${Title}`)
                    .setURL(`${URL}`)
                    .addFields(
                        { name: 'Location', value: `${Location}` },
                        { name: 'Language', value: `${Language}` },
                        { name: 'Votes', value: `${Votes}` },
                    )
                    .setTimestamp();

                await interaction.reply({ embeds: [embed] });
                const resource = createAudioResource(result[2].url_resolved);
                player.play(resource, { inputtype: StreamType.WebmOpus });
                voiceConnection.subscribe(player);
            });
        }
    },
};