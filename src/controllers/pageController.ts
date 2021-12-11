import { Request, Response } from 'express';
import { title } from 'process';
import { createMenuObjetc } from '../helpers/createMenuObject'
import { Pet } from '../models/pet';


export const home = (req: Request, res: Response) => {

  let list = Pet.getAll();

  res.render('pages/page', {
    menu: createMenuObjetc('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    },
    list
  });
}

export const dog = (req: Request, res: Response) => {

  let list = Pet.getFromType('dog');

  res.render('pages/page', {
    menu: createMenuObjetc('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg',
    },
    list,
  })
};


export const cats = (req: Request, res: Response) => {

  let list = Pet.getFromType('cat');

  res.render('pages/page', {
    menu: createMenuObjetc('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    },
    list,
  })
}

export const fishes = (req: Request, res: Response) => {

  let list = Pet.getFromType('fish');

  res.render('pages/page', {
    menu: createMenuObjetc('fish'),
    banner: {
      title: 'Peixeis',
      background: 'banner_fish.jpg'
    },
    list
  })
}

