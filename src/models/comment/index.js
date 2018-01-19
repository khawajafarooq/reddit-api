import mongoose from 'mongoose';
import middleware from './middleware';

const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;
mongoose.Promise = global.Promise;

const commentSchema = new Schema({
  text: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  _creator: { type: ObjectId, ref: 'User' },
  _post: { type: ObjectId, ref: 'Post' }
});

commentSchema.pre('find', middleware.autoPopulateCreator);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
