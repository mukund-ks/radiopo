const { joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior, createAudioResource, StreamType } = require('@discordjs/voice');
const { SlashCommandBuilder, ChannelType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const RadioBrowser = require('radio-browser');

function apiCall(stationName) {
    const filter = {
        name: stationName,
    };

    const start = async () => {
        try {
            const data = await RadioBrowser.searchStations(filter);
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    return start();
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play').setDescription('Plays stations.')
        // Search Station subcommand
        .addSubcommand(subcommand =>
            subcommand.setName('search').setDescription('Searches stations to play.')
                .addStringOption(option =>
                    option.setName('name').setDescription('Enter the stations\'s name.'))
                .addChannelOption(option =>
                    option.setName('channel').setDescription('Select a channel to join.')
                        .addChannelTypes(ChannelType.GuildVoice)),
        )
        // Play one of top five sub command.
        .addSubcommand(subcommand =>
            subcommand.setName('top_five').setDescription('Filters stations by Top Votes.')
                .addIntegerOption(option =>
                    option.setName('input').setDescription('(Integer) Choose one of the top five stations.').setMinValue(1).setMaxValue(5))
                .addChannelOption(option =>
                    option.setName('channel').setDescription('Select a channel to join.')
                        .addChannelTypes(ChannelType.GuildVoice)),
        ),

    async execute(interaction) {
        // search
        if (interaction.options.getSubcommand() === 'search') {
            const searchTerm = interaction.options.getString('name');
            const voiceChannel = interaction.options.getChannel('channel');
            const print = apiCall(searchTerm);
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
                try {
                    const Title = result[0].name;
                    const Author = { name: result[0].name, iconURL: 'https://i.postimg.cc/CxqQBm64/radiopo-logo-2.png', url: result[0].homepage };
                    const Location = result[0].country;
                    const Language = result[0].language;
                    const Votes = result[0].votes;

                    const embed = new EmbedBuilder()
                        .setColor(0x0099FF) // Blue
                        .setTitle(`Now Playing: ${Title}`)
                        .setAuthor(Author)
                        .addFields(
                            { name: 'Location', value: `${Location}` },
                            { name: 'Language', value: `${Language}` },
                            { name: 'Votes', value: `${Votes}` },
                        )
                        .setTimestamp();
                    await interaction.reply({ embeds: [embed] });

                    const resource = createAudioResource(result[0].url_resolved);
                    player.play(resource, { inputtype: StreamType.WebmOpus });
                    voiceConnection.subscribe(player);
                } catch (e) {
                    try {
                        const Title = result[0].name;
                        const Author = { name: result[0].name, iconURL: 'https://i.postimg.cc/CxqQBm64/radiopo-logo-2.png', url: result[0].homepage };
                        const Location = result[0].country;
                        const Language = result[0].language;
                        const Votes = result[0].votes;

                        const embed = new EmbedBuilder()
                            .setColor(0x0099FF) // Blue
                            .setTitle(`Now Playing: ${Title}`)
                            .setAuthor(Author)
                            .addFields(
                                { name: 'Location', value: `${Location}` },
                                { name: 'Language', value: `${Language}` },
                                { name: 'Votes', value: `${Votes}` },
                            )
                            .setTimestamp();
                        await interaction.reply({ embeds: [embed] });

                        const resource = createAudioResource(result[0].url);
                        player.play(resource, { inputtype: StreamType.WebmOpus });
                        voiceConnection.subscribe(player);
                    } catch {
                        const row = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setURL('https://www.radio-browser.info/countries')
                                    .setLabel('Here')
                                    .setStyle(ButtonStyle.Link),
                            );
                        await interaction.reply({ 
                            content: `**[Error]** *${searchTerm}* isn't a valid radio station or the streaming URL isn't currently working.`, 
                        });
                        await interaction.followUp({
                            content: '**Find a list of valid Radio Stations,**',
                            components: [row],
                        });
                    }
                }
            });
        }
        // Top Five
        else if (interaction.options.getSubcommand() === 'top_five') {
            const n = interaction.options.getInteger('input');
            const radioObj = {
                1: 'MANGORADIO',
                2: 'REYFM - #original (64kbps)',
                3: 'Dance Wave!',
                4: 'Radio Mirchi',
                5: 'Radio Paradise (320k)',
            };
            const voiceChannel = interaction.options.getChannel('channel');
            const print = apiCall(radioObj[n]);
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
                try {
                    const Title = result[0].name;
                    const Author = { name: result[0].name, iconURL: 'https://i.postimg.cc/CxqQBm64/radiopo-logo-2.png', url: result[0].homepage };
                    const Location = result[0].country;
                    const Language = result[0].language;
                    const Votes = result[0].votes;

                    const embed = new EmbedBuilder()
                        .setColor(0x0099FF) // Blue
                        .setTitle(`Now Playing: ${Title}`)
                        .setAuthor(Author)
                        .addFields(
                            { name: 'Location', value: `${Location}` },
                            { name: 'Language', value: `${Language}` },
                            { name: 'Votes', value: `${Votes}` },
                        )
                        .setTimestamp();
                    await interaction.reply({ embeds: [embed] });

                    const resource = createAudioResource(result[0].url_resolved);
                    player.play(resource, { inputtype: StreamType.WebmOpus });
                    voiceConnection.subscribe(player);
                } catch (e) {
                    try {
                        const Title = result[0].name;
                        const Author = { name: result[0].name, iconURL: 'https://i.postimg.cc/CxqQBm64/radiopo-logo-2.png', url: result[0].homepage };
                        const Location = result[0].country;
                        const Language = result[0].language;
                        const Votes = result[0].votes;

                        const embed = new EmbedBuilder()
                            .setColor(0x0099FF) // Blue
                            .setTitle(`Now Playing: ${Title}`)
                            .setAuthor(Author)
                            .addFields(
                                { name: 'Location', value: `${Location}` },
                                { name: 'Language', value: `${Language}` },
                                { name: 'Votes', value: `${Votes}` },
                            )
                            .setTimestamp();

                        await interaction.reply({ embeds: [embed] });

                        const resource = createAudioResource(result[0].url);
                        player.play(resource, { inputtype: StreamType.WebmOpus });
                        voiceConnection.subscribe(player);
                    } catch {
                        await interaction.reply(
                            '**[Error]** The selected station isn\'t available for play right now.',
                        );
                    }
                }
            });
        }
    },
};