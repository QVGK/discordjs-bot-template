const { readdirSync } = require('fs');
const ExtendedClient = require('../class/extendedClient');
const chalk = require("chalk")

/**
 * 
 * @param {ExtendedClient} client 
 */
module.exports = (client) => {
    for (const dir of readdirSync('./commands')) {
        for (const file of readdirSync('./commands/' + dir).filter(file => file.endsWith('.js'))) {
            const module = require('../../commands/' + dir + "/" + file);

            if (!module.structure?.name || !module.run) {
                console.log('Unable to load the command ' + file +' due to missing \'structure#name\' or/and \'run\' properties.');
    
                continue;
            };
    
            client.collection.commands.set(module.structure.name, module);
            client.applicationcommandsArray.push(module.structure);
        }
    };
};