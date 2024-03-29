const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = async function(req, res, next) {
  try {
      console.log(process.env.SECRET_KEY)
    let user = await User.create(req.body);
    let { id, username, profileImageUrl } = user;
    let token = jwt.sign(
      {
        id,
        username,
        profileImageUrl
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    });
  } catch (error) {
    //mongo vallidation fails
    if (error.code === 11000) {
      error.message = "Sorry use different mail or username";
    }
    return next({
      status: 400,
      message: error.message
    });
  }
};

exports.signin = async function(req, res, next) {
  try {
    let user = await User.findOne({
      email: req.body.email
    });
    // return res.send(user);
    let { id, username, profileImageUrl } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
          profileImageUrl
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        id,
        username,
        profileImageUrl,
        token
      });
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password"
      });
    }
  } catch (error) {
    return next({
      status: 400,
      message: "Invalid Email/Password"
    });
  }
};
