import { data } from '$lib/data/db';
import { json } from '@sveltejs/kit';

// @ts-ignore
export const GET = ({ params }) => {
	const items = data[0].contents.find((items) => items.id == params.item);

	return json(items);
};
