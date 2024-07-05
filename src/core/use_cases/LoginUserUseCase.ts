
import { UserRepository } from "../../infrastructure/persistence/UserRepository";
import { matchPassword } from "../../infrastructure/utils/PasswordHasher";

export class LoginUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      return { message: "Invalid email" };
    }

    const isPasswordValid = matchPassword(password, user.passwordHash);
    if (!isPasswordValid) {
      return { message: "Invalid password" };
    }

    const token = { token: "token:XXXXX" };
    return token;
  }
}
