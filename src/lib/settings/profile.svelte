<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';

	let auth = true;
</script>

<main class=" absolute z-20 w-full h-full md:h-40 md:w-40 p-4 ">
	<div>
		{#if auth}
			<span on:load={goto('/profile')} />
		{:else}
			<div class=" ">
				<p class="w-60 text-[12px]">
					Looks like you are not logged in first login please but if you don't have an account yet
					create one your data will be safe and protected
				</p>
				<div class="flex flex-col">
					<a class=" " href="/login">&rightarrow;{' '}Login</a>
					<a class=" " href="/register">&rightarrow;{' '}Register</a>
				</div>
			</div>
		{/if}
	</div>
</main>
