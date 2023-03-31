import { Router } from "express";
import { LoginController } from "../controllers/LoginController";

export const loginRoute = Router();

const loginController = new LoginController();

loginRoute.post('/', loginController.Login);