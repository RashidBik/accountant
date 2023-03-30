<script>
	import { lang } from '$lib/store/lang';
	import Group from './group.svelte';
	export let result;
	const { incomeGroup, expensGroup } = result;

	$: active = 'income';
</script>

<div class="flex flex-col justify-center items-center w-full ">
	<div class="flex justify-around w-full p-2">
		<button
			on:click={() => (active = 'income')}
			class="px-2 {active === 'income' ? 'bg-[#fff]' : ''} text-green-900">{$lang.groups[0]}</button
		>
		<button
			on:click={() => (active = 'expens')}
			class="px-2 {active === 'expens' ? 'bg-[#fff]' : ''} text-red-900">{$lang.groups[1]}</button
		>
	</div>
	{#if active === 'income'}
		<Group groups={incomeGroup} type="income" />
	{:else}
		<Group groups={expensGroup} type="expens" />
	{/if}
</div>
