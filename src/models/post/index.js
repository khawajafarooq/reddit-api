import mongoose from 'mongoose';
import middleware from './middleware';

const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;
mongoose.Promise = global.Promise;

const postSchema = new Schema({
  title: { type: String, required: true },
  link: String,
  text: String,
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  _creator: { type: ObjectId, ref: 'User' },
  _comments: [{ type: ObjectId, ref: 'Comment' }]
});

postSchema.pre('find', middleware.autoPopulateCreator);

const Post = mongoose.model('Post', postSchema);
export default Post;
