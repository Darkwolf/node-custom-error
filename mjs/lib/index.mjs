export default class CustomError extends Error {
  static name = 'CustomError'

  constructor(message, code) {
    super(message)
    this
      .setName(CustomError.name)
      .setCode(code)
  }

  setName(name) {
    this.name = name
    return this
  }

  setMessage(message) {
    this.message = message
    return this
  }

  setCode(code) {
    this.code = code
    return this
  }
}
