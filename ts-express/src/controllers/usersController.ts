import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/createuser.dto";
import { createQ } from "../types/create-query";
export const getUsers = (req: Request, res: Response): void => {
  res.send(["all users"]);
};

export const createUser = (
  req: Request<{ id: string }, [], CreateUserDto, createQ>,
  res: Response
): void => {
  req.body.email;
  req.query.loginAfterCreate;
  req.params.id;
};
