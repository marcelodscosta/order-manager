import 'express-async-errors';
import "reflect-metadata";
import express from 'express';
import { categoryRoute } from "./routes/categoryRoute";
import { userRoute } from "./routes/userRout";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { loginRoute } from './routes/loginRoute';
import { customerRoute } from './routes/customerRoute';

export const app = express();
app.use(express.json());


app.use('/category', categoryRoute);
app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/customer', customerRoute);

app.use(errorMiddleware);