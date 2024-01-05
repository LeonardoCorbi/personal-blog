import { Request, Response } from "express";
import { prisma } from "../../database";
import { User } from "@prisma/client";

export default class UsersController {
  static async getUsers(req: Request, res: Response) {
    const users = await prisma.user.findMany();

    return res.json(users);
  }

  static async createUser(req: Request, res: Response) {
    const data = req.body as User;

    try {
      await prisma.user.create({ data });

      return res.sendStatus(201);
    } catch (error) {
      console.log(error);
      throw new Error("Quebrou");
    }
  }
}
