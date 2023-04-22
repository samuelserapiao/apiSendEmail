import { describe, expect, it } from "vitest";
import { User } from "../../entities/User";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { GetUserUseCase } from "./GetUserUseCase";

describe("Read an user", () => {
    const postgresUsersRepository = new PostgresUsersRepository();

    const createUserUseCase = new CreateUserUseCase(
        postgresUsersRepository
    );

    const getUserUseCase = new GetUserUseCase(
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

    it("Should be able to read user Mario", () => {
        expect(getUserUseCase.execute("", "itsmemario@nintendo.com")).resolves.toContain({name: "Mario"});
    });

    it("Should be able to read user Luigi", () => {
        expect(getUserUseCase.execute("", "itsLuigi@nintendo.com")).resolves.toContain({name: "Luigi"});
    });
});
