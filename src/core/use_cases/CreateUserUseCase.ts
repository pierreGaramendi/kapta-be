import { IUserRepository } from "../../infrastructure/persistence/mongo/user/UserRepository.model";
import { IUser } from "../entities/User.model";

export const createUserUseCase =
  (userRepository: IUserRepository) =>
  async (username: string, email: string, passwordHash: string): Promise<any> => {
    const user: IUser = { username, email, passwordHash, roles:[] };
    return await userRepository.save(user);
  };
