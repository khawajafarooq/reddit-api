const welcomeController = {};

welcomeController.get = (req, res) => {
  res.json({
    message: 'Welcome to Reddit API 👤'
  });
};

export default welcomeController;
