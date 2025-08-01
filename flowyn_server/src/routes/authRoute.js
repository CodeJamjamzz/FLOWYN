import express from "express";
import * as authController from "../controllers/authController.js";

const router = express.Router();
router.post("/signin", authController.signInUser)
router.post("/login", authController.logInUser)
router.get("/session", authController.sessionCheck)

export default router;