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
	let auth = false;
</script>

<div class=" w-full h-full overflow-y-auto">
	{#if auth}
		<div class="flex flex-col justify-center items-center w-full ">
			<div class="flex justify-around p-2">
				<div class="px-12 text-red-900">{$lang.groups[0]}</div>
				<div class="px-12 text-green-900">{$lang.groups[1]}</div>
			</div>
			<div class="flex flex-wrap">
				{#each sortedGroup && sortedGroup as item}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						on:click={() => goto(`/pages/groups/${item.group}`)}
						class="p-2 bg-lime-600 rounded-lg text-xl m-1"
					>
						{item.group}
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<div>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores quis placeat. Sed,
			laboriosam minima! Aliquam sint voluptates illum nam hic molestiae porro nesciunt maxime, et
			qui. Sed, quod iure.
		</div>
	{/if}
</div>
