const createJob = (req, res) => {
  res.send("job created");
};
const getJobs = (req, res) => {
  res.send("all jobs");
};
const showStats = (req, res) => {
  res.send("here are stats");
};
const updateJob = (req, res) => {
  res.send("job updated");
};
const deleteJob = (req, res) => {
  res.send("job deleted");
};

module.exports = { getJobs, createJob, showStats, updateJob, deleteJob };
