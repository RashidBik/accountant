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
	<label class="switch">
		<input type="checkbox" checked={dark} />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span on:click={handlecheck} class="slider round" />
	</label>
</div>
