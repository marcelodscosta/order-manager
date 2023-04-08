import { Request, Response, NextFunction } from "express";
import { customerValidation } from "../validations/customerValidation";

export const customerInputValidate = async (req: Request, res: Response, next: NextFunction) => {

    await customerValidation.validate(req.body);

    next();
}