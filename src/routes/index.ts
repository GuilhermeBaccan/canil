import { Router } from 'express';

import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'
import * as InfoController from '../controllers/infoControllers'

const router = Router();

router.get('/', PageController.home)
router.get('/dogs', PageController.dog)
router.get('/cats', PageController.cats)
router.get('/fishes', PageController.fishes)
router.get('/search', SearchController.search)

router.get('/info', InfoController.info)


export default router;