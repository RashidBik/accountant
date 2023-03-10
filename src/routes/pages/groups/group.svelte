<script>
	import { goto } from '$app/navigation';

	/**
	 * @type {any}
	 */
	export let groups;
</script>

<div class="flex flex-wrap">
	{#each groups && groups as item}
		<button
			on:click={() => goto(`/pages/groups/${item}`)}
			class="p-2 bg-lime-600 rounded-lg text-xl m-1"
		>
			{item}
		</button>
	{/each}
</div>
