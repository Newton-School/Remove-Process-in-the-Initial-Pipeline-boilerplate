const express = require("express");

const { removeProcess } = require("../controllers/pipelineControllers");

const router = express.Router();

router.post("/removeProcess", removeProcess);

module.exports = router;