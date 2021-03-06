const Jobs = require("../models/job-model");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../Errors");
const { checkPermissions } = require("../utils/CheckPermissions");
const moment = require("moment");

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
  const { status, jobType, search, sort } = req.query;
  // console.log(req.query);

  const queryObject = {
    createdBy: req.user.userId,
  };
  if (status !== "all") {
    queryObject.status = status;
  }
  if (jobType !== "all") {
    queryObject.jobType = jobType;
  }
  if (search) {
    queryObject.position = { $regex: search, $options: "i" };
  }

  let result = Jobs.find(queryObject);

  switch (sort) {
    case "latest":
      result = result.sort("-createdAt");
      break;
    case "oldest":
      result = result.sort("createdAt");
      break;
    case "a-z":
      result = result.sort("position");
      break;
    case "z-a":
      result = result.sort("-position");
      break;

    default:
      break;
  }

  //PAGINATION
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const totalJobs = await Jobs.countDocuments(queryObject);
  const noOfPages = Math.ceil(totalJobs / limit);

  result = result.skip(skip).limit(limit);

  const jobs = await result;
  res.status(StatusCodes.OK).json({ jobs, totalJobs, noOfPages });
};
const showStats = async (req, res) => {
  let stats = await Jobs.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };
  let monthlyApplications = await Jobs.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();
  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
const updateJob = async (req, res) => {
  const { id: jobId } = req.params;

  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }

  const job = await Jobs.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`no job found with id ${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);

  const updatedJob = await Jobs.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedJob });
};
const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Jobs.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`no job found with id ${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);
  await job.remove();

  res.status(StatusCodes.OK).json({ msg: "job deleted" });
};

module.exports = { getJobs, createJob, showStats, updateJob, deleteJob };
