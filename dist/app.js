"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
const { prefix, token } = require('../config.json');
if (!token) {
    const dotEnv = require('dotenv');
    dotEnv.config();
}
const client = new discord_js_1.Client();
const commandFiles = fs_1.readdirSync('./src/commands').map((value) => value.substring(0, value.length - 3));
const commandMap = new Map();
for (const file of commandFiles) {
    const newCommand = require(`./commands/${file}`);
    commandMap.set(newCommand.name, newCommand);
}
client.on('ready', () => {
    console.log('Estoy Listo');
});
client.on('message', (msg) => {
    if (!msg.content.startsWith(prefix) || msg.author.bot)
        return;
    const command = msg.content.split(' ')[0].substring(prefix.length);
    commandMap.has(command)
        ? commandMap.get(command).execute(msg)
        : msg.reply('Comando no encontrado');
});
client.login(process.env.TOKEN);
