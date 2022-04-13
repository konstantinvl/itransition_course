import { Router } from 'express';
import { StatusCodes } from '../common';
import {
  blockUserById,
  deleteUserById,
  getUserById,
  getUserlist,
  setNewUser,
  unblockUserById,
} from './repository';
import { NewUserInterface } from './user';
const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await getUserlist();
    return res.json(data);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await getUserById(Number(req.params.id));
    if (!data) return res.sendStatus(StatusCodes.NotFound);
    return res.json(data);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.delete('/', async (req, res) => {
  const deleteData = req.body as number[];
  deleteData.forEach((id) => deleteUserById(id));
  try {
    const data = await getUserlist();
    return res.json(data);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.post('/block', async (req, res) => {
  const blockData = req.body as number[];
  blockData.forEach((id) => blockUserById(id));
  try {
    const data = await getUserlist();
    return res.json(data);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.post('/unblock', async (req, res) => {
  const blockData = req.body as number[];
  blockData.forEach((id) => unblockUserById(id));
  try {
    const data = await getUserlist();
    return res.json(data);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

router.post('/newuser', async (req, res) => {
  try {
    const newUser = await setNewUser(req.body as NewUserInterface);
    return res.json(newUser);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

// router.put('/', async (req, res) => {
//   const data = req.body as Item;
//   const category = await getCategoryById(data.categoryId);
//   if (!category) {
//     return res.status(StatusCodes.BadRequest).send('Invalid category ID');
//   }
//   try {
//     const newData = await updateItem(data);
//     return res.json(newData);
//   } catch (e) {
//     return res.status(StatusCodes.BadRequest).send(e);
//   }
// });

export default router;
