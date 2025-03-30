export enum Roles {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

export type User = {
  id?: string;
  email?: string;
  role?: Roles;
};
