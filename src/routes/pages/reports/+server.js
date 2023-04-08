import { json } from '@sveltejs/kit';

export const GET = ({ locals }) => {
	let user = locals.user;
	if (user) {
		/**
		 * @type {number[]}
		 */
		let expens = [];
		/**
		 * @type {number[]}
		 */
		let income = [];
		user.contents.map((/** @type {{ type: string; amount: number; }} */ content) => {
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

		return json({ contents: user.contents, expens: count1, income: count2 });
	}
};
