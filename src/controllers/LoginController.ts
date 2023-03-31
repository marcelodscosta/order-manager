import { Request, Response } from "express";
import { LoginService } from "../services/LoginService";

export class LoginController {

    async Login(req: Request, res: Response) {

        const { email, password } = req.body;

        const service = new LoginService();

        const token = await service.Login({ email, password });

        return res.status(200).json({ token });

    }
}