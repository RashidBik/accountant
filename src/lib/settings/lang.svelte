<script>
	import { En, Fa, lang } from '$lib/store/lang';
	$: DEF = true;
	const handleEn = () => {
		lang.set(En);
		console.log($lang.footer);
	};
	const handleFa = () => {
		// @ts-ignore
		lang.set(Fa);
		console.log($lang.footer);
	};
</script>

<div>
	<button on:click={handleFa}>farsi</button>
	<button on:click={handleEn}>english</button>
</div>
