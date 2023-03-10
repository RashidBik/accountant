import { data } from '$lib/data/db';
import { json } from '@sveltejs/kit';

// @ts-ignore
export const GET = ({ params }) => {
	const item = data[0].contents.find((items) => items.id == params.item);
	const groups = data[0].contents.map((items) => items.group);
	const group = Array.from(new Set(groups));
	return json({ group, item });
};
