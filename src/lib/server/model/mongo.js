import mongoose from 'mongoose';
const contentSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			required: true,
			enum: ['income', 'expens']
		},
		amount: {
			type: Number,
			required: true
		},
		deal: {
			type: String,
			required: true,
			enum: ['cash', 'credit']
		},
		group: {
			type: String,
			required: true
		},
		report: { type: String },
		date: {
			type: Date,
			required: true
		}
	},
	{ timestamps: true }
);

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	job: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	contents: [contentSchema]
});

// export const User = mongoose.model('User', userSchema);
export const User = mongoose.models.User || mongoose.model('User', userSchema);
