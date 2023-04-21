import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

export class GetUserController {
  constructor(
    private getUserUseCase: GetUserUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const user = await this.getUserUseCase.execute(id);

      if (!user) return response.send({ message: "User not found" });

      return response.send(user);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}
