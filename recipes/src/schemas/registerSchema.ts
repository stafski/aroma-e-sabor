import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, "O nome é obrigatório e precisa de pelo menos 1 caracter."),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("Forneça um e-mail válido."),
    password: z
      .string()
      .min(8, "A senha precisa conter pelo menos 8 caracteres.")
      .regex(
        /(?=.*?[A-Z])/,
        "A senha precisa conter pelo menos uma letra maiáscula."
      )
      .regex(
        /(?=.*?[a-z])/,
        "A senha precisa conter pelo menos uma letra mináscula."
      )
      .regex(/(?=.*?[0-9])/, "A senha precisa conter pelo menos um número.")
      .regex(
        /(?=.*?[@$!%*#?&])/,
        "A senha precisa conter pelo menos um caracter especial"
      ),

    confirm_Password: z.string().min(1, "Confirme sua senha"),
  })
  .refine(({ password, confirm_Password }) => confirm_Password === password, {
    message: "A confirmação e a senha precisam ser iguais.",
    path: ["confirm_Password"],
  });
