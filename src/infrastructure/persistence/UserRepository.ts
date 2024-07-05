import { IUser } from "../../core/entities/User.model";

export interface UserRepository {
    save(user: IUser): Promise<IUser>;
    getAll(): Promise<IUser[]>;
}
