// @ts-ignore
export const handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	// if (auth) {
	// 		cookies.set('username', result, { path: '/' });
	// 	}
	console.log(event);
	return response;
};
