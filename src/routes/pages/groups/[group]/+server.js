import { json } from '@sveltejs/kit';

// @ts-ignore
export const GET = async ({ params, locals }) => {
	let user = locals.user;
	if (user) {
		const type_group = params.group.split(',');
		const items = user.contents.filter(
			(items) => items.group == type_group[0] && items.type == type_group[1]
		);

		return json(items);
	}
};
