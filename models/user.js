module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    tableName: 'users'
  })
  User.associate = function({ Company, UserDevice, Game }) {
    User.belongsToMany(Company, {
      through: 'userCompanies',
      foreignKey: 'userId'
    })
    User.hasMany(UserDevice, {
      as: 'devices',
      onDelete: 'cascade'
    })
    User.hasOne(Game, {
      onDelete: 'cascade'
    })
    User.hasOne(User, {
      as: 'Parent',
      foreignKey: 'parentId'
    })
  }
  return User
}