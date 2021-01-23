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
const kick = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    if ((_a = msg.member) === null || _a === void 0 ? void 0 : _a.hasPermission('KICK_MEMBERS')) {
        const member = (_b = msg.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
        if (member) {
            try {
                yield member.kick();
                msg.reply(`${(_c = msg.mentions.users.first()) === null || _c === void 0 ? void 0 : _c.username} fue echado del server`);
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
exports.default = kick;
