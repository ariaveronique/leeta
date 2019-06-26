const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
// Drinks DB from https://github.com/lauriharpf/thecocktaildb-downloader
// Remember to change "export default drinks" to "module.exports = drinks"
const drinks = require("./drinks.js");
const didyoumean = require('didyoumean2').default;

// Create an index of the drink names for didyoumean2 to utilize.
// TODO: There's probably a more elegant way to do this.
// A list of drink name fields to search
let drinkNameFields = [
  'strDrink',
  'strDrinkAlternate',
  'strDrinkES',
  'strDrinkDE',
  'strDrinkFR',
  'strDrinkZH-HANS',
  'strDrinkZH-HANT'
];
// Add each of the names and its corresponding ID to the object.
let drinkNameIndex = {};
drinks.forEach(function(d) {
  drinkNameFields.forEach(
      function(field) {
          if (d[field] !== null)
              drinkNameIndex[d[field].toString()] = d.idDrink.toString();
  })
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
    message.reply("I'm still here, hon!  What can I get you?");
  }
  if (command === 'make') {
    let drinkName = args.join(' ');
    // Do a fuzzy match with didyoumean to find the closest drink name and serve that
    // TODO: Make the command a bit less Infocom RPG and more real language.
    let fuzzyDrinkMatch = didyoumean(drinkName, Object.keys(drinkNameIndex));
    message.reply(`one ${fuzzyDrinkMatch} coming right up!`);
  }
});
 
client.login(config.token);
