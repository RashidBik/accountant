/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response');
	}
	event.locals.mydata = 'some data';
	const response = await resolve(event);
	return response;
}
