<script>
	import { En, Fa, lang } from '$lib/store/lang';

	const handleEn = () => {
		lang.set(En);
	};
	const handleFa = () => {
		// @ts-ignore
		lang.set(Fa);
	};
	$: active = false;
	const language = () => {
		active != active;
		if (active) {
			// @ts-ignore
			lang.set(Fa);
		} else {
			lang.set(En);
		}
	};
</script>

<div class="">
	<div class="md:hidden ">
		<p class="text-[8px] py-2">
			Select your own language but now we only support tow languages if you like to add your own
			language join us <a class="text-red-500 underline" href="">github</a>
		</p>
		<button class="border px-2 rounded-lg" on:click={handleFa}>farsi</button>
		<button class="border px-2 rounded-lg" on:click={handleEn}>english</button>
	</div>
	<div class="hidden md:flex">
		<!-- <button on:click={handleFa}>E&ENG;</button> -->
		<button class=" underline text-white" on:click={language}>Lng</button>
	</div>
</div>
