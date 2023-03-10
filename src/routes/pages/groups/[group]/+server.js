import { data } from '$lib/data/db';
import { json } from '@sveltejs/kit';

// @ts-ignore
export const GET = async ({ params }) => {
	const type_group = params.group.split(',');
	const items = data[0].contents.filter(
		(items) => items.group == type_group[0] && items.type == type_group[1]
	);

	return json(items);
};
