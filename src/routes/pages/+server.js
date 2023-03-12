import { data } from '$lib/data/db';
import { json } from '@sveltejs/kit';

// @ts-ignore
export const POST = async ({ request }) => {
	const { amount, type, group, deal, report, date } = await request.json();
	data[0].contents.push({
		id: data[0].contents.length + 1,
		amount,
		type,
		deal,
		group,
		date,
		report
	});

	console.log(data[0].contents);

	return json('successfully saved new data');
};
