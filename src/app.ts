import "reflect-metadata";
import express from 'express';
import { categoryRoute } from "./routes/categoryRoute";

export const app = express();
app.use(express.json());


app.use('/category', categoryRoute);