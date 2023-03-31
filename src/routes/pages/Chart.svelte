<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	export let chart;
	const { numbers, names } = chart;

	/**
	 * @type {import("chart.js/auto").ChartItem}
	 */
	let myChart;

	function loadData() {
		new Chart(myChart, {
			type: 'doughnut',
			data: {
				labels: names,
				datasets: [
					{
						label: '# Amount',
						data: numbers,
						borderWidth: 0.9
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	}
	onMount(loadData);
</script>

<div>
	<canvas bind:this={myChart} class=" bg-[#ffffff0a] shadow-md" />
</div>
