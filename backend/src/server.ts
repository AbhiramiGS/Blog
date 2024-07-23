import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { resolve } from "path";
import path from "path";
import authRoute from "./routes/auth";
import protectedRoute from "./routes/protectedRoutes";
import blogRoutes from "./routes/blog";
import { fileURLToPath } from "url";
import multer from "multer";
import { db } from "./utils/db";
import fs from "fs";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

    cb(null, file.originalname);
  },
});

const upload = multer({ storage, limits: { fieldSize: 25 * 1024 * 1024 } });

// const upload = multer({ dest: 'public/assets' });

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/protected", protectedRoute);
app.use("/blog", blogRoutes);

app.use("/assets", express.static(resolve("public", "assets")));
app.post("/blog/createBlog", upload.single("file"), async (req, res) => {
  try {
    const { imageUrl, title, content } = req.body;

    const user = await db.blog.create({
      data: {
        imageUrl,
        title,
        content,
      },
    });
    res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Creation failed" });
    console.log(error);
  }
});

app.post("/blog/editBlog", upload.single("file"), async (req, res) => {
  try {
    const { id, imageUrl, title, content } = req.body;
    const blog = await db.blog.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (imageUrl !== blog?.imageUrl) {
      try {
        fs.unlinkSync(`public/assets/${blog?.imageUrl}`);
        console.log("Image Deleted successfully");
      } catch (error) {
        res.status(500).json({ error: "Updation failed" });
        console.log(error);
      }
      res.status(201).json({ message: "Blog updated successfully" });
    }

    res.status(201).json({ message: "Blog updates successfully" });

    await db.blog.update({
      where: {
        id: Number(id),
      },
      data: {
        content,
        title,
        imageUrl,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Updation failed" });
    console.log(error);
  }
});

app.post("/blog/deleteBlog", async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    // const blog = await db.blog.findUnique({
    //   where: {
    //     id: Number(id),
    //   },
    // });

    // if (blog) {
    //   await db.blog.delete({
    //     where: {
    //       id: Number(id),
    //     },
    //   });
    //   res.status(201).json({ message: "Blog deleted successfully" });
    // }

    await db.blog.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(201).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Updation failed" });
    console.log(error);
  }
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.json(req.file);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
