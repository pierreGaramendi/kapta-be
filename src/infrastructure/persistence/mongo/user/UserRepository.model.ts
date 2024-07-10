import { IUser, IUserWithId } from "../../../../core/entities/User.model";

export interface IUserRepository {
  save(user: IUser): Promise<IUser>;
  getAll(): Promise<IUser[]>;
  findByEmail(email: string): Promise<IUserWithId | null>;
  getUserById(_id: string): Promise<any>;
}
