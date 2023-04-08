export const load = ({ cookies, locals }) => {
	let user = locals.user;
	if (user) {
		const cc = cookies.get('userxyz');
		if (!cc) {
			return { auth: false };
		} else {
			return {
				auth: true
			};
		}
	} else {
		return { message: 'you are not logged in' };
	}
};
