const { readdirSync } = require('fs');
const ExtendedClient = require('../class/extendedClient');

/**
 * 
 * @param {ExtendedClient} client 
 */
module.exports = (client) => {
    for (const file of readdirSync('./commands').filter((f) => f.endsWith('.js'))) {
        const module = require('../../commands/' + file);

        if (!module.structure?.name || !module.run) {
            console.log('Unable to load the command ' + file +' due to missing \'structure#name\' or/and \'run\' properties.');

            continue;
        };

        client.collection.commands.set(module.structure.name, module);
        client.applicationcommandsArray.push(module.structure);
    };
};