import { json } from '@sveltejs/kit';
import { User } from '$lib/server/model/mongo';

// @ts-ignore
export const POST = async ({ request }) => {
	const { name, job, email, password } = await request.json();

	const user = await new User({
		name,
		job,
		email,
		password
	});

	if (user) {
		user.save();
		return json({ success: true });
	} else {
		return json({ error: 'An Error Occurred!!' });
	}
};
