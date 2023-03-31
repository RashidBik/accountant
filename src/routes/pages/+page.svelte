<script>
	import Chart from './Chart.svelte';

	export let data;
	let { auth } = data;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class=" w-full h-full overflow-y-auto ">
	{#if auth}
		<div class="p-6">
			<Chart chart={data.chart} />
		</div>
	{:else}
		<div class="p-4">
			<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
				<p class="font-bold">Notice !!!</p>
				<p>Please login first</p>
			</div>
		</div>
	{/if}
</div>
