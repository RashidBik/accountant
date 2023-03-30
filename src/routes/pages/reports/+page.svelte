<script>
	import Data from './Data.svelte';

	export let data;
	const { result, auth } = data;
</script>

<svelte:head>
	<title>Reports</title>
</svelte:head>
<div class=" flex flex-col overflow-y-auto ">
	{#if auth}
		<Data {result} />
	{:else}
		<div class="p-4">
			<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
				<p class="font-bold">Notice !!!</p>
				<p>Please login first</p>
			</div>
		</div>
	{/if}
</div>

<style>
</style>
