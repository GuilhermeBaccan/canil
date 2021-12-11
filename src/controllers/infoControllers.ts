import { Request, Response } from 'express';
import { title } from 'process';
import { createMenuObjetc } from '../helpers/createMenuObject'
import { Pet } from '../models/pet';

export const info = (req: Request, res: Response) => {
  res.render('pages/info', {

  })

};
