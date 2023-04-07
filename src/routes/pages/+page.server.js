/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';

export const actions = {
	// @ts-ignore
	default: async ({ fetch, request }) => {
		const form = await request.formData();
		const amount = form.get('amount');
		const type = form.get('type');
		const group = form.get('group');
		const deal = form.get('deal');
		const report = form.get('report');
		const date = form.get('date');

		if (!amount || !type || !group || !deal || !report || !date) {
			return { error: 'please fill in correctly' };
		} else {
			const response = await fetch('/pages', {
				method: 'POST',
				body: JSON.stringify({ amount, type, group, deal, report, date }),
				credentials: 'include',
				headers: {
					Accept: 'application/josn',
					'Content-Type': 'application/json'
				}
			});
			const result = await response.json();

			if (result.succes) {
				throw redirect(302, '/pages');
			} else {
				return { error: 'An Error Occured' };
			}
		}
	}
};

export const load = async ({ fetch }) => {
	const response = await fetch('/pages');
	const result = await response.json();

	const numbers = result.numbers;
	const names = result.name;
	return {
		chart: { numbers, names }
	};
};
