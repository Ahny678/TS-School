import { Router } from "express";
import { getUsers, createUser } from "../controllers/usersController";
const router = Router();

router.get("/all", getUsers);
router.post("/new", createUser);
export default router;
