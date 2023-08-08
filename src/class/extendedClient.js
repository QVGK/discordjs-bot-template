// Dependencies
const {
    Client,
    Collection,
    GatewayIntentBits,
    Partials,
} = require("discord.js");
require("dotenv").config();

// Utils
const deploy = require("../util/deploy");
const events = require("../util/events");
const commands = require("../util/commands");

// Extended Class
module.exports = class extends Client {
    collection = {
        commands: new Collection(),
        components: {
            buttons: new Collection(),
            selects: new Collection(),
        },
    };
    applicationcommandsArray = [];

    constructor() {
        super({
            intents: [Object.keys(GatewayIntentBits)],
            partials: [Object.keys(Partials)],
            presence: {
                activities: [
                    {
                        name: "DiscordJS 14 Bot Template",
                    },
                ],
            },
        });
    }

    start = async () => {
        commands(this);
        events(this);

        await this.login(process.env.TOKEN);

        deploy(this);
    };
};
