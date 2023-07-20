const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv/config');

const prefix = '!';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log('Bot is online');
});

client.on('messageCreate', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const messageArray = message.content.split(" ");
  const args = messageArray.splice(1);

  const messageSplit = message.content.slice(prefix.length).split(/ +/);
  const command = messageSplit.shift().toLowerCase();

  if (command === 'ping') {
    message.reply('pong');
    console.log(args);
  }

  if (command === 'random') {
    if(args.length === 0){
      return message.reply('please enter an argument !');
    }
    if(args.length > 1){
      return message.reply('please enter one argument !');
    }

    if (isNaN (args[0]) || !isFinite(args[0])){
      return message.reply('Please Enter a valid Number !!');
    }
    const randomNumber = (Math.floor(Math.random()*100)).toString();
    //message.channel.send(message);
    //message.reply()
    message.reply(randomNumber);
  }
  
});

client.login(process.env.TOKEN);
