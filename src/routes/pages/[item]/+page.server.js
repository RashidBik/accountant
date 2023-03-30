import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ fetch, params }) => {
		const response = await fetch(`/pages/${params.item}`, {
			method: 'DELET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		const result = await response.json();

		return {
			result
		};
	}
};

// @ts-ignore
export async function load({ fetch, params, cookies }) {
	const response = await fetch(`/pages/${params.item}`);
	const items = await response.json();

	const cc = cookies.get('username');

	if (!cc) {
		throw redirect(301, '/login');
	} else {
		return {
			auth: true,
			items
		};
	}
}
