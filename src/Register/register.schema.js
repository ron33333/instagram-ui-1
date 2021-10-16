import * as yup from 'yup';
import {checkAvailabilityEmail} from '../services/user.service'

export const registerSchema = yup.object().shape({
    username: yup.string()
        .min(3)
        .required(),
    email: yup.string()
        .email()
        .required()
        .test("email",'This email has already been registered',async function (email) 
            {
                const temp = await checkAvailabilityEmail(email);
                console.log(temp);
                return await checkAvailabilityEmail(email);
            }),
    password: yup.string()
        .required()
        .min(6)
        .max(20)
  });