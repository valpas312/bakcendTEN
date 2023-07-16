"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const gastoSchema = new mongoose_1.Schema({
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    concepto: {
        type: String,
        required: true
    },
    gasto: {
        type: Number,
        required: true
    }
});
const Gasto = (0, mongoose_1.model)("Gasto", gastoSchema);
exports.default = Gasto;
