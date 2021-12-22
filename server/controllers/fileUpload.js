const path = require("path");

const upload = require("../middleware/fileUploadMiddleware");

const uploadFile = async (req, res) => {
  try {
    await upload(req, res);

    if (!req.file) {
      res.status(400).json({ msg: "Choose a file to upload" });
    }

    const { filename } = req.file;
    const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;

    const downloadUrl = `${fullUrl}/${filename}`;

    res.status(200).json({ msg: "File uploaded", filename, downloadUrl });
  } catch (err) {
    console.log(err);
  }
};

const downloadFile = (req, res) => {
  const { file } = req.params;

  const file_path = path.join(__dirname, "../uploads/");

  res.download(file_path + file, (err) => {
    if (err) {
      res.status(500).json({ msg: `File cannot be downloaded ${err}` });
    }
  });
};

module.exports = {
  uploadFile,
  downloadFile,
};
