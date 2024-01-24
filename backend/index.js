import express from "express";
import cors from "cors"
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/user.model.js';
import { FRONTEND_URL } from "./config.js";
dotenv.config()

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(cors(
    {
        origin: FRONTEND_URL
    }
))

app.get("/users", async (req, res) => {
    try {
      const users = await User.find();
      res.send({
        users: users
      })
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al obtener usuarios");
    }
  });

app.listen(3000, () => console.log("Server is running"))