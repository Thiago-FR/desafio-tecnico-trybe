import { Request, Response } from "express";

export default interface IListController {
  findAll: (req: Request, res: Response) => Promise<Response>,
}