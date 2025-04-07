import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema, type SchemaFieldsType } from "./schema";
import { type RegisterPropsType } from "@mytypes/auth";
import * as S from "./RegisterPage.styled";

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
      <Input label="Email" {...register("email")} errors={errors.email} />
      <Input
        label="Password"
        {...register("password")}
        type="password"
        errors={errors.password}
      />

      <S.StyledButtonWrap>
        <S.StyledButton>Register</S.StyledButton>
      </S.StyledButtonWrap>
    </form>
  );
};
