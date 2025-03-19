export enum Roles {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

export type User = {
  id: string;
  name: string;
  email: string;
  role: Roles;
};
