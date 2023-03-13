/** @type {import('./$types').Actions} */

export const actions = {
	default: async ({ fetch, request, cookies }) => {
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

		const { result, message } = await res.json();
		if (!result) {
			return { error: 'there is a problem with your email or password' };
		}
		cookies.set('username', result, { path: '/' });
		return {
			result,
			message
		};
	}
};
