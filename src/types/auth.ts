import { User } from "./user";

export interface authPropsType {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  register: (data: authPropsType) => void;
  login: (data: authPropsType) => void;
  logout: () => void;
}

export type signPropsType = {
  email: string;
  password: string;
};
