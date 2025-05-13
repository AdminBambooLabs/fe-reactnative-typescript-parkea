import { z } from 'zod';

const REQUIRED_EMAIL_ERROR = 'Digite um email válido';

const REQUIRED_PASSWORD_ERROR = 'Digite uma senha válida';
const PASSWORD_AND_CONFIRMATION_ERROR = 'As senhas não conferem, por favor revise';
const PASSWORD_ERROR = 'Mínimo 8 caracteres, sendo letras maiúsculas e minúsculas, números e caracteres especiais';

export type LoginInformationSchema = z.infer<typeof loginInformationSchema>;

const loginInformationSchema = z
  .object({
    email: z.string({ required_error: REQUIRED_EMAIL_ERROR }).email({ message: REQUIRED_EMAIL_ERROR }),
    password: z
      .string({ required_error: REQUIRED_PASSWORD_ERROR })
      .min(8, PASSWORD_ERROR)
      .regex(/[A-Z]/, PASSWORD_ERROR)
      .regex(/[a-z]/, PASSWORD_ERROR)
      .regex(/[0-9]/, PASSWORD_ERROR)
      .regex(/[^A-Za-z0-9]/, PASSWORD_ERROR),
    confirmPassword: z
      .string({ required_error: REQUIRED_PASSWORD_ERROR })
      .min(8, PASSWORD_ERROR)
      .regex(/[A-Z]/, PASSWORD_ERROR)
      .regex(/[a-z]/, PASSWORD_ERROR)
      .regex(/[0-9]/, PASSWORD_ERROR)
      .regex(/[^A-Za-z0-9]/, PASSWORD_ERROR),
  })
  .required()
  .refine(data => data.password === data.confirmPassword, {
    message: PASSWORD_AND_CONFIRMATION_ERROR,
    path: ['confirmPassword'],
  });

export default loginInformationSchema;
