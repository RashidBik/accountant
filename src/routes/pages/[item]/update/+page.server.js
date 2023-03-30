/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';

export const actions = {
	// @ts-ignore
	default: async ({ request, fetch, params }) => {
		const form = await request.formData();
		const amount = form.get('amount');
		const type = form.get('type');
		const deal = form.get('deal');
		const group = form.get('group');
		const report = form.get('report');
		const date = form.get('date');

		const response = await fetch(`/pages/${params.item}/update`, {
			method: 'POST',
			body: JSON.stringify({ amount, type, group, deal, report, date }),
			credentials: 'include',
			headers: {
				Accept: 'application/josn',
				'Content-Type': 'application/json'
			}
		});
		const result = await response.json();
		if (result.success) {
			throw redirect(302, '/pages/report');
		} else {
			return {
				result
			};
		}
	}
};

// @ts-ignore
export async function load({ fetch, params }) {
	const response = await fetch(`/pages/${params.item}/update`);
	const { group, item } = await response.json();

	return {
		group,
		item
	};
}
