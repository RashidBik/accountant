<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;
	const { items } = data;
</script>

<button on:click={() => history.go(-1)} class="text-xl fixed md:hidden top-3 right-8 text-white">
	&leftarrow;
</button>
<div>
	<div class="flex flex-col justify-center md:px-12">
		<div class="text-center font-bold p-2 text-lg">{items && items.date}</div>
		<div class="flex p-6">
			<div class="flex flex-col text-lg">
				<p class="p-2">From</p>
				<p class="p-2">Type</p>
				<p class="p-2">Amount</p>
				<p class="p-2">Deal</p>
			</div>
			<div class="flex flex-col text-lg">
				<p class="p-2">{items && items.group}</p>
				<p class="p-2">{items && items.type}</p>
				<p class="p-2">{items && items.amount}</p>
				<p class="p-2">{items && items.deal}</p>
			</div>
		</div>
		<div class="">
			<p class="p-2">Report</p>
			<p class="p-2">{items && items.report}</p>
		</div>
		<div class="flex justify-center">
			<button on:click={() => goto(`/pages/${items.id}/update`)} class="px-4 bg-lime-800 rounded-xl"
				>update</button
			>
			<form action="/pages/{items.id}" use:enhance method="post">
				{#if $page.form?.result}
					<p>{$page.form?.result}</p>
				{/if}
				<button type="submit" class="px-4 bg-red-800 rounded-xl">Delete</button>
			</form>
		</div>
	</div>
</div>
