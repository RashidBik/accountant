/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch, cookies }) {
	const response = await fetch('/pages/groups');
	const result = await response.json();
	const { incomes, expenses } = result;
	let groups1 = incomes.map((/** @type {{ group: any; }} */ item) => item.group);
	const incomeGroup = Array.from(new Set(groups1));
	//.................
	let groups2 = expenses.map((/** @type {{ group: any; }} */ item) => item.group);
	const expensGroup = Array.from(new Set(groups2));
	const cc = cookies.get('userxyz');
	if (!cc) {
		return { result: null, auth: false };
	} else {
		return {
			auth: true,
			result: { incomeGroup, expensGroup }
		};
	}
}
