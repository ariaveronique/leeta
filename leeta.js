const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
// Drinks DB from https://github.com/lauriharpf/thecocktaildb-downloader
// Babel is to translate the drinks.js file to a Node-usable format
require("@babel/core").transform("drinks", {
  plugins: ["@babel/plugin-transform-modules-commonjs"]
});

client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  // No bots
  if (message.author.bot) return;

  // Search the list of prefixes
  let prefix;
  config.prefixes.some(
    function(v) {
      if (message.content.startsWith(v)) {
        prefix = v;
        return true;
      }
      return false;
    }
  );
  if (!prefix) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (command === 'ping') {
    message.channel.send("pong!");
  }
  if (command === 'make') {
    let drinkName = args.join(' ');
    message.reply(`one ${drinkName} coming right up!`);
  }
});
 
client.login(config.token);
