<script>
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
</script>

<main class=" h-screen flex flex-col justify-between items-center ">
	<header class="{blur} md:!hidden self-start p-4  ">
		<button on:click={handlMenu} class="menuBtn">|||</button>
	</header>
	<div class="{sidbar} md:!flex md:w-full ">
		<Sidbar {closeMenu} />
	</div>
	<div class="relative {blur}  ">
		<slot />
	</div>
	<footer
		class=" w-full flex justify-evenly pt-6 max-w-screen-md bg-cyan-700 h-24 {blur} md:filter-none"
	>
		<a href="/pages/home">Home</a>
		<a href="/pages/reports">Reports</a>
		<a href="/pages/groups">Groups</a>
	</footer>
</main>

<style>
	.blur {
		filter: blur(2px);
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
		background-color: cadetblue;
		width: 40vw;
		top: 0%;
		left: 0;
		padding: 8px;
		height: 100%;
		z-index: 1;
	}
</style>
