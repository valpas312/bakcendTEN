"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGastoDeUsuario = exports.getGastos = exports.createGasto = void 0;
const gasto_1 = __importDefault(require("../models/gasto"));
const createGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newGasto = new gasto_1.default(data);
    yield newGasto.save();
    res.json(newGasto);
});
exports.createGasto = createGasto;
const getGastos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield gasto_1.default.find();
    res.json(students);
});
exports.getGastos = getGastos;
const getGastoDeUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const gasto = yield gasto_1.default.findOne({ dni });
    res.json(gasto);
});
exports.getGastoDeUsuario = getGastoDeUsuario;
//no se pide en el ejercicio
// export const updateGasto = async (req: Request, res: Response) => {
//     const {dni} = req.params;
//     const gasto: IGasto | null = await Gasto.findOneAndUpdate({dni}, req.body);
//     res.json(gasto);
// };
// export const deleteGasto = async (req: Request, res: Response) => {
//     const {dni} = req.params;
//     const gasto: IGasto | null = await Gasto.findOneAndDelete({dni});
//     res.json(gasto);
// };
