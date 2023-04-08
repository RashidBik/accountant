/** @type {import('./$types').PageServerLoad} */

// @ts-ignore
export async function load({ fetch, locals }) {
	let user = locals.user;
	if (user) {
		const response = await fetch('/pages/reports');
		const result = await response.json();
		return {
			auth: true,
			result
		};
	} else {
		return { result: null, auth: false };
	}
}
