import { json } from '@sveltejs/kit';
import { User } from '$lib/server/model/mongo';

// @ts-ignore
export const POST = async ({ request }) => {
	const { name, job, email, password } = await request.json();

	const user = await User.create({
		user: {
			name,
			job,
			email,
			password
		},
		contents: []
	});

	user.save((/** @type {any} */ err) => {
		if (!err) {
			return json({ success: true });
		} else {
			return json({ error: 'An Error Occurred!!' });
		}
	});
};
