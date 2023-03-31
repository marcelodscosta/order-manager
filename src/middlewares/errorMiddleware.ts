import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

export const errorMiddleware = (
    error: Error & Partial<ApiError>,
    req: Request,
    res: Response,
    next: NextFunction) => {

    const statusCode = error.statusCode ?? 500;
    const message = error.message ? error.message : 'Internal Server Error';

    res.status(statusCode).json(message);

}