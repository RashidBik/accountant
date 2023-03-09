<script>
	import { goto } from '$app/navigation';
	import { lang } from '$lib/store/lang';

	const content = [
		{
			id: 1,
			type: 'expens',
			amount: 20033,
			deal: 'cash',
			group: 'food',
			date: '2023-12-4'
		},
		{
			id: 2,
			type: 'income',
			amount: 204,
			deal: 'cash',
			group: 'utility and some foodllllllll',
			date: '2023-12-4'
		},
		{
			id: 3,
			type: 'income',
			amount: 20444,
			deal: 'cash',
			group: 'utilit',
			date: '2023-12-4'
		}
	];
	let contents = content;

	const data = { income: 3333, expens: 23422 };

	// const sortDate = (choosedDate) => {
	// 	const selectedData = content.filter((item) => {
	// 		return new Date().getMonth(item.date) === choosedDate;
	// 	});
	// };
	let auth = true;
</script>

<div class=" flex flex-col items-center w-full h-full overflow-y-auto ">
	{#if auth}
		<!-- /////////////////////////// -->
		<div class="flex flex-col ">
			<div class="py-1">
				<nav class="flex justify-evenly font-bold min-w-min lg:min-w-[10em]">
					<div class="text-green-800">
						<p>{$lang.reports.calc[0]}</p>
						<p>{data && data.income}</p>
					</div>
					<div class="text-red-800">
						<p>{$lang.reports.calc[1]}</p>
						<p>{data && data.expens}</p>
					</div>
					<div class="text-blue-800">
						<p>{$lang.reports.calc[2]}</p>
						<p>{data && data.income - data.expens}</p>
					</div>
				</nav>
			</div>

			<div class=" text-center  ">
				<div class="flex justify-around bg-slate-600">
					<span> date </span>
					<span>amount</span>
					<span>deal</span>
					<span>group</span>
				</div>
				{#each contents as item (item.id)}
					<div class="">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							on:click={() => goto(`/pages/${item.id}`)}
							class="grid grid-cols-4 justify-around items-stretch "
							style="color: {item.type === 'income' ? 'green' : 'red'}"
						>
							<span class=" underline overflow-x-auto">{item.date}</span>
							<span class="overflow-x-auto {item.amount >= 999999 && 'border-r'}">
								{item.amount}
							</span>
							<span class="">{item.deal}</span>
							<span class="h-8 w-15 overflow-auto {item.group.length >= 9 && 'border-r'}"
								>{item.group}</span
							>
						</div>
					</div>
				{/each}
			</div>
			<!-- /////////////////////////////// -->
		</div>
	{:else}
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores earum pariatur modi quaerat
			voluptate, possimus placeat! Soluta perferendis quis temporibus eligendi libero sapiente totam
			consequuntur, nam odit magnam velit ducimus.
		</p>
	{/if}
</div>

<style>
</style>
