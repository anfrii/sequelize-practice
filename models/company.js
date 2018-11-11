module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    businessAddress: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    tableName: 'companies'
  })
  Company.associate = ({ User }) => {
    Company.belongsToMany(User, {
      through: 'userCompanies',
      foreignKey: 'companyId',
    })

    Company.belongsTo(User, {
      as: 'tenant',
      foreignKey: 'tenantId'
    })
  }
  return Company
}