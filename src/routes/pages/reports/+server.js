import { json } from '@sveltejs/kit';
import { data } from '$lib/data/db';

export const GET = () => {
	let expens = 0;
	let income = 0;
	data[0].contents.map((content) => {
		if (content.type == 'expens') {
			expens += content.amount;
		}
		if (content.type == 'income') {
			income += content.amount;
		}
	});
	return json({ contents: data[0].contents, expens, income });
};
