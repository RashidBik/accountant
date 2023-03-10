// @ts-ignore
export async function load({ fetch, params }) {
	const response = await fetch(`/pages/${params.item}`);
	const items = await response.json();

	return {
		items
	};
}
