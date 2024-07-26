import express from "express";
import { db } from "../utils/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Gender } from "@prisma/client";
import { error } from "console";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, age, phone, email, password, gender } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.user.create({
      data: {
        name,
        age: Number(age),
        phone,
        email,
        password: hashedPassword,
        gender: gender as Gender,
        role: "ADMIN",
      },
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("USER", email, password)
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    console.log("Irrukiya", user)
    if (!user) {
      return res.status(401).json({ error: "No user found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log("PASWORD Same", passwordMatch)
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect Password" });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_ACCESS_SECRET ?? "",
      {
        expiresIn: "1hr",
      }
    );
    console.log(user.role, "DHDHDH")
    res.status(200).json({ token, id: user.id, role: user.role, msg: true });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
    console.log(error);
  }
});

export default router;
