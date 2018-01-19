import db from './../models';

const postController = {};

postController.post = (req, res) => {

  const {
    title,
    text,
    link,
    userId, // getting this from json web token
  } = req.body;

  // validation either text or link, not both

  const post = new db.Post({
    title,
    text,
    link,
    _creator: userId,
  });

  // save it
  post.save().then((newPost) => {
    return res.status(200).json({
      success: true,
      data: newPost,
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err,
    });
  });
};

postController.getAll = (req, res) => {
  db.Post.find({}).then((posts) => {
    return res.status(200).json({
      success: true,
      data: posts,
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err.toString(),
    });
  });
};

export default postController;
