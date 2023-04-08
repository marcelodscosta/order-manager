import { object, string } from 'yup';

export const schemeCategory = object({
    description:
        string()
            .required('Description is required')
            .min(3, 'Description must be at least 3 characters long'),
});