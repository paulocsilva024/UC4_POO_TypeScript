"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lv;
(function (lv) {
    lv[lv["ADMIN"] = 0] = "ADMIN";
    lv[lv["USER"] = 1] = "USER";
    lv[lv["GUEST"] = 2] = "GUEST";
})(lv || (lv = {}));
let nivel0 = lv.GUEST;
let nivel1 = lv.USER;
let nivel2 = lv.ADMIN;
console.log(`
    Nível 0: ${nivel0}
    Nível 1: ${nivel1}
    Nível 2: ${nivel2}
    `);
