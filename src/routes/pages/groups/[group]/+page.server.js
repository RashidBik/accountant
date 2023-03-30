import { redirect } from '@sveltejs/kit';

// @ts-ignore
export const load = async ({ fetch, params, cookies }) => {
	const response = await fetch(`/pages/groups/${params.group}`);
	const items = await response.json();
	const cc = cookies.get('username');
	console.log(cc);
	if (!cc) {
		throw redirect(301, '/login');
	} else {
		return {
			items
		};
	}
};
