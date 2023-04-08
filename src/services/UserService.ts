import { IUser } from "../interfaces/IUser";
import { userRepository } from "../repositories/userReposotory";
import { ApiError } from "../utils/ApiError";
import bcrypt from 'bcrypt';

export class UserService {

    async create({
        name,
        cpf,
        email,
        status,
        password
    }: IUser) {


        const userExists = await userRepository.findOne({ where: { email } });
        if (userExists) throw new ApiError('User already exists', 409);

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = userRepository.create({ name, cpf, email, status, password: passwordHash });
        await userRepository.save(newUser);

        const { password: _, order, ...user } = newUser;

        return user;
    }

    async findAll() {
        const users = (await userRepository.find()).map(user => {
            const { password: _, order, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });

        if (users.length === 0) throw new ApiError('No users found', 204);

        return users;
    }

    async findById(id: number) {
        const user = await userRepository.findOne({ where: { id } });

        if (!user) throw new ApiError('User does not exist', 404);

        const { password: _, order, ...userWithoutPassword } = user;

        return userWithoutPassword;

    }

    async update(id: number, { name, email, status, cpf, password }: IUser) {

        const user = await userRepository.findOne({ where: { id } });

        if (!user) throw new ApiError('User does not exist', 404);

        const userUpdate = Object.assign(user, { name, email, status, cpf, password });
        await userRepository.save(userUpdate);
        return userUpdate;

    }

    async delete(id: number) {

        const user = await userRepository.findOne({ where: { id: id } });

        if (!user) throw new ApiError('User not found', 404);

        await userRepository.remove(user);

        return user;
    }
}