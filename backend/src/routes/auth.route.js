import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import { protectRoute } from "../../middleware/auth.middleware.js";

const router = express();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile",protectRoute, updateProfile);

router.length("/check", protectRoute, checkAuth)

export default router;