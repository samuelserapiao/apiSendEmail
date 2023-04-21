const { v4: uuidv4 } = require("uuid")
import { Utils } from "../utils";

export class User {

  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    }

    if (!this.email)
      throw new Error("Email is mandatory.");

    if (!Utils.isEmailValid(this.email))
      throw new Error("Invalid email.");
  }
}