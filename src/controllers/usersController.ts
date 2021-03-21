import { Request, Response } from "express";

export default {
  async index(request: Request, response: Response) {
    const user = {
      name: "Fulano de Souza",
      age: 35,
    };

    return response.status(200).json(user);
  },
};
