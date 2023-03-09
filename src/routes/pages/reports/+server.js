import { json } from '@sveltejs/kit';
import { data } from '$lib/data/db';

export const GET = () => {
	const income = data[0].contents.find((item) => item.type === 'income');
	console.log(income);
	return json({ contents: data[0].contents, datas: '' });
};
