import "reflect-metadata";
import express from 'express';
import { categoryRoute } from "./routes/categoryRoute";
import { userRoute } from "./routes/userRout";

export const app = express();
app.use(express.json());


app.use('/category', categoryRoute);
app.use('/user', userRoute);