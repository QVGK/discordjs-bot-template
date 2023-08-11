const { readdirSync } = require('fs');
const ExtendedClient = require('../class/extendedClient');
const chalk = require("chalk")

/**
 * 
 * @param {ExtendedClient} client 
 */
module.exports = (client) => {
    for (const dir of readdirSync('./events')) {
        for (const file of readdirSync('./events/' + dir).filter(file => file.endsWith('.js'))) {
            const module = require('../../events/' + dir + "/" + file);

            if (!module) continue;
    
            if (!module.event || !module.run) {
                console.log(chalk.red('Unable to load the event ' + file + ' due to missing \'name\' or/and \'run\' properties.'));
    
                continue;
            };
    
            console.log(chalk.blue('New event successfully loaded: ' + chalk.cyan(file) + " from ") + chalk.cyan("/" + dir));
    
            if (module.once) {
                client.once(module.event, (...args) => module.run(client, ...args));
            } else {
                client.on(module.event, (...args) => module.run(client, ...args));
            };
        }
    };
};