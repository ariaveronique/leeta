# Leeta

![Leeta](/images/leetalogo-readme.png)

Leeta - bartender Discord bot written for Discord Community Hack Week 2019

## Setup

Copy [config-example.json](/config-example.json) to config.json and edit the following settings:

* **token**: the bot's token from discordapp.com;
* **prefix**: the prefix to use for the bot's commands

For an updated drinks database, replace drinks.js with the latest version at [TheCockTailDB Downloader](https://github.com/lauriharpf/thecocktaildb-downloader) (or make one yourself!)  

If you update the database, be sure to change the last line of the file from:

```javascript
export default drinks;
```

to

```javascript
module.exports = drinks;
```

## Starting Leeta

Run the command: `node leeta.js`

## Commands

__ping__ - Leeta will respond back, assuming she's still online.

__make *name of drink*__ - Leeta will prepare you the drink of your choice.  If it's not an exact match in the database, she'll bring you something close.  Maybe.  It'll *sound* close.  Maybe.  

## Credits

* Logo silhouette graphic from [Great Dane Graphics](https://www.greatdanegraphics.com/female-bartender)
* Logo background from [Pexels, photographer Chris F](https://www.pexels.com/@chris-f-38966)
* drinks.js from [TheCockTailDB Downloader](https://github.com/lauriharpf/thecocktaildb-downloader)
* Drinks information from [TheCocktailDB](https://thecocktaildb.com/) ([Support their Patreon!](https://www.patreon.com/thedatadb))
