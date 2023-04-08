import { Request, Response } from "express";
import { LoginServiceSingleton } from '../shared/LoginServiceSingleton';

export class LoginController {

    async Login(req: Request, res: Response): Promise<Response> {
        const token = await LoginServiceSingleton
            .getInstance().Login(req.body);
        return res.status(200).json({ token });
    };
};