import {object,string , ref} from 'yup'

const validations = object({
    email: string().email('Email must be valid').required('Email is required'),
    password: string().min(5).required('Password is required'),
    passwordConfirm: string().required('Password confirm is required').oneOf([ref('password')],'Password confirm has to be same as password'),
});

export default validations;