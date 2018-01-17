import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import middleware from './middleware';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username must be 5 characters of more.'],
  },
  password: String,
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// methods
userSchema.methods.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

// hash the password before saving
userSchema.pre('save', middleware.hashPassword);

const User = mongoose.model('User', userSchema);
export default User;
