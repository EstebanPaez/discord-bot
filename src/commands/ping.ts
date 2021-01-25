import { Message } from 'discord.js';

const ping = {
  name: 'ping',
  execute: (msg: Message) => {
    msg.reply('pong');
  },
};

module.exports = ping;
