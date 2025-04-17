export enum Roles {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

export type UserType = {
  id?: string;
  email?: string;
  role?: Roles;
};
