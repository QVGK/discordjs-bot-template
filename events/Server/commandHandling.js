const ExtendedClient = require("../../src/class/extendedClient");

module.exports = {
    event: 'interactionCreate',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {import('discord.js').Interaction} interaction 
     * @returns 
     */
    run: (client, interaction) => {
        const command = client.collection.commands.get(interaction.commandName);

        if (!command) return;

        try {
            command.run(client, interaction);
        } catch (error) {
            console.log(error);
        }
    },
};