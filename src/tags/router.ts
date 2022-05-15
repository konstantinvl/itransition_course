import { Router } from 'express';
import { StatusCodes } from '../common/status-codes';
import { getAllTags } from './repository';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await getAllTags();
    return res.json(data);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

export default router;
