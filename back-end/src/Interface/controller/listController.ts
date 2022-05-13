import { Request, Response } from "express";

export default interface IListController {
  findAll: (req: Request, res: Response) => Promise<Response>,
  create: (req: Request, res: Response) => Promise<Response>,
  update: (req: Request, res: Response) => Promise<Response>,
}