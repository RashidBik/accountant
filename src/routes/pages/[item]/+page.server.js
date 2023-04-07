import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ fetch, params }) => {
		const response = await fetch(`/pages/${params.item}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		const { result, error } = await response.json();

		if (result) {
			return redirect(302, '/pages/reports');
		} else {
			return { result: error };
		}
	}
};

// @ts-ignore
export async function load({ fetch, params, cookies }) {
	const response = await fetch(`/pages/${params.item}`);
	const items = await response.json();

	const cc = cookies.get('userxyz');

	if (!cc) {
		throw redirect(301, '/login');
	} else {
		return {
			auth: true,
			items
		};
	}
}
