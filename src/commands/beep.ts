import { Message } from 'discord.js';

const beep = {
  name: 'beep',
  execute: (msg: Message) => {
    msg.reply('boop');
  },
};

module.exports = beep;
