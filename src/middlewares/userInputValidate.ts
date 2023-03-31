import { Request, Response, NextFunction } from "express";
import { userValidation } from "../validations/userValidation";


export const userInputValidate = async (
    req: Request,
    _res: Response,
    next: NextFunction) => {

    await userValidation.validate(req.body);


    next();
}