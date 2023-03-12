/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	const response = await fetch('/pages/reports');
	const result = await response.json();

	return {
		result
	};
}

// export const ssr = true;
