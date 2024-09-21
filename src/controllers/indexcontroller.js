exports.homepage = async (req, res, next) => {
    try {
      res.status(200).json({ message: "Welcome to the homepage" });
    } catch (error) {
      next(error);
    }
  };