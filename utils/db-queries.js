const {
  User,
  Game,
  Company,
  UserDevice,
  Sequelize,
} = require('../models')

const Fn = Sequelize.fn
const Op = Sequelize.Op

const createLog = logger => (stuff) => {
  if (Array.isArray(stuff)) {
    return logger(stuff.map(s => s.get()))
  }
  logger(stuff.get())
}

const log = createLog(console.log)

const main = async () => {
  const res = await User.findAll({
    where: {
      id: {
        [Op.or]: [1, 2]
      }
    }
  })
  
  log(res)
}

main()
