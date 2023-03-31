import { ICustomer } from "../interfaces/ICustomer";
import { customerRepository } from "../repositories/customerRepository";

export class CustomerService {

    async create(customer: ICustomer) {

        const newCustomer = customerRepository.create(customer);
        await customerRepository.save(newCustomer);
        return newCustomer;
    }
}