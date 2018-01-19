
const autoPopulateCreator = function(next) {
  this.populate({
    path: "_creator",
    select: "username createdAt -_id"
  });
  next();
};

module.exports = {
  autoPopulateCreator,
};
