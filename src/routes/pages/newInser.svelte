<script>
	import { goto } from '$app/navigation';

	/**
	 * @type {any}
	 */
	export let handleInsert;
	/**
	 * @type {any}
	 */
	export let auth;
</script>

<div>
	<div
		class="fixed bottom-20 right-9 z-10 h-12 w-12 rounded-full bg-inherit flex justify-center items-center  border border-gray-400"
	>
		{#if auth}
			<button class="text-3xl" on:click={handleInsert}>+</button>
		{:else}
			<button on:click={() => goto('/login')}>login</button>
		{/if}
	</div>
</div>
