import { Request, Response } from "express";
import Student, {IStudent} from "../models/student";


export const createStudent = async (req: Request, res: Response) => {
    const data: IStudent = req.body;

    const newStudent = new Student(data);

    await newStudent.save();

    res.json(newStudent);
};

export const getStudents = async (req: Request, res: Response) => {
    const students = await Student.find();

    res.json(students);
};

export const getStudent = async (req: Request, res: Response) => {
    const {dni} = req.params;

    const student: IStudent | null = await Student.findOne({dni});

    res.json(student);
};

export const updateStudent = async (req: Request, res: Response) => {
    const {dni} = req.params;
    
    const student: IStudent | null = await Student.findOneAndUpdate({dni}, req.body);

    res.json(student);
};

export const deleteStudent = async (req: Request, res: Response) => {
    const {dni} = req.params;
    
    const student: IStudent | null = await Student.findOneAndDelete({dni});

    res.json(student);
};