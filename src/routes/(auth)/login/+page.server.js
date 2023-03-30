/** @type {import('./$types').Actions} */

export const actions = {
	default: async ({ fetch, request, cookies, locals }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
		const res = await fetch('/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		console.log(locals.mydata);
		const { result, message, auth } = await res.json();
		if (!result) {
			return { error: 'there is a problem with your email or password' };
		}
		if (auth) {
			cookies.set('username', result, { path: '/' });
		}

		return {
			result,
			message
		};
	}
};
