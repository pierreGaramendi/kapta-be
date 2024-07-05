import { UserRepository } from "../../infrastructure/persistence/UserRepository";
import { IUser } from "../entities/User.model";

export class GetUsersUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(): Promise<IUser[]> {
        return await this.userRepository.getAll();
    }
}
