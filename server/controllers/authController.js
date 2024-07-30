exports.login = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.signUp = async (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
