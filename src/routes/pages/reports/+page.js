/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	const response = await fetch('http://localhost:5173/pages/reports');
	const result = await response.json();

	return {
		result
	};
}
