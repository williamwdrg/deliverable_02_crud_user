const Datatype = require('sequelize')
const db = require('../utils/connection.js')

const User = db.define('user', {
  firstName: {
    type: Datatype.STRING(100),
    allowNull: false,
    fields: 'first_name'
  },
  lastName: {
    type: Datatype.STRING(100),
    allowNull: false,
    fields: 'last_name'
  },
  email: {
    type: Datatype.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Datatype.STRING,
    allowNull: false,
  },
  birthday: {
    type: Datatype.DATEONLY,
    allowNull: false,
    validate: {
      isDate: true
    }
  }
})

module.exports = User