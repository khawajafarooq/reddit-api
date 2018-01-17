const basicController = {};

basicController.get = (req, res) => {
  res.json({
    message: 'Welcome to out API'
  });
};

export default basicController;
