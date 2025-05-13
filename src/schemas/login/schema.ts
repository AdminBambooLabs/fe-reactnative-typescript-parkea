import { z } from 'zod';

export type LoginSchema = z.infer<typeof loginSchema>;

const loginSchema = z
  .object({
    email: z.string().email().nonempty(),
    password: z.string().nonempty(),
  })
  .required();

export default loginSchema;
