<script>
	import { goto } from '$app/navigation';
	import { lang } from '$lib/store/lang';

	const group = [
		{ group: 'food' },
		{ group: 'jjjjjjjjjj' },
		{ group: 'food' },
		{ group: 'jjjjjjjjjj' },
		{ group: 'food' },
		{ group: 'jjjjjjjjjj' }
	];
	// let groups = content.map((group) => group.group);
	//  Array.from(new Set(group));
	const sortedGroup = group;
</script>

<div class=" md:hidden">
	<div class="flex flex-col lg:p-40">
		<div class="flex justify-around p-2">
			<div class="text-red-900">{$lang.groups[0]}</div>
			<div class="text-green-900">{$lang.groups[1]}</div>
		</div>
		<div class="flex flex-wrap">
			{#each sortedGroup && sortedGroup as item}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					on:click={() => goto('/contents', { state: item })}
					class="p-2 bg-lime-600 rounded-lg text-xl m-1"
				>
					{item.group}
				</div>
			{/each}
		</div>
	</div>
</div>
