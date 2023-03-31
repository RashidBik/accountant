import { data } from '$lib/data/db';
import { json } from '@sveltejs/kit';

// @ts-ignore
export const POST = async ({ request }) => {
	const { name, job, email, password } = await request.json();

	data.push({
		user: {
			id: data.length + 1,
			name,
			job,
			email,
			password
		},
		contents: []
	});

	const user = data.find((user) => user.user.email == email);

	if (user) {
		return json({ success: true });
	} else {
		return json({ error: 'An Error Occurred!!' });
	}
};
