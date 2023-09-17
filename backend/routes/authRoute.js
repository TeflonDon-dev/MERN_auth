import express from "express";
import { google, signUp } from "../controllers/authController.js";
import { signIn,signOut } from "../controllers/authController.js";
const router = express.Router();

router.post("/signup",signUp)
router.post("/signin", signIn)
router.post('/google', google)
router.get('/signout',signOut)

export default router;