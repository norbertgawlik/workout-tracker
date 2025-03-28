export enum Roles {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

export type User = {
  id: string | undefined;
  email: string | undefined;
  role: Roles;
};
