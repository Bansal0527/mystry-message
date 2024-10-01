import {z} from 'zod'

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message: 'Content must be atleast of 10 char'})
    .max(1000, {message: 'Content must be less than 1000 char'})
    
})