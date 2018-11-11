import { sequelize } from '../models'

export default () => {
  return sequelize.sync({ force: true }).then(() => {
    console.log('Database synced')
    return Promise.resolve()
  }).catch((err) => {
    console.log('Database sync error')
    console.log(err)
    process.exit()
  })
}
