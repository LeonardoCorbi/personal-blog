import express from "express";
import UsersController from "../../controllers/users";

const routes = express.Router();

routes.get("/", UsersController.getUsers);
routes.post("/", UsersController.createUser);

export default routes;
