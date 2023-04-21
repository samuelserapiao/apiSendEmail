import { expect, test } from "vitest";
import { User } from "./User";

test("Create an user", () => {
    const user = new User({
        "name": "Mario",
        "email": "itsmemario@nintendo.com",
        "password": "peaceprincess"
    });

    expect(user).toBeInstanceOf(User);
    expect(user.name).toEqual("Mario");
});

test("Email is required", () => {
    expect(() => {
        return new User({
            "name": "Luigi",
            "email": "",
            "password": "peaceprincess"
        });
    }).toThrow();
});

test("Email without @ is not valid", () => {
    expect(() => {
        return new User({
            "name": "Luigi",
            "email": "itsmemarionintendo.com",
            "password": "peaceprincess"
        });
    }).toThrow();
});
