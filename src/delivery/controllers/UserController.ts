import { Request, Response } from "express";
import { GetUsersUseCase, GetUserByIdUseCase } from "../../core/use_cases/GetUsersUseCase";
import { MongoUserRepository } from "../../infrastructure/persistence/mongo/user/MongoUserRepository";

const getUserByIdUseCase = GetUserByIdUseCase(MongoUserRepository);
const getUsersUseCase = GetUsersUseCase(MongoUserRepository);

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const user = await getUsersUseCase();
  res.json(user);
};

export const getMe = async (req: Request, res: Response): Promise<void> => {
  const {
    user: { userId },
  } = Object(req);
  const user = await getUserByIdUseCase(userId);
  res.json(user);
};
