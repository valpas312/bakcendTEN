import { Request, Response } from "express";
import Student, {IStudent} from "../models/student";


export const createStudent = async (req: Request, res: Response) => {
    const data: IStudent = req.body;

    const newStudent = new Student(data);

    await newStudent.save();

    res.json(newStudent);
};