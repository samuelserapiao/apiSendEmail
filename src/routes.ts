import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { getUserController } from "./useCases/GetUser";
import { listUserController } from "./useCases/ListUsers";

const router = Router()

router.get("/users", (request, response) => {
  return listUserController.handle(request, response);
});

router.get("/users/:id", (request, response) => {
  return getUserController.handle(request, response);
});

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

export { router }
