import connection from '$lib/server/model/connection';
import { User } from '$lib/server/model/mongo';

connection()
	.then(() => console.log('connected to mongoDB'))
	.catch(() => console.log('not connected'));

/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }) {
	// if (event.url.pathname.startsWith('/custom')) {
	// 	return new Response('custom response');
	// }
	const cooky = event.cookies.get('userxyz');
	if (cooky) {
		let setUser = JSON.parse(cooky);
		const user = await User.findById(setUser?.id);
		// @ts-ignore
		event.locals.user = user;
	}
	const response = await resolve(event);
	return response;
}
