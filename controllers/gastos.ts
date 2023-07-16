import { Request, Response } from "express";
import Gasto, {IGasto} from "../models/gasto";


export const createGasto = async (req: Request, res: Response) => {
    const data: IGasto = req.body;

    const newGasto = new Gasto(data);

    await newGasto.save();

    res.json(newGasto);
};

export const getGastos = async (req: Request, res: Response) => {
    const students = await Gasto.find();

    res.json(students);
};

export const getGastoDeUsuario = async (req: Request, res: Response) => {
    const {dni} = req.params;

    const gasto: IGasto | null = await Gasto.findOne({dni});

    res.json(gasto);
};

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