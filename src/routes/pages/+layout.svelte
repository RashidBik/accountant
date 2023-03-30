<script>
	import { lang } from '$lib/store/lang';
	import { setContext } from 'svelte';
	import Insert from './insert.svelte';
	import NewInser from './newInser.svelte';
	import Sidbar from './sidbar.svelte';

	export let data;
	const { auth } = data;

	let insert = false;
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
	const handleInsert = () => (insert = !insert);

	const navs = ['home', 'report', 'group'];
	$: active = navs[0];
</script>

<div class={insert ? 'flex' : ''}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<main class=" h-screen flex flex-col justify-between items-center {insert ? 'md:w-[70%]' : ''} ">
		<header class="{blur} md:!hidden bg-[cadetblue] w-full self-start p-4  ">
			<button on:click={handlMenu} class="menuBtn">|||</button>
		</header>
		<div class="{sidbar} md:!flex md:w-full ">
			<Sidbar {closeMenu} {bluring} {handleInsert} {insert} />
		</div>
		<div class="relative {blur} h-full w-full md:px-40 overflow-y-auto ">
			<slot />
		</div>
		<footer
			class=" md:hidden w-full flex justify-evenly bg-[cadetblue] pt-2 max-w-screen-md h-12 {blur} md:filter-none"
		>
			<a
				class:active={active === 'home'}
				on:click={() => (active = navs[0])}
				href="/pages"
				title={$lang.footer[2]}>Home</a
			>
			<a
				class:active={active === 'report'}
				on:click={() => (active = navs[1])}
				data-sveltekit-preload-code="hover"
				href="/pages/reports"
				title={$lang.footer[1]}>Reports</a
			>
			<a
				class:active={active === 'group'}
				on:click={() => (active = navs[2])}
				href="/pages/groups"
				title={$lang.footer[0]}>Groups</a
			>
			<div class="md:flex hidden">insert</div>
		</footer>
	</main>
	{#if insert}
		<div class="fixed w-full md:relative md:w-[30%] bg-[cadetblue]">
			<Insert {handleInsert} />
		</div>
	{/if}
</div>
<div class="fixed md:hidden {blur === 'blur' && 'hidden'} "><NewInser {auth} {handleInsert} /></div>

<style>
	.active {
		text-shadow: 2px 2px 2px rgba(47, 46, 43, 0.853);
	}
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
		height: 100%;
		z-index: 1;
	}
</style>
