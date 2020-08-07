import { Router } from "express";

const router = Router();

router.get("/hello", (req, res) => res.status(200).json({ resposta: "world" }));

export default router;
