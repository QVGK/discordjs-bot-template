const ExtendedClient = require("../src/class/extendedClient");
const chalk = require("chalk")

module.exports = {
    event: 'ready',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {import('discord.js').Interaction} interaction 
     * @returns 
     */
    run: (_, client) => {
        console.log(chalk.green("Successfully logged in as: " + client.user.username))
    },
};