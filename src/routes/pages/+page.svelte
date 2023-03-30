<script>
	export let data;
	let { auth } = data;
</script>

<div class=" w-full h-full overflow-y-auto ">
	{#if auth}
		<p>Chart</p>
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
