import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		type: String,
		amount: Number
	},
	{ timestamps: true }
);
// mongoose.Collection.find()

const User = mongoose.model('User', userSchema);
export default User;
