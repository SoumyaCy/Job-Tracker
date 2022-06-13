const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("./Custom-api-error");

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.UNAUTHORIZED;
  }
}
module.exports = { UnAuthenticatedError };
