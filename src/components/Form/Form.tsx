import { zodResolver } from "@hookform/resolvers/zod";
import { authPropsType } from "@mytypes/auth";
import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
});

type schemaFieldsType = z.infer<typeof schema>;

type FormProps = {
  handleSubmitForm: (authData: authPropsType) => void;
  buttonLabel: string;
};

export const Form = ({ handleSubmitForm, buttonLabel }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaFieldsType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<schemaFieldsType> = (authData) => {
    handleSubmitForm(authData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={"email"}
        {...register("email")}
        errors={errors.email}
      ></Input>
      <Input
        label={"password"}
        {...register("password")}
        type="password"
        errors={errors.password}
      ></Input>

      <Button>{buttonLabel}</Button>
    </form>
  );
};
