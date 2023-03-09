<script>
	import { getContext } from 'svelte';
	import './theme.css';

	const cx = getContext('light-mode');

	$: dark = false;
	const handlecheck = () => {
		dark = !dark;
		cx();
	};
</script>

<div class="">
	<p class="md:hidden text-[8px] py-2">
		<b>Great?</b>
		Portect your eyes from bad lights. it's good to use dark mode during the night
	</p>
	<label class="switch">
		<input type="checkbox" checked={dark} />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span on:click={handlecheck} class="slider round" />
	</label>
</div>
