import { UserRepository } from "../../infrastructure/persistence/UserRepository.model";
import { matchPassword } from "../../infrastructure/utils/PasswordHasher";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
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
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
    return { token };
  }
}
