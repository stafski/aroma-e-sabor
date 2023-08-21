import { FieldError, UseFormRegisterReturn } from "react-hook-form";
export interface IInputprops {
  label: string;
  type: "text" | "email" | "password" | "confirmPassword" | string;
  id: string;
  error?: FieldError;
  register: UseFormRegisterReturn<string>;
}

export const Input = ({ label, type, id, error, register }: IInputprops) => (
  <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...register} />
    {error ? <p>{error.message}</p> : null}
  </div>
);
