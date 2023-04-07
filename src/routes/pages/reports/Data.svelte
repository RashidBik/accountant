<script>
	import { goto, invalidateAll } from '$app/navigation';
	import { lang } from '$lib/store/lang';
	export let result;
	const { contents, income, expens } = result;
</script>

<div class="flex flex-col ">
	<div class="py-1">
		<nav class="flex justify-evenly uppercase text-center font-bold lg:min-w-[10em] ">
			<div class=" bg-[#26602b67] w-full ">
				<p>{$lang.reports.calc[0]}</p>
				<p>{income && income}</p>
			</div>
			<div class=" bg-[#71282885] w-full ">
				<p>{$lang.reports.calc[1]}</p>
				<p>{expens && expens}</p>
			</div>
			<div class=" bg-[#3198a072] w-full">
				<p>{$lang.reports.calc[2]}</p>
				<p>{income - expens}</p>
			</div>
		</nav>
	</div>

	<div class=" text-center  ">
		<div class="flex uppercase opacity-50 justify-around bg-slate-600">
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
					on:click={() => goto(`/pages/${item._id}`)}
					class="grid grid-cols-4 mt-2 justify-around hover:shadow-lg shadow-white items-stretch select-none cursor-pointer text-[10px] md:text-[13px] "
					style="background: {item.type === 'income' ? '#26432057' : '#43202057'}"
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
</div>
