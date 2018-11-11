const {
  User,
  Game,
  Company,
  UserDevice,
} = require('../models')

const addData = async () => {
  const user = await User.create({
    firstName: 'Bogdan',
  })
  const company = await Company.create({
    name: 'Zlata praga'
  })
  const device = await UserDevice.create({
    deviceId: 'random'
  })
  const game = await Game.create({
    name: 'scent'
  })
  await user.addCompany(company)
  await company.setTenant(user)
  await user.addDevice(device)
  await user.setGame(game)
  user.setParent(user)
}

const work = async () => {
  const user = await User.findByPk(1, {
    include: [
      {
        model: UserDevice,
        as: 'devices'
      }
    ]
  })
  console.log(await user.getGame())
}

// addData()
work()