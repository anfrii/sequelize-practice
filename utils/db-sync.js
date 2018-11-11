const {
  sequelize,
} = require('../models')

sequelize.sync({ force: true }).then(() => {
  console.log('Database synced')
  process.exit()
}).catch((err) => {
  console.log('Database sync error')
  console.log(err)
  process.exit()
})
