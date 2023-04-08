import { LoginService } from '../services/LoginService';

export class LoginServiceSingleton {
    private static instance: LoginService;

    public static getInstance(): LoginService {
        if (!LoginServiceSingleton.instance) {
            return LoginServiceSingleton.instance = new LoginService();
        };
        return LoginServiceSingleton.instance;
    }
};