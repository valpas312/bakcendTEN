import { Router } from "express";
import { createGasto, getGastos, getGastoDeUsuario} from "../controllers/gastos";

const router = Router();

router.post("/", createGasto);

router.get("/", getGastos);

router.get("/:dni", getGastoDeUsuario);

export default router;