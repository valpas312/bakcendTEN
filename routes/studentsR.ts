import { Router } from "express";
import { createStudent } from "../controllers/students";

const router = Router();

router.post("/", createStudent);

export default router;