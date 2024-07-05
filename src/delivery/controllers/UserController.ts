import { Request, Response } from "express";
import { CreateUserUseCase } from "../../core/use_cases/CreateUserUseCase";
import { GetUsersUseCase } from "../../core/use_cases/GetUsersUseCase";
import { MongoUserRepository } from "../../infrastructure/persistence/mongo/MongoUserRepository";
import { hashPassword } from "../../infrastructure/utils/PasswordHasher";
import { LoginUserUseCase } from "../../core/use_cases/LoginUserUseCase";

const userRepository = new MongoUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const getUsersUseCase = new GetUsersUseCase(userRepository);
const loginUserUseCase = new LoginUserUseCase(userRepository);

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
