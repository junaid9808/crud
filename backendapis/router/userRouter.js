import express from "express";
const router = express.Router();
import {getUsers, createuser, singlUser,deleteUser,updateUser} from '../controller/userController.js'

router.get("/users", getUsers);
router.post("/user", createuser);
router.get("/singluser/:id", singlUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

export default router;