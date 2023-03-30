<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
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
	let auth = true;
	export let insert;
	let active = null;
	function handleAccount() {
		if (auth) {
			goto('/profile');
		} else {
			active = Profile;
			bluring();
		}
	}
	function handlBack() {
		active = null;
		closeMenu();
	}
</script>

<div class=" md:w-full flex md:flex-col  ">
	<div class="border-r md:border-b px-4 md:py-4 bg-[cadetblue]">
		<header class="md:!hidden flex justify-between pt-[20px]">
			<span class="w-[20px] h-[20px]	p-[5px] bg-[forestgreen] rounded-full" />
			<button on:click={handlBack}>&not;</button>
		</header>
		<div class="md:flex w-full md:justify-center md:space-x-8 ">
			<button on:click={handleAccount}>Account</button>
			<div class="hidden md:flex ">
				<a class="px-4" href="/pages/home" title={$lang.footer[2]}>Home</a>
				<a class="px-4" href="/pages/reports" title={$lang.footer[1]}>Reports</a>
				<a class="px-4" href="/pages/groups" title={$lang.footer[0]}>Groups</a>
				<button on:click={handleInsert} class="px-4 {insert ? 'hidden' : 'text-lime-900'}"
					>insert</button
				>
			</div>
			<div class="flex md:flex-col  ">
				<button class="md:hidden md:opacity-0" on:click={() => (active = Lang)}>Language</button>
				<div class="hidden md:flex p-2 md:p-0 ">
					<Lang />
				</div>
			</div>

			<div class="flex md:flex-col  ">
				<button class="md:hidden md:opacity-0" on:click={() => (active = Theme)}>Theme</button>
				<div class="hidden md:flex p-2 md:p-0 ">
					<Theme />
				</div>
			</div>
			<button class="md:hidden" on:click={() => (active = null)}>Logout</button>
		</div>
	</div>
	<div class=" md:flex md:justify-center  w-full md:p-2 ">
		<svelte:component this={active} />
	</div>
</div>
