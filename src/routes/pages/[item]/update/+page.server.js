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
		// const date = form.get('date');

		if (!amount || !type || !deal || !group || !report) {
			return { error: 'please fill in correctly' };
		} else {
			const response = await fetch(`/pages/${params.item}/update`, {
				method: 'POST',
				body: JSON.stringify({ amount, type, group, deal, report }),
				credentials: 'include',
				headers: {
					Accept: 'application/josn',
					'Content-Type': 'application/json'
				}
			});
			const { result, error } = await response.json();
			if (result) {
				throw redirect(302, '/pages/reports');
			} else {
				return {
					error: error
				};
			}
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
