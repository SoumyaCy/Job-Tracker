const Jobs = require("../models/job-model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../Errors");

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;

  const job = await Jobs.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};
const getJobs = async (req, res) => {
  res.send("all jobs");
};
const showStats = async (req, res) => {
  res.send("here are stats");
};
const updateJob = async (req, res) => {
  res.send("job updated");
};
const deleteJob = async (req, res) => {
  res.send("job deleted");
};

module.exports = { getJobs, createJob, showStats, updateJob, deleteJob };
