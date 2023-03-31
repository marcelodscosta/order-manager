import { NextFunction, Request, Response } from "express";
import { categoryValidation } from "../validations/categoryValidation";

export const categoryInputValidate = async (
    req: Request,
    res: Response,
    next: NextFunction) => {

    await categoryValidation.validate(req.body);

    next();
}