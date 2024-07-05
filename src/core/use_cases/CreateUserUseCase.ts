import { UserRepository } from "../../infrastructure/persistence/UserRepository.model";
import { IUser } from "../entities/User.model";


export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(username: string, email: string, passwordHash: string, roles: any): Promise<IUser> {
    const user: IUser = { username, email, passwordHash, roles };
    return await this.userRepository.save(user);
  }
}
