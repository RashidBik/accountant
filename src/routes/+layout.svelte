<script>
	import { setContext } from 'svelte';

	import './styles.css';
	let mode = 'dark';
	$: dark = false;
	$: dark ? (mode = 'light') : (mode = 'dark');
	const handleMode = () => {
		dark = !dark;
	};
	setContext('light-mode', handleMode);
</script>

<div class={mode}><slot /></div>

<style>
</style>
