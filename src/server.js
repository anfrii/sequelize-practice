import validator from './utils/validator'

export default () => {
  console.log('server is running in port')

  validator()


  class Some {
    click = (...args) => {
      console.log(...args)
    }
  }

  const s = new Some()
  s.click(1, 2, 3)

}
