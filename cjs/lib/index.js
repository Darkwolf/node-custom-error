class CustomError extends Error {
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
CustomError.name = 'CustomError'

module.exports = CustomError
