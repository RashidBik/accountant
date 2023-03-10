<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;
	const { items } = data;
</script>

<button on:click={() => history.go(-1)} class="text-xl fixed md:hidden top-3 right-8 text-white">
	&leftarrow;
</button>
<div class="w-full h-full  flex flex-col items-center">
	<header class="border border-t-0 w-[50%] text-center">{items[0].group}</header>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="w-full md:max-w-md">
		{#each items as item}
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
