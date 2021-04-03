const router = require("express").Router();
const User = require("../models/User.model");
const cloudinaryUpload = require("../config/cloudinary.config");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/profile", (req, res, next) => {
  console.log("profile", req.session.user);
  res.render("profile", req.session.user);
});

router.post("/profile", cloudinaryUpload.single("image"), (req, res, next) => {
  console.log(req.file.path);
  // req session is something
  User.findOneAndUpdate(
    {
      username: req.session.user.username,
    },
    { profileImg: req.file.path },
    { new: true }
  ).then((userFromDB) => {
    console.log(userFromDB);
    userFromDB.password = "";
    req.session.user = userFromDB;
    res.render("profile");
  });
});

module.exports = router;
