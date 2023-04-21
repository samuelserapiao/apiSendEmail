import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { ListUserController } from "./ListUsersController";
import { ListUserUseCase } from "./ListUsersUseCase";

const postgresUsersRepository = new PostgresUsersRepository();

const listUserUseCase = new ListUserUseCase(
    postgresUsersRepository
);

const listUserController = new ListUserController(
    listUserUseCase
);

export { listUserController }