import { CustomerService } from '../services/CustomerService';

export class CustomerServiceSingleton {
    private static instance: CustomerService;

    public static getInstance(): CustomerService {
        if (!CustomerServiceSingleton.instance) {
            return CustomerServiceSingleton.instance = new CustomerService();
        };

        return CustomerServiceSingleton.instance;
    }
};