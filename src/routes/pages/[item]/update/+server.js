import { User } from '$lib/server/model/mongo';
import { json } from '@sveltejs/kit';

// @ts-ignore
export const GET = ({ params, locals }) => {
	let user = locals.user;
	if (user) {
		const item = user.contents.find((items) => items.id == params.item);
		const groups = user.contents.map((items) => items.group);
		const group = Array.from(new Set(groups));
		return json({ group, item });
	}
};

// @ts-ignore
export const POST = async ({ request, params, locals }) => {
	let user = locals.user;
	if (user) {
		const form = await request.json();
		const { amount, type, deal, group, report } = form;

		const selectedUser = await User.findById(user._id);
		const item = await selectedUser.contents.find((item) => item.id == params.item);

		if (item) {
			item.amount = amount;
			item.type = type;
			item.deal = deal;
			item.group = group;
			item.report = report;
			// item.date = date;

			await selectedUser.save();
		} else {
			return json({ error: 'An Error Occured' });
		}
		return json({ result: true });
	}
};
