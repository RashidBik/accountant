<script>
	import { lang } from '$lib/store/lang';
	import Insert from './insert.svelte';
	import Sidbar from './sidbar.svelte';

	$: blur = '';
	$: sidbar = 'hidden';
	const handlMenu = () => {
		sidbar = 'primary-sidbar';
		blur = 'blur';
	};
	const closeMenu = () => {
		sidbar = 'hidden';
		blur = '';
	};
	const bluring = () => (blur = 'blur');
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<main class=" h-screen flex flex-col justify-between items-center ">
	<header class="{blur} md:!hidden bg-[cadetblue] w-full self-start p-4  ">
		<button on:click={handlMenu} class="menuBtn">|||</button>
	</header>
	<div class="{sidbar} md:!flex md:w-full ">
		<Sidbar {closeMenu} {bluring} />
	</div>
	<div class="relative {blur} h-full w-full overflow-y-auto ">
		<slot />
	</div>
	<footer
		class=" w-full flex justify-evenly bg-[cadetblue] pt-6 max-w-screen-md h-24 {blur} md:filter-none"
	>
		<a href="/pages/home" title={$lang.footer[2]}>Home</a>
		<a href="/pages/reports" title={$lang.footer[1]}>Reports</a>
		<a href="/pages/groups" title={$lang.footer[0]}>Groups</a>
	</footer>
	<div class="fixed bg-black">
		<Insert />
	</div>
</main>

<style>
	.blur {
		filter: blur(10px);
	}
	.hidden {
		display: none;
	}

	header .menuBtn {
		transform: rotate(90deg);
		background: none;
		border: none;
		font-weight: bold;
		font-size: large;
	}
	.primary-sidbar {
		position: fixed;
		display: flex;
		width: 100vw;
		top: 0%;
		left: 0;
		padding: 8px;
		height: 100%;
		z-index: 1;
	}
</style>
