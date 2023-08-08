const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
} = require("discord.js");
const ExtendedClient = require("../src/class/extendedClient");

module.exports = {
    structure: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with pong!"),
    /**
     * @param {ExtendedClient} client
     * @param {ChatInputCommandInteraction} interaction
     * @param {[]} args
     */
    run: async (client, interaction, args) => {
        await interaction.reply({
            ephemeral: true,
            content: "Pong! " + client.ws.ping,
        });
    },
};
