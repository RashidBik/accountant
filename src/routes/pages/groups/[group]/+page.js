// @ts-ignore
export const load = async ({ fetch, params }) => {
	const response = await fetch(`/pages/groups/${params.group}`);
	const items = await response.json();

	return {
		items
	};
};
