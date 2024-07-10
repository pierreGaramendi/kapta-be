import { IUser, IUserWithId } from "../../../../core/entities/User.model";
import { IUserRepository } from "./UserRepository.model";
import { UserDocument } from "./User.document";

export const MongoUserRepository: IUserRepository = {
  async save(user: IUser): Promise<any> {
    const createdUser = new UserDocument({
      username: user.username,
      email: user.email,
      passwordHash: user.passwordHash,
      roles: user.roles,
    });
    const savedUser = await createdUser.save();
    return { username: savedUser.username, email: savedUser.email, roles: savedUser.roles };
  },

  async getAll(): Promise<any[]> {
    const users = await UserDocument.find();
    return users.map((user) => {
      return { id: user.id, username: user.username, email: user.email };
    });
  },

  async getUserById(_id: string): Promise<any> {
    const user = await UserDocument.findOne({ _id });
    if (!user) return null;
    return { username: user.username, email: user.email, roles: [] };
  },

  async findByEmail(email: string): Promise<any> {
    const user = await UserDocument.findOne({ email });
    if (!user) return null;
    return { _id: user._id, username: user.username, email: user.email, passwordHash: user.passwordHash, roles: [] };
  },
};
