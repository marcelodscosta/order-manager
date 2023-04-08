import { Request, Response, NextFunction } from "express";
import { schemeCustomer } from "../validations/schemeCustomer";

export const customerInputValidate = async (req: Request, res: Response, next: NextFunction) => {

    await schemeCustomer.validate(req.body);

    next();
}