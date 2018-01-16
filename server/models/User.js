import mongoose from 'mongoose';

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username must be 5 characters of more.'],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be 8 characters of more.'],
  },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// write encryption for password

const User = mongoose.model('User', userSchema);
export default User;
