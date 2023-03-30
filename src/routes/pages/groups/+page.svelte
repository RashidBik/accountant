<script>
	import SearchBar from '../searchBar.svelte';
	import GroupData from './GroupData.svelte';

	export let data;
	const { result, auth } = data;
</script>

<SearchBar />
<div class=" w-full h-full overflow-y-auto">
	{#if auth}
		<GroupData {result} />
	{:else}
		<div>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores quis placeat. Sed,
			laboriosam minima! Aliquam sint voluptates illum nam hic molestiae porro nesciunt maxime, et
			qui. Sed, quod iure.
		</div>
	{/if}
</div>
