import { data } from '$lib/data/db';
import { json } from '@sveltejs/kit';

// @ts-ignore
export const GET = ({ params }) => {
	const item = data[0].contents.find((items) => items.id == params.item);
	const groups = data[0].contents.map((items) => items.group);
	const group = Array.from(new Set(groups));
	return json({ group, item });
};

// @ts-ignore
export const POST = async ({ request, params }) => {
	const form = await request.json();
	const { amount, type, deal, group, report, date } = form;
	const item = data[0].contents.find((item) => item.id == params.item);
	if (item) {
		item.amount = amount;
		item.type = type;
		item.deal = deal;
		item.group = group;
		item.report = report;
		item.date = date;
	} else {
		return json('there is somthing wrong with your id');
	}
	return json('successfully updated');
};
