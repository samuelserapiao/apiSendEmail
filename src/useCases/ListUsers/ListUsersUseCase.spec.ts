import { describe, expect, it } from "vitest";
import { User } from "../../entities/User";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { ListUsersUseCase } from "./ListUsersUseCase";

describe("List users", () => {
    const postgresUsersRepository = new PostgresUsersRepository();

    const createUserUseCase = new CreateUserUseCase(
        postgresUsersRepository
    );

    const listUsersUseCase = new ListUsersUseCase(
        postgresUsersRepository
    );

    it("Should be able to create an user", () => {
        expect(createUserUseCase.execute({
            "name": "Mario",
            "email": "itsmemario@nintendo.com",
            "password": "peaceprincess"
        })).resolves.toBeInstanceOf(User);
    });

    it("Should be able to create an user", () => {
        expect(createUserUseCase.execute({
            "name": "Luigi",
            "email": "itsLuigi@nintendo.com",
            "password": "peaceprincess"
        })).resolves.toBeInstanceOf(User);
    });

    it("Should be able to listing users", () => {
        expect(listUsersUseCase.execute()).resolves.toHaveLength(2);
    });
});
