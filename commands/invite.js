const { ButtonBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('invite').setDescription('sends the invite link of the bot.'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=1042031895711592520&permissions=1002912081984&scope=bot')
                    .setLabel('Invite')
                    .setStyle(ButtonStyle.Link),
            );
        await interaction.reply({ content: '**Invite me to your server by clicking the button below.**', components: [row] });
    },
};