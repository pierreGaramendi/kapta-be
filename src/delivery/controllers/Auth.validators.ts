import { object, string } from "zod";

const userZchema = object({
  username: string({
    invalid_type_error: "El campo Username debe ser una cadena de texto",
    required_error: "El campo Username es requerido",
  }),
  email: string({
    invalid_type_error: "El campo Email debe ser una cadena de texto",
    required_error: "El campo Email es requerido",
  }).email({ message: "Formato Email invalido" }),
  password: string({
    invalid_type_error: "El campo Password debe ser una cadena de texto",
    required_error: "El campo password es requerido",
  }),
});

export const validateNewUserObject = (object: any) => {
  return userZchema.safeParse(object);
};
