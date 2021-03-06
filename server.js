const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("express-async-errors");
const morgan = require("morgan");
//routers
const authRouter = require("./routers/authRouters");
const jobsRouter = require("./routers/jobRouters");

//DB
const { connectDB } = require("./db/connect");

//middleware
const { errorHandlerMiddleware } = require("./middleware/error-handler");
const { notFoundMiddleware } = require("./middleware/not-found");
const { authenticateUser } = require("./middleware/auth");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  //   throw new Error("err");
  res.send("Welcome");
});
app.get("/api/v1", (req, res) => {
  //   throw new Error("err");
  res.json({ msg: "api" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
// console.log("server is running...");
