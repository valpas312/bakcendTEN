"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = exports.newLogController = exports.logController = void 0;
const logController = (req, res) => {
    console.log(req.method);
    res.send('received');
};
exports.logController = logController;
const newLogController = (req, res) => {
    console.log(req.method);
    res.send('received new');
};
exports.newLogController = newLogController;
const postController = (req, res) => {
    console.log(req.method);
    res.send('received post');
    const saludo = req.body.saludo;
    console.log(saludo);
};
exports.postController = postController;
