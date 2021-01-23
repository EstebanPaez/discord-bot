import { Message } from 'discord.js';

const ping = (msg: Message) => {
  msg.reply('pong');
};

export default ping;
