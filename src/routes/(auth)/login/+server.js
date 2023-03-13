import { data } from '$lib/data/db';
import { json } from '@sveltejs/kit';

// @ts-ignore
export const POST = async ({ request }) => {
	const { email, password } = await request.json();
	// const res = JSON.parse(email);
	const userEmail = data.find((user) => user.user.email == email);
	const userPswd = data.find((user) => user.user.password == password);

	if (!userEmail) {
		return json('your email is wrong');
	}
	if (!userPswd) {
		return json('your password is wrong');
	}

	return json({
		result: userEmail.user.name,
		message: 'Checked successfully and you are authenticated now'
	});
};
