"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ping = {
    name: 'ping',
    execute: (msg) => {
        msg.reply('pong');
    },
};
module.exports = ping;
