// @ts-ignore
export async function load({ fetch, params }) {
	const response = await fetch(`/pages/${params.item}/update`);
	const { group, item } = await response.json();

	return {
		group,
		item
	};
}
