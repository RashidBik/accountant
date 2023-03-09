<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const data = {
		id: 1,
		group: 'A',
		amount: 2000,
		type: 'income',
		date: '2023-11-11',
		deal: 'cash',
		report:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe dolore reprehenderit dolorum distinctio voluptate autem, porro quod, fuga expedita praesentium adipisci quaerat quam sapiente dolores id odit. Ducimus, blanditiis sed.'
	};
</script>

<button on:click={() => history.go(-1)} class="text-xl fixed md:hidden top-3 right-8 text-white">
	&leftarrow;
</button>
<div>
	<div class="flex flex-col justify-center md:px-12">
		<div class="text-center font-bold p-2 text-lg">{data && data.date}</div>
		<div class="flex p-6">
			<div class="flex flex-col text-lg">
				<p class="p-2">From</p>
				<p class="p-2">Type</p>
				<p class="p-2">Amount</p>
				<p class="p-2">Deal</p>
			</div>
			<div class="flex flex-col text-lg">
				<p class="p-2">{data && data.group}</p>
				<p class="p-2">{data && data.type}</p>
				<p class="p-2">{data && data.amount}</p>
				<p class="p-2">{data && data.deal}</p>
			</div>
		</div>
		<div class="">
			<p class="p-2">Report</p>
			<p class="p-2">{data && data.report}</p>
		</div>
		<div class="grid p-4">
			<button on:click={() => goto(`/pages/${data.id}/update`)} class="p-1 py-2 rounded-xl"
				>update</button
			>
		</div>
	</div>
</div>
