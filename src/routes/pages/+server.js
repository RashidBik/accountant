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
	return json({ succes: true });
};

export const GET = async () => {
	let groups = data[0].contents.map((/** @type {{ group: any; }} */ item) => item.group);
	const group = Array.from(new Set(groups));
	let numbers = [];
	for (let i = 0; i < group.length; i++) {
		// const element = group[i];
		const items = data[0].contents.filter((item) => item.group === group[i]);
		numbers.push(items.map((item) => item.amount));
	}

	return json({ name: group, numbers: numbers.flat() });
};
