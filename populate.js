require("dotenv").config();
const { readFile } = require("fs/promises");
const { connectDB } = require("./db/connect");
const data = require("./mock-data.json");

const Jobs = require("./models/job-model");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Jobs.deleteMany();
    // const jsonProducts = JSON.parse(data);
    await Jobs.create(data);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();
