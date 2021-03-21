import { Router } from "express";
import usersController from "./controllers/usersController";

const routes = Router();

routes.get("/users", usersController.index);

export default routes;
