const express = require("express");

const { uploadFile, downloadFile } = require("../controllers/fileUpload");

const router = express.Router();

router.route("/").post(uploadFile);

router.route("/:file").get(downloadFile);

module.exports = router;
