"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try {
            const user = await UserStorage.getUserInfo(client.id);
            if (user) {
              if (user.id === client.id && user. password === client.password) {
                return { success: true };
              }
              return { success: false, err: "비번 틀림" };
            }
            return { success: false, msg: "없는 아이디" };
        } catch (err) {
            return {success: false, err}
        }
    }

    async register() {
        const client = this.body;
        // async await은 try catch 문으로 에러 처리 가능
        try {
        const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = User;