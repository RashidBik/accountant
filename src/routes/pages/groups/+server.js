import { json } from '@sveltejs/kit';
import { data } from '$lib/data/db';

export const GET = () => {
	const expenses = data[0].contents.filter((content) => content.type === 'expens');
	const incomes = data[0].contents.filter((content) => content.type === 'income');

	return json({ expenses, incomes });
};
