<script>
	let auth = false;
</script>

<main class="absolute w-full h-full md:h-40 md:w-40 bg-red-500">
	<div>
		{#if auth}
			<span>profile</span>
		{:else}
			<div>login or register</div>
		{/if}
	</div>
</main>
