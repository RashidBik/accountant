/** @type {import('./$types').Actions} */

export const actions = {
	default: async ({ fetch, request }) => {
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

		const result = await res.json();

		return {
			result
		};
	}
};
