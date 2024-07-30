const catchAsyn = require("../utils/catchAsync");

exports.login = catchAsyn(async (req, res, next) => {
  try {
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

exports.signUp = catchAsyn(async (req, res) => {
  res.status(200).json({
    status: "success",
  });
});
