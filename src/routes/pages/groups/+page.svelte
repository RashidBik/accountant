<script>
	import GroupData from './GroupData.svelte';

	export let data;
	const { auth } = data;
</script>

<svelte:head>
	<title>Groups</title>
</svelte:head>
<div class=" w-full h-full overflow-y-auto">
	{#if auth}
		<GroupData result={data.result} />
	{:else}
		<div class="p-4">
			<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
				<p class="font-bold">Notice !!!</p>
				<p>Please login first</p>
			</div>
		</div>
	{/if}
</div>
