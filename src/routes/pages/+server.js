import { data } from '$lib/data/db';
import { json } from '@sveltejs/kit';

// @ts-ignore
export const POST = async ({ request }) => {
	const { amount, type, group, deal, report, date } = await request.json();
	const newData = data[0].contents.push({
		id: 12,
		amount,
		type,
		deal,
		group,
		date,
		report
	});
	console.log(newData);
	return json({ msg: 'successfully saved new data', newData });
};
