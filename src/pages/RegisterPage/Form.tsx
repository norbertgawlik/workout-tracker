import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema, type SchemaFieldsType } from "./schema";
import { type RegisterPropsType } from "@mytypes/auth";

type RegisterFormProps = {
  handleSubmitForm: (registerData: RegisterPropsType) => void;
};

export const RegisterForm = ({ handleSubmitForm }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFieldsType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SchemaFieldsType> = (registerData) =>
    handleSubmitForm(registerData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="email" {...register("email")} errors={errors.email} />
      <Input
        label="password"
        {...register("password")}
        type="password"
        errors={errors.password}
      />

      <Button>Register</Button>
    </form>
  );
};
