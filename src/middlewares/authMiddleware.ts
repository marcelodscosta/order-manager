import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { IToken } from "../interfaces/IToken";
import { userRepository } from "../repositories/userReposotory";

const SECRET = process.env.JWT_SECRET;

export const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction) => {

    const { authorization } = req.headers;


    if (!authorization) throw new ApiError('Unauthorized', 401);

    const token = authorization.split(' ')[1];


    const validateToken = jwt.verify(token, SECRET!)


    if (!validateToken) throw new ApiError('Unauthorized', 401);

    const { id } = validateToken as IToken;

    const user = await userRepository.findOne({ where: { id } });

    if (!user) throw new ApiError('Unauthorized', 401);

    const { password: _, ...loggedUser } = user;

    req.user = loggedUser;

    next();

}