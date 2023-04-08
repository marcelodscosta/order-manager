import { NextFunction, Request, Response } from "express";
import { schemeCategory } from "../validations/schemeCategory";

export const categoryInputValidate = async (
    req: Request,
    res: Response,
    next: NextFunction) => {

    await schemeCategory.validate(req.body);

    next();
}