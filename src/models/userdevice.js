'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserDevice = sequelize.define('UserDevice', {
    deviceId: DataTypes.STRING
  }, {
    tableName: 'userDevices'
  });
  UserDevice.associate = function({ User }) {
    UserDevice.belongsTo(User)
  };
  return UserDevice;
};