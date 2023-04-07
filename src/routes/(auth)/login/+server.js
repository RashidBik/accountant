import { json } from '@sveltejs/kit';
import { User } from '$lib/server/model/mongo';

// @ts-ignore
export const POST = async ({ request }) => {
	const { email, password } = await request.json();
	// const userEmail = data.find((user) => user.user.email == email);
	// const userPswd = data.find((user) => user.user.password == password);
	const user = await User.findOne({ email: email });

	if (!user?.email || !user?.password) {
		return json({
			result: null,
			auth: false,
			message: 'Not found such user'
		});
	}
	if (user?.email != email || user?.password !== password) {
		return json('your Email or Password is wrong');
	}
	return json({
		auth: true,
		result: { id: user.id, email: user.email, name: user.name },
		message: 'Checked successfully and you are authenticated now'
	});
};
