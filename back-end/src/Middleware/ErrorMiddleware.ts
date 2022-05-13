import { NextFunction, Request, Response } from "express";

export default class ErrorMiddleware {
  static handleError(
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
  ): Response {
    if (err.statusCode) {{
      const { code, message } = err.statusCode;

      return res.status(code).json({ message });
    }}

    return res.status(500).json({ message: err.message });
  }
}