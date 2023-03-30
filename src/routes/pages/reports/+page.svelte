<script>
	import Data from './Data.svelte';

	export let data;
	const { result, auth } = data;
</script>

<div class=" flex flex-col items-center w-full h-full overflow-y-auto ">
	{#if auth}
		<Data {result} />
	{:else}
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores earum pariatur modi quaerat
			voluptate, possimus placeat! Soluta perferendis quis temporibus eligendi libero sapiente totam
			consequuntur, nam odit magnam velit ducimus.
		</p>
	{/if}
</div>

<style>
</style>
