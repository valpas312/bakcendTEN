import { Router } from "express";
import { createStudent, getStudents, getStudent, updateStudent, deleteStudent} from "../controllers/students";

const router = Router();

router.post("/", createStudent);

router.get("/", getStudents);

router.get("/:dni", getStudent);

router.put("/:dni", updateStudent);

router.delete("/:dni", deleteStudent);

export default router;