//  displaying fetched data with discord bot


// Notice !! API itself has subscription limit, currently i am using free tier which may reduce recourses

// get the index.js function from where i am grabbing the currencies
const crypto = require("./index.js");

// install discord.js and prompt
// discord documentation to simply give bot a life
const { Client, GatewayIntentBits, userMention } = require("discord.js");
const { message } = require("prompt");
const path = require("path");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

// simple debugger to check if bot works/ also shows up in discord
client.on("ready", () => {
    console.log("Bot is ready");
  
    // Send a message every 1 hours 
    setInterval(sendAutoMessage, 3600000);
});

async function sendAutoMessage() {
    try {
        const prices = await crypto();
        // add channel id to send message to specific channel
        const channel = client.channels.cache.get("ADD CHANNEL ID");
        if (channel) {
            channel.send(`\n--Current cryptocurrency prices: ->>>>>>\nBitcoin: $${prices.bitcoinPrice}\nEthereum: $${prices.ethereumPrice}\nLitecoin: $${prices.litecoinPrice}\nRipple: $${prices.ripplePrice}\n`);
        }
    } catch (error) {
        console.error("Error sending auto message:", error);
    }
}

//add bot token

client.login(" ADD YOUR TOKEN");

