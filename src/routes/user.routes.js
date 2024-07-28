const { getUsersAll, createUsers, getUserById, destroyUsers, updateUser } = require('../controllers/users.cootrollers')
const express = require('express')

const userRouter = express.Router()

userRouter.route('/')
  .get(getUsersAll)
  .post(createUsers)

userRouter.route('/:id')
  .get(getUserById)
  .delete(destroyUsers)
  .put(updateUser)

module.exports = userRouter