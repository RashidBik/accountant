<script>
	import { goto } from '$app/navigation';

	/**
	 * @type {any}
	 */
	export let groups;
	/**
	 * @type {any}
	 */
	export let type;
</script>

<div class="flex flex-wrap">
	{#each groups && groups as item}
		<button
			on:click={() => goto(`/pages/groups/${item},${type}`)}
			class="p-2 bg-lime-600 rounded-lg text-xl m-1"
		>
			{item}
		</button>
	{/each}
</div>
