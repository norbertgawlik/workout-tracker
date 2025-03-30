import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@ui/Button";
import { Input } from "@ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema, type SchemaFieldsType } from "./schema";
import { type LoginPropsType } from "@mytypes/auth";

type LoginFormProps = {
  handleSubmitForm: (loginData: LoginPropsType) => void;
};

export const LoginForm = ({ handleSubmitForm }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFieldsType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SchemaFieldsType> = (authData) =>
    handleSubmitForm(authData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="email" {...register("email")} errors={errors.email} />
      <Input
        label="password"
        {...register("password")}
        type="password"
        errors={errors.password}
      />

      <Button>Login</Button>
    </form>
  );
};
