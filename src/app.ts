import { Client, Message } from 'discord.js';
import { config } from 'dotenv';
config();

const client = new Client();

const pong = (msg: Message) => {
  msg.reply('pong');
};

const ban = async (msg: Message) => {
  if (msg.member?.hasPermission('BAN_MEMBERS')) {
    const member = msg.mentions.members?.first();
    if (member) {
      try {
        const kickedMember = await member.ban();
        msg.reply(`${kickedMember.nickname} fue baneado del server`);
      } catch (error) {
        console.log(error);
        msg.reply('Error inesperado');
      }
    } else {
      msg.reply('No has mencionado a nadie');
    }
  } else {
    msg.reply('No cuentas con los permisos para realizar el Ban');
  }
};

const kick = async (msg: Message) => {
  if (msg.member?.hasPermission('KICK_MEMBERS')) {
    const member = msg.mentions.members?.first();
    if (member) {
      try {
        const kickedMember = await member.kick();
        msg.reply(`${kickedMember.nickname} fue echado del server`);
      } catch (error) {
        console.log(error);
        msg.reply('Error inesperado');
      }
    } else {
      msg.reply('No has mencionado a nadie');
    }
  } else {
    msg.reply('No cuentas con los permisos para realizar el Kick');
  }
};

client.on('ready', () => {
  console.log('Estoy Listo');
});

client.on('message', (msg: Message) => {
  if (msg.content.startsWith('!')) {
    if (msg.content.startsWith('!ping')) {
      pong(msg);
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
