import { data } from '$lib/data/db';
import { json } from '@sveltejs/kit';

// @ts-ignore
export const GET = ({ params }) => {
	const items = data[0].contents.find((items) => items.id == params.item);

	return json(items);
};

// @ts-ignore
export const DELET = async ({ params }) => {
	const newData = data[0].contents.filter((items) => items.id !== params.item);
	if (newData) {
		data[0].contents = newData;
		console.log(newData);
		return json('successfully deleted');
	} else {
		return json('there is a problem with id');
	}
};
