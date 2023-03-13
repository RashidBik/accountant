/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ fetch, request }) => {
		const form = await request.formData();
		const name = form.get('name');
		const job = form.get('job');
		const email = form.get('email');
		const password = form.get('password');

		const response = await fetch('/register', {
			method: 'POST',
			body: JSON.stringify({ name, job, email, password }),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});

		const result = await response.json();

		return { result };
	}
};
