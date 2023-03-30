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
			throw redirect(302, '/pages/report');
		} else {
			return { error: 'An Error Occured' };
		}
	}
};
