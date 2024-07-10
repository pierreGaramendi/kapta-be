import { Response } from "express";
import { IUserRepository } from "../../infrastructure/persistence/mongo/user/UserRepository.model";
import { matchPassword } from "../../infrastructure/utils/PasswordHasher";
import jwt from "jsonwebtoken";
import { isProduction } from "../../infrastructure/utils/enviroment.util";

export const LoginUserUseCase =
  (userRepository: IUserRepository) =>
  async (emailAddress: string, password: string, res: Response): Promise<any> => {
    const user = await userRepository.findByEmail(emailAddress);
    if (!user) {
      return { message: "Invalid email" };
    }
    const isPasswordValid = matchPassword(password, user.passwordHash);
    if (!isPasswordValid) {
      return { message: "Invalid password" };
    }
    const { username, email, roles } = user;
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "vvv", { expiresIn: "1h" });
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction(),
      maxAge: 3600000,
      sameSite: "strict",
      signed: true,
    });
    return { username, email, roles };
  };
