const notFoundMiddleware = (req, res) => {
  return res.send("Route does not exist");
};

module.exports = { notFoundMiddleware };
