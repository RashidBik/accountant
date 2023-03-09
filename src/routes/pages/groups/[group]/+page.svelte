<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const groups = [
		{ id: 1, group: 'A', amount: 2000, type: 'income', date: '2023-11-11', deal: 'cash' }
	];
</script>

<button on:click={() => history.go(-1)} class="text-xl fixed md:hidden top-8 left-8 text-white">
	&leftarrow;
</button>
<div class="w-full h-full  flex flex-col items-center">
	<header class="border border-t-0 w-[50%] text-center">{$page.params.group}</header>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="w-full md:max-w-md">
		{#each groups as item}
			<div
				on:click={() => goto(`/pages/${item.id}`)}
				class="flex justify-evenly border cursor-pointer m-1"
			>
				<div class="">{item.date}</div>
				<div class="">{item.amount}</div>
				<div class="">{item.deal}</div>
				<div class="">{item.type}</div>
			</div>
		{/each}
	</div>
</div>
