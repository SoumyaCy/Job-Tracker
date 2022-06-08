const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("./Custom-api-error");
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.NOT_FOUND;
  }
}
module.exports = { NotFoundError };
