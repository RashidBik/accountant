/** @type {import('./$types').PageServerLoad} */

// @ts-ignore
export async function load({ fetch, cookies }) {
	const response = await fetch('/pages/reports');
	const result = await response.json();

	const cc = cookies.get('userxyz');

	if (!cc) {
		return { auth: false };
	} else {
		return {
			auth: true,
			result
		};
	}
}
