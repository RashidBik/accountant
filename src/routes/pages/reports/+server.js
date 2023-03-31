import { json } from '@sveltejs/kit';
import { data } from '$lib/data/db';

export const GET = () => {
	/**
	 * @type {number[]}
	 */
	let expens = [];
	/**
	 * @type {number[]}
	 */
	let income = [];
	data[0].contents.map((content) => {
		if (content.type == 'expens') {
			expens.push(content.amount);
		}
		if (content.type == 'income') {
			income.push(content.amount);
		}
	});
	let count1 = 0;
	for (let i = 0; i < expens.length; i++) {
		count1 += expens[i];
	}
	let count2 = 0;
	for (let i = 0; i < income.length; i++) {
		count2 += income[i];
	}

	return json({ contents: data[0].contents, expens: count1, income: count2 });
};
