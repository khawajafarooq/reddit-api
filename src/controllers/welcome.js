const welcome = {};

welcome.get = (req, res) => {
  res.json({
    message: 'Welcome to Reddit API 👤'
  });
};

export default welcome;
