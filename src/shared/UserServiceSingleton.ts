import { UserService } from '../services/UserService';

export class UserServiceSingleton {
    private static instance: UserService;

    public static getInstance(): UserService {

        if (!UserServiceSingleton.instance) {
            UserServiceSingleton.instance = new UserService();
        }

        return UserServiceSingleton.instance;
    }
}