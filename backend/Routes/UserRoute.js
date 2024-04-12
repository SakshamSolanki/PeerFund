import express from 'express';

import {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
} from "../Controllers/UserController.js"

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.post('/new', createUser);
userRouter.get('/:id', getUser);
userRouter.put('/update/:id', updateUser);
userRouter.delete('/delete/:id', deleteUser);

export { userRouter };