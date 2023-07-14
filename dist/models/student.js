"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const studentSchema = new mongoose_1.Schema({
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    camada: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    }
});
const Student = (0, mongoose_1.model)("Student", studentSchema);
exports.default = Student;
