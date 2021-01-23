import { Client, Message } from 'discord.js';
import { config } from 'dotenv';
config();

const client = new Client();

const pong = (msg: Message) => {
  msg.reply('pong');
};

const kick = async (msg: Message) => {
  if (msg.member?.hasPermission('KICK_MEMBERS')) {
    msg.reply('Tienes permisos');
  } else {
    msg.reply('No cuentas con los permisos para realizar el Kick');
  }
};

client.on('ready', () => {
  console.log('Estoy Listo');
});

client.on('message', (msg: Message) => {
  if (msg.content.startsWith('!ping')) {
    pong(msg);
  } else if (msg.content.startsWith('!kick')) {
    kick(msg);
  }
});

client.login(process.env.TOKEN);
