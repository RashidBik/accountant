import { json } from '@sveltejs/kit';

// @ts-ignore
export const POST = async ({ request }) => {
	const { email, password } = await request.json();
	// const res = JSON.parse(email);

	return json({ email, password });
};
