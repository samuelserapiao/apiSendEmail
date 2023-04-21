import { describe, expect, it } from "vitest";
import { User } from "../../entities/User";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";

describe("Create an user", () => {
    const postgresUsersRepository = new PostgresUsersRepository();
    const mailtrapMailProvider = new MailtrapMailProvider();

    const createUserUseCase = new CreateUserUseCase(
        postgresUsersRepository,
        mailtrapMailProvider,
    );

    it("Should be able to create an user", () => {
        expect(createUserUseCase.execute({
            "name": "Mario",
            "email": "itsmemario@nintendo.com",
            "password": "peaceprincess"
        })).resolves.toBeInstanceOf(User);
    });

    it("Should not be able to create a user with already used email", async () => {
        await expect(createUserUseCase.execute({
            "name": "Mario",
            "email": "itsmemario@nintendo.com",
            "password": "peaceprincess"
        })).rejects.toThrow("User already exists.");
    });

    it("Should not be able to create a user with invalid email", async () => {
        await expect(createUserUseCase.execute({
            "name": "Luigi",
            "email": "itsmeluigi#nintendo.com",
            "password": "peaceprincess"
        })).rejects.toThrow("Invalid email.");
    });

    it("Should not be able to create a user without email", async () => {
        await expect(createUserUseCase.execute({
            "name": "Mario",
            "email": "",
            "password": "peaceprincess"
        })).rejects.toThrow("Email is mandatory.");
    });
});
