import { Message } from 'discord.js';

const kick = async (msg: Message) => {
  if (msg.member?.hasPermission('KICK_MEMBERS')) {
    const member = msg.mentions.members?.first();
    if (member) {
      try {
        await member.kick();
        msg.reply(`${msg.mentions.users.first()?.username} fue echado del server`);
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

export default kick;
