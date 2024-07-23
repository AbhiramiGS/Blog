import express from "express";
import verifyToken from "../middleware";

const router = express.Router();

router.get("/", verifyToken, (req, res) => {
  res.status(200).json({ message: "Protected route accesed" });
});

export default router;
