import { IUser, IUserWithId } from "../../../core/entities/User.model";
import { UserRepository } from "../UserRepository";
import UserModel from "./UserModel";

export class MongoUserRepository implements UserRepository {
  async save(user: IUser): Promise<any> {
    const createdUser = new UserModel({
      username: user.username,
      email: user.email,
      passwordHash: user.passwordHash,
      roles: user.roles,
    });
    const savedUser = await createdUser.save();
    return { username: savedUser.username, email: savedUser.email, roles: savedUser.roles };
  }

  async getAll(): Promise<any[]> {
    const users = await UserModel.find({});
    return users.map((user) => {
      return { id: user.id, username: user.username, email: user.email };
    });
  }

  async findByEmail(email: string): Promise<IUserWithId | null> {
    const user = await UserModel.findOne({ email });
    if (!user) return null;
    return { _id: user.id, username: user.username, email: user.email, passwordHash: user.passwordHash, roles: [] };
  }
}
