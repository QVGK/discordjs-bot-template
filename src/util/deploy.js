const { REST, Routes } = require("discord.js");
const ExtendedClient = require("../class/extendedClient");
const chalk = require("chalk")
require("dotenv").config();

/**
 *
 * @param {ExtendedClient} client
 */
module.exports = async (client) => {
    const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

    try {
        console.log(
            chalk.blue("Started loading application commands...")
        );

        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
            body: client.applicationcommandsArray,
        });

        console.log(chalk.blue("Successfully loaded application commands to Discord API."));
    } catch (e) {
        console.log(chalk.red("Unable to load application commands to Discord API."));
    }
};
