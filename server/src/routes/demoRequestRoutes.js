import express from "express";
import { createDemoRequest } from "../controllers/demoRequestController.js";

const router = express.Router();

router.post("/", createDemoRequest);

export default router;