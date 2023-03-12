/** @type {import('./$types').Actions} */

export const actions = {
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
		// console.log(result.newData);

		return { result };
	}
};
