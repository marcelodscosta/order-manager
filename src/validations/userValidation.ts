import { boolean, object, string } from 'yup';

export const userValidation = object({
    name:
        string()
            .required('Name is required')
            .min(6, 'Name must be at least 3 characters long'),
    cpf:
        string()
            .required('CPF is required')
            .min(11, 'CPF must be at least 11 characters long'),
    email:
        string()
            .required('Email is required')
            .email('Email must be a valid email'),
    password:
        string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters long'),
    status:
        boolean()
            .required('Status is required')

});