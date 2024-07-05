import { Request, Response } from "express";
import { GetUsersUseCase } from "../../core/use_cases/GetUsersUseCase";
import { MongoUserRepository } from "../../infrastructure/persistence/mongo/MongoUserRepository";

const userRepository = new MongoUserRepository();
const getUsersUseCase = new GetUsersUseCase(userRepository);

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await getUsersUseCase.execute();
  res.json(users);
};