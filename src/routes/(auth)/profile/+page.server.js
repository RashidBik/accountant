import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const cc = cookies.get('userxyz');
	if (!cc) {
		throw redirect(301, '/login');
	} else {
		return {
			user: 'rashid'
		};
	}
};
