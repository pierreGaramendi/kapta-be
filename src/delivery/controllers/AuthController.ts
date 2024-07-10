import { Request, Response } from "express";
import { createUserUseCase } from "../../core/use_cases/CreateUserUseCase";
import { MongoUserRepository } from "../../infrastructure/persistence/mongo/user/MongoUserRepository";
import { hashPassword } from "../../infrastructure/utils/PasswordHasher";
import { LoginUserUseCase } from "../../core/use_cases/LoginUserUseCase";
import { validateNewUserObject } from "./Auth.validators";
import { getErrorMessageMongo, getErrorMessageZod } from "../../infrastructure/utils/errorMessages.util";
const createUser = createUserUseCase(MongoUserRepository);
const login = LoginUserUseCase(MongoUserRepository);

export const createUserController = async (req: Request, res: Response): Promise<any> => {
  const validated = validateNewUserObject(req.body);
  if (!validated.success) {
    const message = getErrorMessageZod(validated);
    return res.status(400).json({ message });
  }
  const { username, email, password } = validated.data;
  const passwordHash = hashPassword(password);
  const user = await createUser(username, email, passwordHash).catch((error: any) => {
    const message = getErrorMessageMongo(error);
    res.status(400).json({ message });
  });
  res.json(user);
};

export const loginUserController = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const result = await login(email, password, res);
  res.json(result);
};
