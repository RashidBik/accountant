<script>
	import { goto } from '$app/navigation';
	import { lang } from '$lib/store/lang';

	export let data;
	const { result } = data;
	const { contents, income, expens } = result;

	// const sortDate = (choosedDate) => {
	// 	const selectedData = content.filter((item) => {
	// 		return new Date().getMonth(item.date) === choosedDate;
	// 	});
	// };
	console.log('loaded');
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
						<p>{income && income}</p>
					</div>
					<div class="text-red-800">
						<p>{$lang.reports.calc[1]}</p>
						<p>{expens && expens}</p>
					</div>
					<div class="text-blue-800">
						<p>{$lang.reports.calc[2]}</p>
						<p>{income - expens}</p>
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
				{#each contents && contents as item, i}
					<div class="">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							data-sveltekit-preload-data="hover"
							on:click={() => goto(`/pages/${item.id}`)}
							class="grid grid-cols-4 justify-around items-stretch select-none cursor-pointer text-[10px] md:text-[13px] "
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
