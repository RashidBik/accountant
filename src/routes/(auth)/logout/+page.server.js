import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies }) => {
		if (cookies.get('userxyz')) {
			cookies.delete('userxyz');
		}
		throw redirect(302, '/');
	}
};
