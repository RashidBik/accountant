<script>
	import Lang from '$lib/settings/lang.svelte';
	import Profile from '$lib/settings/profile.svelte';
	import Theme from '$lib/settings/theme.svelte';
	import { SvelteComponent } from 'svelte/internal';
	import SideView from './sideView.svelte';

	/**
	 * @type {any}
	 */
	export let closeMenu;
	export let bluring;
	/**
	 * @type {typeof Lang | null}
	 */
	let active = null;
	function handleAccount() {
		active = Profile;
		bluring();
	}
</script>

<div class="w-[40%] md:w-full flex md:flex-col  ">
	<div class="border-r md:border-b px-4 md:py-4">
		<header class="md:!hidden flex justify-between pt-[20px]">
			<span class="w-[20px] h-[20px]	p-[5px] bg-[forestgreen] rounded-full" />
			<button on:click={closeMenu}>&LeftArrow;</button>
		</header>
		<div class="md:flex w-full md:justify-center md:space-x-8 ">
			<div on:click={handleAccount}>Account</div>
			<div class="flex md:flex-col  ">
				<p class="md:hidden md:opacity-0" on:click={() => (active = Lang)}>Language</p>
				<div class="hidden md:flex p-2 md:p-0 ">
					<Lang />
				</div>
			</div>
			<div class="flex md:flex-col  ">
				<p class="md:hidden md:opacity-0" on:click={() => (active = Theme)}>Theme</p>
				<div class="hidden md:flex p-2 md:p-0 ">
					<Theme />
				</div>
			</div>
			<div class="md:hidden" on:click={() => (active = null)}>Quit</div>
		</div>
	</div>
	<div class=" md:flex md:justify-center md:p-2 ">
		<svelte:component this={active} />
	</div>
</div>

<style>
	ul div {
		list-style: none;
		padding: 12px 0;
		font-weight: bold;
	}
</style>
