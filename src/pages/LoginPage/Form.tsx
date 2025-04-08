import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema, type SchemaFieldsType } from "./schema";
import { type LoginPropsType } from "@mytypes/auth";
import { StyledButton } from "./LoginPage.styled";
import * as S from "./LoginPage.styled";

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
      <Input label="Email" {...register("email")} errors={errors.email} />
      <Input
        label="Password"
        {...register("password")}
        type="password"
        errors={errors.password}
      />

      <S.StyledButtonWrap>
        <StyledButton>Login</StyledButton>
      </S.StyledButtonWrap>
    </form>
  );
};
