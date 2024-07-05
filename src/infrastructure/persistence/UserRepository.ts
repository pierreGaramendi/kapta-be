import { IUser, IUserLogin } from "../../core/entities/User.model";

export interface UserRepository {
    save(user: IUser): Promise<IUser>;
    getAll(): Promise<IUser[]>;
    findByEmail(email: string): Promise<IUser | null>;
}
