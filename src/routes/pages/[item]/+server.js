import { User } from '$lib/server/model/mongo';
import { json } from '@sveltejs/kit';

// @ts-ignore
export const GET = async ({ params, locals }) => {
	let user = locals.user;
	if (user) {
		const items = await user.contents.find((items) => items._id == params.item);
		if (items) {
			return json(items);
		}
	}
};

// @ts-ignore
export const DELETE = async ({ params, locals }) => {
	const user = await User.findById(locals.user.id);
	if (!user) {
		return json({ error: 'Looks like you dont have premission' });
	}
	await user.contents.remove(params.item);
	await user.save();
	return json({ result: true });
};
