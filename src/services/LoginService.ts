import { ILogin } from "../interfaces/ILogin";
import { userRepository } from "../repositories/userReposotory";
import { ApiError } from "../utils/ApiError";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SECRET = process.env.JWT_SECRET;

export class LoginService {

    async Login(login: ILogin) {
        const user = await userRepository
            .findOne({ where: { email: login.email } });
        if (!user) throw new ApiError('invalid email or password', 401);
        const passwordValidation = await bcrypt
            .compare(login.password, user.password);
        if (!passwordValidation) throw new ApiError('invalid email or password', 400);

        const { password, order, ...userOptimized } = user;
        const token = jwt.sign({ id: user.id }, SECRET!, { expiresIn: '1d' });
        return { userOptimized, token };
    };
};