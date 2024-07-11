import Router from 'koa-router';
import { getStatistics, updateStatistics } from '../controllers/statistic.controller';

export const router = new Router();

router.get('/statistics/:autoId', getStatistics);
router.post('/statistics/:autoId', updateStatistics);
