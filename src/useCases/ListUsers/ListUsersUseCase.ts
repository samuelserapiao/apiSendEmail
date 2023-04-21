import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IListUsersResponseDTO } from "./ListUsersDTO";

export class ListUsersUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(): Promise<IListUsersResponseDTO> {
        const users: User[] = await this.usersRepository.list();

        return users;
    }
}
