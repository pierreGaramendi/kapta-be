import { IUserRepository } from "../../infrastructure/persistence/mongo/user/UserRepository.model";

export const GetUsersUseCase = (userRepository: IUserRepository) => async (): Promise<any> => {
  return await userRepository.getAll();
};

export const GetUserByIdUseCase =
  (userRepository: IUserRepository) =>
  async (_id: string): Promise<any> => {
    return await userRepository.getUserById(_id);
  };
