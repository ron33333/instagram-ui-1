import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    username: yup.string()
        .min(3)
        .required(),
    email: yup.string()
        .email()
        .required(),
    password: yup.string()
        .required()
        .min(6)
        .max(20)
  });