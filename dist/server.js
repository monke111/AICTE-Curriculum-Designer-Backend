"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = require("./index");
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const port = validateEnv_1.default.PORT;
//* !-> non-null
mongoose_1.default.connect(validateEnv_1.default.MONGO_CONNECTION_STRING).then(() => {
    console.log("Mongoose connected");
    index_1.app.listen(port, () => {
        console.log('Server running on port: ' + port);
    });
}).catch(console.error);
