"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
exports.default = (0, envalid_1.cleanEnv)(process.env, {
    PORT: (0, envalid_1.port)(),
    MONGO_CONNECTION_STRING: (0, envalid_1.str)(),
    // JWT_SECRET:str(),
});
