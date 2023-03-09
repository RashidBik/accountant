<script>
	// @ts-nocheck

	import Lang from '$lib/settings/lang.svelte';
	import Profile from '$lib/settings/profile.svelte';
	import Theme from '$lib/settings/theme.svelte';
	import { lang } from '$lib/store/lang';

	/**
	 * @type {any}
	 */
	export let closeMenu;
	/**
	 * @type {() => void}
	 */
	export let bluring;
	/**
	 * @type {typeof Lang | null}
	 */
	/**
	 * @type {any}
	 */
	export let handleInsert;
	/**
	 * @type {any}
	 */

	export let insert;
	let active = null;
	function handleAccount() {
		active = Profile;
		bluring();
	}
</script>

<div class=" md:w-full flex md:flex-col  ">
	<div class="border-r md:border-b px-4 md:py-4 bg-[cadetblue]">
		<header class="md:!hidden flex justify-between pt-[20px]">
			<span class="w-[20px] h-[20px]	p-[5px] bg-[forestgreen] rounded-full" />
			<button on:click={closeMenu}>&LeftArrow;</button>
		</header>
		<div class="md:flex w-full md:justify-center md:space-x-8 ">
			<div on:click={handleAccount}>Account</div>
			<div class="hidden md:flex ">
				<a class="px-4" href="/pages/home" title={$lang.footer[2]}>Home</a>
				<a class="px-4" href="/pages/reports" title={$lang.footer[1]}>Reports</a>
				<a class="px-4" href="/pages/groups" title={$lang.footer[0]}>Groups</a>
				<div on:click={handleInsert} class="px-4 {insert ? 'hidden' : 'text-lime-600'}">insert</div>
			</div>
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
	<div class=" md:flex md:justify-center p-4 w-full md:p-2 ">
		<svelte:component this={active} />
	</div>
</div>
