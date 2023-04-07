import { json } from '@sveltejs/kit';
import { User } from '$lib/server/model/mongo';

// @ts-ignore
export const POST = async ({ request, locals }) => {
	let user = locals.user;
	if (user) {
		const { amount, type, group, deal, report, date } = await request.json();

		const theUser = await User.findById(user.id);
		await theUser?.contents.push({
			amount,
			type,
			deal,
			group,
			date,
			report
		});
		await theUser.save();
		return json({ success: true });
	}
};

// @ts-ignore
export const GET = async ({ locals }) => {
	let user = locals.user;
	if (user) {
		// @ts-ignore
		const user = locals.user;
		let groups = user.contents.map((/** @type {{ group: any; }} */ item) => item.group);
		const group = Array.from(new Set(groups));
		let numbers = [];
		for (let i = 0; i < group.length; i++) {
			// const element = group[i];
			// @ts-ignore
			const items = user.contents.filter((item) => item.group === group[i]);
			// @ts-ignore
			numbers.push(items.map((item) => item.amount));
		}

		return json({ name: group, numbers: numbers.flat() });
	}
};
