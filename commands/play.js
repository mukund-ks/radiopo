const { joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior, createAudioResource, StreamType } = require('@discordjs/voice');
const { SlashCommandBuilder, ChannelType } = require('discord.js');
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
            option.setName('country').setDescription('Filter stations by country.'))
        .addChannelOption(option =>
            option.setName('channel').setDescription('Selects channel to join')
                .addChannelTypes(ChannelType.GuildVoice)),

    async execute(interaction) {
        const country = interaction.options.getString('country');
        const voiceChannel = interaction.options.getChannel('channel');
        const print = apiCall(country);
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
    },
};