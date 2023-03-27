import { IUser } from "../interfaces/IUser";
import { userRepository } from "../repositories/userReposotory";
import { ApiError } from "../utils/ApiError";

export class UserService {

    async create({
        name,
        cpf,
        email,
        status,
        password
    }: IUser) {
        const newUser = userRepository.create({ name, cpf, email, status, password });
        await userRepository.save(newUser);
        console.log(newUser);
        return newUser;
    }

    async findAll() {
        const userList = await userRepository.find();
        return userList;
    }

    async findById(id: number) {
        const user = await userRepository.findBy({ id });
        return user;
    }

    async update(id: number, { name, email, status, cpf, password }: IUser) {
        const user = await userRepository.findOne({ where: { id } });
        if (user) {
            const userUpdate = Object.assign(user, { name, email, status, cpf, password });
            await userRepository.save(userUpdate);
            return userUpdate;
        }
        return user;

    }

    async delete(id: number) {

        const user = await userRepository.findOne({ where: { id: id } });

        if (user) {
            await userRepository.remove(user);
        }
        return user;
    }
}