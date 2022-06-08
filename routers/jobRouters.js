const express = require("express");
const {
  getJobs,
  createJob,
  showStats,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");
const router = express.Router();

router.route("/").get(getJobs).post(createJob);
router.get("/stats", showStats);
router.route("/:id").patch(updateJob).delete(deleteJob);

module.exports = router;
