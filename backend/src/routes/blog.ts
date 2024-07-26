import express from "express";
import { db } from "../utils/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Gender } from "@prisma/client";
import { error } from "console";

const router = express.Router();

router.get("/allBlogs", async (req, res) => {
  try {
    const blogs = await db.blog.findMany({
      include: {
        User: {
          select: {
            name: true,
          },
        },
      },
    });
    console.log("bl", blogs);
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.json("An error occured");
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const blog = await db.blog.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        User: true,
      },
    });
    res.json(blog);
  } catch (error) {
    console.error(error);
    res.json({ error: "An error occurred" });
  }
});

export default router;
