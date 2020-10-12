[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[Error]: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error

# API
### class: CustomError
* extends: <[Error][Error]>

#### `static` CustomError.name
* returns: <[string][string]> Defaults to `CustomError`.

#### `init` new CustomError(message[, code])
* `message` <[string][string]> Error message. E.g., `'Invalid value: '<value>'.'`.
* `code` <[string][string]> Error code. Must be in kebab case. E.g., `'invalid-value'`.
* returns: <[CustomError](#class-customerror)>

#### customError.setName(name)
* `name` <[string][string]> Error name. Must be named as error class. E.g., `'InvalidValueError'`.
* returns: <[this](#class-customerror)>

#### customError.setMessage(message)
* `message` <[string][string]> Error message. E.g., `'Invalid value: '<value>'.'`.
* returns: <[this](#class-customerror)>

#### customError.setCode(code)
* `code` <[string][string]> Error code. Must be in kebab case. E.g., `'invalid-value'`.
* returns: <[this](#class-customerror)>
