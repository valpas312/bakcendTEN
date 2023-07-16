import {Model, Schema, model} from "mongoose";

export interface IGasto {
    dni: number;
    nombre: string;
    email: string;
    concepto: string;
    gasto: number;
};

const gastoSchema = new Schema<IGasto>({
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

const Gasto: Model<IGasto> = model<IGasto>("Gasto", gastoSchema);

export default Gasto;