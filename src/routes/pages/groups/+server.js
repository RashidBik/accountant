import { json } from '@sveltejs/kit';

export const GET = ({ locals }) => {
	let user = locals.user;
	if (user) {
		const expenses = user.contents.filter((content) => content.type === 'expens');
		const incomes = user.contents.filter((content) => content.type === 'income');

		return json({ expenses, incomes });
	}
};
