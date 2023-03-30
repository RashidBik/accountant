/** @type {import('./$types').PageServerLoad} */

// import { redirect } from '@sveltejs/kit';

// @ts-ignore
export async function load({ fetch }) {
	const response = await fetch('/pages/reports');
	const result = await response.json();
	// const cc = cookies.get('username');
	// if (!cc) {
	// throw redirect(301, '/login');
	// } else {
	return {
		auth: true,
		result
	};
	// }
}

// export const ssr = true;
