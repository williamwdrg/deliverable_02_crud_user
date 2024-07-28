catchError = require('../utils/catchError');
const User = require("../models/user.model");

const getUsersAll = catchError(async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

const createUsers = catchError(async (req, res) => {
  const { body } = req;
  if (!body) return res.status(400).json({ message: 'Invalid data' });
  const newUser = await User.create(body);
  res.status(201).json(newUser);
});

const getUserById = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
});

const updateUser = catchError(async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const user = await User.update(body, { where: { id }, returning: true });

  if (updated === 0) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
});

const destroyUsers = catchError(async (req, res) => {
  const { id } = req.params;
  const deleteUser = await User.destroy({ where: { id } });
  if (!deleteUser) return res.status(404).json({ message: 'User not found' });
  res.sendStatus(204);
});

module.exports = {
  getUsersAll,
  createUsers,
  getUserById,
  updateUser,
  destroyUsers
}