"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
const kick_1 = __importDefault(require("./utils/kick"));
const ping_1 = __importDefault(require("./utils/ping"));
const ban_1 = __importDefault(require("./utils/ban"));
dotenv_1.config();
const client = new discord_js_1.Client();
client.on('ready', () => {
    console.log('Estoy Listo');
});
client.on('message', (msg) => {
    if (msg.content.startsWith('!')) {
        if (msg.content.startsWith('!ping')) {
            ping_1.default(msg);
        }
        else if (msg.content.startsWith('!kick')) {
            kick_1.default(msg);
        }
        else if (msg.content.startsWith('!ban')) {
            ban_1.default(msg);
        }
        else {
            msg.reply(`El comando ${msg.content} no fue encontrado`);
        }
    }
});
client.login(process.env.TOKEN);
