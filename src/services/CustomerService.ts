import { ICustomer } from "../interfaces/ICustomer";
import { customerRepository } from "../repositories/customerRepository";
import { ApiError } from "../utils/ApiError";

export class CustomerService {

    async create(customer: ICustomer) {
        const customerExistCnpj = await customerRepository
            .findOne({ where: { cnpj: customer.cnpj } });
        if (customerExistCnpj)
            throw new ApiError('There is already a customer with this data registered', 409);
        const newCustomer = customerRepository.create(customer);
        await customerRepository.save(newCustomer);
        return newCustomer;
    };

    async findAll() {
        const customers = (await customerRepository
            .find()).map(customer => {
                const { order, ...customerOptimized } = customer;
                return customerOptimized;
            });
        if (customers.length === 0) throw new ApiError('No customers found', 204);
        return customers;
    };

    async findById(id: number) {
        const customer = await customerRepository
            .findOne({ where: { id } });
        if (!customer) throw new ApiError('Customer does not exist', 404);
        const { order, ...customerOptimized } = customer;
        return customerOptimized;
    };

    async update(id: number, customer: ICustomer) {
        const customerExist = await customerRepository
            .findOne({ where: { id } });
        if (!customerExist) throw new ApiError('Customer does not exist', 404);
        const customerUpdate = Object.assign(customerExist, customer);
        await customerRepository
            .save(customerUpdate);
        return customerUpdate;
    };

    async delete(id: number) {
        const customer = await customerRepository
            .findOne({ where: { id: id } });
        if (!customer) throw new ApiError('Customer not found', 404);
        await customerRepository
            .remove(customer);
        return customer;
    };
};