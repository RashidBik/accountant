<script>
	import { lang } from '$lib/store/lang';
	import SearchBar from '../searchBar.svelte';
	import Group from './group.svelte';

	export let data;
	const { incomeGroup, expensGroup } = data;

	let auth = true;
	$: active = 'income';
</script>

<SearchBar />
<div class=" w-full h-full overflow-y-auto">
	{#if auth}
		<div class="flex flex-col justify-center items-center w-full ">
			<div class="flex justify-around p-2">
				<button
					on:click={() => (active = 'income')}
					class="px-12 {active === 'income' ? 'bg-[#fff]' : ''} text-green-900"
					>{$lang.groups[0]}</button
				>
				<button
					on:click={() => (active = 'expens')}
					class="px-12 {active === 'expens' ? 'bg-[#fff]' : ''} text-red-900"
					>{$lang.groups[1]}</button
				>
			</div>
			{#if active === 'income'}
				<Group groups={incomeGroup} type="income" />
			{:else}
				<Group groups={expensGroup} type="expens" />
			{/if}
		</div>
	{:else}
		<div>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores quis placeat. Sed,
			laboriosam minima! Aliquam sint voluptates illum nam hic molestiae porro nesciunt maxime, et
			qui. Sed, quod iure.
		</div>
	{/if}
</div>
