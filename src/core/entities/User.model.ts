import { InterfaceID } from "./General.model";

export interface IUser {
  username: string;
  email: string;
  passwordHash: string;
  roles: string[];
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserWithId extends IUser, InterfaceID {}