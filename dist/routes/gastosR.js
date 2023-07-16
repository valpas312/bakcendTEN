"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gastos_1 = require("../controllers/gastos");
const router = (0, express_1.Router)();
router.post("/", gastos_1.createGasto);
router.get("/", gastos_1.getGastos);
router.get("/:dni", gastos_1.getGastoDeUsuario);
exports.default = router;
