export enum Roles {
  AUTH = "authenticated",
  ANON = "anon",
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Roles;
}
