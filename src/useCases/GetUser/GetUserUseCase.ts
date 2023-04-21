import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserRequestDTO } from "./GetUserDTO";

export class GetUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(id?: string, email?: string): Promise<IGetUserRequestDTO> | undefined {
        let user;

        if (id)
            user = await this.usersRepository.findById(id);

        if (!id && email)
            user = await this.usersRepository.findByEmail(email);

        if (!user) return undefined;

        return new User(user);
    }
}
