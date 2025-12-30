const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const BOT_TOKEN = process.env.BOT_TOKEN; // WEBSITE ENV

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

function loadGuild() {
  return JSON.parse(fs.readFileSync('guild.json'));
}

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
`🔥 FF Guild Glory Bot 🔥

/guild - Guild Info
/glory - Guild Glory`);
});

bot.onText(/\/guild/, (msg) => {
  const g = loadGuild();
  bot.sendMessage(msg.chat.id,
`🏆 ${g.guild_name}
⭐ Level: ${g.guild_level}
👥 Members: ${g.members}`);
});

bot.onText(/\/glory/, (msg) => {
  const g = loadGuild();
  bot.sendMessage(msg.chat.id,
`🔥 Guild Glory
💎 ${g.guild_glory}`);
});

console.log("Bot running on website...");