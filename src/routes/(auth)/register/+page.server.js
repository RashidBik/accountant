/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ fetch, request }) => {
		const form = await request.formData();
		const name = form.get('name');
		const job = form.get('job');
		const email = form.get('email');
		const password = form.get('password');

		if (!name && !job && !email && !password) {
			return {
				error: 'please fill in all feild'
			};
		}
		if (!name) {
			return {
				job,
				email,
				password,
				nameError: 'please fill in the name feild'
			};
		}
		if (!job) {
			return {
				name,
				email,
				password,
				jobError: 'please fill in the job feild'
			};
		}
		if (!email) {
			return {
				name,
				job,
				password,
				emailError: 'please fill in the email feild'
			};
		}
		if (!password) {
			return {
				name,
				email,
				job,
				passwordError: 'please fill in the password feild'
			};
		}

		const response = await fetch('/register', {
			method: 'POST',
			body: JSON.stringify({ name, job, email, password }),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});

		const result = await response.json();

		if (result.success) {
			throw redirect(302, '/login');
		} else {
			return { result: result.error };
		}
	}
};
