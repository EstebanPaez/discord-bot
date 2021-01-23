import { Client, Message } from 'discord.js';
import { config } from 'dotenv';
import kick from './utils/kick';
import ping from './utils/ping';
import ban from './utils/ban';
config();

const client = new Client();

client.on('ready', () => {
  console.log('Estoy Listo');
});

client.on('message', (msg: Message) => {
  if (msg.content.startsWith('!')) {
    if (msg.content.startsWith('!ping')) {
      ping(msg);
    } else if (msg.content.startsWith('!kick')) {
      kick(msg);
    } else if (msg.content.startsWith('!ban')) {
      ban(msg);
    } else {
      msg.reply(`El comando ${msg.content} no fue encontrado`);
    }
  }
});

client.login(process.env.TOKEN);
