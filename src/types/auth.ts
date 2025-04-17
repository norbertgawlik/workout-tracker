import { UserType } from "./user";

export interface LoginPropsType {
  email: string;
  password: string;
}

export interface RegisterPropsType {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: UserType | null;
  isAuthenticated: boolean;
  register: (data: RegisterPropsType) => void;
  login: (data: LoginPropsType) => void;
  logout: () => void;
}
