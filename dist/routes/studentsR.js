"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const students_1 = require("../controllers/students");
const router = (0, express_1.Router)();
router.post("/", students_1.createStudent);
exports.default = router;
