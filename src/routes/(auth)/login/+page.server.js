/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ fetch, request, cookies }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');

		if (!email || !password) {
			return { error: 'Please fill in correctly' };
		}

		const res = await fetch('/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});

		const { result, auth, message } = await res.json();
		if (!result) {
			return { message: message, error: 'Email or Password is not valid!!' };
		}
		if (auth) {
			console.log(result);
			cookies.set('userxyz', JSON.stringify(result), { path: '/' });
			throw redirect(302, '/pages');
		}
	}
};
