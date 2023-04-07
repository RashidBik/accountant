import mongoose from 'mongoose';

const MONGODB_CONNECTION = 'mongodb://localhost:27017/income';

export default function connection() {
	mongoose.set('strictQuery', false);
	return mongoose.connect(MONGODB_CONNECTION);
}
