"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getAllUsers = void 0;
const getAllUsers = (req, res) => {
    res.send('getting all the users');
};
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`getting user by Id ${id}`);
};
exports.getUserById = getUserById;
