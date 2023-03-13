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
export async function load({ fetch, params }) {
	const response = await fetch(`/pages/${params.item}`);
	const items = await response.json();

	return {
		items
	};
}
