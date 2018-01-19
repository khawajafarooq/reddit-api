
const autoPopulateCreator = function(next) {
  this.populate({
    path: "_creator",
    select: "username createdAt -_id"
  }).populate({
    path: '_comments',
    select: 'text createdAt _creator',
    match: { 'isDeleted': false }
  });
  next();
};

module.exports = {
  autoPopulateCreator,
};
