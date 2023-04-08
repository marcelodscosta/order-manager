import { Request, Response, NextFunction } from "express";
import { schemeUser } from "../validations/schemeUser";


export const userInputValidate = async (
    req: Request,
    _res: Response,
    next: NextFunction) => {

    await schemeUser.validate(req.body);


    next();
}