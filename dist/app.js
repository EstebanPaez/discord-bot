"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const client = new discord_js_1.Client();
const pong = (msg) => {
    msg.reply('pong');
};
const ban = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if ((_a = msg.member) === null || _a === void 0 ? void 0 : _a.hasPermission('BAN_MEMBERS')) {
        const member = (_b = msg.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
        if (member) {
            try {
                const kickedMember = yield member.ban();
                msg.reply(`${kickedMember.nickname} fue baneado del server`);
            }
            catch (error) {
                console.log(error);
                msg.reply('Error inesperado');
            }
        }
        else {
            msg.reply('No has mencionado a nadie');
        }
    }
    else {
        msg.reply('No cuentas con los permisos para realizar el Ban');
    }
});
const kick = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    if ((_c = msg.member) === null || _c === void 0 ? void 0 : _c.hasPermission('KICK_MEMBERS')) {
        const member = (_d = msg.mentions.members) === null || _d === void 0 ? void 0 : _d.first();
        if (member) {
            try {
                const kickedMember = yield member.kick();
                msg.reply(`${kickedMember.nickname} fue echado del server`);
            }
            catch (error) {
                console.log(error);
                msg.reply('Error inesperado');
            }
        }
        else {
            msg.reply('No has mencionado a nadie');
        }
    }
    else {
        msg.reply('No cuentas con los permisos para realizar el Kick');
    }
});
client.on('ready', () => {
    console.log('Estoy Listo');
});
client.on('message', (msg) => {
    if (msg.content.startsWith('!')) {
        if (msg.content.startsWith('!ping')) {
            pong(msg);
        }
        else if (msg.content.startsWith('!kick')) {
            kick(msg);
        }
        else if (msg.content.startsWith('!ban')) {
            ban(msg);
        }
        else {
            msg.reply(`El comando ${msg.content} no fue encontrado`);
        }
    }
});
client.login(process.env.TOKEN);
