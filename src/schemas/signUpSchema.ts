import {z} from 'zod'

export const usernameValidation = z
        .string()
        .min(2, "Username must be atleast 2 characters")
        .max(2, "Username must be less tham 20 characters")
        .regex(/^[a-zA-Z0-9_]*$/
            , "Username must not conatin specila chaarcter")
        


export const signUpChema = z.object({
    username : usernameValidation,
    email: z.string().email({message: 'Invaild email address'}),
    password: z.string().min(6, {message: "password must be atleast 6 charatcers"})
})