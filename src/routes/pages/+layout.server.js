export const load = ({ cookies }) => {
	const cc = cookies.get('userxyz');
	if (!cc) {
		return { auth: false };
	} else {
		return {
			auth: true
		};
	}
};
