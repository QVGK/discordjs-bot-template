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
            chalk.blue("Contacting Discord API to register slash commands (this may take a while)...")
        );

        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
            body: client.applicationcommandsArray,
        });

        console.log(chalk.green("Successfully registered slash commands with Discord API."));
    } catch (e) {
        // console.log(e) // Used for debugging.
        console.log(chalk.red("Failed to register slash commands with Discord API."));
    }
};
