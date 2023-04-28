import mongoose from 'mongoose';
import { MONGODB_URI } from '$env/static/private';

export default function connection() {
	mongoose.set('strictQuery', false);
	return mongoose.connect(MONGODB_URI);
}
