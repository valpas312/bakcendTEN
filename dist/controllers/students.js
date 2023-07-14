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
exports.deleteStudent = exports.updateStudent = exports.getStudent = exports.getStudents = exports.createStudent = void 0;
const student_1 = __importDefault(require("../models/student"));
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newStudent = new student_1.default(data);
    yield newStudent.save();
    res.json(newStudent);
});
exports.createStudent = createStudent;
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield student_1.default.find();
    res.json(students);
});
exports.getStudents = getStudents;
const getStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const student = yield student_1.default.findOne({ dni });
    res.json(student);
});
exports.getStudent = getStudent;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const student = yield student_1.default.findOneAndUpdate({ dni }, req.body);
    res.json(student);
});
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const student = yield student_1.default.findOneAndDelete({ dni });
    res.json(student);
});
exports.deleteStudent = deleteStudent;
