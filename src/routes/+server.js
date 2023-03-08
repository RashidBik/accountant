import { json } from '@sveltejs/kit';
// import { connect } from '$lib/db/dbConnection';
// import mongoose from 'mongoose';
// import User from '$lib/model/user';
// let myName;

export async function GET() {
	// mongoose.Collection.find()
	// 	// const user = await mongoose.Collection.findOne();
	const name = 'rashid';
	return json(name);
}
