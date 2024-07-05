import { Request, Response } from "express";
import { CreateUserUseCase } from "../../core/use_cases/CreateUserUseCase";
import { GetUsersUseCase } from "../../core/use_cases/GetUsersUseCase";
import { MongoUserRepository } from "../../infrastructure/persistence/mongo/MongoUserRepository";
import { hashPassword } from "../../infrastructure/utils/PasswordHasher";
import { LoginUserUseCase } from "../../core/use_cases/LoginUserUseCase";
import jwt, { JwtPayload } from "jsonwebtoken";

const userRepository = new MongoUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const getUsersUseCase = new GetUsersUseCase(userRepository);
const loginUserUseCase = new LoginUserUseCase(userRepository);
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password, roles } = req.body;
  const passwordHash = hashPassword(password);
  const user = await createUserUseCase.execute(username, email, passwordHash, roles);
  res.json(user);
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await getUsersUseCase.execute();
  res.json(users);
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const result = await loginUserUseCase.execute(email, password);
  res.json(result);
};

export const protectedRoute = async (req: Request, res: Response): Promise<void> => {
  const token = req.headers.authorization?.split(" ")[1] || "";
  if (!token) {
    res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    if (typeof decoded !== "object" || !("userId" in decoded)) {
      throw new Error("Invalid token payload");
    }
    res.json({ message: "Protected route accessed", userId: decoded.userId });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: "Invalid token" });
    } else {
      res.status(400).json({ message: "Error processing token" });
    }
  }
};

export const testMiddleware = async (req: Request, res: Response): Promise<void> => {
  res.json({ message: "middleware funciona" });
};
