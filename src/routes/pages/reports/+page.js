/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	const response = await fetch('http://localhost:5173/pages/reports');
	const contents = await response.json();

	return {
		contents
	};
}
