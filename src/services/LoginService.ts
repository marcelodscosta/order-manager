import { ILogin } from "../interfaces/ILogin";
import { userRepository } from "../repositories/userReposotory";
import { ApiError } from "../utils/ApiError";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SECRET = process.env.JWT_SECRET;

export class LoginService {

    async Login({ email, password }: ILogin) {

        const user = await userRepository.findOne({ where: { email } });

        if (!user) throw new ApiError('invalid email or password', 401);

        const passwordValidation = await bcrypt.compare(password, user.password);

        if (!passwordValidation) throw new ApiError('invalid email or password', 400);

        const token = jwt.sign({ id: user.id }, SECRET!, { expiresIn: '1d' });


        return token;
    }

}