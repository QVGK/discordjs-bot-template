## DiscordJS 14 Bot Template

This is a DiscordJS 14 bot template with a slash command and event handler. I created this due to TFAGaming's template having things that I didn't need to use. So therefore, I made a more barebones and simplistic version.

- Includes slash command handler.
- Includes event handler.

## Setup
Setup is easy for this template. Just changed the `TOKEN` and `CLIENT_ID` variables in the `.env.example` file, then rename it to just `.env`.
You can then run `node index.js` and the bot will start.

## Examples

### Slash Command

```js
  module.exports = {
    structure: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with pong!"),
        run: async (client, interaction) => {
          await interaction.reply({
              ephemeral: true,
              content: "Pong! " + client.ws.ping,
          });
        },
  };
```

### Event
```js
  module.exports = {
    event: "ready",
    once: true,
    run: async (_, client) => {
      console.log("Successfully logged in as: " + client.user.username)
    }
};
```
