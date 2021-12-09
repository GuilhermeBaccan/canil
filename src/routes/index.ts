import { Router } from 'express';

import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/pageSearch'

const router = Router();

router.get('/', PageController.home)
router.get('/dogs', PageController.dog)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)

router.get('/search', (req, res) => SearchController.search)


export default router;