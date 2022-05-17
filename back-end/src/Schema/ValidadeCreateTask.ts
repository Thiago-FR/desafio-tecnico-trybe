import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

const allFields = 'Todos os campos são necessários!';

export default class ValidadeCreateTask {
  static joi(req: Request, _res: Response, next: NextFunction) {
    const { task, responsible } = req.body;
    const { error } = Joi.object({
      task: Joi.string().required().messages({
        'any.required': `400|${allFields}`,
        'string.empty': `400|Campo Tarefa necessário!`,
      }),
      responsible: Joi.string().required().messages({
        'any.required': `400|${allFields}`,
        'string.empty': `400|Campo Responsável necessário!`,
      }),
    }).validate({ task, responsible });
    console.log(error);
    
    if (error) return next(error);

    return next();
  }
}
