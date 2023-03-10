/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	const response = await fetch('http://localhost:5173/pages/groups');
	const result = await response.json();
	const { incomes, expenses } = result;
	let groups1 = incomes.map((/** @type {{ group: any; }} */ item) => item.group);
	const incomeGroup = Array.from(new Set(groups1));
	//.................
	let groups2 = expenses.map((/** @type {{ group: any; }} */ item) => item.group);
	const expensGroup = Array.from(new Set(groups2));

	return {
		incomeGroup,
		expensGroup
	};
}
